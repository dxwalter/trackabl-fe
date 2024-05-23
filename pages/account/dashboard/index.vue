<template>
  <div>
    <div v-for="x in 100">{{ x }}</div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "account",
});
</script>
