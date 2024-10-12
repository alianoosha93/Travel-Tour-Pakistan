import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import Location from "../components/Location/Location";

const About = () => {
  return (
    <>
      <div className="container mx-auto pt-14">
        <div className="bg-white shadow-lg rounded-lg p-8 my-10 transition-transform transform hover:scale-105 duration-300">
          <h1 className="my-8 border-l-8 border-primary/50 pl-2 text-4xl font-bold text-gray-800 tracking-wide">
            About Us
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-5">
            Welcome to our Pakistan travel website, where we aim to inspire and assist you in exploring the breathtaking beauty and rich culture of Pakistan. Nestled between the majestic Himalayas and the vibrant Indus River, Pakistan offers a diverse range of landscapes, from lush green valleys to stunning deserts and magnificent mountain ranges.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-5">
            Our mission is to provide travelers with authentic insights into the hidden gems and popular destinations across the country. Whether you're seeking adventure in the Hunza Valley, tranquility at Skardu, or historical exploration in Lahore, we have curated guides and tips to enhance your journey.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            With a commitment to sustainable tourism, we also focus on promoting local communities and preserving the natural beauty of Pakistan. Join us as we uncover the wonders of this beautiful country and make your travel experience unforgettable.
          </p>
        </div>
      </div>
      <Location />
      <BlogsComp />
    </>
  );
};

export default About;
