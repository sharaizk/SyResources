import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const PDFConatiner = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding: 0% 10% 5% 10%;
  overflow-x: hidden !important;

`;

export const Title = styled.h3``;
export const Description = styled.p`
  /* margin-bottom: 4vh; */
`;

export const ListContainer = styled.ul`
  list-style: disc;
  margin-top: 3vh;
`;

export const List = styled.li`
  margin-left: 2vw;
  font-weight: 600;
`;

export const ContactTitle = styled.label`
  color: ${props=>props.theme.primary};
`;
export const ContactEmail = styled.a`
  color: #7c9fda;
  color: ${props=>props.theme.primary};

`;

export const Gap=styled.div`
width: 100%;
margin-bottom: 4vh;
`

export const NavBtn = styled(NavLink)`
  cursor: pointer;
  border: none;
  outline: none;
  padding: 1.5% 5%;
  background-color: ${(props) => props.theme.secondary};
  border-radius: 10px;
  color: ${(props) => props.theme.primary};
  font-size: 1rem;
  text-decoration: none;
  margin-top: 5vh;
  transition: all 0.3s ease;
  &:hover {
    color: ${(props) => props.theme.secondary};
    background-color: ${(props) => props.theme.primary};
  }
`;
