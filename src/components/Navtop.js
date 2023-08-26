// import React , {useContext} from 'react'
import {NavLink ,Link, Outlet} from "react-router-dom"
// import AuthContext from '../context/AuthContext';
// import { Button } from 'react-bootstrap';
// import { Navbar, Nav, Dropdown} from 'rsuite';
// import ExploreIcon from '@rsuite/icons/Explore';
// import AdminIcon from '@rsuite/icons/Admin';
// import PlusIcon from '@rsuite/icons/Plus';
// import SettingIcon from '@rsuite/icons/Setting';
// import 'rsuite/dist/rsuite.min.css';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';


import 'bootstrap/dist/css/bootstrap.min.css';


export default function Navtop() {
    // const { user , logoutUser} = useContext(AuthContext);
    return (
        <div>
    <Navbar className="p-3 sticky-top" expand="lg" style={{ backgroundImage: 'linear-gradient(to bottom left, lightblue, royalblue)' }}>

                <Navbar.Brand><NavLink to="/">South City Shops</NavLink></Navbar.Brand>
            
                    
                    
                    {/* <Nav.Item><NavLink className="black" to="about">About Us</NavLink></Nav.Item> */}
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <NavDropdown  title="Navigation">
                            
                            <NavDropdown.Item><NavLink  to="staffhome" >Staff Home</NavLink></NavDropdown.Item>
                            <NavDropdown.Item><NavLink  to="stafflist" >Staff</NavLink></NavDropdown.Item>
                            <NavDropdown.Item><NavLink  to="brandslist" >Brands</NavLink></NavDropdown.Item>
                            <NavDropdown.Item><NavLink  to="storeslist">Stores</NavLink></NavDropdown.Item>
                            <NavDropdown.Item><NavLink  to="#">Items</NavLink></NavDropdown.Item>
                            {/* <NavDropdown.Item>   {user ? ( <Button className="me-auto mt-2" variant="secondary" onClick={logoutUser}>Logout</Button>
                            ) : (
                            <Button className="me-auto mt-2"  variant="secondary"><Link to="/loginpage">Login</Link></Button>
                            )
                            }</NavDropdown.Item> */}
                        </NavDropdown>
                    </Nav>

                    </Navbar.Collapse>
           
                {/* <div className="me-5" style={{float : "right"}}> */}
                {/* {user ? ( <Button className="me-auto mt-2" variant="secondary" onClick={logoutUser}>Logout</Button>
                    ) : (
                    <Button className="me-auto mt-2"  variant="secondary"><Link to="/loginpage">Login</Link></Button>
                    )
                    } */}
                {/* </div> */}
            </Navbar>
        </div>
    )
}
