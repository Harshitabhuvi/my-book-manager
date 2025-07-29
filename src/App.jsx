// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';
// import ContactPage from './pages/ContactPage';
// import Header from './components/Header';
// src/App.jsx
// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BookManager from './components/BookManager';
import MessageFetcher from './components/MessageFetcher';
import './App.css'; // Ensure this file exists

function App() {
  return (
    <Router>
      <div className="page-wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/books" element={<BookManager />} />
            <Route path="/messages" element={<MessageFetcher />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

