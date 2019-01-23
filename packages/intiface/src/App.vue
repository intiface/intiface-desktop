<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      hide-overlay
      stateless
      app
      width="200"
    >
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar :tile=true>
              <img src="./images/buttplug.svg">
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
    <v-content fill-height>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts" src="./App.ts">
</script>
