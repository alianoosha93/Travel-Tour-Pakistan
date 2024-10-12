import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';
import natureVideo from '../../assets/Vedio/Register.mp4'

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Store additional user details in localStorage
    const userDetails = { fullName: fullName.trim(), email: email.trim() };
    localStorage.setItem('userDetails', JSON.stringify(userDetails));

    // Automatically log in the user after registration
    login();
    navigate('/'); // Redirect to home page after registration
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-100">
      <video
        autoPlay
        loop
        muted
        className="absolute w-full  h-full object-cover"
        style={{ zIndex: 0 }}
      >
        <source src={natureVideo} type="video/mp4" />
      </video>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-80 relative z-10">
        <h2 className="text-2xl mb-4">Register</h2>
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="border p-2 mb-4 w-full"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 mb-4 w-full"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 mb-4 w-full"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Register</button>
      </form>
    </div>
  );
};

export default Register;



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../../Context/AuthContext';
// import RegisterImg from '../../assets/registerImg.jpeg'; // Path to your image

// const Register = () => {
//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();
//   const { login } = useAuth();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Store additional user details in localStorage
//     const userDetails = { fullName: fullName.trim(), email: email.trim() };
//     localStorage.setItem('userDetails', JSON.stringify(userDetails));

//     // Automatically log in the user after registration
//     login();
//     navigate('/'); // Redirect to home page after registration
//   };

//   return (
//     <div className="relative flex items-center justify-center min-h-screen bg-gray-100">
//       <img
//         src={RegisterImg} // Replace with the path to your image
//         alt="Nature Background"
//         className="absolute w-full h-full object-cover"
//         style={{ zIndex: 0 }} // Keep it behind the form
//       />

//       <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-80 relative z-10">
//         <h2 className="text-2xl mb-4">Register</h2>
//         <input
//           type="text"
//           placeholder="Full Name"
//           value={fullName}
//           onChange={(e) => setFullName(e.target.value)}
//           className="border p-2 mb-4 w-full"
//           required
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
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
//         <button type="submit" className="bg-green-500 text-white p-2 rounded w-full">Register</button>
//       </form>
//     </div>
//   );
// };

// export default Register;



