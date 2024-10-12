// import React from "react";
// import { IoCloseOutline } from "react-icons/io5";

// const OrderPopup = ({ orderPopup, setOrderPopup }) => {
//   return (
//     <>
//       {orderPopup && (
//         <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
//           <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">
//             {" "}
//             {/* Header */}
//             <div className="flex items-center justify-between">
//               <div>
//                 <h1 className="text-xl font-semibold text-black/70">
//                   Book Your Trip
//                 </h1>
//               </div>
//               <div>
//                 <IoCloseOutline
//                   className="text-2xl cursor-pointer "
//                   onClick={() => setOrderPopup(false)}
//                 />
//               </div>
//             </div>
//             {/* Body */}
//             <div className="mt-4">
//               <input
//                 type="text"
//                 placeholder="Name"
//                 className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
//               />
//               <input
//                 type="email"
//                 placeholder="email"
//                 className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
//               />
//               <input
//                 type="text"
//                 placeholder="Address"
//                 className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
//               />
//               <div className="flex justify-center">
//                 <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full ">
//                   Book Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default OrderPopup;



import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OrderPopup = ({ orderPopup, setOrderPopup }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [errors, setErrors] = useState({});

  const handleBooking = () => {
    // Reset errors
    setErrors({});

    // Validate form
    const newErrors = {};
    if (!name) newErrors.name = "Name is required!";
    if (!email) newErrors.email = "Email is required!";
    if (!address) newErrors.address = "Destination is required!";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return; // Stop the booking process if there are errors
    }

    // Show success toast message if all fields are filled
    toast.success("Booked your trip!");
    
    // Optionally, close the popup after booking
    setOrderPopup(false);
  };

  return (
    <>
      {orderPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">
            {/* Header */}
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold text-black/70">Book Your Trip</h1>
              <IoCloseOutline
                className="text-2xl cursor-pointer"
                onClick={() => setOrderPopup(false)}
              />
            </div>

            {/* Body */}
            <div className="mt-4">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`w-full rounded-full border px-2 py-1 mb-4 ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } dark:border-gray-500 dark:bg-gray-800`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mb-2">{errors.name}</p>
              )}

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full rounded-full border px-2 py-1 mb-4 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } dark:border-gray-500 dark:bg-gray-800`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mb-2">{errors.email}</p>
              )}

              <input
                type="text"
                placeholder="Destination"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className={`w-full rounded-full border px-2 py-1 mb-4 ${
                  errors.address ? "border-red-500" : "border-gray-300"
                } dark:border-gray-500 dark:bg-gray-800`}
              />
              {errors.address && (
                <p className="text-red-500 text-sm mb-2">{errors.address}</p>
              )}

              <div className="flex justify-center">
                <button
                  className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full"
                  onClick={handleBooking} // Call handleBooking on button click
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Toast Container for notifications */}
      <ToastContainer 
        position="top-right" 
        autoClose={5000} 
        hideProgressBar 
        closeOnClick 
        draggable 
        pauseOnHover 
        theme="colored" 
      />
    </>
  );
};

export default OrderPopup;

