<template>
  <v-container>
    <v-checkbox
      v-model="config.CheckForUpdatesOnStart"
      label="Check For Updates On Application Start"
    ></v-checkbox>
    <v-btn
      color="primary"
      @click="RunSetup()"
    >Run Initial Setup</v-btn>
  </v-container>
</template>

<script lang="ts" src="./SettingsPanel.ts">
</script>
