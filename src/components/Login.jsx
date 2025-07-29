// import { useState } from 'react';
// import { loginUser } from '../api/authService'; // Ensure this is implemented properly

// const Login = ({ onLogin }) => {
//   const [formData, setFormData] = useState({ email: '', password: '' });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const data = await loginUser(formData); // This should POST to the server
//       if (data.token) {
//         localStorage.setItem('token', data.token);
//         onLogin(data.name); // optional callback
//       } else {
//         alert(data.message || 'Login failed');
//       }
//     } catch (err) {
//       console.error("Login error:", err);
//       alert("Login failed. Please try again.");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Login</h2>
//       <input
//         type="email"
//         placeholder="Email"
//         value={formData.email}
//         onChange={e => setFormData({ ...formData, email: e.target.value })}
//         required
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={formData.password}
//         onChange={e => setFormData({ ...formData, password: e.target.value })}
//         required
//       />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default Login;

// grooke code
// import { useState } from 'react';
// import { loginUser } from '../api/authService';

// const Login = ({ onLogin }) => {
//   const [formData, setFormData] = useState({ email: '', password: '' });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const data = await loginUser(formData);
//       if (data.token) {
//         localStorage.setItem('token', data.token);
//         onLogin(data.name);
//       } else {
//         alert(data.message || 'Login failed');
//       }
//     } catch (err) {
//       console.error("Login error:", err.response?.data || err.message);
//       alert("Login failed. Please try again.");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Login</h2>
//       <input
//         type="email"
//         placeholder="Email"
//         value={formData.email}
//         onChange={e => setFormData({ ...formData, email: e.target.value })}
//         required
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={formData.password}
//         onChange={e => setFormData({ ...formData, password: e.target.value })}
//         required
//       />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default Login;