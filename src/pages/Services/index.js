import React from "react";
import {
  AboutContainer,
  Row,
  Col,
  DetailContainer,
  Title,
  Image,
  Description,
} from "./Elements";
import BreadCrumb from "components/BreadCrumb";

import animatedSVG1 from "assets/animatedSVG1.svg";
import { Fade } from "react-reveal";
const Services = () => {
  return (
    <AboutContainer bg={animatedSVG1}>
      <BreadCrumb />
      <Row>
        <Col flex={"0.65"}>
          <Fade left>
            <DetailContainer>
              <Title>Business Electricity & Gas: </Title>
              <Description>
                We know that it can be tricky to get a handle on energy prices,
                which is why we've been working hard to create partnerships with
                great suppliers. This way, you can relax knowing that you're
                always getting a competitive price. We'll keep an eye on all of
                the billing to make sure that you're only ever being charged the
                rate that was agreed upon. And because we want what's best for
                you, we'll tailor our advice to meet your specific electricity
                and gas meter portfolio and business goals. Finding the best
                energy solution for you is our number one priority. You'll have
                our complete focus, skills, and expertise. You can focus on
                other areas of your business while we handle objections, queries
                or issues that come up. We constantly monitor the wholesale
                markets so that we can recommend the best time to renew your
                contracts.
                <br />
                When it comes to energy contracts, it's all about getting the
                best deal possible. But that can take a lot of time and effort.
                And sometimes it's just not worth it if it means you're not
                focusing on other, more critical matters. That's where we come
                in. We can help you get the same savings without using up all
                your resources. So, you can feel confident that you're always
                getting the best deal, without having to worry about it.
              </Description>
            </DetailContainer>
          </Fade>
        </Col>
        <Col flex={"0.3"}>
          <Fade right>
            <Image
              src={
                "https://images.unsplash.com/photo-1509390032417-bd802f3fc669?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1498&q=80"
              }
            />
          </Fade>
        </Col>
      </Row>
      <Row>
        <Col flex={"0.3"}>
          <Fade left>
            <Image
              src={
                "https://images.unsplash.com/photo-1594915440248-1e419eba6611?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1767&q=80"
              }
            />
          </Fade>
        </Col>
        <Col flex={"0.65"}>
          <Fade right>
            <DetailContainer>
              <Title>Business Telecommunications: </Title>
              <Description>
                We want your business to have the best possible telecoms at the
                most competitive prices, without sacrificing quality or service.
                Sy Resources can help you achieve this by providing a superior
                range of products from the UK’s leading networks. Our customers
                get quality services without the hassle of managing their
                service directly with the network. This way, you can focus on
                running your business, safe in the knowledge that you’re getting
                the best possible deal on your telecoms.
              </Description>
            </DetailContainer>
          </Fade>
        </Col>
      </Row>

      <Row>
        <Fade bottom>
          <Col flex={"1"}>
            <p>
              <b>
                We may receive a commission from the supplier once the sale is
                completed and on supply. This is built in via an uplift added to
                your final unit price and paid to us by the supplier
              </b>
            </p>
          </Col>
        </Fade>
      </Row>
    </AboutContainer>
  );
};

export default Services;
