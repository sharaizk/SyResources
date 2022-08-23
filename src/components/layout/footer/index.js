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
          <StyledLink to="/complaints-handling-procedure">
            Complaint Handling
          </StyledLink>
        </LinksContainer>
        <LinksContainer>
          <ContainerTitle>Site Links</ContainerTitle>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/about">About Us</StyledLink>
          <StyledLink to="/services">Services</StyledLink>
          <StyledLink to="/complaints-handling-procedure">
            Complaints
          </StyledLink>
          <StyledLink to="/contact">Contact Us</StyledLink>
        </LinksContainer>
        <LinksContainer>
          <ContainerTitle>Contact Us</ContainerTitle>
          <ContactLabel>
            Address:
            <br />
            <span>
              Kilroy House, 400 Kilroy House, 400, Roding Lane South, Woodford
              Green, England, IG8 8EY
            </span>
          </ContactLabel>
          <ContactLabel>
            Email:
            <br />
            <span>
              <a
                href="mailto:syresourcesltd@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                syresourcesltd@gmail.com
              </a>
            </span>
          </ContactLabel>
          <ContactLabel>
            Phone:
            <br />
            <span>07576503089</span>
          </ContactLabel>
        </LinksContainer>
      </SecondContainer>
    </FooterContainer>
  );
};

export default Footer;
