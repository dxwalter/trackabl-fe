<template>
  <div class="tabs">
    <div class="flex space-x-2">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        @click="selectTab(index)"
        :class="[
          'py-3 px-4 rounded-xl lg:w-[124px] border-grey-200 border text-grey-500',
          {
            ' bg-primary': selectedTab === index,
            'text-white': selectedTab === index,
            'text-gray-500': selectedTab !== index,
          },
        ]"
      >
        {{ tab.name }}
      </button>
    </div>
  </div>
</template>

<script>
import { ref, defineComponent } from 'vue';

export default defineComponent({
  props: {
    tabs: {
      type: Array,
      required: true,
    },
  },
  setup(props, { emit }) {
    const selectedTab = ref(0);

    const selectTab = (index) => {
      selectedTab.value = index;
      emit('update:selectedTab', props.tabs[index].slot);
    };

    return {
      selectedTab,
      selectTab,
    };
  },
});
</script>

<style scoped>
/* Custom styles if needed */
</style>
