import React from "react";
import {
  NavbarContainer,
  NavBanner,
  NavMenu,
  NavItem,
  NavLinks,
  MobileIcon,
  Navbar,
} from "./Elements";
import Hamburger from "hamburger-react";
import logoSet1 from "assets/logo1.png";
const Nav = ({ isOpen, toggle }) => {
  return (
    <NavbarContainer>
      <Navbar>
        <NavBanner src={logoSet1} alt="logo" />
        <MobileIcon>
          <Hamburger size={25} toggled={isOpen} toggle={toggle} />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="/">Home</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/about">About</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/services">Services</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/faqs">FAQs</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/complaints-handling-procedure">Complaints</NavLinks>
          </NavItem>
        </NavMenu>
        <NavMenu>
          <NavItem>
            <NavLinks to="/contact">Contact Us</NavLinks>
          </NavItem>
        </NavMenu>
      </Navbar>
    </NavbarContainer>
  );
};

export default Nav;
