import axios from "axios";

export const BASE_URL = import.meta.env.VITE_API_BASE_URL;
console.log(BASE_URL);
axios.defaults.baseURL = BASE_URL;

const getToken = () => {
  const userToken = localStorage.getItem("user_token");
  return userToken;
};
const setApiHeader = async () => {
  axios.defaults.headers.common.Authorization = await getToken();
};

export const postApiWithoutAuth = async (url, body) => {
  console.log(url, "url");
  console.log(body, "body");
  try {
    const response = await axios.post(url, body);
    const headers = response.headers;
    return {
      data: response.data,
      success: true,
      headers: headers,
    };
  } catch (error) {
    return {
      success: false,
      message: error.response,
    };
  }
};

export const getApiWithAuth = async (url) => {
  try {
    await setApiHeader();
    const response = await axios.get(url);
    return {
      data: response.data,
      success: true,
    };
  } catch (error) {
    return {
      success: false,
      message: error.response,
    };
  }
};
