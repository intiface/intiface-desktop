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
        Looking for things to use with Intiface? Check out the
        <a href="https://github.com/buttplugio/awesome-buttplug"
          >Awesome Buttplug Apps/Games List!</a
        >
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        Need help learning how to use Intiface Desktop?
        <a href="https://www.youtube.com/watch?v=_y80tqtaRX0"
          >Have a look at our tutorial video for versions 21 and above!</a
        >
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="10">
        <h2>NEWS FOR V24</h2>
        <p>
          We're now full swing into adding UI and features to Intiface, so
          expect a lot more small updates to Desktop over the next while. For
          v24, we now have:
        </p>
        <ul>
          <li>
            <b>Warnings when you try to connect another client when one is
              already connected!</b>
          </li>
          <ul>
            <li>
              One of the biggest pain points with Intiface is realizing that you can only use one
              client at a time. As a stop gap, we've implemented a warning message that will pop up
              whenever you try to connect something when another client is already connected.
            </li>
          </ul>
          <li>
            <b>The beginnings of user device configuration!</b>
          </li>
          <ul>
            <li>
              Up until now, adding or changing device configuration in Buttplug required editting
              undocumented configuration files. With Intiface Desktop v24, we've started adding UI
              to add/change configurations, starting with a couple of Serial Port devices, <a
              href="https://patreon.com/tempestvr">T-Code based devices like the OSR-2/SR-6</a>, and
              <a href="https://www.nobra.de/?lang=en">Nobra's Silicone Dreams</a> devices. Right
              now, all you can do is add serial ports for these devices, but this feature will be
              growing quickly to include the ability to add new devices of other types
              (Bluetooth/HID/etc), set up min/max speeds or positions on devices, rename features
              and devices, and more.
            </li>
          </ul>
        </ul>
        <br/>
        <p>Alongside Intiface Desktop v24, we've released Intiface Engine v39, which has support for
        the Vorze Piston SA, Patoo devices, and a few other new pieces of hardware. So there's lots
        of new stuff to play with!</p>
        <p>We've got a lot of exciting new features planned for the near future, including simulated
        devices, more device configuration options, mobile support for Android/iOS, and possibly
        even some new Buttplug messages to expand the capabilities of the system.</p>
        <p>And maybe I'll finally get to start on the actual UI overhaul for Desktop at some
        point...</p>
        <p>- qDot</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="10">
        <h2>NEWS FOR V23</h2>
        <p>
          Welcome to v23, which is just v21 with some fixes for some very nasty
          bugs in the new devices panel, and then fixes for the update issues in
          v22. What can I say, it's been a rough release cycle. That's it,
          really, so here's the v21 news if you hadn't seen that yet:
        </p>
        <br />
        <p>And so the upgrades begin!</p>
        <p>
          Back in v20 I promised that was going to be the last version that was
          "just an dependency upgrade", and sure enough, now we're getting some
          new features in to make Intiface Desktop vaguely useful for something
          other than running the server!
        </p>
        <p>New features include:</p>
        <ul>
          <li>
            You can now decide which device connection methods to use in the
            <i>Server Status</i> panel! If you don't have a lovense dongle or
            xbox gamepad, you can turn those off choices now.
          </li>
          <li>
            You can now use the
            <a href="https://lovense.buttplug.io">Lovense</a> Connect app (<a
              href="https://play.google.com/store/apps/details?id=com.lovense.connect&hl=en_US&gl=US"
              >Android</a
            >,
            <a href="https://apps.apple.com/us/app/lovense-connect/id1273067916"
              >iOS</a
            >) with Intiface! Just bring up Lovense Connect on your phone, then
            select the Lovense Connect Service checkbox on the Server Status
            screen. Note that this is opt-in. Lovense Connect is off by default,
            as it requires us talking to Lovense's network API, so we require
            user input to activate this feature.
          </li>
          <li>
            You can now test devices in Intiface Desktop! Just go to the new
            <i>Devices</i> panel, and you'll be presented with a
            <a href="https://playground.buttplug.world">Buttplug Playground</a>
            style interface that will allow you to connect to and control your
            devices. The features are currently minimal, but this lets you make
            sure that Intiface can see and control your devices before you use
            them with other programs.
          </li>
          <li>
            The SSL websockets option has been removed, as it was way too much
            work to keep up, and most major browsers allow non-SSL connections
            to localhost now. For those that need it, secure connections can
            still be established using an outside proxy.
          </li>
        </ul>
        <br />
        <p>
          These features are just the beginning of the new UI and systems that
          are coming to Intiface, so look for more updates soon!
        </p>
        <p>- qDot</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" src="./HomePanel.ts"></script>
