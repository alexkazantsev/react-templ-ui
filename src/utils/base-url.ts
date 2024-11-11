import axios from 'axios';

export const getBaseUrl = (url: string): string => {
  return `${import.meta.env?.VITE_BASE_API_URL}${url}` || url;
};

export const AxiosClient = axios.create({
  baseURL: import.meta.env?.VITE_BASE_API_URL,
});
