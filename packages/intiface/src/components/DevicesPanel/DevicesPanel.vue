<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h2>Device List</h2>
      </v-col>
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
      </v-col>
    </v-row>
    <v-row v-if="!connector.IsServerProcessRunning">
      <v-col>
        <h2>User Devices</h2>
        <v-list v-for="[protocol, configs] of device_configs" v-bind:key="protocol">
          <v-list-item v-for="config of configs" v-bind:key="config.port">
            <v-row>
              <v-col cols="10">{{ protocol }}: {{ config.port }}</v-col>
              <v-col class="text-end" cols="1" @click="removeUserDeviceConfig(protocol, config)"><v-icon>cancel</v-icon></v-col>
            </v-row>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col>
        <h2>Add/Remove Serial Port Devices</h2>
        <p>All serial ports assumed 8/N/1</p>
        <v-select v-model="protocol_name" label="Protocol" :items="user_protocols" outlined></v-select>
        <v-select v-model="serial_port" label="Port" :items="serial_port_names" outlined></v-select>
        <v-select v-model="baud_rate" label="Baud Rate" select="115200" :items="baud_rates" outlined></v-select>
        <v-btn @click="addUserDeviceConfig">Add</v-btn><br/>
      </v-col>
    </v-row>
    <v-row v-if="connector.IsServerProcessRunning">
      <v-col>
        Cannot configure user devices while server is running.
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" src="./DevicesPanel.ts">
</script>
