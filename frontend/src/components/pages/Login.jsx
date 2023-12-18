import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from "../../assets/images/loginn.png";
import { Link } from "react-router-dom";
import { useAuth } from "../pages/Authcontext";
import "./login.css";
import Footer from "../Footer";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

 
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axios.post('http://localhost:3000/api/v1/users/login', formData);

  //     if (response.status === 200) {
  //       // Successful login
  //       const { token,role } = response.data;
  //       login(token);
  //       // Navigate based on the user's role
  //       if (role === 'admin') {
  //         navigate('/create'); // Redirect to admin route
  //         alert("Login successful! Redirecting to admin dashboard.");
  //       } else if (role === 'user') {
  //         navigate('/uservacancy'); // Redirect to user route
  //         alert("Login successful! Redirecting to user dashboard.");
  //          //alerat as log in successfull
  //       }
  //     } else {
  //       // Login failed
  //       console.error('Login failed:', response.data.message);
  //       alert("Error: " + response.data.message);
  //     }
  //   } catch (error) {
  //     // Handle network errors or unexpected errors
  //     console.error('Error during login:', error);
  //     alert("Error: " + error);
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/users/login",
        formData
      );

      if (response.status === 200) {
        // Successful login
        const { token, role } = response.data;
        login(token);
        // Navigate based on the user's role
        if (role === "admin") {
          navigate("/create"); // Redirect to admin route
          alert("Login successful! Redirecting to admin dashboard.");
        } else if (role === "user") {
          navigate("/uservacancy"); // Redirect to user route
          alert("Login successful! Redirecting to user dashboard.");
        }
      } else if (response.status === 401) {
        // Unauthorized - Incorrect password
        console.error("Password is incorrect.");
        alert("Password is incorrect.");
      } else if (response.status === 404) {
        // Not Found - Email not found
        console.error("Email not found. Please check your email address.");
        alert("Email not found. Please check your email address.");
      } else {
        // Other server errors
        console.error("Unexpected error during login:", response);
        alert(
          "Unexpected error during login. Please check the console for details."
        );
      }
    } catch (error) {
      // Handle network errors or unexpected errors
      console.error("Error during login:", error);
    
      if (axios.isAxiosError(error)) {
        if (error.response && error.response.status === 401) {
          // Handle 401 specifically without triggering an error
          alert("Incorrect password. Please check your password.");
        } else {
          // Other Axios errors
          alert("Email is not valid !");
        }
      } else {
        // Non-Axios errors (network errors, etc.)
        alert("Error during login: " + error.message);
      }
    }
    
  }
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <div className="mt-5">
        <div className="login-main-div">
          <div className="container custom-container login-inner-div">
            <Container>
              <Row className="row-1-login">
                <Col md={5} className="col-1-login">
                  <h2 className="login-name">Sign In</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="email">Email:</label>
                      <input
                        required
                        type="text"
                        id="email"
                        className="form-control"
                        placeholder="Enter your email"
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="password">Password:</label>
                      <input
                        type="password"
                        id="password"
                        className="form-control"
                        placeholder="Enter your password"
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      />
                    </div>
                    
                    <div className="d-flex justify-content-center btn-submit-login mt-4 ">
                      <Button
                        className="btn-custom-width"
                        type="submit"
                        variant="light"
                      >
                        Submit
                      </Button>
                    </div>
                    <div className="d-flex align-items-center ">
                      <p
                        className="paragraph mb-0 mr-2 "
                        style={{ fontSize: "small" }}
                      >
                        Don't You Have Account ?
                      </p>
                      <Link to="/signup" className="link-inline m-2">
                        Sign Up
                      </Link>
                    </div>
                  </form>
                </Col>

                <Col md={6} className="col-2-login container ">
                  <img src={Logo} alt=" Logo" className="login-image " />
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
      <div className="mt-5">
      <Footer/>
      </div>
    </div>
  );
};

export default Login;

//
// import React, { useState } from "react";
// import { useNavigate } from 'react-router-dom';
// import Button from "react-bootstrap/Button";
// import axios from 'axios';
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Logo from "../../assets/images/loginn.png";
// import { Link } from "react-router-dom";

// import './login.css'

// const Login = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:3000/api/v1/users/login', formData);

//       if (response.status === 200) {
//         // Successful login
//         const { role } = response.data;

//         // Navigate based on the user's role
//         if (role === 'admin') {
//           navigate('/create'); // Redirect to admin route
//         } else if (role === 'user') {
//           navigate('/uservacancy'); // Redirect to user route
//         }
//       } else {
//         // Login failed
//         console.error('Login failed:', response.data.message);
//       }
//     } catch (error) {
//       // Handle network errors or unexpected errors
//       console.error('Error during login:', error);
//     }
//   };

//   return (
//     <div>
//       <br></br><br></br><br></br>
//       <div className="mt-5">
//         <div className="login-main-div">
//           <div className="container login-inner-div">
//             <Container>
//               <Row className="row-1-login">
//                 <Col md={5} className="col-1-login">
//                   <h2 className="login-name">Sign In</h2>
//                   <form onSubmit={handleSubmit}>
//                     <div className="form-group">
//                       <label htmlFor="email">Email:</label>
//                       <input
//                         type="text"
//                         id="email"
//                         className="form-control"
//                         placeholder="Enter your email"
//                         onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                       />
//                     </div>

//                     <div className="form-group">
//                       <label htmlFor="password">Password:</label>
//                       <input
//                         type="password"
//                         id="password"
//                         className="form-control"
//                         placeholder="Enter your password"
//                         onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//                       />
//                     </div>

//                     <div className="d-flex justify-content-center btn-submit-login mt-4 ">
//                       <Button
//                         className="btn-custom-width"
//                         type="submit"
//                         variant="light"
//                       >
//                         Submit
//                       </Button>
//                     </div>
//                     <div className="d-flex align-items-center ">
//                       <p
//                         className="paragraph mb-0 mr-2 "
//                         style={{ fontSize: "small" }}
//                       >
//                         Don't You Have Account ?
//                       </p>
//                       <Link to="/signup" className="link-inline m-2">
//                         Sign Up
//                       </Link>
//                     </div>
//                   </form>
//                 </Col>

//                 <Col md={6} className="col-2-login container ">
//                   <img src={Logo} alt=" Logo" className="login-image " />
//                 </Col>
//               </Row>
//             </Container>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
