import React , {useContext} from 'react'
import AuthContext from '../context/AuthContext'
import { Form } from 'react-bootstrap'
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom'
import LoginImage from '../images/loginimage.jpg'

const LoginPage = () => {
  let {loginUser} = useContext(AuthContext)
  console.log(loginUser)
  return (
    <div className="HomeHero">
      <img className="LoginImage"  src={LoginImage} alt='home_image'/>
        <div className="mt-5 LoginHeroText">
        <h1 className="mt-3 HeroText" style={{textAlign: 'center'}}>Login</h1>
          <div className="row">
            <div className="col-md-6 mx-auto">


              <Form onSubmit={loginUser}>
                <Form.Label className="mt-3">Username</Form.Label>
                <Form.Control
                      type="text"
                      placeholder="Enter Username"
                      name ="username"
 
                    />

            
                <Form.Label className="mt-3">Password</Form.Label>
                  <Form.Control
                      type="password"
                      placeholder="Enter Password"
                      name="password"
                      />
  
                <div className="justify-content-center text-center">
                  <Button className="mb-3 mt-3 me-3" type="submit">Submit</Button>
                  <Link className="me-3"to='/register' ><Button variant='warning'>Employee Registation</Button></Link>
                </div>  

              </Form>
            </div>
          </div>
        </div>
    </div>
  )
}

export default LoginPage
