import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, DollarSign, Calendar } from "lucide-react";
import img1 from "../../assets/images/bg.png";
import img2 from "../../assets/images/bg2.jpg";
import img3 from "../../assets/images/bg3.avif";

const backgroundImages = [img1, img2, img3];

const Home = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [destination, setDestination] = useState("");
  const [budget, setBudget] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Cycle background
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = () => {
  if (!destination || !budget || !startDate || !endDate) return alert("Fill all fields");

  const tripData = { destination, budget, startDate, endDate, createdAt: new Date(), budgetItems: [], itinerary: [], tasks: [] };

  // Save to localStorage
  localStorage.setItem("activeTrip", JSON.stringify(tripData));

  // Navigate to dashboard
  navigate("/dashboard");
};


  return (
    <section
      className="relative h-screen w-full bg-cover bg-center flex items-center justify-center transition-all duration-1000"
      style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 30 }}
        transition={{ duration: 1 }}
        className="relative z-10 p-10 rounded-3xl backdrop-blur-xl bg-white/20 shadow-2xl text-white w-[90%] sm:w-[500px]"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 font-serif">
          Plan Your Perfect <br /> Vacation
        </h2>

        <div className="space-y-4">
          <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
            <MapPin className="text-white mr-2" size={20} />
            <input
              type="text"
              placeholder="Where do you want to go?"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="flex-1 bg-transparent outline-none text-white placeholder-gray-300"
            />
          </div>
          <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
            <DollarSign className="text-white mr-2" size={20} />
            <input
              type="number"
              placeholder="Your Budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="flex-1 bg-transparent outline-none text-white placeholder-gray-300"
            />
          </div>
          <div className="flex space-x-3">
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="flex-1 bg-white/20 text-black px-4 py-2 rounded"
            />
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="flex-1 bg-white/20 text-black px-4 py-2 rounded"
            />
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSubmit}
          className="mt-6 w-full bg-gradient-to-r from-blue-400 to-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg"
        >
          Jet Set, Let’s Go ✈️
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Home;
