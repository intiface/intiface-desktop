<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Intiface Desktop Home</h1>
        <b>Welcome to Intiface Desktop version {{ Version }}!</b>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        Looking for things to use with Intiface? Check out the <a href="https://github.com/buttplugio/awesome-buttplug">Awesome Buttplug Apps/Games List!</a>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="10">
        <h2>NEWS FOR V21</h2>
        <p>And so the upgrades begin!</p>
        <p>Back in v20 I promised that was going to be the last version that was
        "just an dependency upgrade", and sure enough, now we're getting some
        new features in to make Intiface Desktop vaguely useful for something
        other than running the server!</p>
        <p>New features include:</p>
        <ul>
          <li>You can now decide which device connection methods to use in the
          <i>Server Status</i> panel! If you don't have a lovense dongle or xbox
          gamepad, you can turn those off choices now.</li>
          <li>You can now use the <a
          href="https://lovense.buttplug.io">Lovense</a> Connect app (<a
          href="https://play.google.com/store/apps/details?id=com.lovense.connect&hl=en_US&gl=US">Android</a>,
          <a
          href="https://apps.apple.com/us/app/lovense-connect/id1273067916">iOS</a>)
          with Intiface! Just bring up Lovense Connect on your phone, then
          select the Lovense Connect Service checkbox on the Server Status
          screen. Note that this is opt-in. Lovense Connect is off by default,
          as it requires us talking to Lovense's network API, so we require user
          input to activate this feature.</li>
          <li>You can now test devices in Intiface Desktop! Just go to the new
          <i>Devices</i> panel, and you'll be presented with a <a
          href="https://playground.buttplug.world">Buttplug Playground</a> style
          interface that will allow you to connect to and control your devices.
          The features are currently minimal, but this lets you make sure that
          Intiface can see and control your devices before you use them with
          other programs.</li>
          <li>The SSL websockets option has been removed, as it was way too
          much work to keep up, and most major browsers allow non-SSL
          connections to localhost now. For those that need it, secure
          connections can still be established using an outside proxy.</li>
        </ul>
        <br/>
        <p>These features are just the beginning of the new UI and systems that
        are coming to Intiface, so look for more updates soon!</p>
        <p>- qDot</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" src="./HomePanel.ts"></script>
