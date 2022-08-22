import React from "react";
import {
  PDFConatiner,
  Title,
  Description,
  ListContainer,
  List,
  ContactEmail,
  ContactTitle,
  Gap,
  NavBtn
} from "./Elements";
import BreadCrumb from "components/BreadCrumb";
import ReactHTMLParser from "react-html-parser";
const Complaints = () => {
  const complainPolicy = [
    {
      id: 100,
      title: "Complaints Handling Procedure",
      description:
        "It's our aim to give our clients an incredible experience. However, we know that sometimes things turn out badly and we strive to ensure they're put right straight away. Rn Marketing Solutions is focused on giving the highest levels of service to all of our customers. If you’ve any problem or feel our service didn't measure up to your expectations, please reach us. This will assist us with continually improving our service to you.",
    },
    {
      id: 200,
      title: "Step 1 – Making a complaint",
      description:
        "A complaint is any expression of dissatisfaction with the service received by us (Rn Marketing Solutions). In the event of a complaint, you should contact us immediately. You can contact us by any of the ways listed below:",
      contact: [
        {
          id: 201,
          title: "Phone",
          detail: "01158883499",
        },
        {
          id: 202,
          title: "Email",
          detail: "rnmarketing.solutions96@gmail.com",
        },
        {
          id: 203,
          title: "Post",
          detail: "140B Queens Road, Beeston, Nottingham, NG9 2FF",
        },
      ],
    },
    {
      id: 300,
      title: "Step 2 - Acknowledgement of Complaint",
      description:
        "After receiving your complaint, within 3-5 business days of receiving your complaint, we will acknowledge it and we will provide you with a complaint reference number which you can give to check on the status of a dispute.",
    },
    {
      id: 400,
      title: "Step 3 - Investigating your Complaint",
      description:
        "We review any pre-sales calls or other forms of contact made to that specific contract in order to conduct an investigation into any miss-selling or contract-related complaints. If necessary, we could ask you for additional information or paperwork to make sure that all checks are complete.",
    },
    {
      id: 500,
      title: "Step 4 - Resolution of your complaint",
      description:
        "When all checks are finished, we will get in touch with you to let you know what we discovered. We will provide you with a resolution to your complaint. You will be able to accept or reject the resolution depending on whether you feel the resolution is fair.",
      list: [
        {
          id: 101,
          list: "If you accept the resolution your complaint is resolved",
        },
        {
          id: 102,
          list: "If you reject the resolution the complaint will be considered as 'deadlock'.",
        },
      ],
      hasList: true,
    },
    {
      id: 600,
      title: "Step 5 - In Case of Deadlock",
      description:
        "If you reject the resolution and we haven't been able to sort things out within 8 weeks, or we can't agree on a way forward with you (we call this 'deadlock'), we'll write and let you know you have the right to refer your complaint to the Ombudsman. In this situation, you should wait until the allotted period has passed before referring your dispute to the Ombudsman for a free, unbiased investigation.",
    },
    {
      id: 700,
      title: "Step 6 - Contacting the Ombudsman",
      description:
        "If you feel we haven’t resolved your complaint after the first four steps, you can also get additional support to help evaluate your complaint from the Ombudsman Services: Energy (OSE).  You can get in touch with the OSE if eight weeks have passed since you first made the complaint to us or you‘ve received a ‘full and final position’ from us. This may be referred to as a deadlock and it outlines our final position in relation to your complaint.",
    },
    {
      id: 800,
      description:
        "You can contact the Ombudsman either by post, email, letter or complete the form online.",
      contact: [
        {
          id: 204,
          title: "Telephone",
          detail: "03304401624",
        },
        {
          id: 205,
          title: "Email",
          detail: "consumeraffairs@ofgem.gov.uk",
        },
        {
          id: 206,
          title: "Post",
          detail: "Ombudsman Services: Energy, PO Box 966, Warrington WA4 9DF",
        },
        {
          id: 207,
          title: "Online",
          detail: "https://www.ombudsman-services.org/complain-now",
        },
      ],
    },
    {
      id: 900,
      description:
        "Further information on the Ombudsman process can be found online at",
      contact: [
        {
          id: 210,
          title: "Online",
          detail:
            "https://partners.ombudsman-services.org/our-services/our-process",
          isTitleHidden: true,
        },
      ],
    },
  ];
  return (
    <>
      <BreadCrumb />
      <PDFConatiner>
        {complainPolicy.map((pdf) => {
          return (
            <React.Fragment key={pdf.id}>
              <Title>{pdf.title}</Title>
              <Description>{ReactHTMLParser(pdf.description)}</Description>
              {pdf?.hasList && (
                <ListContainer>
                  {pdf?.list?.map((list) => (
                    <List key={list.id}>{list.list}</List>
                  ))}
                </ListContainer>
              )}
              {pdf?.contact?.map((cont) => {
                const baseHref = cont?.title === "Email" ? "mailto://" : "";
                const onlineTitle = cont?.isTitleHidden
                  ? ""
                  : `${cont?.title} : `;
                return (
                  <React.Fragment key={cont.id}>
                    {cont?.title !== "Email" && cont?.title !== "Online" ? (
                      <ContactTitle for={cont.title}>
                        {cont.title} : {cont.detail}
                      </ContactTitle>
                    ) : (
                      <ContactEmail
                        href={`${baseHref}${cont?.detail}`}
                        target="_blank"
                      >
                        {onlineTitle}
                        {cont?.detail}
                      </ContactEmail>
                    )}
                  </React.Fragment>
                );
              })}
              <Gap />
            </React.Fragment>
          );
        })}
        <Title>If you have any complaint, please contact us</Title>
        <NavBtn to="/contact">Contact Us</NavBtn>
      </PDFConatiner>
    </>
  );
};

export default Complaints;
