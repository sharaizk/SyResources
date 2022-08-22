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
    "Business Services Simplified With Only a Few Clicks. We are a group of specialists whom each brings a variety of abilities and knowledge to your business needs. Your One-Stop-Shop for business savings.";
  return (
    <HomeContainer>
      <HeroContainer>
        <LeftSection>
          <Fade left key={1000}>
            <HeroTitle>
              Business Services Simplified With Only a <span>Few Clicks</span>
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
          {/* <Fade bottom> */}
          {/* <CollaboratorsContainer> */}
          <ClientSlider />
          {/* </CollaboratorsContainer> */}
          {/* </Fade> */}
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
            <HeroTitle>About Us</HeroTitle>
            <HeroDescription>
              Our company is dedicated to providing top-notch customer care with
              the goal of establishing long-term relationships with all UK
              suppliers while passing advantages through to the consumer by
              providing cost-effective energy solutions that satisfy their
              business demands. Our committed team of experts constantly
              monitors the market to improve efficiency and customer service.
            </HeroDescription>
            <Button to="/about">Learn More About Us</Button>
          </Fade>
        </RightSection>
      </Section2Container>
    </HomeContainer>
  );
};

export default Home;
