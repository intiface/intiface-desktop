<template>
  <v-container column>
    <v-layout column>
      <v-list
        subheader
        dense
        two-line
        class="transparent"
      >
        <v-list-item>
          <v-list-item-action>
            <v-checkbox v-model="config.UseWebsocketServerInsecure" :disabled="serverRunning"></v-checkbox>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Insecure Websockets (on {{config.websocketServerAllInterfaces ? "[All Interfaces]" : "127.0.0.1"}}:{{ config.websocketServerInsecurePort }})</v-list-item-title>
            <v-list-item-subtitle>Listen on Insecure Websockets. Used for remote or web applications, Google Chrome, etc....</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-action>
            <v-checkbox v-model="config.UseWebsocketServerSecure" :disabled="serverRunning || !config.HasCertificates"></v-checkbox>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Secure Websockets (on {{config.websocketServerAllInterfaces ? "[All Interfaces]" : "127.0.0.1"}}:{{ config.websocketServerSecurePort }})</v-list-item-title>
            <v-list-item-subtitle>Listen on Secure Websockets. Used for web applications on other machines, Firefox, etc...</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-flex v-if="config.HasUsableEngineExecutable && config.Engine === config.InstalledEngineType" shrink>
        <v-btn outlined class="my-3" :disabled="!config.UseIpcServer && !config.UseWebsocketServerInsecure && !config.UseWebsocketServerSecure" @click="ToggleServer()">{{ serverRunning ? serverStates[1] : serverStates[0] }}</v-btn>
      </v-flex>
      <v-flex v-else>
        <b>New engine executable required.</b> <router-link to="settings"> Go to Settings Panel > Versions and Updates to update.</router-link>
      </v-flex>
      <p class="mx-2"><b>Status:</b> {{ connector.ClientName !== null ? `Connected to ${connector.ClientName}` : "Disconnected" }}</p>
      <v-flex v-if="connector.Devices.size > 0 && serverRunning">
        <b>Devices:</b>
        <ul>
          <li v-for="[id, name] of connector.Devices.entries()" :key="id">{{ name }}</li>
        </ul>
      </v-flex>
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
