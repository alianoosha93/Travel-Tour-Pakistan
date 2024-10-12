// import React from "react";

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
// // import NoPage from "./pages/NoPage";
// import PlacesRoute from "./pages/PlacesRoute";
// import About from "./pages/About";
// import BlogsDetails from "./pages/BlogsDetails";
// import Contact from "./pages/Contact"
// import AOS from "aos";
// import "aos/dist/aos.css";
// import Hotel from "./pages/Hotel";


// const App = () => {
//   React.useEffect(() => {
//     AOS.init({
//       offset: 100,
//       duration: 900,
//       easing: "ease-in-sine",
//       delay: 100,
//     });
//     AOS.refresh();
//   }, []);
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             <Route index element={<Home />} />
//             <Route path="blogs" element={<Blogs />} />
//             <Route path="blogs/:id" element={<BlogsDetails />} />
//             <Route path="best-places" element={<PlacesRoute />} />
//             <Route path="about" element={<About />} />
//             <Route path="contact" element={< Contact/>} />
//             <Route path="hotel" element={< Hotel/>} />
           
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// };

// export default App;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
// import PlacesRoute from "./pages/PlacesRoute";
// import About from "./pages/About";
// import BlogsDetails from "./pages/BlogsDetails";
// import Contact from "./pages/Contact";
// import Hotel from "./pages/Hotel";

// import AOS from "aos";
// import "aos/dist/aos.css";

// const App = () => {
//   React.useEffect(() => {
//     AOS.init({
//       offset: 100,
//       duration: 900,
//       easing: "ease-in-sine",
//       delay: 100,
//     });
//     AOS.refresh();
//   }, []);

//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             <Route index element={<Home />} />
//             <Route path="blogs" element={<Blogs />} />
//             <Route path="blogs/:id" element={<BlogsDetails />} />
//             <Route path="best-places" element={<PlacesRoute />} />
//             <Route path="about" element={<About />} />
//             <Route path="contact" element={<Contact />} />
//             <Route path="hotel" element={<Hotel />} />
            
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// };

// export default App;


import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import About from './pages/About';
import Contact from './pages/Contact';
import PlacesRoute from './pages/PlacesRoute';
import BlogsDetails from './pages/BlogsDetails';
import Hotel from './pages/Hotel';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<PrivateRoute><Layout /></PrivateRoute>}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="blogs/:id" element={<BlogsDetails />} />
            <Route path="best-places" element={<PlacesRoute />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="hotel" element={<Hotel />} />
           
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </AuthProvider>
   
  );
};

export default App;
