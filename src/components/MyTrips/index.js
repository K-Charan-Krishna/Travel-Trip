import {useContext} from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header'
import BottomNav from '../BottomNav'
import TravelTripContextValue from '../../context/TravelTripContextValue'
import './index.css'

const MyTrips = () => {
  const {tripList, onDeleteTrip} = useContext(TravelTripContextValue)

  const onDelete = id => {
    onDeleteTrip(id)
  }
  console.log(tripList)
  const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)
  const creatediv = details => (
    <div className="mytrip" key={details.id}>
      <div className="mytrip-inner">
        <h1>{capitalize(details.endLocation)}</h1>
        <div>
          <p className="date">Date</p>
          <p>
            {details.startDate} to {details.endDate}
          </p>
        </div>
        <button
          type="button"
          className="cancle-button"
          onClick={() => {
            onDelete(details.id)
          }}
        >
          cancel
        </button>
      </div>
    </div>
  )

  const nonEmptyTrips = () => (
    <>
      <h1>My Trips</h1>
      {tripList.map(each => creatediv(each))}
    </>
  )

  const emptyTrips = () => (
    <div className="empty-div">
      <img
        src="https://res.cloudinary.com/dsfextndf/image/upload/v1715695116/Vector_rjv87k.png"
        alt="no trips"
        className="no-trip-image"
      />
      <p className="no-trip-heading">No upcoming trips.</p>
      <p className="no-trip-description">
        When you book a trip, you will see your trip details here.
      </p>
      <Link to="/">
        <button className="no-trip-button" type="button">
          Book a new trip
        </button>
      </Link>
    </div>
  )

  return (
    <>
      <Header />
      <div className="Main">
        {tripList.length > 0 ? nonEmptyTrips() : emptyTrips()}
      </div>
      <BottomNav />
    </>
  )
}

export default MyTrips
