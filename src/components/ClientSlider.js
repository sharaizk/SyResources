import React from "react";
// import Slider from "react-slick";
import styled from "styled-components";
// Assets
import logo1 from "assets/companies/logo1.png";
import logo2 from "assets/companies/logo2.png";
import logo3 from "assets/companies/logo3.png";
import logo4 from "assets/companies/logo4.png";
import logo5 from "assets/companies/logo5.png";
import logo6 from "assets/companies/logo6.png";
import logo12 from "assets/companies/logo12.png";
import logo8 from "assets/companies/logo8.png";
import logo9 from "assets/companies/logo9.png";
import logo10 from "assets/companies/logo10.png";
import logo11 from "assets/companies/logo11.png";
import logo13 from "assets/companies/logo13.png";
import logo14 from "assets/companies/logo14.png";
import logo15 from "assets/companies/logo15.png";
import logo16 from "assets/companies/logo16.png";
import Carousel from "react-elastic-carousel";
export default function ClientSlider() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 5, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 6 },
    { width: 1750, itemsToShow: 6 },
  ];
  return (
    <Carousel
      renderArrow={() => <></>}
      pagination={false}
      breakPoints={breakPoints}
      enableAutoPlay
      autoPlaySpeed={2000}
      transitionMs={700}
    >
      <LogoWrapper>
        <ImgStyle src={logo1} $size={"60%"} alt="client logo" />
      </LogoWrapper>
      <LogoWrapper>
        <ImgStyle src={logo2} alt="client logo" />
      </LogoWrapper>
      <LogoWrapper>
        <ImgStyle src={logo3} alt="client logo" />
      </LogoWrapper>
      <LogoWrapper>
        <ImgStyle src={logo4} $size={"60%"} alt="client logo" />
      </LogoWrapper>
      <LogoWrapper>
        <ImgStyle src={logo5} $size={"40%"} alt="client logo" />
      </LogoWrapper>
      <LogoWrapper>
        <ImgStyle src={logo6} alt="client logo" />
      </LogoWrapper>
      <LogoWrapper>
        <ImgStyle src={logo8} alt="client logo" />
      </LogoWrapper>
      <LogoWrapper>
        <ImgStyle src={logo9} $size={"70%"} alt="client logo" />
      </LogoWrapper>
      <LogoWrapper>
        <ImgStyle src={logo10} alt="client logo" />
      </LogoWrapper>
      <LogoWrapper>
        <ImgStyle src={logo11} $size={"40%"} alt="client logo" />
      </LogoWrapper>
      <LogoWrapper>
        <ImgStyle src={logo12} alt="client logo" />
      </LogoWrapper>
      <LogoWrapper>
        <ImgStyle src={logo13} $size={"70%"} alt="client logo" />
      </LogoWrapper>
      <LogoWrapper>
        <ImgStyle src={logo14} alt="client logo" />
      </LogoWrapper>
      <LogoWrapper>
        <ImgStyle src={logo15} $size={"60%"} alt="client logo" />
      </LogoWrapper>
      <LogoWrapper>
        <ImgStyle src={logo16} alt="client logo" />
      </LogoWrapper>
    </Carousel>
  );
}

const LogoWrapper = styled.div`
  width: 100%;
  height: 100px;
  cursor: pointer;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  z-index: 110;
`;
const ImgStyle = styled.img`
  width: auto;
  height: ${(props) => props?.$size || "50%"};
  /* padding: 10%; */
`;
