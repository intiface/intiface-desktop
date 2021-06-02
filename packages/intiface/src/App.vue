<template>
  <v-app dark v-if="loaded" class="noOverflow">
    <v-navigation-drawer v-model="drawer" v-if="showNavBar" hide-overlay stateless app width="200">
      <v-toolbar flat class="transparent">
        <v-row align="center" class="spacer" no-gutters>
          <v-col>
            <v-avatar tile>
              <img src="../build/icon.png" />
            </v-avatar>
          </v-col>
          <v-col>
            Intiface
          </v-col>
        </v-row>
      </v-toolbar>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-item
          v-for="item in menuList"
          :key="item.title"
          :to="item.path"
          @click="currentItem = item"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-row align="center">
        <v-col cols="auto">{{ currentItem.title }}</v-col>
        <v-col cols="auto" class="ml-auto" v-if="showNavBar">
          <v-row>
            <v-col>
            <toolbar-status-icon
              :tooltip="connector.IsServerProcessRunning ? 'Server running' : 'Server not running'"
              :color="connector.IsServerProcessRunning ? '#00FF00' : '#FF0000'"
              icon="devices"
              link="server"
            ></toolbar-status-icon>
            </v-col>
            <v-col>
            <toolbar-status-icon
              :tooltip="connector.ClientName !== null ? connector.ClientName : 'Client not connected'"
              v-if="connector.IsServerProcessRunning"
              :color="connector.ClientName !== null ? '#00FF00' : '#FF0000'"
              icon="call"
              link="server"
            ></toolbar-status-icon>
            </v-col>
            <v-col>
            <toolbar-status-icon
              tooltip="Updates Available"
              icon="update"
              link="settings#version"
              v-if="config.HasUpdatesAvailable"
            ></toolbar-status-icon>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-main class="d-flex fill-height">
      <v-row no-gutters class="flex-column fill-height">
        <v-col class="flex-grow-1 flex-shrink-1 overflow-auto">
          <keep-alive include="server devices">
            <router-view @error="onError" :connector="connector" :config="connector.Config"></router-view>
          </keep-alive>
        </v-col>
        <v-col v-if="appErrors.length > 0"  class="flex-grow-0 flex-shrink-0 pa-2">
          <v-alert v-for="errorMsg in appErrors" dismissible :value="true" type="error">{{ errorMsg }}</v-alert>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script lang="ts" src="./App.ts">
</script>

<style lang="css" >
.noOverflow {
  overflow: hidden;
}
</style>
