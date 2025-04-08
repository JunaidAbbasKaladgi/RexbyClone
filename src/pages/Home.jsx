import MapSection from "../components/MapSection";
import { FaGlobe, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import FAQSection from "../components/FAQuestion";
import Navbar from "../components/Navbar";
import Thingstodo from "../components/Thingstodo";
import Itinerary from "../components/Itinerary";
import Booking from "../components/Booking";
import { CiUser, CiMap, CiStreamOn, CiPaperplane, } from "react-icons/ci";
import { GoDownload } from "react-icons/go";
import { TfiLocationPin } from "react-icons/tfi";
import { useEffect, useState } from "react";


const locations = [
  {
    id: 1,
    title: "Trolltunga",
    description: "Iconic cliff rock in Norway",
    image: "https://source.unsplash.com/800x600/?trolltunga",
    lat: 60.124,
    lng: 6.738,
  },
  {
    id: 2,
    title: "Lofoten Islands",
    description: "Beautiful islands with stunning scenery",
    image: "https://source.unsplash.com/800x600/?lofoten",
    lat: 68.229,
    lng: 13.827,
  },
  {
    id: 3,
    title: "Geirangerfjord",
    description: "UNESCO World Heritage Site",
    image: "https://source.unsplash.com/800x600/?fjord",
    lat: 62.101,
    lng: 7.207,
  },
];
const features = [
  { icon: <TfiLocationPin size={24} />, text: "161 things to do" },
  { icon: <CiMap size={24} />, text: "Interactive Map" },
  { icon: <CiStreamOn size={24} />, text: "1 itinerary" },
  { icon: <CiPaperplane size={24} />, text: "Priority in chat" },
  { icon: <GoDownload size={24} />, text: "Offline usage in app" },
  { icon: <CiStreamOn size={24} />, text: "Itinerary Builder access" },
];



export default function Home() {
  const [showStickyNavbar, setShowStickyNavbar] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    // Show sticky navbar after scrolling down 100px
    if (window.scrollY > 100) {
      setShowStickyNavbar(true);
    } else {
      setShowStickyNavbar(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  // Cleanup on unmount
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
  return (
    <>
      <Navbar />

      {showStickyNavbar && (
        <div className="navbar bg-base-100 shadow-sm fixed top-0 left-0 right-0 z-50 transition-all duration-300">
          <div className="flex-1">
            <a className="font-medium underline md:ml-8">Unclear? Ask me a question</a>
          </div>
          <div className="flex md:gap-3 gap-2">
          <button className="md:px-10 py-2 px-4 cursor-pointer border border-gray-400 rounded-lg text-gray-800 font-medium">
                Preview
              </button>
              <button className="md:px-8 py-2 px-2 cursor-pointer bg-[#007599] text-white font-bold rounded-lg hover:bg-[#005f7a] transition">
                GET ACCESS
              </button>
          </div>
        </div>
      )}



      <div className="min-h-screen bg-white p-6 md:px-10 md:mb-[-15vh] md:mt-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-start">
          {/* Image */}
          <div className="w-full md:w-[40%] h-[65vh]">
            <img
              src="https://cdn.prod.rexby.com/image/d80440c7-36f3-49f7-b69b-b390f0cf7b8f?format=webp&width=750&height=937.5" // replace with actual path or import
              alt="Norway Landscape"
              className="rounded-xl object-cover w-full h-full"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold text-gray-800">Norway Guide</h2>
            <div className="flex items-center text-sm text-gray-600 gap-2">
              <img
                src="https://randomuser.me/api/portraits/women/68.jpg"
                alt="Guide"
                className="w-6 h-6 rounded-full"
              />
              <span>Guide by Ása Steinars</span>
              <span>• Norway</span>
              <span>• ⭐ New</span>
            </div>
            <p className="text-[#4e4b66]">
              Norway is my second home. I was born in Norway and I lived there until I was 7 years old. I often come back and I love this country almost as much as Iceland. Last summer I spent 3 months on the road with my van exploring everything from the south tip up to Lofoten.
            </p>
            <p className="text-[#4e4b66]">
              This guide is my best tips for Norway to make sure you get the most out of your trip. It's focused around the fjords in the west and Lofoten in the north. In my opinion, it's the best areas to explore in Norway.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-2 cursor-pointer w-full border border-gray-400 rounded-lg text-gray-800 font-medium">
                Preview
              </button>
              <button className="px-8 py-2 w-full cursor-pointer bg-[#007599] text-white font-bold rounded-lg hover:bg-[#005f7a] transition">
                GET ACCESS
              </button>
            </div>
            <p className="text-sm justify-end flex mr-14 text-[#a0a3c3]">Used for &nbsp;<span className="font-semibold text-[#a0a3bd]">100+ </span>&nbsp;trips</p>
          </div>
        </div>
      </div>

      <div className="border-y border-gray-200 py-6 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-8 md:gap-x-21 text-[#727085]">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              {feature.icon}
              <span className="text-xl font-medium">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="px-6 md:px-16 md:mt-16 space-y-6">
        <MapSection locations={locations} />
      </div>

      <Thingstodo />
      <Itinerary />
      <Booking />

      <div className="bg-white min-h-screen px-6 md:px-16 py-10 flex md:mt-12 flex-col md:flex-row gap-10">
        {/* Left Card */}
        <div className="w-full md:w-1/3">
          <div className="rounded-2xl shadow-2xl overflow-hidden bg-white">
            <img
              src="https://cdn.prod.rexby.com/image/d80440c7-36f3-49f7-b69b-b390f0cf7b8f?format=webp&width=750&height=937.5"
              alt="Guide Image"
              className="w-full p-2 rounded-2xl h-[450px]"
            />
            <div className="p-4">
              <p className="text-sm text-[#a0a3bd] mb-1">
                161 things to do | 1 itinerary | 0 travel tips
              </p>
              <h3 className="text-lg font-semibold">Norway Guide</h3>
              <p className="text-sm text-gray-500">Norway</p>
            </div>
          </div>
        </div>

        {/* Right Profile */}
        <div className="w-full md:w-2/3 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-2">Guide by Ása Steinars</h2>
          <p className="text-gray-500 mb-4 text-sm">Joined in April 2022</p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-gray-700 text-xl mb-6">
            <FaGlobe className="hover:text-black cursor-pointer" />
            <FaInstagram className="hover:text-pink-600 cursor-pointer" />
            <FaTiktok className="hover:text-black cursor-pointer" />
            <FaYoutube className="hover:text-red-600 cursor-pointer" />
          </div>

          {/* Bio */}
          <p className="text-gray-700 leading-relaxed mb-6">
            Ása Steinars is an adventure photographer and videographer from Iceland.
            Growing up in the north, surrounded by extreme landscapes and forever
            changing weather has given her a tight bond to nature and its forces.
            This you can clearly see in her photography. She works as a full-time
            content creator, helping people to travel Iceland like she does. She has
            a total following of almost 2 million across her social media platforms.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="border rounded-md px-8 py-2 font-medium hover:bg-gray-100">
              Message
            </button>
            <button className="border rounded-md px-8 py-2 font-medium hover:bg-gray-100">
              Storefront
            </button>
            <button className="border border-gray-300 rounded-md px-4 py-2 font-medium hover:bg-gray-100">
              Guide Affiliate Program
            </button>
          </div>
        </div>
      </div>
      <FAQSection />
    </>
  );
}
