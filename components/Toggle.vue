<template>
  <div
    :class="['toggle-switch', { 'toggle-switch--checked': isChecked }]"
    @click="toggle"
  >
    <div class="toggle-switch__slider"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isChecked = ref(false);

const toggle = () => {
  isChecked.value = !isChecked.value;
};
</script>

<style scoped>
.toggle-switch {
  width: 50px;
  height: 25px;
  background-color: #ccc;
  border-radius: 25px;
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s;
}

.toggle-switch--checked {
  background-color: #34c759;
}

.toggle-switch__slider {
  width: 23px;
  height: 23px;
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  top: 1px;
  left: 1px;
  transition: transform 0.3s;
}

.toggle-switch--checked .toggle-switch__slider {
  transform: translateX(25px);
}
</style>
