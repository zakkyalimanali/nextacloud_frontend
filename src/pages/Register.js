import React, { useState } from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { Button} from "react-bootstrap";
import RegistrationImage from '../images/registrationpage.jpg'

axios.defaults.baseURL = 'http://localhost:8000';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/register/', formData);
      console.log('Response:', response);
  
      if (response && response.data) {
        console.log('Registration successful:', response.data);
        // Add code to redirect user or show a success message
      } else {
        console.error('Registration response does not contain data:', response);
      }
    } catch (error) {
      console.error('Registration error:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="HomeHero">
      <img className="HomeImage"  src={RegistrationImage} alt='registration_image'/>
      


      <div className="p-3 text-center HomeHeroText">
       <h2 className="HeroText">Employee Registration</h2>
      <Form onSubmit ={handleSubmit}>
        <Form.Label className="mt-3">Username</Form.Label>
        <Form.Control
            type="text"
            placeholder="Enter Username"
            name ="username"
            value={formData.username}
            onChange={handleChange}
        
          />
        <Form.Label className="mt-3">Email</Form.Label>
        <Form.Control
            type="email"
            placeholder="Enter Email"
            name ="email"
            value={formData.email}
             onChange={handleChange}
        
          />
   
        <Form.Label className="mt-3">Password</Form.Label>
        <Form.Control
            type="password"
            placeholder="Enter Password"
            name ="password"
            value={formData.password}
             onChange={handleChange}
        
          />
          <div>
          <Button className="me-3 mt-3" type="submit">Register</Button>
         <Link  to="/loginpage"><Button variant="warning" className="mt-3">Login Page</Button></Link>
          </div>


      

      </Form>


     </div>
    </div>




    
  );
}

export default RegistrationForm;