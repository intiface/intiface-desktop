<template>
  <div>
    <v-dialog
      v-model="showDialog"
      width="500"
      persistent
    >
      <template v-slot:activator="{ on }">
        <v-btn
          :disabled="connector.IsServerProcessRunning"
          color="purple"
          dark
          v-on="on"
        >
          {{ buttonText }}
        </v-btn>
      </template>

      <v-card>
        <v-card-title
          class="headline darkgrey lighten-2"
          dark
          primary-title
        >
          {{ dialogVerb }} {{ dialogName }}
        </v-card-title>

        <v-card-text>
          <v-progress-linear v-model="installationProgress"></v-progress-linear>
          <br/>
          <p v-if="isApplicationUpdate">If application update stalls, updates may also be downloaded and installed from <a href="https://intiface.com/desktop">the Intiface Desktop website</a></p>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            @click="isDownloading ? CancelUpdate() : CloseDialog()"
          >
            {{ isDownloading ? "Cancel" : "Continue" }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts" src="./UpdateDialog.ts">
</script>
