import React from "react";
import PlaceCard from "./PlaceCard";
// import PlaceCard from "./PlacesCart";
import Img1 from "../../assets/Badshahi masjid.jpg";
import Img2 from "../../assets/Beach.jpeg";
import Img3 from "../../assets/Mazar eQuid.jpeg";
import Img4 from "../../assets/Islam abad masjid.jpeg";
import Img5 from "../../assets/Mountain.jpeg";
import Img6 from "../../assets/skardu.jpeg";

const PlacesData = [
  {
    img: Img1,
    title: " Badshahi Masjid",
    location: "Lahore",
    description: "Badshahi Masjid, an iconic symbol of Mughal architecture in Lahore, features stunning red sandstone and intricate marble inlay, making it one of the largest mosques in the world.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img2,
    title: "Beach ",
    location: "Karachi",
    description:
      "Karachi's beaches offer stunning sunsets, serene shorelines, and a vibrant coastal experience along the Arabian Sea..",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img3,
    title: "Mazar e Quid",
    location: "Karachi",
    description:
      "Quaid-e-Azam's Mazar is a majestic mausoleum in Karachi, honoring the founder of Pakistan, Muhammad Ali Jinnah, with its stunning architecture and serene gardens.",
    price: 6200,
    type: "Cultural Relax",
  },
  {
    img: Img4,
    title: "Faisal Masjid",
    location: "Islamabad",
    description: "The Faisal Mosque in Islamabad is a stunning modern architectural marvel, known for its unique design and serene setting at the foot of the Margalla Hills, serving as a symbol of Pakistan's cultural identity.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img5,
    title: " Mountain",
    location: "Kashmir",
    description:
      "The Kashmir Mountains are a breathtaking range characterized by snow-capped peaks, lush valleys, and serene landscapes, making them a paradise for nature lovers and adventure enthusiasts alike.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img6,
    title: "lake",
    location: "Skardu",
    description:
      "Skardu Lake, surrounded by majestic mountains, boasts crystal-clear turquoise waters and stunning landscapes, making it a serene destination for travelers seeking natural beauty.",
    price: 6200,
    type: "Cultural Relax",
  },
];

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Best Places to Visit
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;
