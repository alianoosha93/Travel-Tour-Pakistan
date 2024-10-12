// ;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   // Handle login form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Store the entered username and password in localStorage
//     const user = { username: username.trim(), password: password.trim() };
//     localStorage.setItem('registeredUser', JSON.stringify(user));

//     // Redirect to the Register page
//     navigate('/register');
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-80">
//         <h2 className="text-2xl mb-4">Login</h2>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           className="border p-2 mb-4 w-full"
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="border p-2 mb-4 w-full"
//           required
//         />
//         <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import '../assets/styles.css'; 

import LoginVid from '../../assets/Vedio/Login.mp4'; // Import the background video

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Handle login form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if fields are empty, if so, show a toast notification
    if (!username.trim() || !password.trim()) {
      toast.error('Please fill in all the fields!', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
      return;
    }

    // Store the entered username and password in localStorage
    const user = { username: username.trim(), password: password.trim() };
    localStorage.setItem('registeredUser', JSON.stringify(user));

    // Redirect to the Register page
    navigate('/register');
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
        style={{ zIndex: -1 }}
      >
        <source src={LoginVid} type="video/mp4" />
      </video>

      {/* Login Form Container */}
      <div className="backdrop-blur-lg bg-white/70 p-8 rounded-lg shadow-lg w-96 relative z-10">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">Welcome Back!</h2>
        <p className="text-center text-gray-600 mb-6">
          Log in to your account to explore amazing travel destinations.
        </p>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 rounded-lg shadow-md transform hover:scale-105 transition duration-300 ease-in-out"
          >
            Login
          </button>
        </form>

        {/* Redirect to Register */}
        <p className="text-center text-gray-500 mt-6">
          Don't have an account?{' '}
          <span
            onClick={() => navigate('/register')}
            className="text-blue-500 cursor-pointer hover:underline"
          >
            Register Here
          </span>
        </p>
      </div>

      {/* Toast Container for Popup Notifications */}
      <ToastContainer />
    </div>
  );
};

export default Login;
