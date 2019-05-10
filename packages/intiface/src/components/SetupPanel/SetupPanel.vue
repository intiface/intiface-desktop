<template>
  <v-container>
    <v-stepper v-model="setupStep">
      <v-stepper-header>
        <v-stepper-step :complete="setupStep > 1" step="1">Welcome</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="setupStep > 2" step="2">Download Components</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="setupStep > 3" step="3">Setup Secure Certificate</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="4">Finish</v-stepper-step>
      </v-stepper-header>
      <v-stepper-items>

        <!-- Welcome Screen -->
        <v-stepper-content step="1">
          <h1>Welcome to Intiface!</h1>
          <p>We'll need to do some setup before running the main program. This shouldn't take more than a few minutes.</p>
          <p>If at any point in the future you would like to go through this process again, there is a "Run Initial Setup" button in the Settings panel.</p>
          <v-btn
            color="primary"
            @click="setupStep = 2"
          >Let's Get Started!</v-btn>
        </v-stepper-content>


        <!-- Engine and Device File Downloads -->
        <v-stepper-content step="2">
          <p>First off, we're going to need to download an engine and device file for Intiface to run. Downloads will usually anywhere between 5-50mb, depending on the operating system you're on. Download speeds may vary, but there's a progress bar to let you know how much time is left.</p>
          <update-dialog
            :connector="connector"
            dialogVerb="Install"
            :dialogType='["engine","devicefile"]'>
          </update-dialog>
          <v-btn
            color="primary"
            @click="setupStep = 3"
          >Continue</v-btn>
        </v-stepper-content>

        <!-- Setup secure cert -->
        <v-stepper-content step="3">
          <p>Depending on how you plan on using Intiface, you may need to set up a secure certificate. This includes:</p>
          <ul>
            <li>Using Firefox for webapps that will access Intiface. (Chrome does not require a cert and can connect via insecure websockets.)</li>
            <li>Using the Proxy feature of Intiface</li>
          </ul>
          <br />
          <p>If either of these cases applies to you, hit the Run Cert Setup button below and you'll be taken to the Cert Setup website in your browser.</p>
          <p>If you aren't sure if either of these cases applies to you, you can always run the Cert Server from the Settings panel of Intiface Desktop.</p>
          <v-btn
            color="primary"
            @click="StartCertServer()"
          >Run Cert Setup</v-btn>
          <v-btn
            color="primary"
            @click="setupStep = 4"
          >Continue</v-btn>
        </v-stepper-content>

        <v-stepper-content step="4">
          <h1>All done!</h1>
          <p>All finished with setup! Now get out there and Intiface!</p>
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
