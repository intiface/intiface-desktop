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
        <h2>NEWS FOR V26</h2>
        <p>
          (Ignore that this jumps from 24 to 26. 25 existed for 5 minutes until I smoke tested it
          and found a bug that snuck in due to commit orders. Oops.)
        </p>
        <p>
          Small update this time! Mostly fixing some compatibility issues with libraries that
          Intiface uses.
        </p>
        <p>
          If you had any user configs for devices (mostly TCode/Nobra users), those will have been
          deleted and replaced, so you'll need to rebuild them.
        </p>
        <p>
          Annnnnd that's pretty much it! More updates soon, keep an eye on <a
          href="https://twitter.com/buttplugio">our twitter account</a> for more info.
        </p>
        <p>- qDot</p>
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
  </v-container>
</template>

<script lang="ts" src="./HomePanel.ts"></script>
