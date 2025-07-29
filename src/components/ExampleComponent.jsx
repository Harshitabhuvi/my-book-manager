// ExampleComponent.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ExampleComponent = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/hello') // Make sure the backend is running
      .then(res => setMessage(res.data.message))
      .catch(err => console.error(err));
  }, []);

  return <div>Message from backend: {message}</div>;
};

export default ExampleComponent;
