import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, DollarSign, Calendar } from "lucide-react"; // icons
import img1 from "";
import img2 from "src/components/Home/bg2.jpg";
import img3 from "src/components/Home/bg3.avif";

const backgroundImages = [img1, img2, img3];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 6000); // every 6s
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative h-screen w-full bg-cover bg-center flex items-center justify-center transition-all duration-1000"
      style={{
        backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
      }}
    >
      {/* Overlay to darken bg for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content box */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 p-10 rounded-3xl backdrop-blur-xl bg-white/20 shadow-2xl text-white w-[90%] sm:w-[500px]"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 font-serif">
          Plan Your Perfect <br /> Vacation
        </h2>
        <p className="mb-8 text-gray-200">
          Make Budgets, To-do Lists & Itineraries all in seconds
        </p>

        {/* Inputs */}
        <div className="space-y-4">
          <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
            <MapPin className="text-white mr-2" size={20} />
            <input
              type="text"
              placeholder="Where do you want to go?"
              className="flex-1 bg-transparent outline-none text-white placeholder-gray-300"
            />
          </div>
          <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
            <DollarSign className="text-white mr-2" size={20} />
            <input
              type="number"
              placeholder="Your Budget"
              className="flex-1 bg-transparent outline-none text-white placeholder-gray-300"
            />
          </div>
          <div className="flex space-x-3">
            <div className="flex items-center bg-white/20 rounded-full px-4 py-2 flex-1">
              <Calendar className="text-white mr-2" size={20} />
              <input
                type="date"
                className="flex-1 bg-transparent outline-none text-white placeholder-gray-300"
              />
            </div>
            <div className="flex items-center bg-white/20 rounded-full px-4 py-2 flex-1">
              <Calendar className="text-white mr-2" size={20} />
              <input
                type="date"
                className="flex-1 bg-transparent outline-none text-white placeholder-gray-300"
              />
            </div>
          </div>
        </div>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 cursor-pointer bg-gradient-to-r from-blue-400 to-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg"
        >
          Jet Set, Let’s Go ✈️
        </motion.button>

        <hr className="mt-8 w-24 m-auto border-t-4 border-yellow-400 rounded-full" />
      </motion.div>
    </section>
  );
};

export default Home;
