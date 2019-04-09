<template>
  <v-app dark v-if="loaded" class="noOverflow">
    <v-navigation-drawer
      v-model="drawer"
      v-if="showNavBar"
      hide-overlay
      stateless
      app
      width="200"
    >
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar :tile=true>
              <img src="../build/icon.png">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>Intiface</v-list-tile-title>
            </v-list-tile-content>

          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile
          v-for="item in menuList"
          :key="item.title"
          :to="item.path"
          @click="currentItem = item"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app>
      <v-layout row>
        <v-flex grow>
          {{ currentItem.title }}
        </v-flex>
        <v-flex shrink>
          <v-layout
            row>
            <toolbar-status-icon
              :tooltip="connector.IsServerProcessRunning ? 'Server running' : 'Server not running'"
              :color="connector.IsServerProcessRunning ? '#00FF00' : '#FF0000'"
              icon="devices"
              link="server"></toolbar-status-icon>
            <toolbar-status-icon
              :tooltip="connector.ClientName !== null ? connector.ClientName : 'Client not connected'"
              v-if="connector.IsServerProcessRunning"
              :color="connector.ClientName !== null ? '#00FF00' : '#FF0000'"
              icon="call"
              link="server"></toolbar-status-icon>
          <toolbar-status-icon
            tooltip="Updates Available"
            icon="update"
            link="settings"
            v-if="config.HasUpdatesAvailable"
          ></toolbar-status-icon>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-toolbar>
    <v-content fill-height>
      <router-view
        @error="onError"
        :connector="connector"
        :config="connector.Config"></router-view>
      <v-container>
        <v-alert
          v-for="errorMsg in errors"
          dismissible
          value="true"
          type="error"
        >
          {{ errorMsg }}
        </v-alert>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts" src="./App.ts">
</script>

<style lang="css" >
 .noOverflow {
   overflow: hidden;
 }
</style>
