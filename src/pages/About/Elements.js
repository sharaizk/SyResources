import styled from "styled-components";

export const AboutContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

export const Row = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: ${(props) => props.flexDirection || "row"};
  margin: 5vh 0;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    padding: 0 1rem;
  }
`;

export const Col = styled.div`
  flex: ${(props) => props.flex};
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: ${(props) => props.flexDirection || "row"};
`;

export const DetailContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: #fff;
  padding: 5rem 2rem;
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
`;

export const Description = styled.p`
  font-size: 1rem;
  text-align: ${(props) => props.textAlign || "start"};
  line-height: 1.5rem;
  margin-top: 2vh;
`;
