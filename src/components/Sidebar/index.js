import './index.css'

const Sidebar = ({currentStep}) => {
  const stepsList = [
    {stepId: 'YOUR_DETAILS', displayText: 'Your Details'},
    {stepId: 'DATE_SELECTION', displayText: 'Date Selection'},
    {stepId: 'GUESTS', displayText: 'Guests'},
    {stepId: 'TRAVEL_ASSISTANCE', displayText: 'Travel Assistance'},
    {stepId: 'CONFIRMATION', displayText: 'Confirmation'},
  ]

  return (
    <div className="sidebar">
      {stepsList.map((step, index) => {
        const stepNum = index + 1
        const isCompleted = currentStep > stepNum
        const isActive = currentStep === stepNum

        return (
          <div key={step.stepId} className="step">
            <div className={`circle ${isActive ? 'active' : ''}`}>
              {isCompleted ? (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/travel-trip-steps-successfully-completed-img.png"
                  alt="tick"
                  className="tick-icon"
                />
              ) : (
                stepNum
              )}
            </div>
            <span className={`label ${isActive ? 'active-label' : ''}`}>
              {step.displayText}
            </span>
          </div>
        )
      })}
    </div>
  )
}

export default Sidebar
