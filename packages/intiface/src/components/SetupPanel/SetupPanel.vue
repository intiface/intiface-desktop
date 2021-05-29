<template>
  <v-container>
    <v-stepper v-model="setupStep">
      <v-stepper-header>
        <v-stepper-step :complete="setupStep > 1" step="1">Welcome</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="setupStep > 2" step="2">Download Components</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3">Finish</v-stepper-step>
      </v-stepper-header>
      <v-stepper-items>
        <!-- Welcome Screen -->
        <v-stepper-content step="1">
          <h1>Welcome to Intiface!</h1>
          <p><b>For those of you returning to Intiface Desktop from v17 or before:</b> I reset everyone's configs in order to start things from scratch, so welcome back to square one.</p>
          <p>We'll need to do some setup before running the main program. This shouldn't take more than a few minutes.</p>
          <p>If at any point in the future you would like to go through this process again, there is a "Run Initial Setup" button in the Settings panel.</p>
          <v-btn color="primary" @click="setupStep = 2">Let's Get Started!</v-btn>
        </v-stepper-content>

        <!-- Engine and Device File Downloads -->
        <v-stepper-content step="2">
          <div v-if="!updateFinished">
            <p>We're going to need to download an engine and device file for Intiface to run. Downloads will usually anywhere between 5-50mb, depending on the operating system you're on. Download speeds may vary, but there's a progress bar to let you know how much time is left.</p>
            <update-dialog
              :connector="connector"
              dialogVerb="Install"
              buttonText="Install Engine"
              @success="updateFinished = true"
              :dialogType="['engine','devicefile']"
            ></update-dialog>
          </div>
          <div v-if="updateFinished">
            <h1>All done!</h1>
            <p>All finished with setup! Now get out there and Intiface!</p>
            <v-btn color="primary" @click="GoToIntiface()">Start Intiface</v-btn>
          </div>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-container>
</template>

<script lang="ts" src="./SetupPanel.ts">
</script>
