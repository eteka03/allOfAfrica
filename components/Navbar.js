import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div >
      <Navbar  color="white" light   expand="md">
        <NavbarBrand href="/" src=''><img style={{objectFit:'contain',width:'55px',height:'80%'}} src='/images/logo_transparent.png' title="logo" alt="logo" /></NavbarBrand>
        <NavbarToggler  onClick={toggle}  className="mr-2"/>
        <Collapse isOpen={isOpen} navbar>
          <Nav className='ml-auto'  navbar>
            <NavItem>
              <NavLink className="nav-style" href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-style" href="/discover">discover</NavLink>
            </NavItem>
         
          </Nav>
         
        </Collapse>
      </Navbar>

  <style jsx global>{`
  
  .nav-style{
      color:black;
      font-weight:bold;
  }
        
  
  `}</style>
    </div>


  );
}

export default NavBar;