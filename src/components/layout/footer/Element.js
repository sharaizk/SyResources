import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  width: 100%;
  height: 48vh;
  padding: 2% 10%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.secondary};

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: 100%;
  }
`;

export const SecondContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LinksContainer = styled.div`
  flex: 0.2;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const ContainerTitle = styled.label`
  color: ${(props) => props.theme.footer};
  font-size: 1.3rem;
  margin-bottom: 20px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.tertiary};
  opacity: 50%;
`;

export const ContactLabel = styled.label`
  text-decoration: none;
  color: ${(props) => props.theme.footer};

  & span {
    color: ${(props) => props.theme.tertiary};

    opacity: 50% !important;

    & a {
      text-decoration: none;
      color: ${(props) => props.theme.tertiary};

    }
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  border: 1px solid rgba(255, 255, 255, 0.5);
`;

export const Logo = styled.img`
  width: 70%;
  vertical-align: middle;
`;
