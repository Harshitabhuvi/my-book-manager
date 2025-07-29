// import React, { useState } from 'react';
// import axios from 'axios';

// const Register = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/api/users/register', formData);
//       console.log('Registration Success:', res.data);
//       alert('User registered successfully!');
//     } catch (err) {
//       console.error('Registration Failed:', err.response?.data || err.message);
//       alert('Registration failed!');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Register</h2>
//       <input
//         type="text"
//         name="name"
//         placeholder="Name"
//         onChange={handleChange}
//         value={formData.name}
//       />
//       <input
//         type="email"
//         name="email"
//         placeholder="Email"
//         onChange={handleChange}
//         value={formData.email}
//       />
//       <input
//         type="password"
//         name="password"
//         placeholder="Password"
//         onChange={handleChange}
//         value={formData.password}
//       />
//       <button type="submit">Register</button>
//     </form>
//   );
// };

// export default Register;
