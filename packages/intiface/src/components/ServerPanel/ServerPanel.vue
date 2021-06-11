<template>
  <v-container column>
    <v-layout column>
      <v-flex
        v-if="
          config.HasUsableEngineExecutable &&
          config.CurrentDeviceFileVersion >= 48 &&
          config.CurrentEngineVersionNumber >= 36
        "
        shrink
      >
        <v-btn outlined class="my-3" @click="ToggleServer()">{{
          serverRunning ? serverStates[1] : serverStates[0]
        }}</v-btn>
      </v-flex>
      <v-flex v-else>
        <b>New engine executable or device file required.</b>
        <router-link to="settings">
          Go to Settings Panel > Versions and Updates to update.
        </router-link>
      </v-flex>
      <p class="mx-2">
        <b>Status:</b>
        {{
          serverRunning && connector.ClientName !== null
            ? `Connected to ${connector.ClientName}`
            : "Disconnected"
        }}
      </p>
      <v-flex v-if="connector.Devices.size > 0 && serverRunning">
        <b>Devices:</b>
        <ul>
          <li v-for="[id, name] of connector.Devices.entries()" :key="id">
            {{ name }}
          </li>
        </ul>
      </v-flex>
      <v-flex>
        <b>Server Connection Types:</b>
        <v-list subheader dense two-line class="transparent">
          <v-list-item>
            <v-list-item-action>
              <v-checkbox
                v-model="config.UseWebsocketServerInsecure"
                :disabled="serverRunning"
                readonly
              ></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title
                >Websockets (on
                {{
                  config.websocketServerAllInterfaces
                    ? "[All Interfaces]"
                    : "127.0.0.1"
                }}:{{ config.websocketServerInsecurePort }}) -
                <b>Default, always on</b></v-list-item-title
              >
              <v-list-item-subtitle
                >Used for local applications (games, movie sync, etc...), or web
                applications in Chrome/Firefox/Edge,
                etc....</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-flex>
      <v-flex>
        <b>Device Comm Managers:</b>
        <v-list subheader dense two-line class="transparent">
          <v-list-item>
            <v-list-item-action>
              <v-checkbox
                v-model="config.WithBluetoothLE"
                :disabled="serverRunning"
              ></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Bluetooth LE</v-list-item-title>
              <v-list-item-subtitle class="text-wrap">
                Connect to Bluetooth LE toys, including Lovense, WeVibe, Kiiroo,
                etc.
                <b v-if="isWindows()"
                  >This should be off on Windows 7/8, otherwise Intiface will
                  crash.</b
                >
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item v-if="isWindows()">
            <v-list-item-action>
              <v-checkbox
                v-model="config.WithXInput"
                :disabled="serverRunning"
              ></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>XBox Compatible Gamepads</v-list-item-title>
              <v-list-item-subtitle class="text-wrap">
                Connect to XBox Compatible Gamepads <b>(Windows Only)</b>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <v-checkbox
                v-model="config.WithLovenseConnectService"
                :disabled="serverRunning"
              ></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Lovense Connect App</v-list-item-title>
              <v-list-item-subtitle class="text-wrap">
                Connect to Lovense toys using the Lovense Connect Mobile App
                (must be on same LAN)
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <v-checkbox
                v-model="config.WithLovenseHIDDongle"
                :disabled="serverRunning"
              ></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Lovense HID Dongle</v-list-item-title>
              <v-list-item-subtitle class="text-wrap">
                Connect to Lovense toys using the Lovense HID Dongle (white
                circuit board, sold after 2018)
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <v-checkbox
                v-model="config.WithLovenseSerialDongle"
                :disabled="serverRunning"
              ></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Lovense Serial Dongle</v-list-item-title>
              <v-list-item-subtitle class="text-wrap">
                Connect to Lovense toys using the Lovense Serial Dongle (black
                circuit board, sold before 2018)
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <v-checkbox
                v-model="config.WithSerialPort"
                :disabled="serverRunning"
              ></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Serial Port Devices</v-list-item-title>
              <v-list-item-subtitle>
                Connect to Serial Port Devices
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <v-checkbox
                v-model="config.WithHID"
                :disabled="serverRunning"
              ></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>HID Devices</v-list-item-title>
              <v-list-item-subtitle>
                Connect to HID Devices
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts" src="./ServerPanel.ts">
</script>

<style lang="css">
.serverSimpleUi {
  font-size: 14pt;
}

.serverStatus .v-btn {
  font-size: 150%;
  min-width: 0;
}
</style>
