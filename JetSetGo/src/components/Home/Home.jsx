import React from 'react'
import './Home.css'

const Home = () => {
    return (
        <section className="relative bg-cover bg-center h-screen bg-[url('./assets/bg.png')] flex items-center justify-center text-center bg-blue-500">
            <div className="relative z-10 text-black p-10 bg-white rounded-t">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 font-serif">Plan Your Perfect<br />Vacation</h2>
                <p className="mb-6">Make Budgets, To-do Lists, Itinerary all together in seconds </p>

                <div className="flex mb-6">
                    <input
                        type="text"
                        placeholder="Where do you want to go?"
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>
                 <div className="flex mb-6">
                    <input
                        type="number"
                        placeholder="Your Budget"
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>
                 <div className="flex space-x-3 mb-6">
                    <input
                        type="date"
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                        type="date"
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>
                <button className="cursor-pointer bg-blue-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-blue-500">
                    Jet Set Let's Go
                </button>
                <hr className="mt-8 w-30 m-auto border-t-4 border-red-600" />
            </div>
        </section>
    )
}

export default Home

// import React, { useState, useEffect } from 'react';
// import img1 from './bg.png';
// import img2 from './bg2.jpg';
// import img3 from './bg3.avif';

// const backgroundImages = [img1, img2, img3];

// const Home = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex(prevIndex => (prevIndex + 1) % backgroundImages.length);
//     }, 5000); // change every 5 seconds

//     return () => clearInterval(interval); // cleanup on unmount
//   }, []);

//   return (
//     <section
//       className="relative h-screen bg-cover bg-center flex items-center justify-center text-center transition-all duration-1000"
//       style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})` }}
//     >
//       <div className="relative z-10 text-black p-10 bg-white rounded-t-4xl shadow-lg">
//         <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 font-serif">
//           Plan Your Perfect<br />Vacation
//         </h2>
//         <p className="mb-6">
//           Make Budgets, To-do Lists, Itinerary all together in seconds
//         </p>
//         <button className="cursor-pointer bg-blue-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-blue-500">
//           Jet Set Let's Go
//         </button>
//         <hr className="mt-8 w-30 m-auto border-t-4 border-red-600" />
//       </div>
//     </section>
//   );
// };

// export default Home;
