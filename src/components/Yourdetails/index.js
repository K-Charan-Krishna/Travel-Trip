import {useState} from 'react'
import './index.css'

const Yourdetails = ({onIncressRoute, onGetuseardetails}) => {
  const [name, setName] = useState('')
  const [startLocation, setStartLocation] = useState('')
  const [endLocation, setEndLocation] = useState('')

  const [nameError, setNameError] = useState(false)
  const [startError, setStartError] = useState(false)
  const [endError, setEndError] = useState(false)

  const handleBlur = (value, setError) => {
    if (value.trim() === '') {
      setError(true)
    } else {
      setError(false)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    let hasError = false

    if (name.trim() === '') {
      setNameError(true)
      hasError = true
    }
    if (startLocation.trim() === '') {
      setStartError(true)
      hasError = true
    }
    if (endLocation.trim() === '') {
      setEndError(true)
      hasError = true
    }

    if (!hasError) {
      onGetuseardetails(name, startLocation, endLocation)
      onIncressRoute()
    }
  }

  return (
    <div className="userdetails">
      <h1 className="us-head">User Details</h1>
      <p className="detail-info">Enter your Name and Location Details</p>
      <form className="myform" name="myform" onSubmit={handleSubmit}>
        <label className="name-head" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          type="text"
          className="name"
          value={name}
          onChange={e => setName(e.target.value)}
          onBlur={() => handleBlur(name, setNameError)}
        />
        {nameError && <p className="error">Enter Your Name</p>}

        <label className="label" htmlFor="start">
          Start Location
        </label>
        <input
          id="start"
          type="text"
          className="input"
          value={startLocation}
          onChange={e => setStartLocation(e.target.value)}
          onBlur={() => handleBlur(startLocation, setStartError)}
        />
        {startError && <p className="error">Enter Start Location</p>}

        <label className="label" htmlFor="end">
          End Location
        </label>
        <input
          id="end"
          type="text"
          className="input"
          value={endLocation}
          onChange={e => setEndLocation(e.target.value)}
          onBlur={() => handleBlur(endLocation, setEndError)}
        />
        {endError && <p className="error">Enter End Location</p>}

        <button type="submit" className="next-btn">
          Next
        </button>
      </form>
    </div>
  )
}

export default Yourdetails
