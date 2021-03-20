<template>
  <v-container fluid class="fullHeight">
    <v-layout
      column
      fill-height
    >
      <v-flex grow id="logContainer">
        <div id="logFrame">
          <div
            v-for="msg in Logs"
            :class="`${msg.logType} logMsg`">{{ msg.timestamp }} : {{ msg.logType }} : {{ msg.location }} : {{ msg.message }}</div>
        </div>
      </v-flex>
      <!--
      <v-flex shrink>
        <v-layout row>
          <v-flex grow>
            <v-btn>Clear Log</v-btn>
          </v-flex>
          <v-flex shrink>
            <v-btn>Save to File</v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
      -->
    </v-layout>
  </v-container>
</template>

<script lang="ts" src="./LogPanel.ts"></script>

<style lang="css">
 .fullHeight {
   height: 100%;
   overflow: hidden;
 }
 #logContainer {
   position: relative;
   overflow-y: auto;
   background: #222;
   border-radius: 4px;
 }

 #logFrame {
   padding: 10px;
   position: absolute;
   top: 0;
   left: 0;
   bottom: 0;
   right: 0;
   width: 100%;
   height: 100%;
 }

 .buttplug {
   color: orange;
 }

 .backend {
   color: pink;
 }

 .frontend {
   color: forestgreen;
 }

 .process {
   color: cyan;
 }

 .error {
 }

 .warn {
 }

 .info {
 }

 .debug {
 }

 .logMsg {
   background: #222;
   transition: 0.2s;
   padding: 2px;
   border-radius: 4px;
 }

 .logMsg:hover {
   background: #555;
 }
</style>
