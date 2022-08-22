import styled from "styled-components";

export const ScreenContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  overflow-x: hidden !important;

`;

export const FAQsContainer = styled.div`
  height: 100%;
  width: 100vw;
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
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  @media screen and (max-width: 480px) {
    padding: 0 15px 1rem 15px;
  }
`;

export const RightSection = styled.div`
  flex: 0.5;
  height: 90%;
  display: flex;
  padding: 0 5%;

  justify-content: ${(props) => props.justifyContent || "center"};
  align-items: ${(props) => props.alignItems || "center"};
  position: relative;
  flex-direction: ${(props) => props.flexDirection || "row"};
  @media screen and (max-width: 860px) {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    order: ${(props) => props.$order || 1};
  }
`;
export const LeftSection = styled.div`
  flex: ${(props) => props.flex || "0.5"};
  height: 100%;
  padding: 2% 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 860px) {
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    order: ${(props) => props.$order || 2};
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;
