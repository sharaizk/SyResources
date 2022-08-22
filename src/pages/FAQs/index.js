import React from "react";
import BreadCrumb from "components/BreadCrumb";
import {
  ScreenContainer,
  FAQsContainer,
  LeftSection,
  RightSection,
  Image,
} from "./Elements";
import Faq from "react-faq-component";
import faqImage from "assets/faq.png";
const FAQs = () => {
  const faqData1 = {
    rows: [
      {
        title: "What Are Your Fees?",
        content:
          "Rn Marketing Solution do not charge a fee for our quote services to our customers.",
      },
      {
        title: "How We Get Paid By The Supplier",
        content:
          "We may receive a commission payment from a supplier for introducing you to them. This may be paid wholly upfront or monthly residual. The commission is built into your final unit rate(s) via an uplift which you pay to your supplier, the supplier will then pay the uplift to us. As an example, if your unit price is 35.00p per kwh, we can potentially add between 0.1 and 2.0p for our uplift. If the uplift was 2p, the final unit price you pay would be 36.50p per kwh, 1p of which the supplier will pay to us for every unit consumed.",
      },
      {
        title: "What Is A Supply Number?",
        content:
          "Supply numbers is a specific piece of information that relates to you site which identifies address’, meter type and helps to get accurate quotations. This can be obtained from your current supplier or alternatively it is generally located on a bill.",
      },
      {
        title: "How Does My Contract Finish?",
        content:
          "The time remaining on your contract can be obtained from your supplier or alternatively by giving authority to us in a form of a letter of authority (LOA) and we will do the rest.",
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
        title: "Can I Get Cheaper Prices?",
        content:
          "Out of contract prices and deemed rates are notoriously high and large savings are easily made should you be coming to the end of your contract the constantly changing market can benefit you when looking for a cheaper supplier.",
      },
      {
        title: "What Is Value-Added Tax (VAT)?",
        content:
          "Value-added tax (VAT) is a consumption tax on goods and services that is levied at each stage of the supply chain where value is added, from initial production to the point of sale. The standard rate of VAT increased to 20% on 4 January 2011 (from 17.5%). Some things are exempt from VAT , such as postage stamps, financial and property transactions. The VAT rate businesses charge depends on their goods and services.",
      },
      {
        title: "What Is Climate Change Levy (CCL)?",
        content:
          "CCL is a tax on the taxable supply of specified energy products (taxable commodities) for use as fuels that is for lighting, heating and power, by business consumers including consumers in:<br/><ul><li>industry</li><li>commerce</li><li>agriculture</li><li>public administration</li><li>other services</li></ul>",
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
      {
        title: "What Proof Of Business Is Acceptable?",
        content:
          "The current proof of business we accept as per suppliers criteria are either business rates documents or a recent bill (dated within 3 months) which show your address, supply number and VAT at 20% on the total.",
      },
      {
        title: "What If I Have Multi Sites?",
        content:
          "We can arrange for more than one site on the basis that each meter is either out of contract or within the 120 day tolerance window prior to the end of a contract.",
      },
    ],
  };

  const faqData3 = {
    title: "",
    rows: [
      {
        title: "How Long Does It Take To Transfer?",
        content:
          "For customers out of contract, an application generally takes between 4-6 weeks as per the standard transfer process. Please be advised that further delays may occur if your supplier objects to the transfer. If you are still in a contract, supply will commence a day after your contract expires.",
      },
      {
        title: "What If My Transfer Is Objected?",
        content:
          "An objection is highly likely as suppliers reserve the right to object therefore it is not a major concern. In the event of an objection, we will notify you as will your supplier. However due to customer confidentiality, we will not be privy to the reason for objection. You will need to contact your supplier or provide us the authority to contact them for you to identify and resolve the objection so that we can apply to take over your site.",
      },
      {
        title: "What Is An LOA?",
        content:
          "A letter of authority (LOA) is a legal documentation that hands over authority to us so that we can deal with your current supplier when transferring you leaving you with minimal hassle.",
      },
      {
        title: "Do I Need To Sign An LOA?",
        content:
          "It is not mandatory to sign an LOA as you do reserve the right to deal with matters independently, however it is advisable as it may ensure a swift transfer. An LOA is available on request and we will forward it to your supplier once you have signed it.",
      },
      {
        title: "Does An LOA Hand Over Full Rights To You?",
        content:
          "There are various levels to an LOA which will be highlighted on the document itself. The level you sign is at your discretion and will solely be used for the transfer of your utilities once you have agreed. Once transfer is completed, the LOA is void and disregarded.",
      },
      {
        title: "What If I Have More Than One Meter On Site?",
        content:
          "Typically all meters are contracted simultaneously therefore they can be taken over together. If not, we will take over any meters within tolerance.",
      },
      {
        title: "Will My Tariff Be Effected?",
        content:
          "Your tariff is linked to your meter and will remain the same regardless of supplier.",
      },
      {
        title: "Can I Change My Tariff?",
        content:
          "As your tariff is linked to your meter, in order to change your tariff, you will need to change your meter. RN Marketing Solutions cannot arrange this as we are not responsible for your meter. This is something you are required to discuss with your supplier once supply is live as they may be able to switch your meter. Typically most tariffs are allocated to best suit you financially therefore it is rarely beneficial to change.",
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
          <Image src={faqImage} />
        </RightSection>
      </FAQsContainer>
      <FAQsContainer>
        <LeftSection $order={2}>
          <Faq data={faqData2} />
        </LeftSection>
        <RightSection $order={1}>
          <Faq data={faqData3} />
        </RightSection>
      </FAQsContainer>
    </ScreenContainer>
  );
};

export default FAQs;
