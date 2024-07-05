// import * as ENDPOINTS from './endpoints';
// import { useRuntimeConfig } from '#imports';

// const config = useRuntimeConfig();
// const apiBaseUrl = config.public.API_BASE_URL;

// export default class AuthService {
//   // Login user
//   static async signin({ email, password }) {
//     try {
//       const { data, error, pending } = await useFetch(
//         `${apiBaseUrl}/api/todos`
//       );

//       return { data, error, pending };
//     } catch (err) {
//       const statuscode = err.response.data.statusCode;
//       if (statuscode === 412 || statuscode === 400) {
//         return err;
//       }

//       resolveRequestError(err);
//     }
//   }
// }
