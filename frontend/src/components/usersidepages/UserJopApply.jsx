import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import UserSidebar from "../UserSidebar";
import { useLocation, useNavigate } from "react-router-dom";
import "./UserJobApply.css";

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

  const [activities, setActivities] = useState([{ name: "", experience: "" }]);

  const [results, setResults] = useState([
    { subject: "", result: "" },
    { subject: "", result: "" },
    { subject: "", result: "" },
  ]);
  const [skills, setSkills] = useState([""]);

  // const [cvFile, setCVFile] = useState(null);

  const handleResultChange = (index, field, value) => {
    const updatedResults = [...results];
    updatedResults[index][field] = value;
    setResults(updatedResults);
  };
  
  // const handleCVChange = (e) => {
  //   const file = e.target.files[0];

  //   // Add additional validation if needed
  //   if (file && file.type === "application/pdf") {
  //     setCVFile(file);
  //   } else {
  //     setCVFile(null);
  //     // Optionally, display an error message to the user.
  //     console.error("Please select a valid PDF file.");
  //   }
  // };

  const handleAddActivity = () => {
    setActivities([...activities, { name: "", experience: "" }]);
  };

  const handleRemoveActivity = (index) => {
    const updatedActivities = [...activities];
    updatedActivities.splice(index, 1);
    setActivities(updatedActivities);
  };

  const handleActivityChange = (index, field, value) => {
    const updatedActivities = [...activities];
    updatedActivities[index][field] = value;
    setActivities(updatedActivities);
  };

  const handleAddSkill = () => {
    setSkills([...skills, ""]);
  };

  const handleRemoveSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };

  const handleSkillChange = (index, value) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = value;
    setSkills(updatedSkills);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Include cvFile in your form data when submitting
    // const formData = {
    
    //   cvFile,
    // };
    // Perform your form submission logic, e.g., send formData to a server

    // Reset the form or navigate to another page if needed
  };

  useEffect(() => {

    // console.log("UserJopApply component rendered.");
    // console.log("Received job details in UserJobApply:", {
    //   jobField,
    //   jobPosition,
    // });

    // Check if jobField or jobPosition is missing
    if (!jobField || !jobPosition) {
      // Navigate back to "/uservacancy"
      navigate("/uservacancy");
    }
  }, [jobField, jobPosition, navigate]);

  return (
    <div>
      <br />
      <br />
      <br />
      <UserSidebar>
        <br />

        {/* <ApplicationForm/> */}
        <div className="container-user-apply container">
          <Form onSubmit={handleSubmit}>
            <h4 className="text-center mt-4 mb-4">Job Application Form</h4>

            <div className="row">
              <Form.Group className="mb-3 col-6" controlId="formJobFeild">
                <Form.Label>Job Field</Form.Label>
                <Form.Control
                  type="text"
                  name="jobFeild"
                  value={jobField} // Set the value from the state
                  readOnly // Make the field read-only if you want to prevent user input
                />
              </Form.Group>

              <Form.Group className="mb-3 col-6" controlId="formJobDescription">
                <Form.Label>Job Position</Form.Label>
                <Form.Control
                  type="text"
                  name="jobPosition"
                  value={jobPosition} // Set the value from the state
                  readOnly // Make the field read-only if you want to prevent user input
                />
              </Form.Group>
            </div>

            <div className="row">
              <Form.Group className="mb-3 col-4" controlId="formSalary">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Mobile Number"
                  name="salary"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3 col-4" controlId="formDateofBirth">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control type="date" name="DateofBirth" required />
              </Form.Group>

              <Form.Group className="mb-3 col-4" controlId="formNic">
                <Form.Label>Nic :</Form.Label>
                <Form.Control
                  type="text"
                  name="nic"
                  placeholder="984321276v"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3 col-6" controlId="formEmail">
                <Form.Label>Email :</Form.Label>
                <Form.Control
                  type="email"
                  name="emaiL"
                  placeholder="example@example.com"
                  required
                />{" "}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formAddress">
                <Form.Label>Address :</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Address"
                  rows={2}
                  name="address"
                  required
                />
              </Form.Group>
            </div>

            <div className="">
              {/* Educational Qualification */}

              <Form.Group
                className="mb-3"
                controlId="formEducationalQualification"
              >
                <Form.Label>Educational Qualification :</Form.Label>

                {/* OL Results */}
                <Form.Group controlId="formOLResults">
                  <Form.Label>OL Results :</Form.Label>
                  <Row>
                    {/* Subject 1 */}
                    <Col md={2}>
                      <InputGroup className="mb-3">
                        <InputGroup.Text>Maths :</InputGroup.Text>
                        <FormControl type="text" placeholder="Result" />
                      </InputGroup>
                    </Col>
                    {/* Subject 2 */}
                    <Col md={2}>
                      <InputGroup className="mb-3">
                        <InputGroup.Text>Science :</InputGroup.Text>
                        <FormControl type="text" placeholder="Result" />
                      </InputGroup>
                    </Col>
                    {/* Subject 3 */}
                    <Col md={2}>
                      <InputGroup className="mb-3">
                        <InputGroup.Text>English :</InputGroup.Text>
                        <FormControl type="text" placeholder="Result" />
                      </InputGroup>
                    </Col>
                    {/* Subject 4 */}
                    <Col md={2}>
                      <InputGroup className="mb-3">
                        <InputGroup.Text>Sinhala :</InputGroup.Text>
                        <FormControl type="text" placeholder="Result" />
                      </InputGroup>
                    </Col>
                    {/* Subject 5 */}
                    <Col md={2}>
                      <InputGroup className="mb-3">
                        <InputGroup.Text>History :</InputGroup.Text>
                        <FormControl type="text" placeholder="Result" />
                      </InputGroup>
                    </Col>
                    {/* Subject 6 */}
                    <Col md={2}>
                      <InputGroup className="mb-3">
                        <InputGroup.Text>Religion :</InputGroup.Text>
                        <FormControl type="text" placeholder="Result" />
                      </InputGroup>
                    </Col>
                  </Row>
                </Form.Group>

                {/* A/L Results */}
                <Form.Group
                  className="mb-3"
                  controlId="formALResults"
                ></Form.Group>
                <Form.Label className="">A/L Results :</Form.Label>
                <Row>
                  {results.map((result, index) => (
                    <Col md={4} key={index}>
                      <InputGroup className="mb-3">
                        <InputGroup.Text>{`Subject ${
                          index + 1
                        }`}</InputGroup.Text>
                        <FormControl
                          type="text"
                          placeholder="Subject"
                          value={result.subject}
                          onChange={(e) =>
                            handleResultChange(index, "subject", e.target.value)
                          }
                          required
                        />
                      </InputGroup>
                      <InputGroup className="mb-3">
                        <InputGroup.Text>Result</InputGroup.Text>
                        <FormControl
                          type="text"
                          placeholder="Result"
                          value={result.result}
                          onChange={(e) =>
                            handleResultChange(index, "result", e.target.value)
                          }
                          required
                        />
                      </InputGroup>
                    </Col>
                  ))}
                </Row>
              </Form.Group>

              {/* Skills*/}

              <div className="row">
                <Form.Group className="mb-3 col-12" controlId="formSkills">
                  <Form.Label>Skills</Form.Label>
                  {skills.map((skill, index) => (
                    <InputGroup key={index} className="mb-3">
                      <FormControl
                        type="text"
                        placeholder="Skill"
                        value={skill}
                        onChange={(e) =>
                          handleSkillChange(index, e.target.value)
                        }
                        required
                      />
                      <Button
                        bsSize="small"
                        variant="outline-danger"
                        onClick={() => handleRemoveSkill(index)}
                      >
                        Remove
                      </Button>
                    </InputGroup>
                  ))}
                  <Button
                    variant="outline-primary"
                    onClick={handleAddSkill}
                    bsSize="small"
                  >
                    Add Skill
                  </Button>
                </Form.Group>
              </div>
            </div>

            <div>
              {/* Extra Curricular Activities*/}

              <Form.Group
                className="mb-3 col-12"
                controlId="formExtraCurricularActivities"
              >
                <Form.Label>Extra Curricular Activities</Form.Label>

                {activities.map((activity, index) => (
                  <Row key={index} className="mb-3">
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="Activity Name"
                        value={activity.name}
                        onChange={(e) =>
                          handleActivityChange(index, "name", e.target.value)
                        }
                        required
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="Experience"
                        value={activity.experience}
                        onChange={(e) =>
                          handleActivityChange(
                            index,
                            "experience",
                            e.target.value
                          )
                        }
                        required
                      />
                    </Col>
                    <Col>
                      <Button
                        className="mt-1"
                        variant="btn btn-outline-danger"
                        onClick={() => handleRemoveActivity(index)}
                        size="sm"
                      >
                        Remove
                      </Button>
                    </Col>
                  </Row>
                ))}

                <Button
                  className="mx-1"
                  variant="btn btn-outline-primary"
                  onClick={handleAddActivity}
                  size="sm"
                >
                  Add Activity
                </Button>
              </Form.Group>

              {/* Other form elements... */}
            </div>
            {/* <Form.Group className="mb-3" controlId="formCV">
              <Form.Label>Upload CV (PDF only):</Form.Label>
              <Form.Control
                type="file"
                accept=".pdf"
                name="cv"
                onChange={handleCVChange}
                required
              />
            </Form.Group> */}
            <Button
              type="submit"
              variant="outline-success"
              className="px-5 mt-3 submit-button"
            >
              Submit
            </Button>
          </Form>
        </div>
        <br></br>
        <br></br>
      </UserSidebar>
    </div>
  );
};

export default UserJopApply;
