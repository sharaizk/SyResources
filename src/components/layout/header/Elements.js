import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavbarContainer = styled.nav`
  background-color: ${(props) => props.theme.tertiary};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  width: 100%;
  z-index: 10;
  transition: 0.2s all ease-out;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    transition: 0.2s all ease;
  }
`;

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  z-index: 1;
  width: 100%;
  padding: 0 50px;
  @media screen and (max-width: 480px) {
    padding: 0 25px;
  }
`;

export const BannerContainer = styled(NavLink)`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  color: ${(props) => props.theme.secondary};
  font-size:1.5rem;
`;

export const NavBanner = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: auto;
  height: 100%;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-bottom: 0px !important;
  @media screen and (max-width: 870px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavLinks = styled(NavLink)`
  color: ${(props) => props.theme.secondary};
  display: flex;
  font-size: 1.2rem;
  font-weight: 400;
  align-items: center;
  text-decoration: none;
  white-space: nowrap;
  padding: 0 1rem;
  height: 100%;
  transition: all 0.05s ease-in;
  :hover {
    color: ${(props) => props.theme.primary};
  }
  &.active {
    color: ${(props) => props.theme.primary};
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 870px) {
    transition: 0.2s translate ease;
    display: block;
    position: absolute;
    color: #424242;
    top: 0;
    right: 0;
    transform: translate(-100%, 45%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
export const SidebarContainer = styled.aside`
  display: none;
  @media screen and (max-width: 870px) {
    z-index: ${({ isOpen }) => (isOpen ? 10 : -1)};
    width: 100%;
    height: ${({ isOpen }) => (isOpen ? "50vh" : "0vh")};
    position: fixed;
    background: ${(props) => props.theme.tertiary};
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${(props) => props.theme.secondary};
    justify-content: center;
    flex-direction: column;
    right: 0%;
    opacity: 100%;
    opacity: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
    top: ${({ isOpen }) => (isOpen ? "7%" : "7%")};
    transition: 0.3s ease;
  }

  @media screen and (max-width: 480px) {
    height: ${({ isOpen }) => (isOpen ? "70vh" : "0vh")};
    top: ${({ isOpen }) => (isOpen ? "10%" : "7%")};
  }
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 70px);
  text-align: center;
  list-style: none;

  @media screen and(max-width:820px) {
    grid-template-rows: repeat(6, 60px);
  }
`;
export const SidebarLink = styled(NavLink)`
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: ${(props) => props.theme.secondary};

  :hover {
    color: ${(props) => props.theme.secondary};
  }
  @media screen and (max-width: 480px) {
    font-size: 1.25rem;
  }
`;
