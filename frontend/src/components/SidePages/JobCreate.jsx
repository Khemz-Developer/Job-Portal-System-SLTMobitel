import React from "react";
import Sidebar from "../Sidebar";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../pages/Authcontext"; // Import the useAuth hook
import "./jobcreate.css";

const JobCreate = () => {
  const navigate = useNavigate();
  const { getToken } = useAuth(); // Use the getToken function from the useAuth hook

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    // Extract form values
    const jobField = form.jobField.value;
    const jobPosition = form.jobPosition.value;
    const workMethod = form.workMethod.value;
    const jobDescription = form.jobDescription.value;
    const salary = form.salary.value;
    const dueDate = form.dueDate.value;
    const workLocation = form.workLocation.value;
    const workType = form.workType.value;
    const requiredSkills = form.requiredSkills.value.split(","); // Split skills into an array
    const educationalQualifications = form.educationalQualifications.value;

    // Create a new job object
    const newJob = {
      jobField,
      jobPosition,
      workMethod,
      jobDescription,
      salary,
      dueDate,
      workLocation,
      workType,
      requiredSkills,
      educationalQualifications,
    };

    // Include the token in the headers
    const config = {
      headers: {
        Authorization: `Bearer ${getToken()}`, // Include the token here
      },
    };

    axios
      .post("http://localhost:3000/api/v1/jobs/save-job", newJob, config)
      .then((response) => {
        console.log(response);
        alert("New Job Added Successfully!");
        navigate("/modification");
      })
      .catch((error) => {
        alert('You must Login First!')
        console.log(error);
      });
  };

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <Sidebar>
        <h3 className="text-center m-4">Job Create Form</h3>
        <div className="">
          <Form className="card" onSubmit={handleSubmit}>
            <h3 className="font-bold h3font">Create New Job!</h3>

            {/* Job Field */}
            <Form.Group className="mb-3" controlId="formJobField">
              <Form.Label>Job Field</Form.Label>
              <Form.Control as="select" name="jobField" required>
                <option value="" disabled selected>
                  Select a job field
                </option>
                <option value="HR">HR</option>
                <option value="Finance">Finance</option>
                <option value="Telecommunication">Telecommunication</option>
                <option value="Software">Software</option>
                <option value="Management">Management</option>
              </Form.Control>
            </Form.Group>

            {/* Job Position */}
            <Form.Group className="mb-3" controlId="formJobPosition">
              <Form.Label>Job Position</Form.Label>
              <Form.Control
                type="text"
                placeholder="Job Position"
                name="jobPosition"
                required
              />
            </Form.Group>

            {/* Work Method */}
            <Form.Group className="mb-3" controlId="formWorkMethod">
              <Form.Label>Work Method</Form.Label>
              <Form.Control as="select" name="workMethod" required>
              <option value="" disabled selected>
                  Select a Work Method
                </option>
                <option value="Onsite">Onsite</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Online">Online</option>
              </Form.Control>
            </Form.Group>

            {/* Job Description */}
            <Form.Group className="mb-3" controlId="formJobDescription">
              <Form.Label>Job Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="jobDescription"
                required
              />
            </Form.Group>

            {/* Salary */}
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
            <Form.Group className="mb-3" controlId="formDueDate">
              <Form.Label>Due Date</Form.Label>
              <Form.Control type="date" name="dueDate" required />
            </Form.Group>

            {/* Work Location */}
            <Form.Group className="mb-3" controlId="formWorkLocation">
              <Form.Label>Work Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Work Location"
                name="workLocation"
                required
              />
            </Form.Group>

            {/* Work Type */}
            <Form.Group className="mb-3" controlId="formWorkType">
              <Form.Label>Work Type</Form.Label>
              <Form.Control as="select" name="workType" required>
              <option value="" disabled selected>
                  Select the work type
                </option>
                <option value="Part Time">Part Time</option>
                <option value="Full Time">Full Time</option>
              </Form.Control>
            </Form.Group>

            {/* Required Skills */}
            <Form.Group className="mb-3" controlId="formRequiredSkills">
              <Form.Label>Required Skills (comma-separated)</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g., JavaScript, React"
                name="requiredSkills"
                required
              />
            </Form.Group>

            {/* Educational Qualifications */}
            <Form.Group
              className="mb-3"
              controlId="formEducationalQualifications"
            >
              <Form.Label>
                Minimum Required Educational Qualifications
              </Form.Label>
              <Form.Control
                as="select"
                name="educationalQualifications"
                required
              >
                <option value="" disabled selected>
                  Select the expected educational qualifications
                </option>
                <option value="Undergraduate">Undergraduate</option>
                <option value="Postgraduate">Postgraduate</option>
              </Form.Control>
            </Form.Group>

            <div className="mt-6 form-control">
              <Button type="submit">Create</Button>
            </div>
          </Form>
        </div>
      </Sidebar>
    </div>
  );
};

export default JobCreate;
