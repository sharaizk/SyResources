import React from "react";
import BreadCrumb from "components/BreadCrumb";
import {
  ScreenContainer,
  FAQsContainer,
  LeftSection,
  RightSection,
} from "./Elements";
import Faq from "react-faq-component";

const FAQs = () => {
  const faqData1 = {
    rows: [
      {
        title: "How does an energy broker get paid?",
        content:
          "The majority of brokers, including SY Resources use a commission-based payment method. This means that the supplier offers you a small uplift in the form of a unit rate which will be paid to the broker. For example, your unit rate is 30p and broker add 1p uplift in it then the final unit rate will be 31p",
      },
      {
        title: "What is an LOA?",
        content:
          "A letter of authority (LOA) is a legal documentation that hands over authority to us so that we can deal with your current supplier when transferring you leaving you with minimal hassle.",
      },
      {
        title: "Do I need to sign an LOA?",
        content:
          "It is not mandatory to sign an LOA as you do reserve the right to deal with matters independently, however it is advisable as it may ensure a swift transfer. An LOA is available on request and we will forward it to your supplier once you have signed it.",
      },
      {
        title: "Does an LOA hand over full rights to you?",
        content:
          "There are various levels to an LOA which will be highlighted on the document itself. The level you sign is at your discretion and will solely be used for the transfer of your utilities once you have agreed. Once transfer is completed, the LOA is void and disregarded.",
      },
      {
        title: "Am I In Contract?",
        content:
          "This information can be obtained from your supplier. If you are a new business owner and have not signed a contract with any supplier then you are not in contract. However your premise be subject to contract through the previous tenant.",
      },
      {
        title: "How Much Notice Do I Have To Give My Current Supplier?",
        content:
          "As per legislation suppliers can nominate the cancellation period of their choosing however most companies work within a 30 – 90 day window at the end of your contractual term.",
      },
    ],
  };

  const faqData2 = {
    title: "",
    rows: [
      {
        title: "Can I Get Gas & Electricity From The Same Supplier?",
        content:
          "Yes, Most suppliers provide both gas and electricity to their customers. This is normally referred as dual fuel tariffs, some supplier offer special deals or discounts for the switching of gas & electricity supply.",
      },
      {
        title: "I owe money to my current supplier. Do I have to settle this?",
        content:
          "Once you decide to change supplier, you will have to settle any outstanding balance with your old supplier.",
      },
      {
        title: "What Is Value-Added Tax (VAT)?",
        content:
          "Value-added tax (VAT) is a consumption tax on goods and services that is levied at each stage of the supply chain where value is added, from initial production to the point of sale. The standard rate of VAT increased to 20% on 4 January 2011 (from 17.5%). Some things are exempt from VAT , such as postage stamps, financial and property transactions. The VAT rate businesses charge depends on their goods and services.",
      },
      {
        title: "Do you recommend everybody should switch?",
        content:
          "If price is your only criterion and the savings are very small, we recommend staying with your current supplier. It is possible they may become more or less competitive, so it’s a good idea to still check with us every now and then. People currently with the Big Six who have never switched will usually have the most to gain by switching.",
      },
      {
        title: "Will I Be Charged A Termination Fee?",
        content:
          "A new contract can be agreed 90 - 180 days prior to the end of your existing one. If you opt to leave before this, you may be subjected to an early termination fee. The amount will depend on the length of time you have left on your current contract. You are under no obligation to pay such fees as you will be provided with the option to remain with your current supplier. If there is no contract in place, there may be no termination fee. We strongly advise that you correspond with your standing supplier for clarification on the matter. Please note early termination facility is not offered by all suppliers.",
      },
      {
        title: "What If My Business Has A Domestic Meter?",
        content:
          "Many businesses do often have a domestic meter. This can easily be identified by the supply number on your bill as it will begin either 01 or 02. If you have a domestic meter and you are a business, we can still transfer you onto a business contract subject to proof of business being provided.",
      },
    ],
  };

  return (
    <ScreenContainer>
      <BreadCrumb />
      <FAQsContainer>
        <LeftSection $order={2}>
          <Faq data={faqData1} />
        </LeftSection>
        <RightSection $order={1}>
          <Faq data={faqData2} />
        </RightSection>
      </FAQsContainer>
    </ScreenContainer>
  );
};

export default FAQs;
