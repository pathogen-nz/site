import React, { PropTypes } from 'react'
import AuthService from '../../utils/AuthService'

export class Login extends React.Component {
  static propTypes = {
    location: PropTypes.object,
    auth: PropTypes.instanceOf(AuthService)
  }

  render() {
    const { auth } = this.props
    return (
      <div>
        <h2>Login</h2>
          <a className="btn btn-primary" onClick={auth.login.bind(this)}>Login</a>
      </div>
    )
  }
}

export default Login;
