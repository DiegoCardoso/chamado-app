import React, { PropTypes } from 'react';

import Container from '../Container';
import Panel, { PanelHeaderLogin } from '../Panel';

import { Field, Input, InputIcon } from '../Field';
import { Button } from '../Button';
import { ErrorMessage } from '../Messages';

import logo from '../../images/logo.svg';
import userIcon from '../../images/user-icon.svg';
import passwordIcon from '../../images/password-icon.svg';

class Login extends React.Component {

  submitLogin = (evt) => {
    evt.preventDefault();
    const email = evt.target.email.value;
    const password = evt.target.password.value;

    this.props.onLoginSubmit(email, password);
  }

  render() {
    return (
      <Container dark>
        <form onSubmit={this.submitLogin}>
          <Panel>
            <PanelHeaderLogin>
              <img src={logo} className="App-logo" alt="logo" width="60%" />
            </PanelHeaderLogin>
            {this.props.errorMessage && <ErrorMessage>{this.props.errorMessage}</ErrorMessage>}
            <Field>
              <InputIcon>
                <img src={userIcon} alt="logo" width="24px" />
              </InputIcon>
              <Input type="email" name="email" placeholder="usuário" />
            </Field>

            <Field>
              <InputIcon>
                <img src={passwordIcon} alt="logo" width="24px" />
              </InputIcon>
              <Input type="password" name="password" placeholder="senha" />
            </Field>
          </Panel>
          <Button light type="submit" >
            Entrar
        </Button>
        </form>
      </Container>
    );
  }
}

Login.propTypes = {
  onLoginSubmit: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
}

export default Login;