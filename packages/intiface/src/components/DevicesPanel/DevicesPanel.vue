<template>
  <v-container>
    <v-row>
      <h2>Device List</h2>
      <v-col v-if="!connector.IsServerProcessRunning" cols="12">
        <v-btn
          class="ma-2"
          v-if="!connector.IsServerProcessRunning"
          @click="startServerAndScanForDevices()"
          >Start Server and Scan for Devices</v-btn
        >
      </v-col>
      <v-col v-if="connector.IsServerProcessRunning" cols="12">
        <div v-if="connector.ClientName != null && !IsDevicePanelBeingUsed">
          Cannot run device configuration while remote clients are connected.
        </div>
        <v-btn
          class="ma-2"
          v-if="connector.ClientName == null"
          @click="connectAndScanForDevices()"
          >Connect to Server and Scan for Devices</v-btn
        >
        <v-btn
          class="ma-2"
          v-if="IsDevicePanelBeingUsed && !client.isScanning"
          @click="startScanning()"
          >Scan for Devices</v-btn
        >
        <v-btn
          class="ma-2"
          v-if="IsDevicePanelBeingUsed && client.isScanning"
          @click="stopScanning()"
          >Stop Scanning for Devices</v-btn
        >
        <v-btn class="ma-2" v-if="IsDevicePanelBeingUsed" @click="disconnect()"
          >Disconnect From Server</v-btn
        >
      </v-col>
    </v-row>
    <v-row v-if="connector.IsServerProcessRunning && IsDevicePanelBeingUsed">
      <v-col cols="12">
        <v-tabs v-if="this.devices.length > 0">
          <v-tab
            v-for="device in this.devices"
            :key="`device-tabname-${device.Index}`"
          >
            {{ device.Name }}
          </v-tab>
          <v-tab-item
            v-for="device in this.devices"
            :key="`device-tabitem-${device.Index}`"
          >
            <device-component :device="device"> </device-component>
          </v-tab-item>
        </v-tabs>
        <!--
    <div>
      <h2>User Devices</h2>
    </div>
    <div>
      <h2>Add/Remove User Devices</h2>
      Protocol:
      <v-select :items="user_protocols" outlined></v-select>
      <v-btn>Add</v-btn>
    </div>
    -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" src="./DevicesPanel.ts">
</script>
