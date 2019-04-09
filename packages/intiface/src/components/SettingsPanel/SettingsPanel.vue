<template>
  <v-container>
    <v-expansion-panel class="transparent" v-model="panelExpand" expand>
      <v-expansion-panel-content class="transparent" popout>
        <template v-slot:header>
          Versions and Updates
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
            <p><v-btn :disabled="isCheckingForUpdates" @click="CheckForUpdates()">Check For Updates</v-btn></p>
            <update-dialog
              :connector="connector"
              dialogVerb="Get Updates"
              :dialogType="dialogType"
              v-show="NeedsUpdate">
            </update-dialog>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
      <v-expansion-panel-content class="transparent">
        <template v-slot:header>
          Server Process Settings
        </template>
        <v-card class="transparent">
          <v-card-text>
            <v-select
              :items="logLevels"
              label="Log Output Level"
              v-model="config.ServerLogLevel">
              ></v-select>
            <v-text-field label="Server Name" placeholder="Intiface Server" v-model="config.ServerName" :disabled="connector.IsServerProcessRunning"></v-text-field>
            <v-text-field label="Max Server Ping Time" placeholder="0" v-model="config.ServerMaxPingTime" mask="#" :disabled="connector.IsServerProcessRunning"></v-text-field>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
      <v-expansion-panel-content class="transparent">
        <template v-slot:header>
          IPC Settings
        </template>
        <v-card class="transparent">
          <v-card-text>
            <v-text-field label="Pipe Name" placeholder="ButtplugPipe" v-model="config.IpcServerPipeName" clearable :disabled="connector.IsServerProcessRunning"></v-text-field>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
      <v-expansion-panel-content class="transparent">
        <template v-slot:header>
          Websocket Settings
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
                    label="Insecure Port"
                    mask="#"
                    :disabled="connector.IsServerProcessRunning"
                    v-model="config.WebsocketServerInsecurePort">
                  </v-text-field>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>

                  <v-text-field
                    label="Secure Port"
                    mask="#"
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
          Other
        </template>
        <v-card class="transparent">
          <v-card-text>
            <v-btn
              color="primary"
              @click="RunSetup()"
            >Run Initial Setup</v-btn>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-container>
</template>

<script lang="ts" src="./SettingsPanel.ts">
</script>
