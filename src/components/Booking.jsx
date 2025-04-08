import React from 'react'
import { RiRunLine } from "react-icons/ri";

const Booking = () => {
    const items = [
        {
          img: "/images/activegeiranger.png",
          category: "Activity",
          title: "Active Geiranger",
        },
        {
          img: "/images/campingcottages.png",
          category: "Stay",
          title: "Jolstraholmen Camping & Cottages",
        },
        {
          img: "/images/floatingsauna.png",
          category: "Activity",
          title: "Floating Sauna Fjaerland",
        },
      ];
    
  return (
    <>
    <div className="bg-white px-4 py-10 md:px-16 lg:px-24 md:mb-[-20vh] mb-[-7vh]">
          <div className="flex flex-col lg:flex-row items-start gap-10">
            {/* Left Section */}
            <div className="w-full lg:w-1/3">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Booking Page</h2>
              <p className="text-gray-500 mb-4">
              Get a curated list of reliable options when booking tours, hotels, and car rentals
              </p>
              <a href="#" className="font-semibold underline">
                Preview for FREE
              </a>
            </div>
    
            {/* Cards Section */}
            <div className="w-full lg:w-2/3 cursor-pointer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="overflow-hidden bg-white h-[420px] flex flex-col"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full rounded-xl h-[320px] object-cover"
                  />
                  <div className="p-4 flex-grow">
                    <p className="text-sm text-gray-500 flex items-center gap-1"><RiRunLine /> {item.category}</p>
                    <p className="font-semibold mt-1">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </>
  )
}

export default Booking