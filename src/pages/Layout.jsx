// import React from "react";
// import Navbar from "../components/Navbar/Navbar";
// import { Outlet, Link } from "react-router-dom";
// import Footer from "../components/Footer/Footer";
// import OrderPopup from "../components/OrderPopup/OrderPopup";

// const Layout = () => {
//   const [orderPopup, setOrderPopup] = React.useState(false);

//   const handleOrderPopup = () => {
//     setOrderPopup(!orderPopup);
//   };
//   return (
//     <>
//       <Navbar handleOrderPopup={handleOrderPopup} />
//       <Outlet />
//       <Footer />
//       <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
//     </>
//   );
// };

// export default Layout;




import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet, Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import OrderPopup from "../components/OrderPopup/OrderPopup";

const Layout = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  return (
    <>
      <Navbar handleOrderPopup={handleOrderPopup} />
      
      {/* Navigation Links */}
      <nav className="bg-gray-200 p-4">
        <ul className="flex space-x-4">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
          <li><Link to="/best-places">Best Places</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/hotel">Hotel</Link></li>
          <li><Link to="/login" className="text-blue-500">Login</Link></li> {/* Add Login Link */}
          <li><Link to="/register" className="text-blue-500">Register</Link></li> {/* Add Register Link */}
        </ul>
      </nav>

      <Outlet />
      <Footer />
      <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </>
  );
};

export default Layout;

