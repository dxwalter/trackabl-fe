// composables/useApi.ts
import { useRuntimeConfig } from '#imports';

// import { useFetch } from '@nuxt/http';
import { ref } from 'vue';

export const useMyFetch = async (url: string, options: any = {}) => {
  const config = useRuntimeConfig();
  const apiBaseUrl = config.public.API_BASE_URL;
  const token = 'kdkd';

  if (!options.headers) {
    options.headers = {};
  }

  if (token) {
    options.headers['Authorization'] = `Bearer ${token}`;
    // console.log(`$apiBaseUrl}`);
  }

  const { data, error } = await useFetch(`${apiBaseUrl}${url}`, {
    ...options,
  });

  return { data, error };
};
