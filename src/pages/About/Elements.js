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
  width: 70%;
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
  flex: ${(props) => props.flex};
  height: 100%;
  width: 100%;
`;

export const DetailContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: #fff;
  padding: 5% 3%;
  border-radius: 12px;
`;

export const Title = styled.label`
  font-size: 20px;
  font-weight: 600;
`;
