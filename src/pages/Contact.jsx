import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      toast.error("Name is required");
      return;
    }

    // Show success toast message
    toast.success("Thank you for your comment!");

    // Reset form
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="container mx-auto pt-14">
      <div className="bg-white shadow-lg rounded-lg p-8 my-10">
        <h1 className="my-8 border-l-8 border-primary/50 pl-2 text-4xl font-bold text-gray-800 tracking-wide">
          Contact Us
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-5">
          We’d love to hear from you! Whether you have questions about our
          services, need assistance with your travel plans, or want to share
          your experiences, feel free to reach out to us.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Get in Touch</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white font-bold py-2 rounded-md hover:bg-primary-dark transition-colors"
          >
            Send Message
          </button>
        </form>

        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Our Location</h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-5">
          Address: 123 Travel Lane, Karachi Pakistan
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mb-5">
          Phone: +92 3702259336
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          Email: aribaali@gmail.com
        </p>
      </div>
      
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
    </div>
  );
};

export default Contact;
