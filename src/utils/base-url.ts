export const getBaseUrl = (url: string): string => {
  return `${import.meta.env?.VITE_BASE_API_URL}${url}` || url;
};
