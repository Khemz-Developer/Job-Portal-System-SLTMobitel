import React, { useEffect } from "react";
import { Button, Container, Form } from "react-bootstrap";
import UserSidebar from "../UserSidebar";
import { useLocation, useNavigate } from "react-router-dom";

const UserJopApply = () => {
  const location = useLocation(); // Get the current location
  const params = new URLSearchParams(location.search);
  const jobField = params.get("jobField");
  const jobPosition = params.get("jobPosition");
  const navigate = useNavigate(); // Add this line

  // console.log("Location state:", location.state);
  // console.log("Received job details in UserJobApply:", {
  //   jobField,
  //   jobPosition,
  // });

  useEffect(() => {
    console.log("UserJopApply component rendered.");
    console.log("Received job details in UserJobApply:", {
      jobField,
      jobPosition,
    });

    // Check if jobField or jobPosition is missing
    if (!jobField || !jobPosition) {
      // Navigate back to "/uservacancy"
      navigate("/uservacancy");
    }
  }, [jobField, jobPosition, navigate]);

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <UserSidebar>
        <br></br>
        <br></br>
        {/* <ApplicationForm/> */}
        <div>
          <Container>
            <Form>
              <h4 className="text-center mt-4">Application Form</h4>

              <Form.Group className="mb-3" controlId="formJobFeild">
                <Form.Label>Job Field</Form.Label>
                <Form.Control
                  type="text"
                  name="jobFeild"
                  value={jobField} // Set the value from the state
                  readOnly // Make the field read-only if you want to prevent user input
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formJobDescription">
                <Form.Label>Job Position</Form.Label>
                <Form.Control
                  type="text"
                  name="jobPosition"
                  value={jobPosition} // Set the value from the state
                  readOnly // Make the field read-only if you want to prevent user input
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formSalary">
                <Form.Label>Salary</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Salary"
                  name="salary"
                  required
                />
              </Form.Group>

              {/* Due Date */}
              <Form.Group className="mb-3" controlId="formDateofBirth">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control type="date" name="dueDate" required />
              </Form.Group>

              <Button type="submit" variant="primary" className="mt-3">
                Submit
              </Button>
            </Form>
          </Container>
        </div>
        <br></br>
        <br></br>
      </UserSidebar>
    </div>
  );
};

export default UserJopApply;
