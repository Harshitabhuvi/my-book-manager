// import { Router } from 'express';
// import { register, login } from '../controllers/authController.js';
// import { hashSync, compareSync } from 'bcryptjs';
// import jwt from 'jsonwebtoken';

// const router = Router();
// const SECRET = 'your_jwt_secret_key';

// const ADMIN = { username: 'admin', password: hashSync('1234', 10) };

// router.post('/admin-login', (req, res) => {
//   const { username, password } = req.body;
//   if (username === ADMIN.username && compareSync(password, ADMIN.password)) {
//     const token = jwt.sign({ username, role: 'admin' }, SECRET, { expiresIn: '1h' });
//     res.json({ token });
//   } else {
//     res.status(401).json({ error: 'Invalid admin credentials' });
//   }
// });

// router.post('/register', register); // ✅ use backend controller
// router.post('/login', login);       // ✅ use backend controller

// export default router;

//grooke code
// import { Router } from 'express';
// import { register, login } from '../controllers/authController.js';
// import { hashSync, compareSync } from 'bcryptjs';
// import jwt from 'jsonwebtoken';

// const router = Router();

// const ADMIN = { username: 'admin', password: hashSync('123456', 10) };

// // Admin login
// router.post('/admin-login', (req, res) => {
//   const { username, password } = req.body;
//   if (username === ADMIN.username && compareSync(password, ADMIN.password)) {
//     const token = jwt.sign({ username, role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '1h' });
//     res.json({ token });
//   } else {
//     res.status(401).json({ error: 'Invalid admin credentials' });
//   }
//    try {
//     // Dummy user check
//     if (email === "something@example.com" && password === "123456") {
//       const token = jwt.sign({ email }, "yourSecretKey", { expiresIn: "1h" });

//       return res.status(200).json({
//         success: true,
//         token,
//         message: "Login successful"
//       });
//     } else {
//       return res.status(401).json({
//         success: false,
//         message: "Invalid credentials"
//       });
//     }
//   } catch (err) {
//     return res.status(500).json({ message: "Server error" });
//   }
// });


// // User register & login
// router.post('/register', register);
// router.post('/login', login);

// export default router;

// import express from 'express';
// import { register, login } from '../controllers/authController.js';
// import { hashSync, compareSync } from 'bcryptjs';
// import jwt from 'jsonwebtoken';

// const router = express.Router();

// // Dummy Admin (for demonstration)
// const ADMIN = {
//   username: 'admin',
//   password: hashSync('123456', 10), // hashed password
// };

// // ✅ Admin Login Route
// router.post('/admin-login', (req, res) => {
//   const { username, password } = req.body;

//   if (!username || !password) {
//     return res.status(400).json({ message: 'Username and password are required' });
//   }

//   if (username === ADMIN.username && compareSync(password, ADMIN.password)) {
//     const token = jwt.sign({ username, role: 'admin' }, process.env.JWT_SECRET || 'default_secret', {
//       expiresIn: '1h',
//     });

//     return res.status(200).json({
//       success: true,
//       token,
//       role: 'admin',
//       message: 'Admin login successful',
//     });
//   }

//   return res.status(401).json({ success: false, message: 'Invalid admin credentials' });
// });

// // ✅ User Registration and Login
// router.post('/register', register);
// router.post('/login', login);

// export default router;
