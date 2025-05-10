import {FiPlusCircle, FiMinusCircle} from 'react-icons/fi'
import {useState} from 'react'
import './index.css'

const Guest = ({onDecressRoute, onIncressRoute, onGetGustdetails}) => {
  const [adults, setAdults] = useState(0)
  const [children, setChildren] = useState(0)
  const [infant, setInfant] = useState(0)

  const senddetails = e => {
    e.preventDefault()
    onGetGustdetails(adults, children, infant)
    onIncressRoute()
  }

  return (
    <div className="userdetails">
      <form name="myform" onSubmit={senddetails}>
        <h1 className="us-head">Guests</h1>
        <p className="detail-info">Select your guests</p>

        <div className="guest-info">
          <div className="gust-inner">
            <div>
              <p className="guest">Adults</p>
              <p>Age 13 or above</p>
            </div>
            <div className="count-class">
              <button
                type="button"
                className="minus"
                onClick={() => {
                  setAdults(prev => prev - 1)
                }}
              >
                -
              </button>
              <p>{adults}</p>
              <button
                type="button"
                className="minus"
                onClick={() => {
                  setAdults(prev => Math.max(0, prev + 1))
                }}
              >
                +
              </button>
            </div>
          </div>
          <hr className="line" />
          <div className="gust-inner">
            <div>
              <p className="guest">Children</p>
              <p>Age 2 - 12</p>
            </div>
            <div className="count-class">
              <button
                type="button"
                className="minus"
                onClick={() => {
                  setChildren(prev => prev - 1)
                }}
              >
                -
              </button>
              <p>{children}</p>
              <button
                type="button"
                className="minus"
                onClick={() => {
                  setChildren(prev => Math.max(0, prev + 1))
                }}
              >
                +
              </button>
            </div>
          </div>
          <hr className="line" />
          <div className="gust-inner">
            <div>
              <p className="guest">Infant</p>
              <p>under 2</p>
            </div>
            <div className="count-class">
              <button
                type="button"
                className="minus"
                onClick={() => {
                  setInfant(prev => prev - 1)
                }}
              >
                -
              </button>
              <p>{infant}</p>
              <button
                type="button"
                className="minus"
                onClick={() => {
                  setInfant(prev => Math.max(0, prev + 1))
                }}
              >
                +
              </button>
            </div>
          </div>
          <hr className="line" />
        </div>
        <div className="button-group">
          <button type="button" className="prevbutton" onClick={onDecressRoute}>
            Previous
          </button>
          <button type="submit" className="next-btn">
            Next
          </button>
        </div>
      </form>
    </div>
  )
}

export default Guest
