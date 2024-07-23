// composables/useApi.ts
import { useRuntimeConfig } from '#imports';
import { ref } from 'vue';
import { LOGIN } from '~/services/endpoints';

const serializeParams = (params) => {
  return Object.keys(params)
    .map((key) => {
      // Handle specific decoding here if needed
      if (key === 'endDate') {
        return `${encodeURIComponent(key)}=${params[key]}`; // No encoding for the value
      } else {
        return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`;
      }
    })
    .join('&');
};

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

  // Serialize params if available
  if (options.params) {
    const serializedParams = serializeParams(options.params);
    url += `?${serializedParams}`;
  }

  try {
    const response: any = await $fetch(`${apiBaseUrl}${url}`, {
      ...options,
      params: undefined, // Remove params from options to prevent double appending
    });

    data.value = response;
  } catch (e) {
    error.value = e;
  }

  return { data, error };

  // console.log(error);

  return { data, error };
};
