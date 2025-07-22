import React from "react";
import Dialog from "./components/Dialog.jsx";


function TripSummary( {tripDetails, loading, givenData,setStartPlanning,setTripDetails } ) {

  // console.log(loading)
  // console.log(givenData)
  // console.log(tripDetails)

  const [showDialog, setShowDialog] = React.useState(false);
  const [showHotelDialog, setShowHotelDialog] = React.useState(false);

  return (
    <div className="bg-[#EFFFFE] mx-auto min-h-screen max-w-[400px] flex flex-col items-center px-4 py-6 space-y-6 font-sans">
      <h1 className="text-3xl font-bold">Your Trip</h1>

      <div className="flex space-x-4">
        <button className="bg-[#C4FBF5] text-black font-semibold py-2 px-4 rounded-full shadow">
          ➜{givenData.fromDate}
        </button>
        <button className="bg-[#C4FBF5] text-black font-semibold py-2 px-4 rounded-full shadow">
          {givenData.toDate}⇠
        </button>
      </div>

      <div className="bg-[#C4FBF5] text-lg font-semibold py-3 px-6 rounded-full shadow">
        {givenData.fromCity} ➜ {givenData.toCity}
      </div>

      {/* Weather Section */}
      <div className="w-full max-w-md">
        <h2 className="text-xl font-bold text-center mb-2">Weather</h2>
        <div className="bg-[#C4FBF5] rounded-xl p-4 text-center shadow">
          {loading ? "Looking for weather data..." : tripDetails?.data2?.weatherReply || "We are having trouble"}
        </div>
      </div>

      {/* Flights Section */}
      <div className="w-full max-w-md">
        <h2 className="text-xl font-bold text-center mb-2">Flights</h2>
        <div className="bg-[#C4FBF5] rounded-xl p-4 text-center shadow space-y-4">
          <p>
            {loading ? "Looking for best flights..." : tripDetails?.data1?.reply || "No flight recommendation available."}
          </p>
          <button 
            className="bg-green-300 text-black font-bold py-2 px-6 rounded-full border-3 border-black hover:bg-green-500 transition cursor-pointer"
            onClick={() => setShowDialog(true)}
          >
            Book
          </button> 
        </div>
        {showDialog && (
          <Dialog message="Flight has been booked!" onClose={() => setShowDialog(false)} />
        )}
      </div>

      {/* Hotel Section */}
      <div className="w-full max-w-md">
        <h2 className="text-xl font-bold text-center mb-2">Hotel</h2>
        <div className="bg-[#C4FBF5] rounded-xl p-4 text-center shadow space-y-4">
          <p>
            {loading ? "Looking for best hotels..." : tripDetails?.data2?.hotelReply || "We are having trouble"}
          </p>
          <button className="bg-green-300 text-black font-bold py-2 px-6 rounded-full border-3 border-black hover:bg-green-500 transition cursor-pointer"
            onClick={() => setShowHotelDialog(true)}
          >
            Book
          </button>
        </div>
        {showHotelDialog && (
            <Dialog message="Hotel has been booked!" onClose={() => setShowHotelDialog(false)} />
        )}
      </div>

      {/* Restart button */}
      <div className="w-full flex justify-end" >
      <button 
        onClick={()=>{
          setStartPlanning(true) 
          setTripDetails(null)
        }
        }
        className="bg-red-300 text-black font-bold py-2 px-6 rounded-full border-3 border-black hover:bg-red-500 transition cursor-pointer">
        Restart
      </button>
      </div>
    </div>
  );
}

export default TripSummary;
