import React from "react"
import TripPlanner from "./TripPlanner"
import TripSummary from "./TripSummary"
import Home from "./Home"
import fetchData from "./fetchData"

function App() {

  const [startPlanning, setStartPlanning] = React.useState(false);
  const [tripDetails, setTripDetails] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  
  return (
    <>
      {
        startPlanning ? 
        <TripPlanner 
          fetchData = {fetchData}
          setTripDetails= {setTripDetails}
          setLoading = {setLoading}
        /> :
        (<Home 
          setStartPlanning={setStartPlanning}
        />)
}

      
      <TripSummary tripDetails= {tripDetails} />
    </>
  )
}

export default App
