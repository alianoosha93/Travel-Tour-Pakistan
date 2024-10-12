// import React from "react";

// const BannerPic = ({ img }) => {
//   const bgImage = {
//     backgroundImage: `url(${img})`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     height: "400px",
//   };
//   return (
//     <div  className="w-full flex justify-center items-center overflow-hidden" style={bgImage}></div>
//   );
// };

// export default BannerPic;



import React from "react";

const BannerPic = ({ img }) => {
  return (
    <div className="w-full flex justify-center items-center overflow-hidden">
      <img
        src={img}
        alt="Banner"
        className="w-full h-auto max-h-[700px] object-contain"
      />
    </div>
  );
};

export default BannerPic;
