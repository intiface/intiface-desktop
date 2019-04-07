<template>
  <v-container column>
    <v-layout column>
      <v-list
        subheader
        dense
        two-line
        class="transparent"
      >
        <v-list-tile>
          <v-list-tile-action>
            <v-checkbox v-model="config.UseIpcServer" :disabled="serverRunning"></v-checkbox>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>IPC</v-list-tile-title>
            <v-list-tile-sub-title>Listen on local IPC. Used for native applications.</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-checkbox v-model="config.UseWebsocketServerInsecure" :disabled="serverRunning"></v-checkbox>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Insecure Websockets</v-list-tile-title>
            <v-list-tile-sub-title>Listen on Insecure Websockets. Used for remote or web applications, Google Chrome, etc....</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-checkbox v-model="config.UseWebsocketServerSecure" :disabled="serverRunning || !config.HasCertificates"></v-checkbox>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Secure Websockets</v-list-tile-title>
            <v-list-tile-sub-title>Listen on Secure Websockets. Used for web applications on other machines, Firefox, etc...</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-flex shrink>
        <v-btn outline class="my-3" :disabled="!config.UseIpcServer && !config.UseWebsocketServerInsecure && !config.UseWebsocketServerSecure" @click="ToggleServer()">{{ serverRunning ? serverStates[1] : serverStates[0] }}</v-btn>
      </v-flex>
      <p class="mx-2"><b>Status:</b> Disconnected</p>
    </v-layout>
  </v-container>
</template>

<script lang="ts" src="./ServerPanel.ts">
</script>

<style lang="css">
 .serverSimpleUi {
   font-size: 14pt;
 }
 
 .serverStatus .v-btn {
   font-size: 150%;
   min-width: 0;
 }
</style>
