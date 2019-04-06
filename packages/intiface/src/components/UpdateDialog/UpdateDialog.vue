<template>
  <div>
    <v-dialog
      v-model="showDialog"
      width="500"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          color="purple"
          dark
          v-on="on"
        >
          {{ dialogVerb }} {{ dialogName }}
        </v-btn>
      </template>

      <v-card>
        <v-card-title
          class="headline darkgrey lighten-2"
          dark
          primary-title
        >
          Installing {{ dialogName }}
        </v-card-title>

        <v-card-text>
          {{ dialogVerb }} {{ dialogName }}
          <v-progress-linear v-model="installationProgress"></v-progress-linear>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            :disabled="this.isDownloading"
            @click="showDialog = false"
          >
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts" src="./UpdateDialog.ts">
</script>
