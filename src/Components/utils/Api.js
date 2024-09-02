import axios from "axios";

export const BASE_URL = import.meta.env.VITE_API_BASE_URL;
console.log(BASE_URL);
const baseInstance = axios.create({
  baseURL: BASE_URL,
});

export const postApiWithoutAuth = async (url, body) => {
  console.log(url, "url");
  console.log(body, "body");
  try {
    const response = await baseInstance.post(url, body);
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
