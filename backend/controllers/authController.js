// 📁 backend/controllers/authController.js
// import jwt from 'jsonwebtoken';
// import bcrypt from 'bcryptjs'; // bcryptjs supports sync compare
// import User from '../models/userModel.js';

// // ✅ Token Generator
// const generateToken = (user) => {
//   return jwt.sign({ id: user._id, email: user.email }, 'your_jwt_secret_key', { expiresIn: '1h' });
//   // In production: use process.env.JWT_SECRET
// };

// // ✅ User Registration
// export const register = async (req, res) => {
//   const { name, email, password } = req.body;

//   try {
//     const existingUser = await User.findOne({ email });
//     if (existingUser) return res.status(400).json({ message: 'User already exists' });

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = await User.create({ name, email, password: hashedPassword });

//     const token = generateToken(user);
//     res.status(201).json({ token, name: user.name, email: user.email });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// ✅ User Login (Updated to use compareSync)
// export const login = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(404).json({ error: 'User not found' });
//     }

//     // Use compareSync for reliable results
//     const isPasswordValid = bcrypt.compareSync(password, user.password);
//     if (!isPasswordValid) {
//       return res.status(400).json({ error: 'Invalid password' });
//     }

//     const token = generateToken(user);
//     res.status(200).json({
//       token,
//       name: user.name,
//       email: user.email,
//     });
//   } catch (err) {
//     res.status(500).json({ error: 'Server error' });
//   }
// };

//grooke code
// export const login = async (req, res) => {
//   const { email, password } = req.body;
//   console.log("Login attempt:", { email, password });

//   try {
//     const user = await User.findOne({ email });
//     if (!user) {
//       console.log("User not found:", email);
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     console.log("Password match:", isMatch, "Stored hash:", user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid password' });
//     }

//     const token = generateToken(user);
//     res.status(200).json({ token, name: user.name, email: user.email });
//   } catch (err) {
//     console.error("Login Error:", err.message);
//     res.status(500).json({ error: err.message });
//   }
// };

// 📁 backend/controllers/authController.js
// import jwt from 'jsonwebtoken';
// import bcrypt from 'bcryptjs';
// import User from '../models/userModel.js';

// // Token Generator
// const generateToken = (user) => {
//   return jwt.sign(
//     { id: user._id, email: user.email },
//     process.env.JWT_SECRET || 'your_jwt_secret_key',
//     { expiresIn: '1h' }
//   );
// };

// // Register
// export const register = async (req, res) => {
//   const { name, email, password } = req.body;

//   if (!name || !email || !password) {
//     return res.status(400).json({ message: 'All fields are required' });
//   }

//   try {
//     const existingUser = await User.findOne({ email });
//     if (existingUser) return res.status(409).json({ message: 'User already exists' });

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = await User.create({ name, email, password: hashedPassword });

//     const token = generateToken(user);
//     res.status(201).json({ token, name: user.name, email: user.email });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Login
// export const login = async (req, res) => {
//   const { email, password } = req.body;

//   if (!email || !password)
//     return res.status(400).json({ message: 'Email and password are required' });

//   try {
//     const user = await User.findOne({ email });
//     if (!user) return res.status(401).json({ message: 'Invalid credentials' });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

//     const token = generateToken(user);
//     res.status(200).json({ token, name: user.name, email: user.email });
//   } catch (err) {
//     res.status(500).json({ error: 'Server error' });
//   }
// };

// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// import User from '../models/User.js'; // Make sure this path is correct

// // ✅ User Registration
// export const register = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = new User({ email, password: hashedPassword });
//     await newUser.save();

//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (err) {
//     res.status(500).json({ message: 'Server error during registration' });
//   }
// };

// // ✅ User Login
// export const loginUser = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });
//     if (!user) return res.status(401).json({ message: 'Invalid email' });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(401).json({ message: 'Invalid password' });

//     const token = jwt.sign({ userId: user._id, role: 'user' }, process.env.JWT_SECRET || 'default_secret', {
//       expiresIn: '1h',
//     });

//     res.status(200).json({ token, user });
//   } catch (err) {
//     res.status(500).json({ message: 'Server error during login' });
//   }
// };

// // ✅ Admin Login (Hardcoded)
// export const adminLogin = async (req, res) => {
//   const { email, password } = req.body;

//   const adminEmail = "admin@example.com";
//   const adminPassword = "admin123";

//   if (!email || !password) {
//     return res.status(400).json({ message: 'Email and password are required' });
//   }

//   if (email === adminEmail && password === adminPassword) {
//     const token = jwt.sign({ role: 'admin' }, process.env.JWT_SECRET || 'default_secret', {
//       expiresIn: '1h',
//     });

//     return res.status(200).json({
//       token,
//       role: 'admin',
//       message: 'Admin login successful',
//     });
//   }

//   return res.status(401).json({ message: 'Invalid Admin Credentials' });
// };

import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';

// Register user
export const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    const newUser = new User({ name, email, password });
    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET || 'default_secret', {
      expiresIn: '1h',
    });

    res.status(201).json({
      success: true,
      token,
      user: { id: newUser._id, name: newUser.name, email: newUser.email },
    });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error });
  }
};

// Login user
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password)))
      return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'default_secret', {
      expiresIn: '1h',
    });

    res.status(200).json({
      success: true,
      token,
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error });
  }
};
