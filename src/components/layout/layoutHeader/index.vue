<template>
  <component :is="[template1,template2,template3][0]"></component>
</template>

<script setup>
import template1 from "./template1.vue";
import template2 from "./template2.vue";
import template3 from "./template3.vue";

</script>

<style scoped>

</style>
