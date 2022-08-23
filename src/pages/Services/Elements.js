import styled from "styled-components";

export const AboutContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  position: relative;

  &::before {
    content: "";
    height: 100%;
    background-image: ${(props) => `url(${props.bg})`};
    background-size: contain;
    background-position: center center;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0%;
    left: 0px;
    overflow: hidden;
    z-index: -1;
  }
`;

export const Row = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5vh 0;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    padding: 0 1rem;
  }
`;

export const Col = styled.div`
  height: 100%;
  width: 100%;
  flex: ${(props) => props.flex};

  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2vh 0;
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const DetailContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: #fff;
  padding: 2rem 2rem;
  border-radius: 12px;
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  flex-direction: ${(props) => props.flexDirection || "column"};
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Title = styled.h5`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 2vh;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  vertical-align: middle;
  @media screen and (max-width: 768px) {
    width: 50%;
  }
`;

export const Description = styled.p``;
