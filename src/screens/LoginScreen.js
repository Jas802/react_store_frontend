import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { login } from '../actions/userActions';
import FormContainer from '../components/FormContainer'

function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return <FormContainer>Login Screen</FormContainer>;
}

export default LoginScreen;
