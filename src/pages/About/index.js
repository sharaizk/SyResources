import React from "react";
import {
  AboutContainer,
  Row,
  Col,
  Title,
  Image,
  Description,
} from "./Elements";
import BreadCrumb from "components/BreadCrumb";
import TeamImg from "assets/teamWork.jpeg";
import { Fade } from "react-reveal";

const About = () => {
  return (
    <AboutContainer>
      <BreadCrumb />
      <Row>
        <Col flex={"0.55"} flexDirection="column">
          <Fade left>
            <Title>About Us</Title>
            <Description>
              At Sy Resources, we pride ourselves on being one of the UK's
              leading independent energy brokerages. We have extensive
              experience in placing business contracts and providing support for
              telecommunication, billing, payments, and contract obligations of
              business energy for our clients. We are dedicated to providing our
              clients with the best possible service and support in all areas of
              business energy and telecoms.
              <br />
              Our top priority is always the end user. We want to help them save
              money and run their businesses more efficiently. That's why we're
              a company that only works with businesses – so we can cut out the
              prices and help you save on your gas and electricity costs.
            </Description>
          </Fade>
        </Col>
        <Col flex={"0.4"}>
          <Fade right>
            <Image src={TeamImg} />
          </Fade>
        </Col>
      </Row>
      <Row flexDirection="column">
        <Col flex={1}>
          <Fade top>
            <h1>Why Choose us?</h1>
          </Fade>
        </Col>
        <Col flex={1}>
          <Fade top>
            <Description textAlign="center">
              We are independent energy brokers in the UK and provide a range of
              energy solutions that can help you to save money on your bills,
              while also helping the environment. Energy prices are constantly
              changing, so we offer fixed energy contracts that give you
              guaranteed savings while locking-in your price for up to 3 years
              or more.
              <br />
              We have team of skilled and creative people. Your data is Safe &
              Secure with us.
            </Description>
          </Fade>
        </Col>
      </Row>
      <Row flexDirection="row">
        <Col flex={0.3} flexDirection="column">
          <Fade left>
            <Image
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="energy know how"
            />
          </Fade>
        </Col>
        <Col flex={0.65} flexDirection="column">
          <Fade left>
            <Title>Full of energy know-how</Title>
            <Description textAlign="start">
              At our company, you will be working with a team of experts from
              day one. This ensures that you will have access to the best
              resources and knowledge from the start. We have experience with
              all types of flexible and fixed contracts. This means that we can
              provide whatever you need. We procure for major energy users, some
              of whom have energy spends in the 6 figures. You can be confident
              that you are in good hands with our team. We understand that each
              client has different budgetary needs and different levels of
              understanding. Because of this, we take the time to explain the
              various options to you, so that you can be confident that you are
              getting the most effective strategy for your business.
            </Description>
          </Fade>
        </Col>
      </Row>
    </AboutContainer>
  );
};

export default About;
