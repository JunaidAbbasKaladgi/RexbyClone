import React from 'react'
import { LiaBinocularsSolid } from "react-icons/lia";

const Thingstodo = () => {

    const items = [
        {
          img: "/images/favouritespots.png",
          category: "Sightseeing",
          title: "One of my favourite spots",
        },
        {
          img: "/images/amazingviews.png",
          category: "Sightseeing",
          title: "Swing with amazing views",
        },
        {
          img: "/images/viewpoint.png",
          category: "Hike",
          title: "Beautiful view point",
        },
      ];
    
  return (
    <>
    <div className="bg-white px-4 py-10 md:px-16 md:mt-24 mt-30 lg:px-24">
      <div className="flex flex-col lg:flex-row items-start gap-10">
        {/* Left Section */}
        <div className="w-full lg:w-1/3">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">161 things to do</h2>
          <p className="text-gray-500 mb-4">
            Get a curated list of all the best things to do with exact location,
            detailed info and inspiring content
          </p>
          <a href="#" className=" font-semibold underline">
            Preview for FREE
          </a>
        </div>

        {/* Cards Section */}
        <div className="w-full lg:w-2/3 cursor-pointer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className=" overflow-hidden bg-white h-[420px] flex flex-col"
            >
              <img
                src={item.img}
                alt={item.title}
                className="rounded-xl w-full h-[320px] object-cover"
              />
              <div className="p-4 flex-grow">
                <p className="text-sm text-gray-500 flex items-center gap-1"><LiaBinocularsSolid /> {item.category}</p>
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

export default Thingstodo