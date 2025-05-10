import {Switch, Route} from 'react-router-dom'
import {Component} from 'react'
import Login from './components/Login'
import Home from './components/Home'
import Newtrip from './components/Newtrip'
import MyTrips from './components/MyTrips'
import TravelTripContextValue from './context/TravelTripContextValue'
import './App.css'

// Note: Use the lists in your code to pass the test cases
const stepsList = [
  {stepId: 'YOUR_DETAILS', displayText: 'Your Details'},
  {stepId: 'DATE_SELECTION', displayText: 'Date Selection'},
  {stepId: 'GUESTS', displayText: 'Guests'},
  {stepId: 'TRAVEL_ASSISTANCE', displayText: 'Travel Assistance'},
  {stepId: 'CONFIRMATION', displayText: 'Confirmation'},
]

const travelAssistanceList = [
  {value: 'car', displayText: 'Car'},
  {value: 'flight', displayText: 'Flight'},
  {value: 'bus', displayText: 'Bus'},
  {value: 'train', displayText: 'Train'},
]

// Replace your code here
class App extends Component {
  state = {
    tripList: [
      {
        adults: 1,
        children: 0,
        endDate: '2025-05-10',
        endLocation: 'banglore',
        infant: 0,
        name: 'K Charan Krishna',
        startDate: '2025-05-09',
        startLocation: 'hindupur',
        travelassistance: ' ',
        id: 1,
      },
    ],
  }

  onAddtoTripList = currentDetails => {
    console.log(currentDetails)
    this.setState(prev => ({
      tripList: [...prev.tripList, currentDetails],
    }))
  }

  onDeleteTrip = id => {
    const {tripList} = this.state
    const filtredarr = tripList.filter(each => each.id !== id)
    this.setState({tripList: filtredarr})
  }

  render() {
    const {tripList} = this.state
    return (
      <TravelTripContextValue.Provider
        value={{
          tripList,
          onAddtoTripList: this.onAddtoTripList,
          onDeleteTrip: this.onDeleteTrip,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route path="/Newtrip" component={Newtrip} />
          <Route path="/MyTrips" component={MyTrips} />
        </Switch>
      </TravelTripContextValue.Provider>
    )
  }
}

export default App
