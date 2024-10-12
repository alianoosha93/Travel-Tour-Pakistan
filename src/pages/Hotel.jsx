// import React, { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import RoomImage1 from '../assets/Hotel/room1.jpeg'; // Import your room images
// import RoomImage2 from '../assets/Hotel/room2.jpeg';
// import RoomImage3 from '../assets/Hotel/room3.jpeg';
// import RoomImage4 from '../assets/Hotel/room4.jpeg';
// import RoomImage5 from '../assets/Hotel/room5.jpeg';
// import RoomImage6 from '../assets/Hotel/room6.jpeg';
// import RoomImage7 from '../assets/Hotel/room7.jpeg';
// import RoomImage8 from '../assets/Hotel/room8.jpeg';
// import RoomImage9 from '../assets/Hotel/room9.jpeg';
// import Room1 from '../assets/Hotel/room1-kitchen.jpeg'

// const HotelPage = () => {
//   const [rooms, setRooms] = useState([
//     {
//       id: 1,
//       name: 'Room 101',
//       price: 6000,
//       booked: false,
//       images: [RoomImage1,Room1],
//     },
//     {
//       id: 2,
//       name: 'Room 102',
//       price: 8000,
//       booked: false,
//       images: [RoomImage2],
//     },
//     {
//       id: 3,
//       name: 'Room 103',
//       price: 5000,
//       booked: false,
//       images: [RoomImage3],
//     },
//     {
//       id: 4,
//       name: 'Room 104',
//       price: 9000,
//       booked: false,
//       images: [RoomImage4],
//     },
//     {
//       id: 5,
//       name: 'Room 105',
//       price: 5000,
//       booked: false,
//       images: [RoomImage5],
//     },
//     {
//       id: 6,
//       name: 'Room 106',
//       price: 6000,
//       booked: false,
//       images: [RoomImage6],
//     },
//     {
//       id: 7,
//       name: 'Room 107',
//       price: 4000,
//       booked: false,
//       images: [RoomImage7],
//     },
//     {
//       id: 8,
//       name: 'Room 108',
//       price: 12000,
//       booked: false,
//       images: [RoomImage8],
//     },
//     {
//       id: 9,
//       name: 'Room 109',
//       price: 7000,
//       booked: false,
//       images: [RoomImage9],
//     },
//   ]);

//   const [sliderOpen, setSliderOpen] = useState(false);
//   const [currentRoomIndex, setCurrentRoomIndex] = useState(0);

//   const handleBooking = (room) => {
//     if (room.booked) {
//       toast.error('This room is already booked!');
//     } else {
//       // Update the rooms array to set the booked status to true
//       const updatedRooms = rooms.map((r) =>
//         r.id === room.id ? { ...r, booked: true } : r
//       );
//       setRooms(updatedRooms);
//       toast.success('Booked your room!');
//     }
//   };

//   const openSlider = (index) => {
//     setCurrentRoomIndex(index);
//     setSliderOpen(true);
//   };

//   const closeSlider = () => {
//     setSliderOpen(false);
//   };

//   return (
//     <div className="container mx-auto p-20">
//       <h1 className="text-3xl font-bold mb-4 text-center py-10">Hotel Rooms</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
//         {rooms.map((room, index) => (
//           <div
//             key={room.id}
//             className={`border p-4 rounded-md ${
//               room.booked ? 'bg-red-200' : 'bg-white'
//             }`}
//           >
//             <h2 className="text-xl font-semibold">{room.name}</h2>
//             <img
//               src={room.images[0]}
//               alt={room.name}
//               className="w-full h-32 object-cover rounded-md cursor-pointer"
//               onClick={() => openSlider(index)} // Open slider on image click
//             />
//             <p>Price: PKR {room.price}</p>
//             <button
//               className={`mt-2 px-4 py-2 rounded text-white ${
//                 room.booked ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-600'
//               }`}
//               onClick={() => handleBooking(room)}
//               disabled={room.booked}
//             >
//               {room.booked ? 'Already Booked' : 'Book Now'}
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Image Slider */}
//       {sliderOpen && (
//         <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/80 flex justify-center items-center z-50">
//           <div className="relative bg-white p-4 rounded-lg">
//             <img
//               src={rooms[currentRoomIndex].images[0]}
//               alt="Room"
//               className="w-96 h-64 object-cover rounded-md"
//             />
//             <button
//               onClick={closeSlider}
//               className="absolute top-2 right-2 text-black bg-white p-1 rounded-full"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}

//       <ToastContainer
//         position="top-right"
//         autoClose={5000}
//         hideProgressBar
//         closeOnClick
//         draggable
//         pauseOnHover
//       />
//     </div>
//   );
// };

// export default HotelPage;




import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RoomImage1 from '../assets/Hotel/room1.jpeg'; // Import your room images
import RoomImage2 from '../assets/Hotel/room2.jpeg';
import RoomImage3 from '../assets/Hotel/room3.jpeg';
import RoomImage4 from '../assets/Hotel/room4.jpeg';
import RoomImage5 from '../assets/Hotel/room5.jpeg';
import RoomImage6 from '../assets/Hotel/room6.jpeg';
import RoomImage7 from '../assets/Hotel/room7.jpeg';
import RoomImage8 from '../assets/Hotel/room8.jpeg';
import RoomImage9 from '../assets/Hotel/room9.jpeg';
import Room1 from '../assets/Hotel/room1-kitchen.jpeg'

const HotelPage = () => {
  const [bookedRooms, setBookedRooms] = useState(new Set());
  const [sliderOpen, setSliderOpen] = useState(false);
  const [currentRoomIndex, setCurrentRoomIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Track the current image index

  const rooms = [
    {
              id: 1,
              name: 'Room 101',
              price: 6000,
              booked: false,
              images: [RoomImage1,Room1],
            },
            {
              id: 2,
              name: 'Room 102',
              price: 8000,
              booked: false,
              images: [RoomImage2],
            },
            {
              id: 3,
              name: 'Room 103',
              price: 5000,
              booked: false,
              images: [RoomImage3],
            },
            {
              id: 4,
              name: 'Room 104',
              price: 9000,
              booked: false,
              images: [RoomImage4],
            },
            {
              id: 5,
              name: 'Room 105',
              price: 5000,
              booked: false,
              images: [RoomImage5],
            },
            {
              id: 6,
              name: 'Room 106',
              price: 6000,
              booked: false,
              images: [RoomImage6],
            },
            {
              id: 7,
              name: 'Room 107',
              price: 4000,
              booked: false,
              images: [RoomImage7],
            },
            {
              id: 8,
              name: 'Room 108',
              price: 12000,
              booked: false,
              images: [RoomImage8],
            },
            {
              id: 9,
              name: 'Room 109',
              price: 7000,
              booked: false,
              images: [RoomImage9],
            },
  ];

  const handleBooking = (room) => {
    if (room.booked) {
      toast.error('This room is already booked!');
    } else {
      setBookedRooms((prev) => new Set(prev).add(room.id));
      toast.success('Booked your room!');
    }
  };

  const openSlider = (index) => {
    setCurrentRoomIndex(index);
    setCurrentImageIndex(0); // Reset to the first image
    setSliderOpen(true);
  };

  const closeSlider = () => {
    setSliderOpen(false);
  };

  // Navigate to the next image
  const nextImage = () => {
    const room = rooms[currentRoomIndex];
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % room.images.length);
  };

  // Navigate to the previous image
  const prevImage = () => {
    const room = rooms[currentRoomIndex];
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + room.images.length) % room.images.length
    );
  };

  return (
    <div className="container mx-auto p-20">
      <h1 className="text-3xl font-bold mb-4 text-center py-10">Hotel Rooms</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {rooms.map((room, index) => (
          <div
            key={room.id}
            className={`border p-4 rounded-md ${
              bookedRooms.has(room.id) ? 'bg-red-200' : 'bg-white'
            }`}
          >
            <h2 className="text-xl font-semibold">{room.name}</h2>
            <img
              src={room.images[0]}
              alt={room.name}
              className="w-full h-32 object-cover rounded-md cursor-pointer"
              onClick={() => openSlider(index)} // Open slider on image click
            />
            <p>Price: PKR {room.price}</p>
            <button
              className={`mt-2 px-4 py-2 rounded text-white ${
                room.booked ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-600'
              }`}
              onClick={() => handleBooking(room)}
              disabled={room.booked}
            >
              {room.booked ? 'Already Booked' : 'Book Now'}
            </button>
          </div>
        ))}
      </div>

      {/* Image Slider */}
      {sliderOpen && (
        <div className="w-full fixed top-0 left-0 right-0 bottom-0 bg-black/80 flex justify-center items-center z-50">
          <div className=" w-50 relative bg-white p-4 rounded-lg">
            {/* Show the current image */}
            <img
              src={rooms[currentRoomIndex].images[currentImageIndex]}
              alt="Room"
              className="w-full h-64 object-cover rounded-md"
            />
            {/* Navigation buttons */}
            <button
              onClick={prevImage}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-1 rounded-full text-black"
            >
              &lt;
            </button>
            <button
              onClick={nextImage}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-1 rounded-full text-black"
            >
              &gt;
            </button>
            <button
              onClick={closeSlider}
              className="absolute top-2 right-2 text-black bg-white p-1 rounded-full"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        closeOnClick
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default HotelPage;

