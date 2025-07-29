// const API = 'http://localhost:5000/api/users';

// export const registerUser = async (userData) => {
//   const res = await fetch(`${API}/register`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(userData)
//   });
//   return res.json();
// };

// export const loginUser = async (userData) => {
//   const res = await fetch(`${API}/login`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(userData)
//   });
//   return res.json();
// };

// src/api/bookService.js
// import axios from 'axios';

// const API = axios.create({
//   baseURL: 'http://localhost:5000/api/books',
// });

// export const getBooks = () => API.get('/');
// export const getBook = (id) => API.get(`/${id}`);
// export const createBook = (book) => API.post('/', book);
// export const updateBook = (id, book) => API.put(`/${id}`, book);
// export const deleteBook = (id) => API.delete(`/${id}`);

const API_URL = '/api/books';

export const getBooks = () => fetch(API_URL).then(res => res.json());
export const createBook = (book) =>
  fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(book),
  });

export const updateBook = (id, book) =>
  fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(book),
  });

export const deleteBook = (id) =>
  fetch(`${API_URL}/${id}`, { method: 'DELETE' });
