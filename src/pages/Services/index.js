import React from "react";
import BreadCrumb from "components/BreadCrumb";
import {
  ServicesContainer,
  CardsContainer,
  Card,
  CardImage,
  CardTitle,
  CardDescriptio,
  HeroTitle,
  Note,
} from "./Elements";
import svg1 from "assets/svg1.svg";
import svg2 from "assets/svg2.svg";
import svg3 from "assets/svg3.svg";
const Services = () => {
  return (
    <ServicesContainer>
      <BreadCrumb />
      <HeroTitle>Our Services</HeroTitle>
      <CardsContainer>
        <Card>
          <CardImage src={svg2} alt="Machine" />
          <CardTitle>Electricity & Gas</CardTitle>
          <CardDescriptio>
            Business electricity and gas rates are rising, but you can still cut
            your business energy bills down to size. Compare business
            electricity prices with us and save time and money. We’ll even
            handle the entire switching process, so you have more time to run
            your business. We compare leading UK business electricity and gas
            suppliers to find the best deal for you.
          </CardDescriptio>
        </Card>
        <Card>
          <CardImage src={svg1} alt="Machine" />
          <CardTitle>Card Machines</CardTitle>
          <CardDescriptio>
            Our business merchant services give you a choice from all UK
            merchant services providers. Let us help you choose a merchant
            account provider that cares about your business needs.
          </CardDescriptio>
        </Card>
        <Card>
          <CardImage src={svg3} alt="Machine" />
          <CardTitle>Broadband Telecom</CardTitle>
          <CardDescriptio>
            Discover business telecoms packages with Us. Telecoms and broadband
            are absolutely essential for the smooth, effective running of most
            businesses. Whether you’re sending emails or accessing external
            databases, you need a service that is fast, reliable and that works
            the way you need it to.
          </CardDescriptio>
        </Card>
      </CardsContainer>
      <Note>
        We may receive a commission from the supplier once the sale is completed
        and on supply. This is built in via an uplift added to your final unit
        price and paid to us by the supplier.
      </Note>
    </ServicesContainer>
  );
};

export default Services;
