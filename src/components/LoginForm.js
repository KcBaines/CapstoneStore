import React, { useState } from "react"; // Import React and useState hook
import { Formik, Form, Field, ErrorMessage } from "formik"; // Import Formik components for form handling
import "../styles/LoginForm.css"; // Import CSS file for styling

const LoginForm = ({ handleLogin }) => {
  // Define LoginForm component receiving handleLogin prop
  const [loginError, setLoginError] = useState(false); // State for handling login error

  // Function to validate form fields
  const validate = (values) => {
    const errors = {};

    // Validate username and password
    if (!values.username) {
      errors.username = "Username is required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }

    return errors; // Return validation errors
  };

  // Function to handle user login submission
  const handleUserLogin = async (values, { setSubmitting }) => {
    try {
      await handleLogin(values.username); // Call handleLogin function with username
      setLoginError(false); // Reset login error state
    } catch (error) {
      console.error("Login error:", error); // Log any login errors
      setLoginError(true); // Set login error state
    } finally {
      setSubmitting(false); // Set submitting state to false
    }
  };

  return (
    <div className="main-container">
      <div className="login-box">
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          validate={validate} // Validation function
          onSubmit={handleUserLogin} // Submission handler
        >
          {({ isSubmitting }) => (
            <Form className="login">
              {" "}
              {/* Formik-managed form */}
              <h2>Login</h2> 
              {/* Display error message if loginError is true */}
              {loginError && (
                <div className="alert alert-danger" role="alert">
                  Incorrect username or password. Please try again.
                </div>
              )}
              <div className="form-field">
                {" "}
                {/* Form field for username */}
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
                {" "}
                {/* Form field for password */}
                <label htmlFor="password" className="form-label">
                  Password:
                </label>
                <Field type="password" name="password" className="form-input" />{" "}
                {/* Password input field */}
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error"
                />{" "}
                {/* Display validation error */}
              </div>
              <button type="submit" disabled={isSubmitting}>
                Login
              </button>{" "}
              {/* Submit button */}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm; // Export LoginForm component as default
