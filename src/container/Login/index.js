import React from 'react';

import LoginComponent from '../../components/Login';
import { authenticate } from '../../utils/authentication';

class Login extends React.Component {

  state = {
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

    authenticate(email, password).catch(({ code, message }) => {
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
    return (
      <LoginComponent
        onLoginSubmit={this.onLoginSubmit}
        errorMessage={this.state.errorMessage}
      />
    );
  }
}

export default Login;