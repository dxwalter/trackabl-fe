<template>
  <ClientOnly>
    <div>
      <AccountModal
        @close-modal="CloseModal()"
        :setup="{
          modalActive: true,
          modalTitle: modalTitle,
        }"
      >
        <!-- search -->
        <div class="mb-6">
          <input
            type="text"
            class="w-full px-[14px] py-3 text-navyBlue-900 rounded-xl border border-grey-300 blue-active-form-field search-input"
            placeholder="Search using category name"
            v-model="categorySearchKeyword"
            v-if="!openSubcategoryList"
          />
        </div>
        <!-- modal content -->
        <div class="manage-modal-container-height">
          <CategoryList
            :setup="{
              categoryList,
            }"
            @set-selected-category="setCategoryId"
            :class="{
              hidden: openSubcategoryList,
              'animate-left-to-right': !openSubcategoryList && animateCategory,
            }"
            v-if="!openSubcategoryList"
          />
          <SubcategoryList
            :setup="{
              categoryId: selectedCategoryId,
            }"
            :class="{
              hidden: !openSubcategoryList,
              'animate-right-to-left':
                openSubcategoryList && animateSubCategory,
            }"
            v-if="openSubcategoryList"
            @set-selected-sub-category="setSubcategoryId"
            @change-category="changeCategory"
          />
        </div>
        <div class="mt-4">
          <button
            class="flex justify-center align-center p-4 border-dashed border border-grey-300 rounded-xl hover:bg-grey-200 cursor-pointer w-full"
            @click="showSuggestionPopover"
          >
            <div class="w-[16px]">
              <div><img src="~/assets/img/plus-grey.svg" class="w-full" /></div>
            </div>
          </button>
        </div>
      </AccountModal>
    </div>
  </ClientOnly>
</template>

<script lang="ts" setup>
const emit = defineEmits(['setSelectedIds', 'openSuggestion']);

import { useCategoryStore } from '@/stores/category';
const { list } = useCategoryStore();
const categoryStore = useCategoryStore();
// const list = ref([]);

// animation trigger
const animateCategory = ref(false);
const animateSubCategory = ref(false);

const categorySearchKeyword = ref('');
const categoryList = computed(() => {
  return categorySearchKeyword.value.trim().length === 0
    ? categoryStore.categoryList
    : categoryStore.categoryList.filter((category) =>
        category.name
          .toLowerCase()
          .includes(categorySearchKeyword.value.toLowerCase())
      );
});

const modalTitle = computed(() => {
  return !openSubcategoryList.value
    ? 'Select a Category'
    : 'Select a Subcategory';
});

const CloseModal = () => {
  openSubcategoryList.value = false;
  emit('setSelectedIds', {
    cateoryId: selectedCategoryId.value,
    subcategoryId: selectedSubcategoryId.value,
  });
};

const selectedCategoryId = ref<null | number>(null);
const openSubcategoryList = ref<boolean>(false);
const setCategoryId = (id: number) => {
  selectedCategoryId.value = id;
  openSubcategoryList.value = true;
  animateSubCategory.value = true;
};

const selectedSubcategoryId = ref<null | number>(null);
const setSubcategoryId = (id: number) => {
  selectedSubcategoryId.value = id;
  CloseModal();
};

const changeCategory = () => {
  resetModalData();
  animateCategory.value = true;
};

const resetModalData = () => {
  openSubcategoryList.value = false;
  selectedCategoryId.value = null;
  categorySearchKeyword.value = '';
};

const showSuggestionPopover = () => {
  if (openSubcategoryList.value === false) {
    emit('openSuggestion', {
      type: 'category',
    });
  } else {
    emit('openSuggestion', {
      type: 'subcategory',
      categoryId: selectedCategoryId.value,
    });
  }
};

const fetchCategoryList = async () => {
  const { data, error } = await useMyFetch('/category', {
    method: 'GET',
  });

  // list.value = data.value.data;
  categoryStore.SET_LIST(data.value.data);

  categoryStore.categoryList;

  // console.log(data.value.data.expense);
};

onMounted(() => {
  resetModalData();
  fetchCategoryList();
});
</script>

<style scoped>
.manage-modal-container-height {
  max-height: calc(100vh - 400px);
  overflow-y: scroll;
  /* padding-right: 10px; */
  overflow-x: hidden;
}
@media (min-width: 768px) {
  .manage-modal-container-height {
    max-height: calc(100vh - 300px);
  }
}

.animate-left-to-right {
  animation: slide-left-to-right 0.5s ease-in-out; /* Replace with your desired class name */
}

@keyframes slide-left-to-right {
  from {
    transform: translateX(-100%); /* Move element 100% off-screen to the left */
  }
  to {
    transform: translateX(0); /* Move element back to its original position */
  }
}

.animate-right-to-left {
  animation: slide-right-to-left 0.5s ease-in-out; /* Replace with your desired class name */
}

@keyframes slide-right-to-left {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
