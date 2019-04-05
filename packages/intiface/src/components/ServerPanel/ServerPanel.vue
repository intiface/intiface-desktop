<template>
  <v-container column>
    <v-layout class="serverSimpleUi" column v-if="inSimpleMode" align-center justify-center fill-width>
      <v-flex>The Server Is Currently</v-flex>
      <v-flex class="serverStatus"><v-btn large :color="serverRunning ? 'green' : 'red'" @click="ToggleServer">{{ serverRunning ? "ON" : "OFF" }}</v-btn></v-flex>
      <!-- Simple configuration when server off -->
      <v-layout align-center justify-center fill-width column v-if="!serverRunning">
        <v-flex>If you turn the server on,</v-flex>
        <v-flex>
          <v-btn @click="config.ListenOnWebsocketServer = !config.ListenOnWebsocketServer">{{ config.ListenOnWebsocketServer ? 'It will listen' : 'It will not listen' }}</v-btn> for websocket connections {{ config.ListenOnWebsocketServer ? "at port" : ""  }} <v-text-field solo v-if="config.ListenOnWebsocketServer" v-model="config.WebsocketServerSecurePort"></v-text-field>.</v-flex>
          </v-layout>
        </v-flex>
        <v-flex>
          <v-layout row>
            <v-flex mr-2>
              <v-btn @click="config.ListenOnIpcServer = !config.ListenOnIpcServer">{{ config.ListenOnIpcServer ? 'It Will Listen' : 'It Will Not Listen' }}</v-btn> for IPC connections {{ config.ListenOnIpcServer ? "at" : ""  }}</v-flex>
            <v-flex shrink v-if="config.ListenOnIpcServer">
              <v-text-field solo v-model="config.IpcServerPipeName"></v-text-field>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
      <!-- Simple configuration when server on -->
      <v-layout align-center justify-center fill-width column v-if="serverRunning">
        <v-flex>
          It is {{ config.ListenOnIpcServer ? 'listening' : 'not listening' }} for IPC Connections {{ config.ListenOnIpcServer ? " at " : "" }} <v-chip v-if="config.ListenOnIpcServer">{{ config.IpcServerPipeName }}</v-chip></v-flex>
        <v-flex>
          It is {{ config.ListenOnWebsocketServer ? 'listening' : 'not listening' }} for Websocket Connections {{ config.ListenOnWebsocketServer ? " at " : "" }} <v-chip v-if="config.ListenOnWebsocketServer">{{ config.WebsocketServerInsecurePort }}</v-chip></v-flex>
      </v-layout>
    </v-layout>
    <!-- Advanced UI -->
    <v-layout column v-if="!inSimpleMode">
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
                  <v-checkbox v-model="config.WebsocketServerAllInterfaces" :disabled="serverRunning"></v-checkbox>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Listen on All Interfaces</v-list-tile-title>
                  <v-list-tile-sub-title>When on, listens on all available network interfaces. Otherwise, only listens on 127.0.0.1.</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-action>
                  <v-checkbox v-model="config.UseWebsocketServerSecure && config.HasCertificates" :disabled="serverRunning || !config.HasCertificates"></v-checkbox>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>SSL/TLS</v-list-tile-title>
                  <v-list-tile-sub-title>Use SSL/TLS when hosting server. Required for using web applications with Intiface. If disabled, may mean certificates have not been generated.</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list-group>
          </v-list>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-layout>
    <!--
    <v-layout row align-center justify-center fill-width>
      <v-flex><v-btn @click="inSimpleMode = !inSimpleMode">Change to {{ inSimpleMode ? 'Advanced Mode' : 'Simple Mode' }}</v-btn></v-flex>
    </v-layout>
    -->
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
