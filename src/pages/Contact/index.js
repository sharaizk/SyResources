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
  Title2,
  Description2,
} from "./Elements";
import BreadCrumb from "components/BreadCrumb";
import { useFormik, FormikProvider } from "formik";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import * as Yup from "yup";
import { useTheme } from "styled-components";
import { GrMapLocation } from "react-icons/gr";
import { MdCall, MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  const form = useRef(null);
  const theme = useTheme();
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
          "service_0o1ie67",
          "template_ph8d5fd",
          form.current,
          "86tt7rjhfMyKELyVP"
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
        <p>You can contact us through following means:</p>
        <br />
        <CardDescriptio>
          <Title2>
            <GrMapLocation size={24} color={theme.primary} /> Address:
          </Title2>
          <Description2>
            Kilroy House, 400 Kilroy House, 400, Roding Lane South, Woodford
            Green, England, IG8 8EY
          </Description2>
        </CardDescriptio>
        <br />
        <CardDescriptio>
          <Title2>
            <MdOutlineEmail size={24} /> Email:
          </Title2>
          <Description2>
            <a href="mailto:syresourcesltd@gmail.com">
              syresourcesltd@gmail.com
            </a>
          </Description2>
        </CardDescriptio>
        <br />
        <CardDescriptio>
          <Title2>
            <MdCall size={24} /> Phone:
          </Title2>
          <Description2>07576503089</Description2>
        </CardDescriptio>
        <br />
        <p>OR</p>
        <br />

        <p className="bold">
          <b>
            If you want to speak to us over the phone, please leave your details
            and one of our experts will get in touch with you.
          </b>
        </p>
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
