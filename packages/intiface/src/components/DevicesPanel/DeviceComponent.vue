<template>
  <v-container>
    <v-row v-if="CanVibrate">
      <v-col cols="12">
        <v-card>
          <v-card-title>Vibration Control</v-card-title>
          <v-card-subtitle
            >Vibrators: {{ VibrateCount }} - Vibration Steps:
            {{ VibrateSteps }}</v-card-subtitle
          >
          <v-card v-if="VibrateCount > 1">
            <v-card-subtitle class="py-1"
              >Vibration Speed for All Vibration Elements</v-card-subtitle
            >
            <v-slider
              dense
              hide-details
              class="mx-6 my-0"
              v-model="vibrationValues[VibrateCount]"
              step="1"
              :max="VibrateSteps"
              @change="setVibration(VibrateCount)"
              ticks="always"
              tick-size="4"
            >
              <template v-slot:append>
                {{ vibrationValues[0] }}
              </template>
            </v-slider>
          </v-card>
          <v-card v-for="i in VibrateCount" v-bind:key="`vibration-${i}`">
            <v-subheader class="py-1">Vibrator {{ i }} Speed</v-subheader>
            <v-slider
              dense
              hide-details
              class="mx-6 my-0"
              v-model="vibrationValues[i - 1]"
              :value="vibrationValues[i - 1]"
              step="1"
              :max="VibrateSteps"
              @change="setVibration(i - 1)"
              ticks="always"
              tick-size="4"
            >
              <template v-slot:append>
                {{ vibrationValues[i - 1] }}
              </template>
            </v-slider>
          </v-card>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-if="CanRotate">
      <v-col cols="12">
        <v-card>
          <v-card-title>Rotation Control</v-card-title>
          <v-card-subtitle class="py-1"
            >Rotation Elements: {{ RotateCount }} - Rotation Steps:
            {{ RotateSteps }}</v-card-subtitle
          >
          <v-card v-if="RotateCount > 1">
            <v-card-subtitle  class="py-1"
              >Rotation Speed for All Rotation Elements</v-card-subtitle
            >
            <v-slider
              dense
              hide-details
              class="mx-6 my-0"
              v-model="rotationValues[RotateCount]"
              step="1"
              :min="-RotateSteps"
              :max="RotateSteps"
              @change="setRotation(RotateCount)"
              ticks="always"
              tick-size="4"
            >
              <template v-slot:append>
                {{ rotationValues[RotateCount] }}
              </template>
            </v-slider>
          </v-card>
          <v-card v-for="i in RotateCount" v-bind:key="`rotation-${i}`">
            <v-subheader  class="py-1">Rotation {{ i - 1 }} Speed</v-subheader>
            <v-slider
              dense
              hide-details
              class="mx-6 my-0"
              v-model="rotationValues[i - 1]"
              step="1"
              :min="-RotateSteps"
              :max="RotateSteps"
              value="0"
              @change="setRotation(i - 1)"
              ticks="always"
              tick-size="4"
            >
              <template v-slot:append>
                {{ rotationValues[i - 1] }}
              </template>
            </v-slider>
          </v-card>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-if="CanLinear">
      <v-col cols="12">
        <v-card>
          <v-card-title>Linear/Stroking Control</v-card-title>
          <v-card-subtitle  class="py-1"
            >Linear Elements: {{ LinearCount }} - Linear Steps:
            {{ LinearSteps }}</v-card-subtitle
          >
          <v-card>
            <v-card-subtitle  class="py-1"
              >Linear Oscillation/Stroke Min/Max Position</v-card-subtitle
            >
                <v-range-slider
                  dense
                  hide-details
                  v-model="linearValues[0][0]"
                  hint="Min/Max Stroke Position"
                  persistent-hint
                  :max="LinearSteps"
                  :min="0"
                  hide-details
                  class="align-center mx-6 my-0"
                  ticks="always"
                  tick-size="4"
                >
                  <template v-slot:prepend>
                    {{ linearValues[0][0][0] }}
                  </template>
                  <template v-slot:append>
                    {{ linearValues[0][0][1] }}
                  </template>
                </v-range-slider>
            <v-card-subtitle  class="py-1"
              >Linear Oscillation/Stroke Min/Max Duration (in
              Milliseconds)</v-card-subtitle
            >
                <v-slider
                  dense
                  hide-details
                  class="mx-6 my-0"
                  v-model="linearValues[0][1]"
                  step="10"
                  :min="200"
                  :max="2000"
                  value="1500"
                >
                  <template v-slot:append>
                    {{ linearValues[0][1] }}
                  </template>
                </v-slider>
              <v-switch
                class="ma-6"

                label="Run Oscillations"
                v-model="linearValues[0][2]"
                @change="startStopOscillation(0)"
              ></v-switch>
          </v-card>
        </v-card>
      </v-col>
    </v-row>
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
  </v-container>
</template>

<script lang="ts" src="./DeviceComponent.ts">
</script>
