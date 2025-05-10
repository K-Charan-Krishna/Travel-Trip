import {useState} from 'react'
import './index.css'

const Conformation = ({
  currentDetails,
  onAddtoTripList,
  onNewTrip,
  onIncressRoute,
  onCancelTrip,
}) => {
  const [confirmed, setConfirm] = useState(false)
  const {
    adults,
    children,
    endDate,
    endLocation,
    infant,
    name,
    startDate,
    startLocation,
    travelassistance,
  } = currentDetails
  const total = adults + children + infant
  const confirmDetails = () => {
    onAddtoTripList(currentDetails)
    setConfirm(prev => !prev)
    onIncressRoute()
  }
  const tonewtrip = () => {
    onNewTrip()
  }
  const cancelTrip = () => {
    onCancelTrip()
  }
  const confirmeddiv = () => (
    <div className="userdetails">
      <div className="last-div">
        <img
          src="https://assets.ccbp.in/frontend/react-js/travel-trip-steps-successfully-completed-img.png"
          className="img"
        />
        <h1 className="us-head">Awesome!</h1>
        <p className="detail-info">Your booking has been confirmed.</p>
        <button type="button" className="last-button" onClick={tonewtrip}>
          Book a New Trip
        </button>
      </div>
    </div>
  )
  const showDetails = () => (
    <div className="userdetails">
      <h1 className="us-head">Confirmation</h1>
      <p className="detail-info">Confirm your details</p>
      <div>
        <p className="info name-head">
          Name: <span>{name}</span>
        </p>
        <p className="info name-head">
          Start Location: <span>{startLocation}</span>
        </p>
        <p className="info name-head">
          End Location: <span>{endLocation}</span>
        </p>
        <p className="info name-head">
          Start Date: <span>{startDate}</span>
        </p>
        <p className="info name-head">
          End Date: <span>{endDate}</span>
        </p>
        <p className="info name-head">
          Guests: <span>{total}</span>
        </p>
        <p className="info name-head">
          Travel Assistance: <span>{travelassistance}</span>
        </p>
        <button type="button" className="prevbutton" onClick={cancelTrip}>
          Cancel
        </button>
        <button type="submit" className="next-btn" onClick={confirmDetails}>
          Next
        </button>
      </div>
    </div>
  )
  return <>{confirmed ? confirmeddiv() : showDetails()}</>
}

export default Conformation
