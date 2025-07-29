// import express from 'express';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// import User from '../models/userModel.js';

// const router = express.Router();
// const SECRET = 'your_jwt_secret_key';

// // ✅ Admin credentials (hashed for safety)
// const ADMIN = { username: 'admin', password: bcrypt.hashSync('1234', 10) };

// // ✅ Admin Login
// router.post('/admin-login', (req, res) => {
//   const { username, password } = req.body;
//   if (username === ADMIN.username && bcrypt.compareSync(password, ADMIN.password)) {
//     const token = jwt.sign({ username, role: 'admin' }, SECRET, { expiresIn: '1h' });
//     return res.json({ token });
//   }
//   res.status(401).json({ error: 'Invalid admin credentials' });
// });

// // ✅ Register New User
// router.post('/register', async (req, res) => {
//   const { name, email, password } = req.body;
//   try {
//     const existingUser = await User.findOne({ email });
//     if (existingUser) return res.status(400).json({ message: 'User already exists' });

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = new User({ name, email, password: hashedPassword });

//     await newUser.save();
//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (err) {
//     res.status(500).json({ error: 'Registration failed' });
//   }
// });

// // ✅ Login User
// router.post('/login', async (req, res) => {
//   console.log('Login request body:', req.body);
//   const { email, password } = req.body;
//   try {
//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ error: 'User not found' });

//     const validPassword = await bcrypt.compare(password, user.password);
//     if (!validPassword) return res.status(400).json({ error: 'Invalid password' });

//     const token = jwt.sign({ _id: user._id }, SECRET, { expiresIn: '1h' });
//     res.json({ token });
//   } catch (err) {
//     res.status(500).json({ error: 'Login failed' });
//   }
// });

// export default router;


// import express from 'express';
// import { register, login } from '../controllers/authController.js';
// import { hashSync, compareSync } from 'bcryptjs';
// import jwt from 'jsonwebtoken';

// const router = express.Router();

// // Dummy Admin Credentials (for demo)
// const ADMIN = {
//   username: 'admin',
//   password: hashSync('123456', 10),
// };

// // Admin Login Route
// router.post('/admin-login', (req, res) => {
//   const { username, password } = req.body;

//   if (!username || !password)
//     return res.status(400).json({ message: 'Username and password are required' });

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

// // User Routes
// router.post('/register', register);
// router.post('/login', login);

// export default router;

