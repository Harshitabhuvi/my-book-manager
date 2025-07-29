// src/api/authService.js
// const API_URL = "http://localhost:8080/api/auth"; // or your backend port

// export const registerUser = async (userData) => {
//   const res = await fetch(`${API_URL}/register`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(userData),
//   });
//   if (!res.ok) throw new Error("Registration failed");
//   return await res.json();
// };

// export const loginUser = async (userData) => {
//   const res = await fetch(`${API_URL}/login`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(userData),
//   });
//   if (!res.ok) throw new Error("Login failed");
//   return await res.json();
// };

//grooke code
// src/api/authService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users';

export const loginUser = async (formData) => {
  const response = await axios.post(`${API_URL}/login`, formData);
  return response.data;
};

export const registerUser = async (formData) => {
  const response = await axios.post(`${API_URL}/register`, formData);
  return response.data;
};