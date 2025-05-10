import {useState} from 'react'

const Dateselection = ({onIncressRoute, onDecressRoute, onGetDates}) => {
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [startDateerror, setStartDateerror] = useState('')
  const [endDateerroro, setEndDateerror] = useState('')

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

    if (startDate.trim() === '') {
      setStartDateerror(true)
      hasError = true
    }
    if (endDate.trim() === '') {
      setEndDateerror(true)
      hasError = true
    }

    if (!hasError) {
      onGetDates(startDate, endDate)
      onIncressRoute()
    }
  }

  return (
    <div className="userdetails">
      <h1 className="us-head">Date selection</h1>
      <p className="detail-info">Select your Start Date and End Date</p>
      <form className="myform" name="myform" onSubmit={handleSubmit}>
        <label className="name-head" htmlFor="start-date">
          Start Date
        </label>
        <input
          id="start-date"
          type="date"
          className="name"
          value={startDate}
          onChange={e => setStartDate(e.target.value)}
          onBlur={() => handleBlur(startDate, setStartDateerror)}
        />
        {startDateerror && <p className="error">Select start date</p>}
        <label className="name-head" htmlFor="end-date">
          End Date
        </label>
        <input
          id="end-date"
          type="date"
          className="name"
          value={endDate}
          onChange={e => setEndDate(e.target.value)}
          onBlur={() => handleBlur(endDate, setEndDateerror)}
        />
        {endDateerroro && <p className="error">Select end date</p>}
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

export default Dateselection
