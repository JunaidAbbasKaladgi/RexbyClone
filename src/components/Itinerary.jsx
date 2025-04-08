import React from 'react'

const Itinerary = () => {
  return (
    <>
    <div className="bg-[#f9f9f9] px-4 py-10 md:px-16 lg:px-24">
      <div className="flex flex-col lg:flex-row items-start gap-10">
        {/* Left Section */}
        <div className="w-full lg:w-1/3">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">1 itinerary</h2>
          <p className="text-gray-500 mb-4">
          Get expertly curated itineraries that help you organise all the 'things to do' in an ideal time order
          </p>
          <a href="#" className=" font-semibold underline">
            Preview for FREE
          </a>
        </div>

        {/* Cards Section */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              className="rounded-xl overflow-hidden cursor-pointer bg-white shadow-sm h-[420px] justify-center items-center flex flex-col"
            >
                <p className=" text-[#a0a3bf] font-semibold">Itinerary Builder</p>
                <p className="text-[#a0a3bf]">Create your own itinerary</p>
            </div>

            <div
              className="rounded-xl overflow-hidden cursor-pointer bg-white shadow-sm h-[420px] flex flex-col"
            >
              <img
                src="/images/Roadtrip.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            <div
              className="rounded-xl overflow-hidden cursor-pointer bg-white shadow-sm justify-center items-center h-[420px] flex flex-col"
            >
                <p className="font-semibold">Preview for FREE</p>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Itinerary