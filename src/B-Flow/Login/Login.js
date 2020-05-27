import React, { useCallback, useContext } from 'react';
import './Login.css';
import { Button, Form, Label, Input, FormGroup } from 'reactstrap';
// https://www.npmjs.com/package/reactstrap 
import { Link } from 'react-router-dom';
import { ReactComponent as ReactLogo } from '../../imagenes/Logo.svg';
import FireBase from '../../FireBase/fireBase.js';
import { withRouter, Redirect } from "react-router";
import {AuthContext} from '../FBase/authentication.js'

const LogIn = ({ history }) => {
  const handleLogIn = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await FireBase
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/navbar" />;
  }

  return (
    <div className='body'>
      <Form onSubmit={handleLogIn} className='login-form pt-5'>
        <div className='logo'>
          <ReactLogo />
        </div>
        <div className='p-2'>
          <FormGroup>
            <div className='p-2'>
              <Label>Username or Email</Label>
              <Input type='email' name='email' placeholder='Email' />
            </div>
            <div className='p-2'>
              <Label>Enter your password</Label>
              <Input type='password' name='password' placeholder='Password' />
            </div>
          </FormGroup>
          <Link to="/navbar"><Button onClick={() => FireBase.auth().signOut()} type='submit' className='btn-lg btn-dark btn-block'>Login</Button></Link>
          <div className></div>
        </div>
        <div className='text-center'>
          <div className='p-2'>
            <a href='/sign-up'>Sign up</a>
            <span className='p-2'>|</span>
            <a href='/sign-up'>Forgot Password?</a>
          </div>
        </div>
      </Form>
    </div>
  );
}


export default withRouter(LogIn);
