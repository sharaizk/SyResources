import React from "react";
import { AboutContainer, Row, Col, DetailContainer, Title } from "./Elements";
import BreadCrumb from "components/BreadCrumb";
// import TeamImg from "assets/teamWork.jpeg";

const About = () => {
  return (
    <AboutContainer>
      <BreadCrumb />
      <Row>
        <Col flex={"0.65"}>
          <DetailContainer>
            <Title>About</Title>
          </DetailContainer>
        </Col>
        <Col flex={"0.3"}>s</Col>
      </Row>
    </AboutContainer>
  );
};

export default About;
