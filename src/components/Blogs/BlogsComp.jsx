import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/Badshahi masjid.jpg";
import Img2 from "../../assets/Beach.jpeg";
import Img3 from "../../assets/Islam abad masjid.jpeg";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Top places to visit in Lahore",
    description:
      "There are scenic parks that are frequented by joggers, couples, children, students and seniors. Bagh-e-Jinnah (formerly known as Lawrence Gardens) is one such place; it has a large variety of gorgeous plants, trees, long and varied pathways and creative light effects. Landscape of historical gardens such as Shalimar Gardens, Hazuri Bagh and Shahdara Bagh are an evidence of beautiful Mughal art. Fountains are a very important indication of culture of Lahore. Almost every major roundabout (locally called 'chowk') has a combination of a fountain with floral decorations. Pakistan's national flower is Gardenia jasminoides (mononymously termed 'Jasmine') and carries great importance for the people of Lahore.",
    author: "Ali Akbar",
    date: " April 15, 2023",
  },
  {
    id: 2,
    image: Img2,
    title: "Top places to visit in Karachi",
    description:
     "Karachi's Sea View is a popular destination for locals and tourists alike, known for its picturesque sunsets and vibrant beach life. The sandy beaches stretch along the Arabian Sea, providing a perfect spot for picnics, water sports, and relaxation. It reflects the bustling spirit of Karachi and serves as a cultural melting pot where people from various backgrounds gather to enjoy the coastal beauty. The area's significance has grown, making it a focal point for city events and celebrations",
    author: "Muhammad Usman",
    date: "June 22, 2024",
  },
  {
    id: 3,
    image: Img3,
    title: "Top places to visit in Islamabad",
    description:
     "The Faisal Mosque, completed in 1986, is one of the largest mosques in Pakistan and an architectural marvel. Its unique design, resembling a Bedouin tent, symbolizes the rich heritage of Islamic architecture while integrating modern design elements. The mosque is surrounded by the picturesque Margalla Hills, providing a serene environment for worshippers and visitors. It serves as a cultural and religious center, attracting thousands of pilgrims and tourists each year",
    author: "Sarah Khan",
    date: "January 10, 2023",
  },
];

const BlogsComp = () => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Our Latest Blogs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
