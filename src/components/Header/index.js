import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const logout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <div className="header">
      <h1 className="header-head">Travel Trip</h1>
      <div className="links">
        <Link to="/">
          <p className="mole-li">Home</p>
        </Link>
        <Link to="/MyTrips">
          <p className="mole-li">MyTrips</p>
        </Link>
      </div>
      <button type="button" className="header-button" onClick={logout}>
        Logout
      </button>
    </div>
  )
}

export default withRouter(Header)
