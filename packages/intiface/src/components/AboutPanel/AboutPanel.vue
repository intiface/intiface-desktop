<template>
  <v-container>
    <h1>Intiface Desktop</h1>
    <p><b>Intiface Desktop Version:</b> {{ this.Version }}</p>
    <p v-if="this.NeedsApplicationUpdate">
      <v-btn :disabled="isDownloadingApplication" @click="UpdateApplication()">Update Application</v-btn><br/>
    </p>
    <p>(If updater doesn't work, latest release always available from <a href="https://github.com/intiface/intiface-desktop/releases">https://github.com/intiface/intiface-desktop/releases</a>)</p>
    <p v-if="newApplicationDownloaded"><b>Application update downloaded.</b> Please quit app to install update.</p>
    <p><b>Intiface Engine Version:</b> {{ this.EngineVersion }}</p>
    <p><v-btn v-if="this.NeedsEngineUpdate" :disabled="isDownloadingEngine" @click="UpdateEngine()">Update Engine</v-btn></p>
    <p><b>Device Config File Version:</b> {{ this.DeviceConfigFileVersion }}</p>
    <p><v-btn v-if="this.NeedsDeviceFileUpdate" :disabled="isDownloadingDeviceFile" @click="UpdateDeviceFile()">Update Device File</v-btn></p>
    <p><v-btn :disabled="isCheckingForUpdates" @click="CheckForUpdates()">Check For Updates</v-btn></p>
  </v-container>
</template>

<script lang="ts" src="./AboutPanel.ts">
</script>
