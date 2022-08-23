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
  Title,
  TopContainer,
  CardDescriptio,
} from "./Elements";
import BreadCrumb from "components/BreadCrumb";
import { useFormik, FormikProvider } from "formik";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import * as Yup from "yup";
import { GrMapLocation } from "react-icons/gr";
import { MdCall, MdOutlineEmail } from "react-icons/md";

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
      <TopContainer>
        <Title>Contact Us</Title>
        <p className="bold">
          If you want to speak to us over the phone, please leave your details
          and one of our experts will get in touch with you.
        </p>
        <br />
        OR
        <p>You can contact us through following means:</p>
        <br />
        <CardDescriptio>
          <GrMapLocation size={24} color="yellow" /> Address:{" "}
          <b>
            SY RESOURCES LTD, 400 Roding Lane South, Woodford Green, IG8 8EY
          </b>
        </CardDescriptio>
        <br />
        <CardDescriptio>
          <MdCall size={24} />
          Phone: <b>07576503089</b>
        </CardDescriptio>
        <br />
        <CardDescriptio>
          <MdOutlineEmail size={24} />
          Email:{" "}
          <a href="mailto:syresourcesltd@gmail.com">syresourcesltd@gmail.com</a>
        </CardDescriptio>
      </TopContainer>
      <ContactContainer>
        <FormikProvider value={formik}>
          <StyledForm
            autoComplete="off"
            noValidate
            onSubmit={handleSubmit}
            ref={form}
          >
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
