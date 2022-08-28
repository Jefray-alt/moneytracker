import axios from 'axios';

const token = localStorage.getItem('access_token');

const axiosConfig = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

axiosConfig.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token') as string;

  if (!config.headers) {
    config.headers = {};
  }

  config.headers.Authorization = `Bearer ${token}`;

  return config;
});

axiosConfig.interceptors.response.use(
  (response) => response,
  async (error) => {
    const config = error?.config;
    let refreshedToken = false;

    if (
      error.response.data.message === 'jwt expired' &&
      (!config?.sent || refreshedToken)
    ) {
      config.sent = true;

      try {
        const result = await axiosConfig.get(
          `${import.meta.env.VITE_API_URL}/token/access-token`
        );

        if (result.data?.access_token) {
          localStorage.setItem('access_token', result.data?.access_token);
        }
      } catch (error) {
        const errorData = error as { response: { message: string } };
        if (errorData.response.message === 'jwt expired') {
          await axiosConfig.post(
            `${import.meta.env.VITE_API_URL}/token/refresh-token`
          );
          refreshedToken = true;
        }

        return Promise.reject(error);
      }

      return axiosConfig(config);
    }
    return Promise.reject(error);
  }
);

export default axiosConfig;
