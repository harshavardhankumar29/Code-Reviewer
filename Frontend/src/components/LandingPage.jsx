import React from "react";

const LandingPage = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center">

      {/* Hero Section with 3D background */}
      <div className="relative w-full h-screen">
        
        {/* Spline 3D Embed */}
        <iframe src='https://my.spline.design/particles-1gwhqKgeeTaUuHHgx96NnTkc/' frameborder='0' width='100%' height='100%'></iframe>

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-4">
            Review Your Code with AI
          </h1>
          <p className="text-gray-300 md:text-xl drop-shadow-md">
            Get instant feedback and suggestions for improvements on your code snippets.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 justify-center">
            <button onClick={() => document.getElementById("main-content").scrollIntoView({behavior: "smooth"})} className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition">
              Get Started
            </button>
            <button className="border border-yellow-400 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition text-white">
              Learn More
            </button>
          </div>
        </div>
      </div>

     

    </div>
  );
};

export default LandingPage;
