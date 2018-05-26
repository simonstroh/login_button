class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleEmail = this.handleEmail.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
  }
  handleSubmit(e) {
    e.preventDefault()
    var email = this.state.email
    var password = this.state.password
    var closeModal = this.props.closeModal
    fetch('/users').then(function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' + response.status);
        return;
      }
      response.json().then(body => body.forEach(item => {
        if (item.password === password && item.email === email) {
          closeModal()
        }
      }))
    })
  }
  handleEmail(e) {
    this.setState({email: e.target.value})
  }
  handlePassword(e) {
    this.setState({password: e.target.value})
  }
  render() {
    return(
      <div style={this.props.styles}>
        <form onSubmit={this.handleSubmit}>
          <p>Email</p>
          <input id="email" type="text" onChange={this.handleEmail} />
          <p>Password</p>
          <input id="password" type="password" onChange={this.handlePassword} />
          <input type="submit" />
        </form>
        <br />
        <p>If you haven't already created an account, register below:</p>
        <button onClick={this.props.showNext}>Register</button>
        <button onClick={this.props.closeModal}>Return</button>
      </div>
    )
  }
}

class RegisterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFirstName = this.handleFirstName.bind(this)
    this.handleLastName = this.handleLastName.bind(this)
    this.handleEmail = this.handleEmail.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
  }
  handleSubmit(e) {
    e.preventDefault()
    var json = {
      name: this.state.firstname + ' ' + this.state.lastname,
      email: this.state.email,
      password: this.state.password
    }
    console.log(json)
    fetch('/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(json)
    })
  }
  handleFirstName(e) {
    this.setState({firstname: e.target.value})
  }
  handleLastName(e) {
    this.setState({lastname: e.target.value})
  }
  handleEmail(e) {
    this.setState({email: e.target.value})
  }
  handlePassword(e) {
    this.setState({password: e.target.value})
  }
  render() {
    return (
      <form style={this.props.styles} onSubmit={this.handleSubmit}>
        <button onClick={this.props.showPrevious}>Back to Login</button>
        <h5></h5>
        <p>Thank you for creating an account with us, please enter your name and email address and create a password.</p>
        <p>First Name</p>
        <input type="text" onChange={this.handleFirstName}/>
        <p>Last Name</p>
        <input type="text" onChange={this.handleLastName}/>
        <p>Email</p>
        <input type="text" onChange={this.handleEmail}/>
        <p>Password</p>
        <input type="password" onChange={this.handlePassword}/>
        <input type="submit" />
      </form>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      styles: {
        left: '-1299px'
      },
      registerFormStyles: {
        display: 'none'
      },
      loginFormStyles: {
        display: 'block'
      }
    }
    this.beginLogin = this.beginLogin.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
  }
  beginLogin() {
    this.setState({styles: {left: '0', height: 'auto'}})
  }
  closeModal() {
    this.setState({styles: {display: 'none'}})
  }
  next() {
    this.setState({loginFormStyles: {display: 'none'}})
    this.setState({registerFormStyles: {display: 'block'}})
  }
  previous(e) {
    e.preventDefault()
    this.setState({loginFormStyles: {display: 'block'}})
    this.setState({registerFormStyles: {display: 'none'}})
  }
  render() {
    return (
      <div>
        <input onClick={this.beginLogin} type="submit" value="Account" />
        <div className="grit" id="pop-up" style={this.state.styles}>
          <span onClick={this.closeModal} id="close-pop-up">&#10005;</span>
          <span>Account</span>
          <h5>enter your account information or register here</h5>
          <LoginForm closeModal={this.closeModal} showNext={this.next} styles={this.state.loginFormStyles}/>
          <RegisterForm showPrevious={this.previous} styles={this.state.registerFormStyles} />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
