<template>
  <v-container>
    <v-expansion-panel class="transparent" v-model="panelExpand" expand>
      <v-expansion-panel-content class="transparent" popout>
        <template v-slot:header>
          <div>Versions and Updates</div>
        </template>
        <v-card class="transparent">
          <v-card-text>
            <v-checkbox
              v-model="config.CheckForUpdatesOnStart"
              label="Check For Updates On Application Start"
            ></v-checkbox>
            <p><b>Intiface Desktop Version:</b> {{ this.Version }}</p>
            <p>(If updater doesn't work, latest release always available from <a href="https://github.com/intiface/intiface-desktop/releases">https://github.com/intiface/intiface-desktop/releases</a>)</p>
            <p><b>Intiface Engine Version:</b> {{ this.EngineVersion }}</p>
            <p><b>Device Config File Version:</b> {{ this.DeviceConfigFileVersion }}</p>
            <v-alert type="warning" :value="isCheckingForUpdates || connector.IsServerProcessRunning" outline>
              <b>Cannot update while server is running or update checks are happening.</b>
            </v-alert>
            <div v-if="!(isCheckingForUpdates || connector.IsServerProcessRunning)">
              <p><v-btn :disabled="isCheckingForUpdates || connector.IsServerProcessRunning" @click="CheckForUpdates()">Check For Updates</v-btn></p>
              <update-dialog
                :connector="connector"
                :dialogType="dialogType"
                v-show="NeedsUpdate">
              </update-dialog>
            </div>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
      <v-expansion-panel-content class="transparent">
        <template v-slot:header>
          <div>Server Process Settings</div>
        </template>
        <v-card class="transparent">
          <v-card-text>
            <v-select
              :items="logLevels"
              label="Log Output Level"
              v-model="config.ServerLogLevel">
              ></v-select>
            <v-text-field
              data-vv-name="serverNameEntry"
              label="Server Name"
              v-validate="'required'"
              placeholder="Intiface Server"
              v-model="config.ServerName"
              clearable
              :error-messages="errors.collect('serverNameEntry')"
              :disabled="connector.IsServerProcessRunning"></v-text-field>
            <v-text-field
              data-vv-name="serverMaxPingEntry"
              :error-messages="errors.collect('serverMaxPingEntry')"
              label="Max Server Ping Time"
              placeholder="0"
              v-validate="'required|numeric|min_value:0'"
              v-model="config.ServerMaxPingTime"
              :disabled="connector.IsServerProcessRunning"></v-text-field>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
      <v-expansion-panel-content class="transparent">
        <template v-slot:header>
          <div>Server IPC Settings</div>
        </template>
        <v-card class="transparent">
          <v-card-text>
            <v-text-field
              data-vv-name="serverPipeNameEntry"
              :error-messages="errors.collect('serverPipeNameEntry')"
              label="Pipe Name"
              v-validate="'required'"
              placeholder="ButtplugPipe"
              v-model="config.IpcServerPipeName"
              clearable
              :disabled="connector.IsServerProcessRunning"></v-text-field>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
      <v-expansion-panel-content class="transparent">
        <template v-slot:header>
          <div>Server Websocket Settings</div>
        </template>
        <v-card class="transparent">
          <v-card-text>
            <v-list
              subheader
              dense
              two-line
              class="transparent"
            >
              <v-list-tile>
                <v-list-tile-content>
                  <v-text-field
                    data-vv-name="websocketInsecurePort"
                    label="Insecure Port"
                    :error-messages="errors.collect('websocketInsecurePort')"
                    v-validate="'required|numeric|min_value:1|max_value:65535'"
                    :disabled="connector.IsServerProcessRunning"
                    v-model="config.WebsocketServerInsecurePort">
                  </v-text-field>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>

                  <v-text-field
                    data-vv-name="websocketSecurePort"
                    :error-messages="errors.collect('websocketSecurePort')"
                    label="Secure Port"
                    v-validate="'required|numeric|min_value:1|max_value:65535'"
                    :disabled="connector.IsServerProcessRunning"
                    v-model="config.WebsocketServerSecurePort">
                  </v-text-field>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-action>
                  <v-checkbox v-model="config.WebsocketServerAllInterfaces" :disabled="connector.IsServerProcessRunning"></v-checkbox>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Listen on All Interfaces</v-list-tile-title>
                  <v-list-tile-sub-title>When on, listens on all available network interfaces. Otherwise, only listens on 127.0.0.1.</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
      <v-expansion-panel-content class="transparent" popout>
        <template v-slot:header>
          <div>Other Settings</div>
        </template>
        <v-card class="transparent">
          <v-card-text>
            <v-btn
              color="primary"
              @click="RunSetup()"
            >Run Initial Setup</v-btn>
          </v-card-text>
        </v-card>
        <v-card class="transparent">
          <v-card-text>
            <v-btn
              color="primary"
              @click="RunSetup()"
            >Run Certificate Setup</v-btn>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-container>
</template>

<script lang="ts" src="./SettingsPanel.ts">
</script>
