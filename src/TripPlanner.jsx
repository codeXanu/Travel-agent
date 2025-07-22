import React, { useState } from "react";


function TripPlanner( {fetchData, setTripDetails, setLoading, setGivenData} ) {
  const [travellers, setTravellers] = useState(1);
  const [fromCity, setFromCity] = useState("Delhi");
  const [toCity, setToCity] = useState("Mumbai");
  const [fromDate, setFromDate] = useState("2025-07-05");
  const [toDate, setToDate] = useState("2025-07-09");
  const [budget, setBudget] = useState(5000);

  const handleTravellersChange = (delta) => {
    setTravellers((prev) => Math.max(1, prev + delta));
  };

  const userInputs = {
    travellers: travellers,
    fromCity: fromCity,
    toCity: toCity,
    fromDate: fromDate,
    toDate: toDate,
    budget: budget
  } 
  

  const handleSubmit = async () => {
    console.log(userInputs)
    setGivenData(userInputs)
    setLoading(true)
    const result = await fetchData(userInputs);
    // console.log(result)
    setTripDetails(result)
    setLoading(false)
  };

  return (
    <div >
    <div className="bg-[#EFFFFE] flex flex-col justify-around p-6 max-w-[400px] mx-auto h-screen shadow-lg space-y-4">
      <h2 className="text-center font-semibold">Number of travellers</h2>
      <div className="flex items-center justify-between border-2 border-black rounded-full px-4 py-2">
        <button
          className="text-xl font-bold"
          onClick={() => handleTravellersChange(-1)}
        >
          −
        </button>
        <span className="text-lg font-bold">{travellers}</span>
        <button
          className="text-xl font-bold"
          onClick={() => handleTravellersChange(1)}
        >
          +
        </button>
      </div>

      <div className="space-y-2">
        <label className="block text-center font-medium">Flying from</label>
        <input
          className="w-full text-center font-bold border-2 border-black rounded-full py-2"
          value={fromCity}
          onChange={(e) => setFromCity(e.target.value)}
        />

        <label className="block text-center font-medium">Flying to</label>
        <input
          className="w-full text-center font-bold border-2 border-black rounded-full py-2"
          value={toCity}
          onChange={(e) => setToCity(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <label className="block text-center font-medium">From Date</label>
        <input
          type="date"
          className="w-full text-center font-bold border-2 border-black rounded-full py-2"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
        />

        <label className="block text-center font-medium">To Date</label>
        <input
          type="date"
          className="w-full text-center font-bold border-2 border-black rounded-full py-2"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
        />
      </div>

      <div>
        <label className="block text-center font-medium">Budget</label>
        <input
          type="number"
          className="w-full text-center font-bold border-2 border-black rounded-full py-2"
          value={budget}
          onChange={(e) => setBudget(Number(e.target.value))}
        />
      </div>

      <button
        onClick={handleSubmit}
        className="w-full bg-green-300 text-black font-bold py-2 rounded-full border-3 border-black hover:bg-green-500 transition cursor-pointer"
      >
        Plan my Trip!
      </button>
    </div>
    </div>
  );
}

export default TripPlanner;
