<template>
  <v-container>
    <h1>Intiface Desktop</h1>
    <p><b>Intiface Desktop Version:</b> {{ this.Version }}</p>
    <p v-if="this.NeedsApplicationUpdate">
      <v-btn @click="UpdateApplication()">Update Application</v-btn><br/>
    </p>
    <p>(If updater doesn't work, latest release always available from <a href="https://github.com/intiface/intiface-desktop/releases">https://github.com/intiface/intiface-desktop/releases</a>)</p>
    <p><b>Intiface Engine Version:</b> {{ this.EngineVersion }}</p>
    <p><v-btn v-if="this.NeedsEngineUpdate" @click="UpdateEngine()">Update Engine</v-btn></p>
    <p><b>Device Config File Version:</b> {{ this.DeviceConfigFileVersion }}</p>
    <p><v-btn v-if="this.NeedsDeviceFileUpdate" @click="UpdateDeviceFile()">Update Device File</v-btn></p>
    <p><v-btn @click="CheckForUpdates()">Check For Updates</v-btn></p>
  </v-container>
</template>

<script lang="ts" src="./AboutPanel.ts">
</script>
