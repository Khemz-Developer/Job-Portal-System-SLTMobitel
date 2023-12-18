import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ImageLogo from "../../assets/images/22.png";
import axios from "axios"; // Import Axios
import Footer from "../Footer";
const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axios.post(
  //       "http://localhost:3000/api/v1/users/signup",
  //       formData
  //     );

  //     if (response.status === 201) {
  //       // Successful registration, navigate to the login page
  //       console.log(response.data.message); // Log the success message
  //       alert("SignUp successful! Redirecting to Login Page.");
  //       navigate("/login");
  //     } else {
  //       // Registration failed
  //       console.error("Registration failed:", response.data.message);
  //       alert("Error"+response.data.message);
  //       // Show an alert or set an error state to display a user-friendly message
  //       // alert('Registration failed. Please try again.');
  //       // or set an error state in your component to display an error message in the UI
  //     }
  //   } catch (error) {
  //     // Handle network errors or unexpected errors
  //     console.error("Error during registration:", error);

  //     // Show an alert or set an error state to display a user-friendly message
  //     // alert('An unexpected error occurred. Please try again.');
  //     // or set an error state in your component to display an error message in the UI
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/users/signup",
        formData
      );
  
      if (response.status === 201) {
        // Successful registration, navigate to the login page
        console.log(response.data.message); // Log the success message
        alert("SignUp successful! Redirecting to Login Page.");
        navigate("/login");
      } else if (response.status === 409) {
        // Conflict - Email already exists
        console.error("Email already exists. Please use a different email.");
        alert("Email already exists. Please use a different email.");
      } else {
        // Registration failed for other reasons
        console.error("Registration failed:", response.data.message);
        alert("Error: " + response.data.message);
        // Show an alert or set an error state to display a user-friendly message
      }
    } catch (error) {
      // Handle network errors or unexpected errors
      console.error("Error during registration:", error);
  
      if (axios.isAxiosError(error) && error.response) {
        const status = error.response.status;
        if (status === 409) {
          // Conflict - Email already exists
          alert("Email already exists. Please use a different email.");
        } else {
          // Other Axios errors
          alert("Unexpected error during registration. Please check the console for details.");
        }
      } else {
        // Non-Axios errors (network errors, etc.)
        alert("An unexpected error occurred. Please try again.");
      }
    }
  };
  

  return (
    <div className="home-main-div">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="container home-inner-div">
        <Container>
          <Row className="row-1-main">
            <Col md={5} className="col-1-main">
              <img src={ImageLogo} alt="SLT Logo" className="logo-image" />
            </Col>
            <Col md={6} className="col-2-main container">
              <h2 className="register-name">Register</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="fullname">Full Name:</label>
                  <input
                    type="text"
                    id="fullname"
                    className="form-control"
                    placeholder="Enter your full name"
                    onChange={handleChange}
                    value={formData.fullname}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="username">Username:</label>
                  <input
                    type="text"
                    id="username"
                    className="form-control"
                    placeholder="Enter your username"
                    onChange={handleChange}
                    value={formData.username}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter your email"
                    onChange={handleChange}
                    value={formData.email}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="Enter your password"
                    onChange={handleChange}
                    value={formData.password}
                    required
                  />
                </div>

                <div className="d-flex justify-content-end btn-submit-reg">
                  <button type="submit" className="btn btn-primary custom-btn mb">
                    Submit
                  </button>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="mt-5">
      <Footer/>
      </div>
    </div>
  );
};

export default SignUp;
