import {Component} from 'react'
import Cookies from 'js-cookie'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'

import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    isShow: false,
    isloginsucess: false,
    errormsg: '',
  }

  getname = event => {
    this.setState({username: event.target.value})
  }

  getpassword = event => {
    this.setState({password: event.target.value})
  }

  showHide = () => {
    this.setState(prev => ({
      isShow: !prev.isShow,
    }))
  }

  onSucess = jwt => {
    const {history} = this.props
    Cookies.set('jwt_token', jwt, {
      expires: 30,
    })
    history.replace('/')
    console.log(jwt)
  }

  sendRequest = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const url = 'https://apis.ccbp.in/login'
    const usedetails = {
      username,
      password,
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(usedetails),
    }
    const reaponce = await fetch(url, options)
    const data = await reaponce.json()
    console.log(data)
    if (reaponce.ok) {
      this.onSucess(data)
    } else {
      this.setState(prev => ({
        isloginsucess: !prev.isloginsucess,
        errormsg: data.error_msg,
      }))
    }
  }

  render() {
    const {username, password, isShow, isloginsucess, errormsg} = this.state
    console.log(username, password)
    return (
      <div className="container">
        <div className="loginForm">
          <h1 className="head">Travel Trip</h1>
          <form name="myform" onSubmit={this.sendRequest}>
            <label htmlFor="username" className="label">
              Username
            </label>
            <br />
            <input
              name="username"
              type="text"
              placeholder="Username"
              className="inputelement"
              value={username}
              onChange={this.getname}
            />
            <br />
            <label htmlFor="password" className="label">
              Password
            </label>
            <br />
            <div className="password inputelement">
              <input
                name="password"
                type={isShow ? 'text' : 'password'}
                placeholder="Password"
                className="pass-input"
                value={password}
                onChange={this.getpassword}
              />
              <button
                type="button"
                className="eye-button"
                onClick={this.showHide}
              >
                {isShow ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </button>
            </div>
            {isloginsucess && <p className="error">{errormsg}</p>}
            <button type="submit" className="button">
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default Login
