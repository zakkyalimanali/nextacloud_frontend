import React from 'react'
import { Link } from 'react-router-dom'
import { Button} from "react-bootstrap";
import HomeImage from '../images/homepageimage.jpg'

function PublicHome() {
  return (
    <div className="HomeHero">
      <img className="HomeImage"  src={HomeImage} alt='home_image'/>
      <div className="p-3 text-center HomeHeroText">
        <h1 className="HeroText">South Side Shoes</h1>
          <div>
          <Link to="loginpage"><Button variant='warning'>Login</Button></Link>
          </div>
          
      </div>
      
    </div>
  )
}

export default PublicHome
