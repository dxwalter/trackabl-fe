// composables/useApi.ts
import { useRuntimeConfig } from '#imports';
import { ref } from 'vue';

export const useMyFetchNoToken = async (url: string, options: any = {}) => {
  const data = ref();
  const error = ref();
  const config = useRuntimeConfig();
  const apiBaseUrl = config.public.API_BASE_URL;

  try {
    const response: any = await $fetch(`${apiBaseUrl}${url}`, {
      ...options,
    });

    data.value = response;
  } catch (e) {
    error.value = e;
  }

  // console.log(error);

  return { data, error };
};
