<template>
  <v-container>
    <v-row>
      <v-col cols="10">
        <h2 style="color:#FF0000;">PLEASE DOWNLOAD INTIFACE CENTRAL</h2>
        <h4 style="color:#FF0000;">Intiface Desktop has reached End-Of-Life</h4>
        <p><a href="https://intiface.com/central">Intiface Central</a> is now the new hub
        application for Buttplug. It contains all of the functionality of Intiface Desktop, while
        also running on Android/iOS, and is based on a platform I don't hate working on (flutter
        instead of electron/node).</p>
        <p>Intiface Central is available for download at <a
        href="https://intiface.com/central">https://intiface.com/central</a>.</p>
        <p>You will need to download and install the new application, and manually uninstall
        Intiface Desktop.</p>
        <br/>
        <p>Intiface Desktop is now discontinued. You can continue to use Desktop, but it will no
        longer receive device configuration or engine updates. Due to the way electron updates work,
        I cannot have Desktop update automatically to Intiface Central, so this is the best way I
        have to get the message out to users.</p> 
        <p>In the future, update features for Desktop may break due to missing URLs, but as long as
        the system still has an intiface-cli-rs executable in the right place, Desktop should
        continue to function.</p>
        <p>Good night, sweet application. You basically did your job ok enough. I guess.</p>
      </v-col>
    </v-row>    
  </v-container>
</template>

<script lang="ts" src="./HomePanel.ts"></script>
