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
  NavBtn,
} from "./Elements";
import BreadCrumb from "components/BreadCrumb";
import ReactHTMLParser from "react-html-parser";
import { Fade } from "react-reveal";
const Complaints = () => {
  const complainPolicy = [
    {
      id: 100,
      title: "Complaints Handling Procedure",
      description:
        "We want to give our customers the best service possible and hope that they have a great experience with us. However, if there is ever an issue or something that you're not happy with, please follow the steps below so that we can fix the problem and make sure it doesn't happen again in the future. All complaints will be treated with courtesy and respect.<br /><b>Our Commitment:</b>",
      list: [
        {
          id: 110,
          list: "The complaints handling process is designed to be fair and efficient, and to give all customers access to the process.",
        },
        {
          id: 111,
          list: "We will keep customers informed about the progress of their complaint and the expected resolution time. ",
        },
        {
          id: 112,
          list: "We will regularly review our complaints and procedures to ensure we are continuously improving.",
        },
      ],
      hasList: true,
    },
    {
      id: 900,
      title: "Steps to follow:",
    },
    {
      id: 200,
      title: "Step 1",
      description:
        "We're always trying to resolve complaints as fast as possible. So, if you need to file a complaint, please get in touch with us through one of the following channels.",
      contact: [
        {
          id: 201,
          title: "Call us on",
          detail: "07576503089",
        },
        {
          id: 202,
          title: "Email us at:",
          detail: "syresourcesltd@gmail.com",
        },
        {
          id: 203,
          title: "Write to us:",
          detail:
            "SY RESOURCES LTD, 400 Roding Lane South, Woodford Green, IG8 8EY",
        },
      ],
    },
    {
      id: 300,
      title: "Step 2",
      description:
        "When a complaint is filed, we will send an acknowledgment of receipt within two business working days. Your complaint will be logged in our system, and we will do our best to resolve the problem within seven business days. We'll give you a reference number and reach out to you as soon as the issue has been resolved. If we haven’t resolved your complaint within seven business days, we’ll contact you to explain why and what the next stage is.<br/>We will keep in touch with the latest developments.",
    },
    {
      id: 400,
      title: "Step 3",
      description:
        "We will let you know the resolution of your complaint in writing, which might include an apology, making a goodwill gesture, or giving compensation. If you are happy with our resolution then your complaint will be closed or else if you are not happy and we have reached deadlock then you will need to follow step 4.",
    },
    {
      id: 500,
      title: "Step 4",
      description:
        "If you are unhappy with our final resolution, we have reached a deadlock, or it’s taking too long to resolve your complaint (8 weeks or more) then you are welcome to contact Ombudsman Services.",
    },
    {
      id: 600,
      description: "The Ombudsman Service ADR service is free of charge.",
    },
    {
      id: 800,
      description:
        "Ombudsman Services provides an alternative dispute resolution scheme (ADR Scheme) for those who are unhappy with final decisions, if we have reached a deadlock, or if the issue hasn't been resolved in 8 weeks. You can contact the Ombudsman either by post, email, or letter or complete the form online. You can contact the Ombudsman either by post, email, letter or complete the form online.",
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
              <Fade left>
                <Title>{pdf.title}</Title>
              </Fade>
              <Fade left>
                <Description>{ReactHTMLParser(pdf.description)}</Description>
              </Fade>
              <Fade left>
                {pdf?.hasList && (
                  <ListContainer>
                    {pdf?.list?.map((list) => (
                      <List key={list.id}>{list.list}</List>
                    ))}
                  </ListContainer>
                )}
              </Fade>
              {pdf?.contact?.map((cont) => {
                const baseHref =
                  cont?.title === "Email" || cont?.title === "Email us at:"
                    ? "mailto://"
                    : "";
                const onlineTitle = cont?.isTitleHidden
                  ? ""
                  : `${cont?.title} : `;
                return (
                  <React.Fragment key={cont.id}>
                    {cont?.title !== "Email" &&
                    cont?.title !== "Email us at:" &&
                    cont?.title !== "Online" ? (
                      <Fade left>
                        <ContactTitle for={cont.title}>
                          {cont.title} : {cont.detail}
                        </ContactTitle>
                      </Fade>
                    ) : (
                      <Fade left>
                        <ContactEmail
                          href={`${baseHref}${cont?.detail}`}
                          target="_blank"
                        >
                          {onlineTitle}
                          {cont?.detail}
                        </ContactEmail>
                      </Fade>
                    )}
                  </React.Fragment>
                );
              })}
              <Gap />
            </React.Fragment>
          );
        })}
        <Fade left>
          <Title>If you have any complaint, please contact us</Title>
        </Fade>
          <NavBtn to="/contact">Contact Us</NavBtn>
      </PDFConatiner>
    </>
  );
};

export default Complaints;
