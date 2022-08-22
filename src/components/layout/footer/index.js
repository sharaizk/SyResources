import React from "react";
import {
  ContainerTitle,
  FooterContainer,
  LinksContainer,
  StyledLink,
  ContactLabel,
  SecondContainer,
  Logo,
} from "./Element";
import logo from "assets/logo2.png";

const Footer = () => {
  return (
    <FooterContainer>
      <SecondContainer>
        <LinksContainer>
          <Logo src={logo} alt="logo" />
          <ContactLabel>
            <span>All Rights Reserved</span>
          </ContactLabel>
        </LinksContainer>
        <LinksContainer>
          <ContainerTitle>Company</ContainerTitle>
          <StyledLink to="/about">About Us</StyledLink>
          <StyledLink to="/faqs">FAQs </StyledLink>
          <StyledLink to="/complaints-handling-procedure">Complaint Handling</StyledLink>
        </LinksContainer>
        <LinksContainer>
          <ContainerTitle>Site Links</ContainerTitle>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/about">About Us</StyledLink>
          <StyledLink to="/services">Services</StyledLink>
          <StyledLink to="/complaints-handling-procedure">Complaints</StyledLink>
          <StyledLink to="/contact">Contact Us</StyledLink>
        </LinksContainer>
        <LinksContainer>
          <ContainerTitle>Contact Us</ContainerTitle>
          <ContactLabel>
            Address:
            <br />
            <span>
              Rn Marketing Solutions Ltd, 140B Queens Road, Beeston, Nottingham,
              NG9 2FF
            </span>
          </ContactLabel>
          <ContactLabel>
            Email:
            <br />
            <span>
              <a
                href="mailto:rnmarketing.solutions96@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                rnmarketing.solutions96@gmail.com
              </a>
            </span>
          </ContactLabel>
          <ContactLabel>
            Phone:
            <br />
            <span>01158883499</span>
          </ContactLabel>
        </LinksContainer>
      </SecondContainer>
    </FooterContainer>
  );
};

export default Footer;
