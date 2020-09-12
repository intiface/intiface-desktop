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
          <p><b>For those of you returning to Intiface Desktop from v17 or before:</b> I reset everyone's configs in order to start things from scratch, so welcome back to square one.</p>
          <p>We'll need to do some setup before running the main program. This shouldn't take more than a few minutes.</p>
          <p>If at any point in the future you would like to go through this process again, there is a "Run Initial Setup" button in the Settings panel.</p>
          <v-btn color="primary" @click="setupStep = 2">Let's Get Started!</v-btn>
        </v-stepper-content>

        <!-- Engine and Device File Downloads -->
        <v-stepper-content step="2">
          <div v-if="!updateFinished">
            <p>First off, we're going to need to download an engine and device file for Intiface to run. Downloads will usually anywhere between 5-50mb, depending on the operating system you're on. Download speeds may vary, but there's a progress bar to let you know how much time is left.</p>
            <update-dialog
              :connector="connector"
              dialogVerb="Install"
              buttonText="Install Engine"
              @success="updateFinished = true"
              :dialogType="['engine','devicefile']"
            ></update-dialog>
          </div>
          <div v-if="updateFinished">
            <p>All done! Hit the button below to continue.</p>
            <v-btn color="primary" @click="setupStep = 3">Continue</v-btn>
          </div>
        </v-stepper-content>

        <!-- Setup secure cert -->
        <v-stepper-content step="3">
          <div v-if="!usingFirefox">
            <p>Intiface has support for connecting to apps in web browsers. If you plan on using Firefox for this, you'll need to run through an extra step, so check the checkbox below.</p>
            <p>Chrome/Edge/Brave/Safari/etc users can hit the "Continue" button to move on.</p>
            <v-checkbox
              v-model="usingFirefox"
              label="I plan on using Intiface web apps with Firefox."
            ></v-checkbox>
          </div>
          <div v-if="usingFirefox">
            <p>Depending on how you plan on using Intiface, you may need to set up a secure certificate. This includes:</p>
            <ul>
              <li>Using Firefox for webapps that will access Intiface. (Chrome does not require a cert and can connect via insecure websockets.)</li>
              <li>Using the Proxy feature of Intiface</li>
            </ul>
            <br />
            <p>If either of these cases applies to you, hit the Run Cert Setup button below and you'll be taken to the Cert Setup website in your browser.</p>
            <p>If you aren't sure if either of these cases applies to you, you can always run the Cert Server from the Settings panel of Intiface Desktop.</p>
            <v-card class="transparent">
              <v-card-text>
                <v-dialog v-model="certAcceptDialog" persistent max-width="400">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="primary" dark v-bind="attrs" v-on="on">Run Certificate Configuration</v-btn>
                  </template>
                  <v-card>
                    <v-card-title class="headline">Certificate Acceptance</v-card-title>
                    <v-card-text>Your certs have been generated, but you will now need to accept them in Firefox. Hit the "Launch" button below to open the webpage, or "Cancel" to quit. You can restart acceptance later in the Settings Panel if needed. Note that this will not work in Chrome, and Chrome does not require local certs.</v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn text @click="StartCertServer()">Launch</v-btn>
                      <v-btn text @click="StopCertServer()">Cancel</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-card-text>
            </v-card>
          </div>
          <v-btn color="primary" @click="setupStep = 4">Continue</v-btn>
        </v-stepper-content>

        <v-stepper-content step="4">
          <h1>All done!</h1>
          <p>All finished with setup! Now get out there and Intiface!</p>
          <v-btn color="primary" @click="GoToIntiface()">Start Intiface</v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-container>
</template>

<script lang="ts" src="./SetupPanel.ts">
</script>
