<template>
  <v-container fluid pa-0 class="d-flex fill-height">
    <v-row class="flex-column fill-height">
      <v-col class="flex-grow-1 flex-shrink-1 overflow-auto">
        <v-virtual-scroll :items="Logs" item-height="32" id="logContainer">
          <template v-slot:default="{ item }">
            <v-list-item>
              <v-list-item-content :class="`${item.logType} logMsg`">
                {{ item.timestamp }} : {{ item.logType }} :
                {{ item.location }} : {{ item.message }}
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-virtual-scroll>
      </v-col>
      <v-col class="flex-grow-0 flex-shrink-0">
        <v-row>
          <v-col class="mx-6">
            <v-btn @click="openLogDirectory()">Open Log Directory</v-btn>
          </v-col>
          <v-col class="d-flex mx-6 justify-end">
            <v-btn @click="clearLog()">Clear Log</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" src="./LogPanel.ts"></script>

<style lang="css">

#logContainer {
  background: #222;
  border-radius: 4px;
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.logMsg:hover {
  background: #555;
}
</style>
