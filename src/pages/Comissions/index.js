import React from "react";
import BreadCrumb from "components/BreadCrumb";
import {
  ScreenContainer,
  ComissionContainer,
  LeftSection,
  RightSection,
  HeroTitle,
  Image,
  HeroDescription,
} from "./Elements";
const Comissions = () => {
  return (
    <ScreenContainer>
      <BreadCrumb />
      <HeroTitle>How we get paid by the energy supplier</HeroTitle>
      <ComissionContainer>
        <LeftSection>
          <Image src="https://images.unsplash.com/photo-1626266061368-46a8f578ddd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
        </LeftSection>
        <RightSection>
          <HeroDescription>
            We may receive a commission payment from a supplier for introducing
            you to them. This may be paid wholly upfront or monthly residual.
            The commission is built into your final unit rate(s) via an uplift
            which you pay to your supplier, the supplier will then pay the
            uplift to us. As an example, if your unit price is 35.00p per kwh,
            we can potentially add between 0.1 and 2.0p for our uplift. If the
            uplift was 1.5p, the final unit price you pay would be 36.50p per kwh,
            1p of which the supplier will pay to us for every unit consumed.
          </HeroDescription>
        </RightSection>
      </ComissionContainer>
    </ScreenContainer>
  );
};

export default Comissions;
