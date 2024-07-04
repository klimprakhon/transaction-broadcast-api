const ACCESS_TOKEN = "ACCESS_TOKEN";

export const setAccessToken = (token) =>
  localStorage.setItem(ACCESS_TOKEN, token);

export const getAccessToken = () => {
  const token = localStorage.getItem(ACCESS_TOKEN);
  return token;
};

export const removeAccessToken = () => localStorage.removeItem(ACCESS_TOKEN);
