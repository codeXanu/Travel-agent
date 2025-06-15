import React from "react"
import TripPlanner from "./TripPlanner"
import TripSummary from "./TripSummary"
import Home from "./Home"

function App() {

  const [startPlanning, setStartPlanning] = React.useState(false)
  
  return (
    <>
      {
        startPlanning ? 
        <TripPlanner /> :
        (<Home 
          setStartPlanning={setStartPlanning}
        />)
}

      
      <TripSummary />
    </>
  )
}

export default App
