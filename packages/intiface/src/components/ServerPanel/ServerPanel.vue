<template>
  <v-container column>
    <v-list
      subheader
      dense
      two-line
      class="transparent"
    >
      <v-list-tile>
        <v-list-tile-action>
          <v-checkbox v-model="config.ListenOnIpcServer" :disabled="serverRunning"></v-checkbox>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>IPC</v-list-tile-title>
          <v-list-tile-sub-title>Listen on local IPC. Used for native applications.</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-action>
          <v-checkbox v-model="config.ListenOnWebsocketServer" :disabled="serverRunning"></v-checkbox>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Websockets</v-list-tile-title>
          <v-list-tile-sub-title>Listen on Websockets. Used for remote or web applications.</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    <v-btn outline class="my-3" @click="ToggleServer()">{{ serverRunning ? serverStates[1] : serverStates[0] }}</v-btn>
    <p class="mx-2"><b>Status:</b> Disconnected</p>
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
              <v-list-tile-content>
                <v-list-tile-title>IPC Settings</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>
                <v-text-field label="Pipe Name" placeholder="ButtplugPipe" v-model="config.IpcServerPipeName" clearable :disabled="serverRunning"></v-text-field>
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
              <v-list-tile-content>
                <v-list-tile-title>Websocket Settings</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-action>
                <v-checkbox :disabled="serverRunning"></v-checkbox>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>SSL/TLS</v-list-tile-title>
                <v-list-tile-sub-title>Use SSL/TLS when hosting server. Required for using web applications with Intiface.</v-list-tile-sub-title>
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
