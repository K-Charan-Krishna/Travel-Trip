import {Component} from 'react'
import Header from '../Header'
import BottomNav from '../BottomNav'
import './index.css'

class Home extends Component {
  goToTrip = () => {
    const {history} = this.props
    history.replace('/Newtrip')
  }

  render() {
    return (
      <div className="home-container">
        <Header />
        <div className="home-bottom-container">
          <div className="info-container">
            <h1 className="home-heading">Travel.Relax.Memories</h1>
            <p className="home-para">
              with travel trip you can experienc new travel and best tourist
              Destination
            </p>
            <button
              type="button"
              className="home-button"
              onClick={this.goToTrip}
            >
              Book a New Trip
            </button>
          </div>
          <div className="home-right">
            <img
              src="https://res.cloudinary.com/dkd9zrifr/image/upload/v1710859670/image_5_mbr5qa.png"
              className="home-img"
            />
          </div>
        </div>
        <BottomNav />
      </div>
    )
  }
}
export default Home
