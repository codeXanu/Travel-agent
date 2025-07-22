import React from "react"
import TripPlanner from "./TripPlanner"
import TripSummary from "./TripSummary"
import Home from "./Home"
import fetchData from "./fetchData"

function App() {

  const [startPlanning, setStartPlanning] = React.useState(false);
  const [tripDetails, setTripDetails] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [givenData, setGivenData ] = React.useState()
  
  return (
    <>
      {
        startPlanning===false ?
        (<Home 
          setStartPlanning={setStartPlanning}
        />) 
        :
        loading===true || tripDetails !== null ? 
        <TripSummary
          tripDetails= {tripDetails}
          loading = {loading}
          givenData = {givenData}
          setStartPlanning = {setStartPlanning}
          setTripDetails = {setTripDetails}
        /> 
        :
        <TripPlanner 
          fetchData = {fetchData}
          setTripDetails= {setTripDetails}
          setLoading = {setLoading}
          setGivenData = {setGivenData}
        />
      }
      

       
      
    </>
  )
}

export default App
