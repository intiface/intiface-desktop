<template>
  <v-container fluid id="logContainer">
    <v-layout
      column
      fill-height
    >
      <v-flex grow class="scroll" id="logFrame">
        <v-card>
          <v-card-text>
            <div
              v-for="msg in Logs"
              :class="msg.logType"
            >{{ msg.timestamp }} : {{ msg.logType }} : {{ msg.location }} : {{ msg.message }}</div>
          </v-card-text>
        </v-card>
      </v-flex>
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
    </v-layout>
  </v-container>
</template>

<script lang="ts" src="./LogPanel.ts"></script>

<style lang="css">
 #logContainer {
 }

 #logFrame {
   overflow-y: auto;
   max-height: 300px;
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
</style>
