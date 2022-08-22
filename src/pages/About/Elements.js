import styled from "styled-components";

export const AboutContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

export const AboutUsContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  position: relative;
  z-index: 2;
  background-color: ${(props) => props.theme.tertiary};
  &::before {
    content: "";
    background-image: ${(props) => `url(${props.bg})`};
    background-size: contain;
    background-position: center center;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    overflow: hidden;
    z-index: -1;
    filter: blur(8px);
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  @media screen and (max-width: 480px) {
    padding: 0 15px 1rem 15px;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  @media screen and (max-width: 480px) {
    padding: 0 15px 1rem 15px;
  }
`;

export const LeftSection = styled.div`
  flex: ${(props) => props.flex || "0.5"};
  height: 100%;
  padding: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 860px) {
    text-align: center;
  }

  @media screen and (max-width:768px){
    order: 1;
  }
`;

export const RightSection = styled.div`
  flex: 0.5;
  height: 90%;
  display: flex;
  justify-content: ${(props) => props.justifyContent || "center"};
  align-items: ${(props) => props.alignItems || "center"};
  position: relative;
  flex-direction: ${(props) => props.flexDirection || "row"};
  @media screen and (max-width: 860px) {
    width: 100%;
  }
  @media screen and (max-width:768px){
    order: 2;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: ${props=>props.border || '0'};
`;

export const HeroTitle = styled.h2`
  color: ${(props) => props.theme.secondary};
  font-size: 3rem;
  margin-bottom: 1vh;
  & span {
    color: ${(props) => props.theme.tertiary};
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
  color: ${(props) => props.theme.secondary};
  font-size: 1rem;
  line-height: 1.6rem;
  margin-bottom: 1vh;
`;
