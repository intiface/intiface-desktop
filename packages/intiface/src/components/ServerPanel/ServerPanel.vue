<template>
  <v-container column>
    <v-btn>Start Server</v-btn>
    <v-divider></v-divider>
    <v-expansion-panel class="transparent" popout>
      <v-expansion-panel-content class="transparent">
        <div slot="header">Advanced Server Settings</div>
        <v-list
          subheader
          dense
          two-line
          class="transparent"
        >
          <v-list-group no-action>
            <v-list-tile slot="activator">
              <v-list-tile-action>
                <v-checkbox v-model="useIPC"></v-checkbox>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>IPC</v-list-tile-title>
                <v-list-tile-sub-title>Listen on local IPC</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>
                <v-text-field label="Pipe Name" placeholder="ButtplugPipe" v-model="pipeName" clearable :disabled="!useIPC"></v-text-field>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
        </v-list>
        <v-list
          subheader
          dense
          two-line
          class="transparent"
        >
          <v-list-group no-action>
            <v-list-tile slot="activator">
              <v-list-tile-action>
                <v-checkbox v-model="useWebsockets"></v-checkbox>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>Websockets</v-list-tile-title>
                <v-list-tile-sub-title>Listen on Websocket Ports</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-action>
                <v-checkbox :disabled="!useWebsockets"></v-checkbox>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>SSL/TLS</v-list-tile-title>
                <v-list-tile-sub-title>Use SSL/TLS when hosting server.</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-subheader>Network Interfaces</v-subheader>
          </v-list-group>
        </v-list>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-container>
</template>

<script lang="ts" src="./ServerPanel.ts">
</script>
