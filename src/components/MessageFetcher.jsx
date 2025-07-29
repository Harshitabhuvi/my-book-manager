import React, { useEffect, useState } from 'react';
import './MessageFetcher.css';
import axios from 'axios';

const MessageFetcher = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/message')
      .then(res => setMessage(res.data.message))
      .catch(err => console.error('Error fetching message:', err));
  }, []);

  return (
    <div className="alert alert-success mt-4">
      <h5>Message from Backend:</h5>
      <p>{message}</p>
    </div>
  );
};

export default MessageFetcher;

