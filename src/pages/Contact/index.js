import React, { useRef } from "react";
import {
  ScreenContainer,
  ContactContainer,
  StyledForm,
  InputLabel,
  Input,
  Error,
  TextArea,
  Submit,
  CardContainer,
  Card,
  CardImage,
  CardTitle,
  CardDescriptio,
} from "./Elements";
import BreadCrumb from "components/BreadCrumb";
import { useFormik, FormikProvider } from "formik";
import loactionSvg from "assets/location.svg";
import phoneSvg from "assets/phone.svg";
import emailSvg from "assets/email.svg";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

import * as Yup from "yup";

const Contact = () => {
  const form = useRef(null);
  const ContactSchema = Yup.object().shape({
    fullName: Yup.string().required("*What is your Full Name?"),
    email: Yup.string()
      .email("*Email must be a valid email address")
      .required("*What's your email?"),
    telephone: Yup.string()
      .max(11)
      .required("*Please enter your telephone number"),
    subject: Yup.string().required("*Subject is required"),
    message: Yup.string().required("*What's your message"),
  });
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      telephone: "",
      subject: "",
      message: "",
    },
    validationSchema: ContactSchema,
    onSubmit: async (values, { resetForm }) => {
      const loadingToast = toast.loading("Sending your message");
      try {
        await emailjs.sendForm(
          "service_7049t0a",
          "template_05yw90t",
          form.current,
          "XwbDQm3Lekkjh80AQ"
        );
        toast.update(loadingToast, {
          render: "Thank You, you will hear from us soon.",
          type: "success",
          isLoading: false,
          closeButton: true,
          closeOnClick: true,
        });
        resetForm();
      } catch (error) {
        toast.update(loadingToast, {
          render: "Couldn't send your message, Please wait till we fix it.",
          type: "error",
          isLoading: false,
          closeButton: true,
          closeOnClick: true,
        });
      }
    },
  });
  const { errors, touched, values, handleSubmit, getFieldProps, isSubmitting } =
    formik;
  return (
    <ScreenContainer>
      <BreadCrumb />
      <CardContainer>
        <Card>
          <CardImage src={emailSvg} />
          <CardTitle>Email</CardTitle>
          <CardDescriptio>
            <a
              href="mailto:rnmarketing.solutions96@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              rnmarketing.solutions96@gmail.com
            </a>
          </CardDescriptio>
        </Card>
        <Card>
          <CardImage src={loactionSvg} />
          <CardTitle>Location</CardTitle>
          <CardDescriptio>
            140B Queens Road, Beeston, Nottingham, NG9 2FF
          </CardDescriptio>
        </Card>
        <Card>
          <CardImage src={phoneSvg} />
          <CardTitle>Phone</CardTitle>
          <CardDescriptio>01158883499</CardDescriptio>
        </Card>
      </CardContainer>

      <ContactContainer>
        <FormikProvider value={formik}>
          <StyledForm
            autoComplete="off"
            noValidate
            onSubmit={handleSubmit}
            ref={form}
          >
            <p className="bold">
              If you want to speak to us over the phone, please leave your
              details and one of our experts will get in touch with you.
            </p>
            <InputLabel>Full Name:</InputLabel>
            <Input
              type="text"
              id="fullName"
              name="fullName"
              value={values.fullName}
              {...getFieldProps("fullName")}
            />
            {touched.fullName && errors.fullName && (
              <Error>{errors?.fullName}</Error>
            )}
            <InputLabel>Email:</InputLabel>
            <Input
              type="email"
              id="email"
              name="email"
              value={values.email}
              {...getFieldProps("email")}
            />
            {touched.email && errors.email && <Error>{errors?.email}</Error>}
            <InputLabel>Telephone:</InputLabel>
            <Input
              type="number"
              id="telephone"
              name="telephone"
              value={values.telephone}
              {...getFieldProps("telephone")}
            />
            {touched.telephone && errors.telephone && (
              <Error>{errors?.telephone}</Error>
            )}
            <InputLabel>Subject:</InputLabel>
            <Input
              type="text"
              id="subject"
              name="subject"
              value={values.subject}
              {...getFieldProps("subject")}
            />
            {touched.subject && errors.subject && (
              <Error>{errors?.subject}</Error>
            )}
            <InputLabel>Message:</InputLabel>
            <TextArea
              rows="4"
              cols="50"
              type="text"
              id="message"
              name="message"
              value={values.message}
              {...getFieldProps("message")}
            />
            {touched.message && errors.message && (
              <Error>{errors?.message}</Error>
            )}
            <Submit $disabled={isSubmitting}>Send Message</Submit>
          </StyledForm>
        </FormikProvider>
      </ContactContainer>
    </ScreenContainer>
  );
};

export default Contact;
