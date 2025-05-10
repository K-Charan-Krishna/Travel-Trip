import React from 'react'

const TravelTripContext = React.createContext({
  myTripsList: [],
  onAddtoTripList: () => {},
  onDeleteTrip: () => {},
})

export default TravelTripContext
