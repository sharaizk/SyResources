import React from "react";
import {
  HomeContainer,
  LeftSection,
  HeroContainer,
  RightSection,
  HeroTitle,
  HeroDescription,
  HeroImg,
  Section2Container,
  Image,
  Button,
  Section3Container,
} from "./Elements";
import ReactHTMLParser from "react-html-parser";
import heroImg from "assets/heroImg.jpeg";
import TeamImg from "assets/team2.jpeg";

import { useTheme } from "styled-components";
import { Fade } from "react-reveal";
import ClientSlider from "components/ClientSlider";
const Home = () => {
  const theme = useTheme();
  const description =
    "We understand that finding the right energy deal for your business can be complicated and time-consuming. That's why we offer a one-stop-shop solution that simplifies the process and helps you save money. So why not let us take care of your energy needs today?";
  return (
    <HomeContainer>
      <HeroContainer>
        <LeftSection>
          <Fade left key={1000}>
            <HeroTitle>
              Our business is taking care of your <span>business.</span>
            </HeroTitle>
            <HeroDescription>{ReactHTMLParser(description)}</HeroDescription>

            <Button to="/about">Learn More About Us</Button>
          </Fade>
        </LeftSection>

        <RightSection>
          <Fade right key={1001}>
            <HeroImg src={heroImg} alt="" />
          </Fade>
        </RightSection>
      </HeroContainer>
      <Section3Container>
        <LeftSection flex="0.3">
          <HeroTitle clr={theme.secondary}>Our Collaborators</HeroTitle>
        </LeftSection>
        <RightSection flex="0.3">
          <ClientSlider />
        </RightSection>
      </Section3Container>
      <Section2Container>
        <LeftSection flex={"0.4"}>
          <Fade left key={1004}>
            <Image src={TeamImg} alt="Team Image" />
          </Fade>
        </LeftSection>
        <RightSection
          flex="0.5"
          justifyContent="center"
          alignItems="flex-start"
          flexDirection="column"
        >
          <Fade right key={1003}>
            <HeroTitle>What We Do?</HeroTitle>
            <HeroDescription>
              At Sy Resources, we pride ourselves on being one of the UK's
              leading independent energy brokerages. We have extensive
              experience in placing business contracts and providing support for
              telecommunication, billing, payments, and contract obligations of
              business energy for our clients. We are dedicated to providing our
              clients with the best possible service and support in all areas of
              business energy and telecoms.
            </HeroDescription>
            <Button to="/about">Learn More About Us</Button>
          </Fade>
        </RightSection>
      </Section2Container>
    </HomeContainer>
  );
};

export default Home;
