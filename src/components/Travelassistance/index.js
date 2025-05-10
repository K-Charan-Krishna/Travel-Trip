import {useState} from 'react'
import './index.css'

const travelAssistanceList = [
  {value: 'car', displayText: 'Car'},
  {value: 'flight', displayText: 'Flight'},
  {value: 'bus', displayText: 'Bus'},
  {value: 'train', displayText: 'Train'},
]

const Travelassistance = ({
  onDecressRoute,
  onIncressRoute,
  onGetAssistence,
}) => {
  const [isSelect, setSelect] = useState(false)
  const [assiest, setAssiest] = useState(' ')

  const senddetails = () => {
    onGetAssistence(assiest)
    onIncressRoute()
  }

  return (
    <div className="userdetails">
      <h1 className="us-head">Travel Assistance</h1>
      <p className="detail-info">Select your Travel Assistance</p>
      <div>
        <input
          type="checkbox"
          className="check"
          id="travel"
          name="Travel"
          onChange={() => setSelect(prev => !prev)}
        />
        <label htmlFor="travel" name="Travel" className="name-head">
          Travel Assistance
        </label>
        <br />
        {isSelect ? (
          <select
            name="cars"
            id="cars"
            className="name dropdown"
            onChange={e => setAssiest(e.target.value)}
          >
            <option value="">-- Select Travel Assistance --</option>
            {travelAssistanceList.map(each => (
              <option key={each.value} value={each.value}>
                {each.displayText}
              </option>
            ))}
          </select>
        ) : null}
      </div>
      <div className="button-group">
        <button type="button" className="prevbutton" onClick={onDecressRoute}>
          Previous
        </button>
        <button type="submit" className="next-btn" onClick={senddetails}>
          Next
        </button>
      </div>
    </div>
  )
}

export default Travelassistance
