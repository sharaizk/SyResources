import React from "react";
import {
  SidebarContainer,
  SidebarMenu,
  NavItem,
  SidebarLink,
} from "./Elements";
const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarMenu>
        <NavItem>
          <SidebarLink
            onClick={() => {
              toggle();
            }}
            to="/home"
          >
            Home
          </SidebarLink>
        </NavItem>
        <NavItem>
          <SidebarLink
            onClick={() => {
              toggle();
            }}
            to="/about"
          >
            About
          </SidebarLink>
        </NavItem>
        <NavItem>
          <SidebarLink
            to="/services"
            onClick={() => {
              toggle();
            }}
          >
            Services
          </SidebarLink>
        </NavItem>
        <NavItem>
          <SidebarLink
            to="/services"
            onClick={() => {
              toggle();
            }}
          >
            Services
          </SidebarLink>
        </NavItem>
        <NavItem>
          <SidebarLink
            onClick={() => {
              toggle();
            }}
            to="/complaints-handling-procedure"
          >
            Complaints
          </SidebarLink>
        </NavItem>
        <NavItem>
          <SidebarLink
            onClick={() => {
              toggle();
            }}
            to="/contact"
          >
            Contact Us
          </SidebarLink>
        </NavItem>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
