import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {AiOutlineHome} from 'react-icons/ai'
import {BsSuitcase} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import './index.css'

const BottomNav = () => (
  <div className="bottom-nav">
    <Link
      to="/"
      className={({isActive}) => (isActive ? 'nav-item active' : 'nav-item')}
    >
      <AiOutlineHome size={24} />
    </Link>
    <Link
      to="/MyTrips"
      className={({isActive}) => (isActive ? 'nav-item active' : 'nav-item')}
    >
      <BsSuitcase size={24} />
    </Link>
    <Link
      to="/login"
      className={({isActive}) => (isActive ? 'nav-item active' : 'nav-item')}
    >
      <FiLogOut size={24} />
    </Link>
  </div>
)

export default BottomNav
