<template>
  <v-container>
    <v-expansion-panel class="transparent">
      <v-expansion-panel-content class="transparent">
        <template v-slot:header>
          Versions and Updates
        </template>
        <v-card>
          <v-card-text>
            <v-checkbox
              v-model="config.CheckForUpdatesOnStart"
              label="Check For Updates On Application Start"
            ></v-checkbox>
            <p><b>Intiface Desktop Version:</b> {{ this.Version }}</p>
            <p>(If updater doesn't work, latest release always available from <a href="https://github.com/intiface/intiface-desktop/releases">https://github.com/intiface/intiface-desktop/releases</a>)</p>
            <p><b>Intiface Engine Version:</b> {{ this.EngineVersion }}</p>
            <p><b>Device Config File Version:</b> {{ this.DeviceConfigFileVersion }}</p>
            <p><v-btn :disabled="isCheckingForUpdates" @click="CheckForUpdates()">Check For Updates</v-btn></p>
            <update-dialog
              :connector="connector"
              dialogVerb="Get Updates"
              v-if="NeedsUpdate"
              ref="UpdateDialog">
            </update-dialog>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
      <v-expansion-panel-content class="transparent">
        <template v-slot:header>
          Other
        </template>
        <v-card>
          <v-card-text>
            <v-btn
              color="primary"
              @click="RunSetup()"
            >Run Initial Setup</v-btn>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-container>
</template>

<script lang="ts" src="./SettingsPanel.ts">
</script>
