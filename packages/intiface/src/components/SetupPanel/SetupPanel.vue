<template>
  <v-container>
    <v-stepper v-model="setupStep">
      <v-stepper-header>
        <v-stepper-step :complete="setupStep > 1" step="1">Welcome</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="setupStep > 2" step="2">Download Engine</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="setupStep > 3" step="3">Download Device Info File</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="setupStep > 4" step="4">Setup Secure Certificate</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="5">Finish</v-stepper-step>
      </v-stepper-header>
      <v-stepper-items>
        <v-stepper-content step="1">
          <h1>Welcome to Intiface!</h1>
          <p>We'll need to do some setup before running the main program. This shouldn't take more than a few minutes.</p>
          <p>If at any point in the future you would like to go through this process again, there is a "Run Initial Setup" button in the Settings panel.</p>
          <v-btn
            color="primary"
            @click="setupStep = 2"
          >Let's Get Started!</v-btn>
        </v-stepper-content>
        <v-stepper-content step="2">
          <p>First off, we're going to need to download an engine for Intiface to run. Engines are usually anywhere between 5-50mb, depending on the operating system you're on. Download speeds may vary, but there's a progress bar to let you know how much time is left.</p>
          <v-btn
            color="primary"
            @click="StartEngineDownload()"
          >Start Download</v-btn>
          <p>Download Progress: {{ downloadProgress }}%</p>
          <v-btn
            color="primary"
            @click="setupStep = 3"
            v-if="engineDownloadFinished"
          >Continue</v-btn>
        </v-stepper-content>
        <v-stepper-content step="3">
          <v-btn
            color="primary"
            @click="setupStep = 4"
          >Continue</v-btn>
        </v-stepper-content>
        <v-stepper-content step="4">
          <v-btn
            color="primary"
            @click="setupStep = 5"
          >Continue</v-btn>
        </v-stepper-content>
        <v-stepper-content step="5">
          <v-btn
            color="primary"
            @click="GoToIntiface()"
          >Start Intiface</v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-container>
</template>

<script lang="ts" src="./SetupPanel.ts">
</script>
