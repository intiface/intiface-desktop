<template>
  <v-container>
    <h1>Intiface Desktop Home</h1>
    <b>Welcome to Intiface Desktop version {{ Version }}!</b>
    <v-row>
      <v-col>
        <h2>NEWS FOR V20</h2>
        <p>Mostly a bugfix and cleanup release this time!</p>
        <ul>
          <li>
            Fixed a huge bug where more than 1MB of logs would stop the server
            process. This was a super common issue for long-session users
            (looking at you, VRChat players). Should no longer happen.
          </li>
          <li>
            Removed engine choices! It's Rust or nothing from here on out (and
            has been since v19 where I broke C# anyways).
          </li>
          <li>
            Otherwise, lots of small cleanup around UI that you may or may not
            notice.
          </li>
        </ul>
        <br/>
        <p>The hope is that this release of Desktop will be the last before I
        start working on a redesign of the application. Most people have no idea
        what Desktop is used for (me included, sometimes), so it really needs
        better UI, help/support/dialogs, and features (including extremely basic
        things like doing device testing within Desktop, all the way to
        reintegrating visual device simulators so you don't have to use hardware
        to develop). This is currently in planning, but will hopefully have
        updates soon!</p>
        <p>- qDot</p>
      </v-col>
      <v-col>
        <b>Things to do with Intiface (all links will open in web browser)</b>
        <ul>
          <li>
            <a href="https://playground.buttplug.world">Buttplug Playground (Hardware Control, Web)</a>
          </li>
          <li>
            <a href="https://syncydink.buttplug.world">Syncydink (Movie Sync/Playback, Web)</a>
          </li>
          <li>
            <a href="https://github.com/FredTungsten/ScriptPlayer">ScriptPlayer (Movie Sync/Playback, Windows Only)</a>
          </li>
          <li>
            <a href="https://intiface.com/ghr">Intiface Game Haptics Router</a> 
          </li>
          <li>
            <a href="https://gumroad.com/l/VibeGoesBrrr">VibeGoesBrrr VRChat Plugin</a> 
          </li>
        </ul>
        <br/>
        <hr>
        <br/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" src="./HomePanel.ts"></script>
