// composables/useApi.ts
import { useRuntimeConfig } from '#imports';
import { ref } from 'vue';
import { LOGIN } from '~/services/endpoints';

export const useMyFetch = async (url: string, options: any = {}) => {
  const data = ref();
  const error = ref();
  const config = useRuntimeConfig();
  const apiBaseUrl = config.public.API_BASE_URL;
  const token = JSON.parse(localStorage?.getItem('user'))?.token
    ? JSON.parse(localStorage?.getItem('user'))?.token
    : localStorage.getItem('token');

  if (!options.headers) {
    options.headers = {};
    console.log(token);
  }

  if (token) {
    options.headers['Authorization'] = `Bearer ${token}`;
    // console.log(`$apiBaseUrl}`);
  }

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
