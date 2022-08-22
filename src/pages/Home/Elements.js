import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const HomeContainer = styled.section`
  height: 100%;
  /* width: 100vw; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  overflow-x: hidden !important;
`;

export const HeroContainer = styled.div`
  height: 90vh;
  max-height: 100%;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow-x: hidden;
  background-color: ${(props) => props.theme.primary};

  @media screen and (max-width: 860px) {
    flex-direction: column;
  }

  @media screen and (max-width: 380px) {
    height: 100vh;
  }
`;

export const LeftSection = styled.div`
  flex: ${(props) => props.flex || "0.5"};
  height: 100%;
  padding: 5%;
  flex: 0.5;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  @media screen and (max-width: 860px) {
    text-align: center;
  }
`;

export const RightSection = styled.div`
width: 100%;
  flex: 0.5;
  height: 90%;
  display: flex;
  justify-content: ${(props) => props.justifyContent || "center"};
  align-items: ${(props) => props.alignItems || "center"};
  position: relative;
  padding: 5%;

  flex-direction: ${(props) => props.flexDirection || "row"};
  @media screen and (max-width: 860px) {
    width: 100%;
  }
`;

export const HeroTitle = styled.h2`
  color: ${(props) => props?.clr || props.theme.tertiary};
  font-size: 3rem;
  margin-bottom: 1vh;
  & span {
    color: ${(props) => props.theme.footer};
  }

  @media screen and (max-width: 860px) {
    font-size: 4rem;
    text-align: center;
  }
  @media screen and (max-width: 480px) {
    font-size: 2.25rem;
  }
`;

export const HeroDescription = styled.p`
  color: ${(props) => props.theme.tertiary};
  font-size: 1rem;
  line-height: 1.6rem;
  margin-bottom: 5vh;
`;

export const HeroImg = styled.img`
  max-width: 100%;
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
  top: 0;
`;

export const Section2Container = styled.div`
  height: 100%;
  width: 100vw;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  padding: 0 15px;
  position: relative;
  /* margin: 0 auto; */
  z-index: 2;
  background-color: ${(props) => props.theme.secondary};
  &::before {
    content: "";
    background-color: ${(props) => props.theme.primary};
    background-size: cover;
    opacity: 25%;
    background-position: center center;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    overflow: hidden;
    z-index: -1;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  @media screen and (max-width: 480px) {
    padding: 0 15px 1rem 15px;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 12px;
`;

export const Button = styled(NavLink)`
  cursor: pointer;
  border: none;
  outline: none;
  padding: 1rem;
  background-color: ${(props) => props.theme.tertiary};
  border-radius: 10px;
  color: ${(props) => props.theme.secondary};
  font-size: 1rem;
  text-decoration: none;
  align-self: flex-start;
  transition: all 0.3s ease;
  &:hover {
    color: ${(props) => props.theme.tertiary};
    background-color: ${(props) => props.theme.secondary};
  }
`;

export const Section3Container = styled.div`
  height: 100%;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  padding: 0 15px;
  position: relative;
  margin: 0 auto;
  z-index: 2;
  flex-direction: column;
  padding: 0 15px 1rem 15px;
`;

export const CollaboratorsContainer = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Collaboratos = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5vh;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  /* &:not(:nth-child(3)){
    margin-right: 3vw;
  } */
`;

export const ImgStyle = styled.img`
  width: ${(props) => props.$size};
  height: auto;
  vertical-align: middle;
  &:not(:last-child) {
    margin-right: 3vw;
  }
  @media screen and (max-width: 768px) {
    width: ${(props) => `30%`};
    &:not(:last-child) {
      margin-bottom: 3vh;
    }
  }
  /* margin-right: auto; */
  /* padding: 10%; */
`;
