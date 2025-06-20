import React from "react";





function TripSummary( {tripDetails} ) {
  return (
    <div className="bg-[#EFFFFE] mx-auto min-h-screen max-w-[400px] flex flex-col items-center px-4 py-6 space-y-6 font-sans">
      <h1 className="text-3xl font-bold">Your Trip</h1>

      <div className="flex space-x-4">
        <button className="bg-[#C4FBF5] text-black font-semibold py-2 px-4 rounded-full shadow">
          ➜ 25th Nov 23
        </button>
        <button className="bg-[#C4FBF5] text-black font-semibold py-2 px-4 rounded-full shadow">
          5th Dec 23 ⇠
        </button>
      </div>

      <div className="bg-[#C4FBF5] text-lg font-semibold py-3 px-6 rounded-full shadow">
        New York City ➜ Paris
      </div>

      {/* Weather Section */}
      <div className="w-full max-w-md">
        <h2 className="text-xl font-bold text-center mb-2">Weather</h2>
        <div className="bg-[#C4FBF5] rounded-xl p-4 text-center shadow">
          You can expect the weather to be quite mild. Low will be 19° and high will be 25°
        </div>
      </div>

      {/* Flights Section */}
      <div className="w-full max-w-md">
        <h2 className="text-xl font-bold text-center mb-2">Flights</h2>
        <div className="bg-[#C4FBF5] rounded-xl p-4 text-center shadow space-y-4">
          <p>The best option for you is with Delta Airlines with a layover in Oslo</p>
          <button className="bg-green-300 text-black font-bold py-2 px-6 rounded-full border-3 border-black hover:bg-green-500 transition cursor-pointer">
            Book
          </button>
        </div>
      </div>

      {/* Hotel Section */}
      <div className="w-full max-w-md">
        <h2 className="text-xl font-bold text-center mb-2">Hotel</h2>
        <div className="bg-[#C4FBF5] rounded-xl p-4 text-center shadow space-y-4">
          <p>We recommend you stay at the Premiere Inn hotel in central Paris</p>
          <button className="bg-green-300 text-black font-bold py-2 px-6 rounded-full border-3 border-black hover:bg-green-500 transition cursor-pointer">
            Book
          </button>
        </div>
      </div>
    </div>
  );
}

export default TripSummary;
