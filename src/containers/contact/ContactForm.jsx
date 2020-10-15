import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const ContactForm = ({ theme }) => {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validateScheme = yup.object({
    name: yup.string().required("Required").max(30),
    email: yup.string().email().required("Email Required"),
    message: yup
      .string()
      .required("Please write some messages")
      .min(30)
      .max(800),
  });

  const fieldClasses = `border-2 rounded-md border-solid border-purple-600  w-full py-2 px-4 mb-5 text-lg ${
    theme === "light" ? "bg-gray-200" : "bg-gray-700"
  }`;

  const btnClasses =
    "text-lg bg-blue-600 text-blue-100 uppercase border  border-blue-600 w-56 py-4 px-2 rounded-md shadow-inline tracking-wide flex justify-center items-center mt-3 mb-4 hover:bg-blue-500 hover:shadow-outline transition ease-out duration-500";

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validateScheme}
      onSubmit={(data, { resetForm, setSubmitting }) => {
        // todo send message to my email
        setSubmitting(false);
        resetForm();
      }}
    >
      {({ isValid, isSubmitting }) => (
        <Form>
          <div className="flex flex-col justify-start items-start">
            <label htmlFor="name" className="text-lg my-3  w-full">
              Your Name
            </label>
            <Field type="text" name="name" id="name" className={fieldClasses} />

            <ErrorMessage name="name">
              {(error) => <div className="text-red-600">{error}</div>}
            </ErrorMessage>
          </div>
          <div className="flex flex-col justify-start items-start">
            <label htmlFor="email" className="text-lg my-3  w-full">
              Your Email
            </label>
            <Field
              type="email"
              name="email"
              id="email"
              className={fieldClasses}
            />
            <ErrorMessage name="email">
              {(error) => <div className="text-red-600">{error}</div>}
            </ErrorMessage>
          </div>
          <div className="flex flex-col justify-start items-start">
            <label htmlFor="message" className="text-lg my-3  w-full">
              Your Message
            </label>
            <Field
              type="message"
              name="message"
              id="message"
              as="textarea"
              className={fieldClasses}
            />
            <ErrorMessage name="message">
              {(error) => <div className="text-red-600">{error}</div>}
            </ErrorMessage>
          </div>
          <button
            type="submit"
            className={btnClasses}
            disabled={!isValid || isSubmitting}
          >
            Send Message
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
