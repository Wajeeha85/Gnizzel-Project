// import axios from "axios";

// export const BASE_URL = import.meta.env.VITE_API_BASE_URL;
// console.log(BASE_URL);
// axios.defaults.baseURL = BASE_URL;

// const getToken = () => {
//   const token = localStorage.getItem("user_token");
//   return token;
// };
// const setApiHeader = async () => {
//   axios.defaults.headers.common.Authorization = await getToken();
// };
// export const postApiWithoutAuth = async (url, body) => {
//   console.log(url, "url");
//   console.log(body, "body");
//   try {
//     const response = await axios.post(url, body);
//     const headers = response.headers;
//     return {
//       data: response.data,
//       success: true,
//       headers: headers,
//     };
//   } catch (error) {
//     return {
//       success: false,
//       message: error.response,
//     };
//   }
// };

// export const postAPIWithAuth = async (url, body) => {
//   try {
//     await setApiHeader();
//     let res = {};
//     res = await axios.post(url, body);
//     return { data: res.data, status: res.status, success: true };
//   } catch (err) {
//     console.log(err, "err");
//     return { data: err.response.data, success: false };
//   }
// };

// export const getApiWithAuth = async (url) => {
//   try {
//     await setApiHeader();

//     const res = await axios.get(url);

//     return { data: res?.data, status: res.status, success: true };
//   } catch (err) {
//     return { data: err?.response?.data, success: false };
//   }
// };

// export const post2ApiWithoutAuth = async (url, data) => {
//   try {
//     const response = await fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });

//     // Get response headers
// const headers = response.headers;

//     // Parse the response JSON
//     const responseData = await response.json();

//     return { success: response.ok, data: responseData, headers: headers };
//   } catch (error) {
//     return { success: false, error: error.message };
//   }
// };
// const handleSignIn = async () => {
//   const response = await postApiWithoutAuth(ENDPOINTS.SIGN_IN, {
//     email: "muneeba.dilawaze+6@gmail.com",
//     password: "Test@123",
//     type: 0,
//   });

//   if (response.success) {
//     const authHeader = response.headers.get("Authorization");

//     localStorage.setItem("user_token", authHeader);

//     console.log("Response data:", response.data);
//   } else {
//     console.log("Error:", response.error);
//   }
// };
