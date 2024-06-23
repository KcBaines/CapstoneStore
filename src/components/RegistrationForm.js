import React, { useState } from "react"; // Import React and useState hook
import { Formik, Form, Field, ErrorMessage } from "formik"; // Import Formik components for form handling
import "../styles/RegistrationForm.css"; // Import CSS file for styling

const RegistrationForm = ({ handleRegister }) => {
  // Define RegistrationForm component receiving handleRegister prop
  const [registrationSuccess, setRegistrationSuccess] = useState(false); // State for handling registration success

  // Function to validate form fields
  const validate = (values) => {
    const errors = {};

    // Validate each field
    if (!values.firstName) {
      errors.firstName = "First Name is required";
    }
    if (!values.surname) {
      errors.surname = "Surname is required";
    }
    if (!values.username) {
      errors.username = "Username is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    } else if (!/(?=.*[0-9])(?=.*[!@#$%^&*])/.test(values.password)) {
      errors.password =
        "Password must contain at least one number and one symbol (!@#$%^&*)";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Confirm Password is required";
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors; // Return validation errors
  };

  return (
    <Formik
      initialValues={{
        firstName: "",
        surname: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validate={validate} // Validation function
      onSubmit={async (values, { setSubmitting }) => {
        // Submission handler
        try {
          await handleRegister(values); // Call handleRegister function with form values
          setRegistrationSuccess(true); // Set registration success
        } catch (error) {
          console.error("Registration error:", error); // Log any registration errors
        } finally {
          setSubmitting(false); // Set submitting state to false
        }
      }}
    >
      {(
        { isSubmitting } // Render Formik-managed form
      ) => (
        <div className="register-box">
          {" "}
          {/* Main container for registration form */}
          <Form className="register">
            {" "}
            {/* Formik-managed form */}
            <h2>Register</h2> {/* Heading for registration form */}
            {!registrationSuccess ? ( // Conditional rendering based on registrationSuccess state
              <>
                {" "}
                {/* Fragment for multiple elements */}
                <div className="form-field">
                  <label htmlFor="firstName" className="form-label">
                    First Name:
                  </label>
                  <Field type="text" name="firstName" className="form-input" />{" "}
                  {/* First Name input field */}
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="error"
                  />{" "}
                  {/* Display validation error */}
                </div>
                <div className="form-field">
                  <label htmlFor="surname" className="form-label">
                    Surname:
                  </label>
                  <Field type="text" name="surname" className="form-input" />{" "}
                  {/* Surname input field */}
                  <ErrorMessage
                    name="surname"
                    component="div"
                    className="error"
                  />{" "}
                  {/* Display validation error */}
                </div>
                <div className="form-field">
                  <label htmlFor="username" className="form-label">
                    Username:
                  </label>
                  <Field type="text" name="username" className="form-input" />{" "}
                  {/* Username input field */}
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="error"
                  />{" "}
                  {/* Display validation error */}
                </div>
                <div className="form-field">
                  <label htmlFor="email" className="form-label">
                    Email Address:
                  </label>
                  <Field type="email" name="email" className="form-input" />{" "}
                  {/* Email Address input field */}
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                  />{" "}
                  {/* Display validation error */}
                </div>
                <div className="form-field">
                  <label htmlFor="password" className="form-label">
                    Password:
                  </label>
                  <Field
                    type="password"
                    name="password"
                    className="form-input"
                  />{" "}
                  {/* Password input field */}
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="error"
                  />{" "}
                  {/* Display validation error */}
                </div>
                <div className="form-field">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirm Password:
                  </label>
                  <Field
                    type="password"
                    name="confirmPassword"
                    className="form-input"
                  />{" "}
                  {/* Confirm Password input field */}
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="error"
                  />{" "}
                  {/* Display validation error */}
                </div>
                <button type="submit" disabled={isSubmitting}>
                  Register
                </button>{" "}
                {/* Submit button */}
              </>
            ) : (
              <p className="success-message">
                Registration successful! You may now login.
              </p> // Success message after successful registration
            )}
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default RegistrationForm; // Export RegistrationForm component as default
