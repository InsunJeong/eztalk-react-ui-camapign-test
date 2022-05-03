import React from 'react'
import { Link, useNavigate, useMatch } from 'react-router-dom'

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  CardSubtitle,
  FormGroup,
  // Form,
  FormFeedback,
  Input,
  Row,
  Col,
} from "reactstrap";

import { Formik, Form, Field } from 'formik'
import axios from 'axios'
import FormErrors from '../components/FormErrors'
import useAuth from '../hooks/useAuth'

function Login(props) {
  const navigate  = useNavigate();
  const isRegister = useMatch('/menu/register');
  const { login }  = useAuth();
  
  async function onSubmit(values, actions) {
    const userData = {
      email: "magaret@sk.com",
      token: "token1234",
      username: "magaretjo"
    }

    try {
      // const { data } = await axios.post(`http://naver.com/users${isRegister ? '' : '/login'}`, { user: values })

      const  data  =  { user: userData };
      login(data.user)
      navigate(props.location.pathname);

    } catch (error) {
      const { status, data } = error.response
      if (status === 422) {
        actions.setErrors(data.errors)
      }
    }
  }

  const loginInitialValues = { email: '', password: '' }



  function LoginFormik() {
    return (
      <Formik
      onSubmit={onSubmit}
      initialValues={isRegister ? { ...loginInitialValues, username: '' } : loginInitialValues}
      >
        {({ isSubmitting }) => (
          <>
            <FormErrors />
            <Form>
              {isRegister && (
                <fieldset className="form-group">
                  <Field
                    type="text"
                    name="username"
                    className="form-control form-control-lg"
                    placeholder="Your Name"
                  />
                </fieldset>
              )}
              <fieldset className="form-group">
                <Field type="email" name="email" className="form-control form-control-lg" placeholder="Email" />
              </fieldset>
              <fieldset className="form-group">
                <Field
                  type="password"
                  name="password"
                  className="form-control form-control-lg"
                  placeholder="Password"
                />  
              </fieldset>
              {isRegister && (
                <fieldset className="form-group">
                  <Field
                    type="password"
                    name="Password"
                    className="form-control form-control-lg"
                    placeholder="Confirm Password"
                  />
                </fieldset>
              )}              
              <button disabled={isSubmitting} type="submit" className="btn btn-round btn-lg btn-primary pull-xs-right">
                Sign {isRegister ? 'up' : 'in'}
              </button>

            </Form>
          </>
        )}
      </Formik> 
    )
  }

  return (
    <>
      <div className="content">
        <Row> 
          <Col><Card></Card></Col>
          <Col md="5">
            <Card color="danger" outline className="eztalk-outline-border">
              <CardHeader color="light">
                <CardSubtitle tag="h3">
                  <p></p>
                  <p>Sign-{isRegister ? 'up' : 'in'}</p>
                </CardSubtitle>
                <p className="title text-right">
                  {isRegister ? 
                    <Link to="/menu/login"> Have an account ? </Link> :
                    <Link to="/menu/register"> Need and account ? </Link>
                  } 
                </p>
              </CardHeader>
              <p />

              <CardBody color="light" className="eztalk-card-body" >
                <LoginFormik />                 
              </CardBody>
            </Card>
          </Col>
          <Col><Card></Card></Col>
        </Row>
      </div>

    </>
  )
  
}


export default Login
