import React, { useState } from 'react';
// import Login from '../components/Login';
// import Register from '../components/Register';

const AuthPage = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      {/* <button onClick={() => setShowLogin(true)}>Login</button> */}
      {/* <button onClick={() => setShowLogin(false)}>Register</button> */}

      {/* {showLogin ? <Login onLogin={(name) => alert(`Welcome ${name}`)} /> : <Register />} */}
    </div>
  );
};

export default AuthPage;
