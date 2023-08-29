import React , {useContext} from 'react'
import {NavLink ,Link, Outlet} from "react-router-dom"
import AuthContext from '../context/AuthContext';
import { Button } from 'react-bootstrap';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';


import 'bootstrap/dist/css/bootstrap.min.css';


export default function Navtop() {
    const { user , logoutUser} = useContext(AuthContext);
    return (
        <div>
    <Navbar className="p-3 sticky-top" expand="lg" style={{ backgroundImage: '#F4F5F7' }}>

                <Navbar.Brand><NavLink to="/">South City Shops</NavLink></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>

                    <NavLink className="mx-2" style={{color: '#E15047' , textDecoration:'none'}}  to="staffhome" >Employee Home</NavLink>
                    <NavLink  className="mx-2" style={{color: '#E15047' , textDecoration:'none'}} to="stafflist" >Staff Detail</NavLink>
                    <NavLink  className="mx-2" style={{color: '#E15047' , textDecoration:'none'}} to="brandslist" >Brands</NavLink>
                    <NavLink   className="mx-2" style={{color: '#E15047' , textDecoration:'none'}}to="storeslist">Stores</NavLink>
                    <NavLink   className="mx-2" style={{color: '#E15047' , textDecoration:'none'}}to="itemslist">Items</NavLink>
                    </Nav>
                    {user ? ( <Button className="me-auto mt-2" variant="secondary" onClick={logoutUser}>Logout</Button>
                    ) : (
                    <Button className="me-auto mt-2"  variant="secondary"><Link to="/loginpage">Login</Link></Button>
                    )
                    }

                    </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
