import React from "react";
import {
  AboutContainer,
  AboutUsContainer,
  RightSection,
  LeftSection,
  Image,
  HeroDescription,
  HeroTitle,
} from "./Elements";
import BreadCrumb from "components/BreadCrumb";
import TeamImg from "assets/team2.png";
import bg2 from "assets/bg2.svg";
import bg3 from "assets/bg3.svg";

const About = () => {
  return (
    <AboutContainer>
      <BreadCrumb />
      <AboutUsContainer bg={bg2}>
        <LeftSection flex={"0.4"}>
          <Image src={TeamImg} alt="Team Image" />
        </LeftSection>
        <RightSection
          flex="0.5"
          justifyContent="center"
          alignItems="flex-start"
          flexDirection="column"
        >
          <HeroTitle>About</HeroTitle>
          <HeroDescription>
            Our company is dedicated to providing top-notch customer care with
            the goal of establishing long-term relationships with all UK
            suppliers while passing advantages through to the consumer by
            providing cost-effective energy solutions that satisfy their
            business demands. Our committed team of experts constantly monitors
            the market to improve efficiency and customer service.
            <br />
            Our business operates independently and adheres to an open-book
            philosophy, allowing us to provide the business sector with free,
            unbiased guidance on practical ways to cut the price per energy
            unit. Our company helps its clients make educated decisions that
            save them money on gas, electricity, card machines, and
            telecommunications and increase the efficiency of their businesses
            by tracking and analyzing the constantly changing markets.
          </HeroDescription>
        </RightSection>
      </AboutUsContainer>
      <AboutUsContainer>
        <RightSection
          flex="0.5"
          justifyContent="center"
          alignItems="flex-start"
          flexDirection="column"
        >
          <HeroTitle>Prices Comparison</HeroTitle>
          <HeroDescription>
            We provide the most extensive and cutting-edge array of energy
            solutions available since we have been a recognized leader in our
            industry. Our professionals are at the forefront of identifying and
            implementing the most recent energy management solutions. They
            carefully assess and analyze the most affordable gas, electricity,
            card machines and telecommunications  prices available.
          </HeroDescription>
        </RightSection>
        <LeftSection flex={"0.4"}>
          <Image
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Team Image"
            border={"10px"}
          />
        </LeftSection>
      </AboutUsContainer>
      <AboutUsContainer bg={bg3}>
        <LeftSection flex={"0.5"}>
          <Image
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Team Image"
            border={"10px"}
          />
        </LeftSection>
        <RightSection
          flex="0.4"
          justifyContent="center"
          alignItems="flex-start"
          flexDirection="column"
        >
          <HeroTitle>Business Industry Resources</HeroTitle>
          <HeroDescription>
            We are a group of specialists who each offer a variety of knowledge
            and expertise to your business. Our team at "Rn Marketing Solutions"
            is strong, and as a result, we firmly trust in our ability to
            deliver. With over five years of expertise, we provide objective
            counsel to our clients to help them save money on their business
            services.
          </HeroDescription>
        </RightSection>
      </AboutUsContainer>
    </AboutContainer>
  );
};

export default About;
