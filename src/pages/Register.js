// import React, { useState } from 'react';
// import axios from 'axios';

// const RegisterForm = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // const handleSubmit = async (event) => {
//   //   event.preventDefault();

//   //   try {
//   //     const response = await axios.post('/api/register/', formData);
//   //     console.log(response.data.message); // Success message from backend
//   //   } catch (error) {
//   //     console.error('Registration error:', error);
//   //   }
//   // };

//   // const handleSubmit = async (event) => {
//   //   event.preventDefault();
  
//   //   try {
//   //     const response = await axios.post('/api/register/', formData);
//   //     // const response = await axios.post('register', formData);
//   //     console.log(response.data.message); // Success message from backend
//   //   } catch (error) {
//   //     console.error('Registration error:', error);
//   //     if (error.response) {
//   //       console.log('Response data:', error.response.data);
//   //       console.log('Response status:', error.response.status);
//   //     }
//   //   }
//   // };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
  
//     try {
//       const response = await axios.post('http://localhost:8000/api/register/', formData);
//       console.log(response.data.message); // Success message from backend
//     } catch (error) {
//       console.error('Registration error:', error);
//       if (error.response) {
//         console.log('Response data:', error.response.data);
//         console.log('Response status:', error.response.status);
//       }
//     }
//   };

//   return (
//     <div>
//       <h2>Register</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Username:</label>
//           <input
//             type="text"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//           />
//         </div>
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default RegisterForm;

// import React, { useState } from 'react';
// import axios from 'axios';

// function RegistrationForm() {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/api/register/', formData);
//       console.log('Registration successful:', response.data);
//       // Add code to redirect user or show a success message
//     } catch (error) {
//       console.error('Registration error:', error.response.data);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="username" placeholder="Username" onChange={handleChange} />
//       <input type="email" name="email" placeholder="Email" onChange={handleChange} />
//       <input type="password" name="password" placeholder="Password" onChange={handleChange} />
//       <button type="submit">Register</button>
//     </form>
//   );
// }

// export default RegistrationForm;

import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post('http://localhost:8000/api/register/', formData);
  //     console.log('Response:', response);
  //     console.log('Registration successful:', response.data);
  //     // Add code to redirect user or show a success message
  //   } catch (error) {
  //     console.error('Registration error:', error.response.data);
  //     console.error('Error:', error);
  //   }
  // };

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
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" placeholder="Username" onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} />
      {/* <Link to="/loginpage"><button type="submit">Register</button></Link> */}
      <button type="submit">Register</button>
      <Link to="/loginpage">Login Page</Link>
    </form>
    
  );
}

export default RegistrationForm;