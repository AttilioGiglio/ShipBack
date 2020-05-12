import React, { Component } from 'react';
import './Login.css';
import { Button, Form, Label, Input, FormGroup } from 'reactstrap';
// https://www.npmjs.com/package/reactstrap 
import {Link} from 'react-router-dom';

class LogIn extends Component {
    render() {
      return (
        <Form className='login-form pt-5'>
          <h1>
           {/* Busque varios nombre de sitios pero todos los .com estan tomados
           el más original que se me ocurrio, puede verificarse su disponibilidaden https://www.start.biz/business_names/search*/}
          </h1>
          <h2 className='text-center mb-3'>Welcome</h2>
          <div className='p-2'>
            <FormGroup>
              <div className='p-2'>
              <Label>Email</Label>
              <Input type='email' placeholder='Email' />
              </div>
              <div className='p-2'>
              <Label>Password</Label>
              <Input type='password' placeholder='Password' />
              </div>
            </FormGroup>
            <Link to="/Navbar"><Button className='btn-lg btn-dark btn-block'>Login</Button></Link>
            <div className></div>
          </div>
          <div className='text-center'>
            <div className='p-2'>
            <a href='/sign-up'>Sign up</a>
            <span className='p-2'>|</span>
            <a href='/sign-up'>Forgot Password</a>
            </div>
          </div>
        </Form>
      );
    }
  }
  
  export default LogIn;
  