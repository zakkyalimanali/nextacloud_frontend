import React from 'react'
import EmployeeImage from '../images/employeeimage.jpg'

function StaffHome() {
  return (
    <div className="HomeHero">
      <img className="LoginImage"  src={EmployeeImage} alt='employee_image'/>
      <div className="p-3 text-center HomeHeroText">
        <h1 className="HeroText">South Side Shoes Employee Homepage</h1> 
      </div>
    </div>
  )
}

export default StaffHome
