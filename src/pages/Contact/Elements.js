import styled from "styled-components";
import { Form } from "formik";
export const ScreenContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow-x: hidden !important;
  background-color: ${(props) => props.theme.tertiary};
`;

export const ContactContainer = styled.div`
  height: 100%;
  width: 100vw;
  background-color: red;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  position: relative;
  flex-direction: column;
  background-color: ${(props) => props.theme.tertiary};
  @media screen and (max-width: 480px) {
    padding: 0 15px 1rem 15px;
  }
`;

// export const
export const StyledForm = styled(Form)`
  height: auto;
  transition: all 0.2s ease-in;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2% 20%;
  flex-direction: column;
  & .bold {
    font-weight: 500;
  }
  @media (max-width: 860px) {
    padding: 30px 1rem;
  }
`;

export const InputLabel = styled.label`
  font-size: 1rem;
  margin-top: 2vh;
`;
export const Input = styled.input`
  width: 100%;
  padding: 1%;
  outline: none;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.25);
`;
export const Error = styled.label`
  font-size: 0.8rem;
  color: #ff3333;
  margin-bottom: 1rem;
  margin-top: 0.5rem;
`;
export const TextArea = styled.textarea`
  width: 100%;
  padding: 1%;
  outline: none;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.25);
`;

export const Submit = styled.button`
  outline: none;
  border: none;
  border-radius: 8px;
  width: 100%;
  margin-top: 2vh;
  padding: 1rem 2rem;
  background-color: ${(props) =>
    !props.$disabled ? props.theme.primary : "gray"};
  color: ${(props) => props.theme.secondary};
  transition: all 0.3s ease;
  cursor: pointer;
  font-size: 1.1rem;
  pointer-events: ${(props) => (!props.$disabled ? "all" : "none")};
  color: ${(props) => props.theme.secondary};
  :hover {
    color: ${(props) => props.theme.primary};
    background-color: ${(props) => props.theme.secondary};
  }
`;

export const CardContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  flex: 0.25;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 24px;
  padding: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  @media screen and (max-width: 768px) {
    margin-bottom: 2vh;
  }
`;

export const CardImage = styled.img`
  flex: 0.3;
  width: 20%;
  align-self: center;
`;

export const CardTitle = styled.h3`
  text-align: center;
  align-self: center;
  font-size: 1.6rem;
  margin-top: 2vh;
`;

export const CardDescriptio = styled.div`
  text-align: center;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  & svg {
    margin-right: 1rem;
  }
  & a {
    text-decoration: none;
    color: ${(props) => props.theme.secondary};
  }
`;
export const HeroTitle = styled.h2`
  color: ${(props) => props.theme.secondary};
  font-size: 3rem;
  margin-bottom: 4vh;
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

export const TopContainer = styled.div`
  height: 100%;
  width: 100vw;
  padding: 5% 20% 0 20%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  @media (max-width: 860px) {
    padding: 30px 1rem;
  }
`;

export const Title = styled.h1`
  text-align: start;
`;

export const Title2 = styled.h3`
  text-align: start;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Description2 = styled.p`
  margin-top: 1vh;
  text-align: start;
`;
