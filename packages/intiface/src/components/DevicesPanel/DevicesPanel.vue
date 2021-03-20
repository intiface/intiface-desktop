<template>
  <v-container>
    <div>
      <h2>Device List</h2>
      <div v-if="!connector.IsServerProcessRunning">
        <v-btn>Start Server and Find Devices</v-btn>
      </div>
      <div v-if="connector.IsServerProcessRunning">
        <div v-if="connector.ClientName != null">
          Cannot run device configuration while remote clients are connected.
        </div>
        <div v-if="connector.ClientName == null">
          <v-btn @click="scanForDevices()">Find Devices</v-btn>
        </div>
      </div>
    </div>
    <ul>
      <li v-for="device in this.devices" :key="device.Index">
        {{ device.Name }}
      </li>
    </ul>
    <div>
      <h2>User Devices</h2>
    </div>
    <div>
      <h2>Add/Remove User Devices</h2>
      Protocol:
      <v-select :items="user_protocols" outlined></v-select>
      <v-btn>Add</v-btn>
    </div>
  </v-container>
</template>

<script lang="ts" src="./DevicesPanel.ts">
</script>
