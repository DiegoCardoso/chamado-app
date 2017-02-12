import React from 'react';
import { Redirect } from 'react-router-dom';

import LoginComponent from '../../components/Login';
import Loading from '../../components/Loading';
import { authenticate, isLoggedIn } from '../../utils/authentication';

class Login extends React.Component {

  constructor() {
    super();
    setTimeout(() => {
      this.setState({
        isLoggedIn: isLoggedIn(),
        loading: false
      });
    }, 300)
  }

  state = {
    loading: true,
    isLoggedIn: false,
    errorMessage: ''
  }

  onLoginSubmit = (email, password) => {

    this.setState({
      errorMessage: ''
    });

    if (email === '' || password === '') {
      return this.setState({
        errorMessage: 'E-mail/senha são obrigatórios'
      });
    }

    authenticate(email, password)
      .then(() => {
        this.setState({
          isLoggedIn: true
        })
      })
      .catch(({ code, message }) => {
        if (code === 'auth/invalid-email') {
          return this.setState({
            errorMessage: 'Formato em e-mail inválido'
          })
        }
        if (code === 'auth/wrong-password') {
          this.setState({
            errorMessage: 'E-mail/senha inválidos'
          })
        }
      });
  }
  render() {

    if (this.state.loading) {
      return <Loading />
    }

    const { from } = this.props.location.state || '/dashboard';
    if (this.state.isLoggedIn) {
      return (
        <Redirect to={from} />
      );
    }
    return (
      <LoginComponent
        onLoginSubmit={this.onLoginSubmit}
        errorMessage={this.state.errorMessage}
      />
    );
  }
}

export default Login;