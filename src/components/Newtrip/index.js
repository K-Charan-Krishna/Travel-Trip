import {v4 as uuidv4} from 'uuid'
import {Component} from 'react'
import Header from '../Header'
import BottomNav from '../BottomNav'
import Yourdetails from '../Yourdetails'
import Dateselection from '../Dateselection'
import Guest from '../Guest'
import Travelassistance from '../Travelassistance'
import Conformation from '../Conformation'
import Sidebar from '../Sidebar'
import TravelTripContextValue from '../../context/TravelTripContextValue'
import './index.css'

class Newtrip extends Component {
  state = {current: 1, trips: [], currentDetails: {}}

  onIncressRoute = () => {
    this.setState(prev => ({current: (prev.current += 1)}))
  }

  onDecressRoute = () => {
    const {current} = this.state
    if (current > 1) {
      this.setState(prev => ({current: (prev.current -= 1)}))
    }
  }

  onGetuseardetails = (name, startLocation, endLocation) => {
    this.setState(prev => ({
      currentDetails: {
        ...prev.currentDetails,
        name,
        startLocation,
        endLocation,
        id: uuidv4(),
      },
    }))
  }

  onGetDates = (startDate, endDate) => {
    this.setState(prev => ({
      currentDetails: {
        ...prev.currentDetails,
        startDate,
        endDate,
      },
    }))
  }

  onGetGustdetails = (adults, children, infant) => {
    this.setState(prev => ({
      currentDetails: {
        ...prev.currentDetails,
        adults,
        children,
        infant,
      },
    }))
  }

  onGetAssistence = assiest => {
    if (assiest !== '') {
      this.setState(prev => ({
        currentDetails: {
          ...prev.currentDetails,
          travelassistance: assiest,
        },
      }))
    }
  }

  // onAddtoTripList = () => {
  //   const {currentDetails} = this.state
  //   this.setState(prev => ({
  //     trips: [...prev.trips, currentDetails],
  //   }))
  // }

  onNewTrip = () => {
    this.setState({current: 1})
  }

  onCancelTrip = () => {
    this.setState({currentDetails: {}, current: 1})
  }

  renderRoute = onAddtoTripList => {
    const {current, currentDetails} = this.state
    switch (current) {
      case 1:
        return (
          <div className="new-mid-right">
            <Sidebar currentStep={current} />
            <div className="mit-card">
              <div className="inn-card">
                <Yourdetails
                  onIncressRoute={this.onIncressRoute}
                  onGetuseardetails={this.onGetuseardetails}
                />
              </div>
            </div>
          </div>
        )
      case 2:
        return (
          <div className="new-mid-right">
            <Sidebar currentStep={current} />
            <div className="mit-card">
              <div className="inn-card">
                <Dateselection
                  onIncressRoute={this.onIncressRoute}
                  onDecressRoute={this.onDecressRoute}
                  onGetDates={this.onGetDates}
                />
              </div>
            </div>
          </div>
        )
      case 3:
        return (
          <div className="new-mid-right">
            <Sidebar currentStep={current} />
            <div className="mit-card">
              <div className="inn-card">
                <Guest
                  onIncressRoute={this.onIncressRoute}
                  onDecressRoute={this.onDecressRoute}
                  onGetGustdetails={this.onGetGustdetails}
                />
              </div>
            </div>
          </div>
        )
      case 4:
        return (
          <div className="new-mid-right">
            <Sidebar currentStep={current} />
            <div className="mit-card">
              <div className="inn-card">
                <Travelassistance
                  onGetAssistence={this.onGetAssistence}
                  onIncressRoute={this.onIncressRoute}
                  onDecressRoute={this.onDecressRoute}
                />
              </div>
            </div>
          </div>
        )
      case 5:
      case 6:
        return (
          <div className="new-mid-right">
            <Sidebar currentStep={current} />
            <div className="mit-card">
              <div className="inn-card">
                <Conformation
                  currentDetails={currentDetails}
                  onAddtoTripList={onAddtoTripList}
                  onNewTrip={this.onNewTrip}
                  onIncressRoute={this.onIncressRoute}
                  onCancelTrip={this.onCancelTrip}
                />
              </div>
            </div>
          </div>
        )
      default:
        null
    }
  }

  render() {
    const {currentDetails} = this.state
    return (
      <TravelTripContextValue.Consumer>
        {contextValue => (
          <div className="mew-trip">
            <Header />
            <div className="new-mid">
              {this.renderRoute(contextValue.onAddtoTripList)}
            </div>
            <BottomNav />
          </div>
        )}
      </TravelTripContextValue.Consumer>
    )
  }
}
export default Newtrip
