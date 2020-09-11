<template>
  <v-container>
    <v-expansion-panels class="transparent" v-model="panelOpen" multiple>
      <v-expansion-panel>
        <v-expansion-panel-header>Versions and Updates</v-expansion-panel-header>
        <v-expansion-panel-content class="transparent" popout>
          <v-card class="transparent">
            <v-card-text>
              <v-checkbox
                v-model="config.CheckForUpdatesOnStart"
                label="Check For Updates On Application Start"
              ></v-checkbox>
              <p>
                <b>Intiface Desktop Version:</b>
                {{ this.Version }}
              </p>
              <p>
                (If updater doesn't work, latest release always available from
                <a
                  href="https://github.com/intiface/intiface-desktop/releases"
                >https://github.com/intiface/intiface-desktop/releases</a>)
              </p>
              <p v-if="IsRunningWindows">
                <b>Intiface Engine:</b>
                <v-select :items="engineChoices" v-model="config.Engine" dense></v-select>
              </p>
              <div v-if="config.HasUsableEngineExecutable && config.Engine === config.InstalledEngineType">
                <p>
                  <b>Intiface Engine Version:</b>
                  {{ this.EngineVersion }}
                </p>
                <p>
                  <b>Device Config File Version:</b>
                  {{ this.DeviceConfigFileVersion }}
                </p>
              </div>
              <div v-else>
                <b>New engine executable required. Hit "Force Engine Update" button to fix.</b><br/>
              </div>
              <v-alert
                type="warning"
                :value="isCheckingForUpdates || connector.IsServerProcessRunning"
                outlined
              >
                <b>Cannot update while server is running or update checks are happening.</b>
              </v-alert>
              <v-row v-if="!(isCheckingForUpdates || connector.IsServerProcessRunning)">
                <v-col v-show="NeedsUpdate && config.Engine === config.InstalledEngineType">
                  <update-dialog
                    :connector="connector"
                    :dialogType="dialogType"
                    ref="updateDialog"
                    ></update-dialog>
                </v-col>
                <v-col>
                  <v-btn
                    :disabled="isCheckingForUpdates || connector.IsServerProcessRunning"
                    @click="CheckForUpdates()"
                  >Check For Updates</v-btn>
                </v-col>
                <v-col>
                  <v-btn
                    :disabled="isCheckingForUpdates || connector.IsServerProcessRunning"
                    @click="ForceUpdate()"
                  >Force Engine Update</v-btn>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>Server Process Settings</v-expansion-panel-header>
        <v-expansion-panel-content class="transparent">
          <v-card class="transparent">
            <v-card-text>
              <v-checkbox
                v-model="config.StartServerOnStartup"
                label="Start Server when Intiface Desktop Launches"
              ></v-checkbox>
              <v-select
                :items="logLevels"
                label="Log Output Level"
                v-model="config.ServerLogLevel"
              >></v-select>
              <ValidationProvider v-slot="{ errors }" rules="required">
                <v-text-field
                  data-vv-name="serverNameEntry"
                  label="Server Name"
                  placeholder="Intiface Server"
                  v-model="config.ServerName"
                  clearable
                  :error-messages="errors[0]"
                  :disabled="connector.IsServerProcessRunning"
                ></v-text-field>
              </ValidationProvider>
              <ValidationProvider v-slot="{ errors }" rules="required|numeric|min_value:0">
                <v-text-field
                  data-vv-name="serverMaxPingEntry"
                  :error-messages="errors[0]"
                  label="Max Server Ping Time"
                  placeholder="0"
                  v-model="config.ServerMaxPingTime"
                  :disabled="connector.IsServerProcessRunning"
                ></v-text-field>
              </ValidationProvider>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>Server Websocket Settings</v-expansion-panel-header>
        <v-expansion-panel-content class="transparent">
          <v-card class="transparent">
            <v-card-text>
              <v-list subheader dense two-line class="transparent">
                <v-list-item>
                  <v-list-item-content>
                    <ValidationProvider
                      v-slot="{ errors }"
                      rules="required|numeric|min_value:1|max_value:65535"
                    >
                      <v-text-field
                        data-vv-name="websocketInsecurePort"
                        label="Insecure Port"
                        :error-messages="errors[0]"
                        :disabled="connector.IsServerProcessRunning"
                        v-model="config.WebsocketServerInsecurePort"
                      ></v-text-field>
                    </ValidationProvider>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <ValidationProvider
                      v-slot="{ errors }"
                      rules="required|numeric|min_value:1|max_value:65535"
                    >
                      <v-text-field
                        data-vv-name="websocketSecurePort"
                        :error-messages="errors[0]"
                        label="Secure Port"
                        :disabled="connector.IsServerProcessRunning"
                        v-model="config.WebsocketServerSecurePort"
                      ></v-text-field>
                    </ValidationProvider>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-action>
                    <v-checkbox
                      v-model="config.WebsocketServerAllInterfaces"
                      :disabled="connector.IsServerProcessRunning"
                    ></v-checkbox>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title>Listen on All Interfaces</v-list-item-title>
                    <v-list-item-subtitle>When on, listens on all available network interfaces. Otherwise, only listens on 127.0.0.1.</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>Other Settings</v-expansion-panel-header>
        <v-expansion-panel-content class="transparent" popout>
          <v-card class="transparent">
            <v-card-text>
              <v-btn color="primary" @click="RunSetup()">Run Initial Setup</v-btn>
            </v-card-text>
          </v-card>
          <v-card class="transparent">
            <v-card-text>
              <v-btn color="primary" @click="StartCertServer()">Run Certificate Setup</v-btn>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script lang="ts" src="./SettingsPanel.ts">
</script>
