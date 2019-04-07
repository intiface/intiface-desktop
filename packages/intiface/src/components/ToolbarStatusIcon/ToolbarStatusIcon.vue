<template>
  <v-flex px-2>
    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-icon @click="navigateTo(link)" v-on="on">{{ icon }}</v-icon>
      </template>
      <span>
        {{ tooltip }}
      </span>
    </v-tooltip>
  </v-flex>
</template>

<script lang="ts" src="./ToolbarStatusIcon.ts">
</script>
