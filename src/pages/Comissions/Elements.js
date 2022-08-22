import styled from "styled-components";

export const ScreenContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

export const ComissionContainer = styled.div`
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
  padding: 5% 0% 5% 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 860px) {
    text-align: center;
  }

  @media screen and (max-width: 768px) {
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
  padding: 5%;
  flex-direction: ${(props) => props.flexDirection || "row"};
  @media screen and (max-width: 860px) {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    order: 2;
  }
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

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 20px;
`;

export const HeroDescription = styled.p`
  color: ${(props) => props.theme.secondary};
  font-size: 1.3rem;
  line-height: 1.6rem;
  margin-bottom: 1vh;
  font-weight: 300;
  text-align: justify;
`;
