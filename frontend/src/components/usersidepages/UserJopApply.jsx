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
import axios from "axios";
import { useAuth } from "../pages/Authcontext";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../firebase";

const UserJopApply = () => {
  const location = useLocation(); // Get the current location
  const params = new URLSearchParams(location.search);
  const jobField = params.get("jobField");
  const jobPosition = params.get("jobPosition");
  const navigate = useNavigate(); // Add this line
  const { getToken } = useAuth(); // Use the getToken function from the useAuth hook

  const [activities, setActivities] = useState([{ name: "", experience: "" }]);

  const [results, setResults] = useState([
    { subject: "", result: "" },
    { subject: "", result: "" },
    { subject: "", result: "" },
  ]);
  const [skills, setSkills] = useState([]);

  const [pdf, setPDF] = useState(undefined);
  const [pdfPerc, setPDFPerc] = useState(0);
  const [inputs, setInputs] = useState({});

  useEffect(() => {
    pdf && uploadFile(pdf, "pdfUrl");
  }, [pdf]);

  const uploadFile = (file, fileType) => {
    const storage = getStorage(app);
    const folder = "pdfs/"; // Choose the appropriate folder
    
    //----------
    // Generate a unique identifier using timestamp and a random string
    const uniqueIdentifier =
      new Date().getTime() + Math.random().toString(36).substring(2, 8);

    // Append the unique identifier to the original filename
    const fileName = `${uniqueIdentifier}-${file.name}`;

    // const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, folder + fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setPDFPerc(Math.round(progress));
      },
      (error) => {
        console.log(error);
        // Handle errors
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("DownloadURL", downloadURL);
          setInputs((prev) => ({
            ...prev,
            [fileType]: downloadURL,
          }));
        });
      }
    );
  };

  const handleResultChange = (index, field, value) => {
    const updatedResults = [...results];
    updatedResults[index][field] = value;
    setResults(updatedResults);
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    // Extract values from the form
    const mobileNumber = form.mobileNumber.value;
    const dateofBirth = form.dateofBirth.value;
    const nic = form.nic.value;
    const email = form.email.value;
    const address = form.address.value;

    // Extract OL Results from the form
    const olResults = {
      maths: form.olMaths.value,
      science: form.olScience.value,
      english: form.olEnglish.value,
      sinhala: form.olSinhala.value,
      history: form.olHistory.value,
      religion: form.olReligion.value,
    };

    // Extract AL Results from the form
    const alResults = [
      {
        subject: form.alSubject1.value,
        result: form.alResult1.value,
      },
      {
        subject: form.alSubject2.value,
        result: form.alResult2.value,
      },
      {
        subject: form.alSubject3.value,
        result: form.alResult3.value,
      },
    ];
    // Extract skills from the form
    const extractedSkills = skills
      .map((skill) => skill.trim())
      .filter((skill) => skill !== "");

    // Extract activities from the form
    const extractedActivities = activities.map((activity) => ({
      name: activity.name.trim(),
      experience: activity.experience.trim(),
    }));

    if (pdf) {
      // Upload the PDF file to Firebase Storage
      //await uploadFile(pdf, "pdfUrl");
      // Clear the pdf state after uploading
      setPDF(undefined);
    }

    // Create the new application object
    const newApplication = {
      jobField,
      jobPosition,
      mobileNumber,
      dateofBirth,
      nic,
      email,
      address,
      olResults,
      alResults,
      skills: extractedSkills,
      activities: extractedActivities,
      cvFile: inputs.pdfUrl, // Include the PDF download URL
    };
    const config = {
      headers: {
        Authorization: `Bearer ${getToken()}`, // Include the token here
      },
    };
    axios
      .post(
        "http://localhost:3000/api/v1/applications/save-application",
        newApplication,
        config // Move the config object here as the second parameter
      )
      .then((response) => {
        console.log(response);
        alert("Your Job Application Submit Successfully!");
        navigate("/uservacancy");
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          alert("Please Log in First");
        }
        console.log(error);
      });
  };

  useEffect(() => {
    // Check if jobField or jobPosition is missing
    if (!jobField || !jobPosition) {
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

            {/* pdf */}
            <Form.Group className="mb-3 col-12" controlId="formResume">
              <Form.Label>Resume (PDF)</Form.Label>
              {pdfPerc > 0 && "Uploading: " + pdfPerc + "%"}
              <Form.Control
                type="file"
                accept=".pdf"
                name="resume"
                onChange={(e) => setPDF(e.target.files[0])}
                required
              />
            </Form.Group>

            <div className="row">
              <Form.Group className="mb-3 col-4" controlId="formSalary">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Mobile Number"
                  name="mobileNumber"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3 col-4" controlId="formDateofBirth">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control type="date" name="dateofBirth" required />
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
                  name="email"
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
                        <FormControl
                          name="olMaths"
                          type="text"
                          placeholder="Result"
                          required
                        />
                      </InputGroup>
                    </Col>
                    {/* Subject 2 */}
                    <Col md={2}>
                      <InputGroup className="mb-3">
                        <InputGroup.Text>Science :</InputGroup.Text>
                        <FormControl
                          name="olScience"
                          type="text"
                          placeholder="Result"
                          required
                        />
                      </InputGroup>
                    </Col>
                    {/* Subject 3 */}
                    <Col md={2}>
                      <InputGroup className="mb-3">
                        <InputGroup.Text>English :</InputGroup.Text>
                        <FormControl
                          name="olEnglish"
                          type="text"
                          placeholder="Result"
                          required
                        />
                      </InputGroup>
                    </Col>
                    {/* Subject 4 */}
                    <Col md={2}>
                      <InputGroup className="mb-3">
                        <InputGroup.Text>Sinhala :</InputGroup.Text>
                        <FormControl
                          name="olSinhala"
                          type="text"
                          placeholder="Result"
                          required
                        />
                      </InputGroup>
                    </Col>
                    {/* Subject 5 */}
                    <Col md={2}>
                      <InputGroup className="mb-3">
                        <InputGroup.Text>History :</InputGroup.Text>
                        <FormControl
                          name="olHistory"
                          type="text"
                          placeholder="Result"
                          required
                        />
                      </InputGroup>
                    </Col>
                    {/* Subject 6 */}
                    <Col md={2}>
                      <InputGroup className="mb-3">
                        <InputGroup.Text>Religion :</InputGroup.Text>
                        <FormControl
                          name="olReligion"
                          type="text"
                          placeholder="Result"
                          required
                        />
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
                          required
                          onChange={(e) =>
                            handleResultChange(index, "subject", e.target.value)
                          }
                          name={`alSubject${index + 1}`}
                        />
                      </InputGroup>
                      <InputGroup className="mb-3">
                        <InputGroup.Text>Result</InputGroup.Text>
                        <FormControl
                          type="text"
                          placeholder="Result"
                          value={result.result}
                          required
                          onChange={(e) =>
                            handleResultChange(index, "result", e.target.value)
                          }
                          name={`alResult${index + 1}`}
                        />
                      </InputGroup>
                    </Col>
                  ))}
                </Row>
              </Form.Group>
              {/* Skills */}

              <div className="row">
                <Form.Group className="mb-3 col-12" controlId="formSkills">
                  <Form.Label>Skills</Form.Label>
                  {skills.map((skill, index) => (
                    <InputGroup key={index} className="mb-3">
                      <FormControl
                        type="text"
                        placeholder="Skill"
                        value={skill}
                        required
                        onChange={(e) =>
                          handleSkillChange(index, e.target.value)
                        }
                        name={`skill${index + 1}`}
                      />
                      <Button
                        bsSize="small"
                        variant="outline-danger"
                        required
                        onClick={() => handleRemoveSkill(index)}
                      >
                        Remove
                      </Button>
                    </InputGroup>
                  ))}
                  <Button
                    variant="outline-primary"
                    onClick={handleAddSkill}
                    size="sm"
                    className="mx-2"
                  >
                    Add Skill
                  </Button>
                </Form.Group>
              </div>
            </div>

            {/* Extra Curricular Activities */}

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
                      name={`activityName${index + 1}`}
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
                      name={`activityExperience${index + 1}`}
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

// import React, { useEffect, useState } from "react";
// import {
//   Button,
//   Col,
//   Form,
//   FormControl,
//   InputGroup,
//   Row,
// } from "react-bootstrap";
// import UserSidebar from "../UserSidebar";
// import { useLocation, useNavigate } from "react-router-dom";
// import "./UserJobApply.css";
// import axios from "axios";
// import { useAuth } from "../pages/Authcontext";

// const UserJopApply = () => {
//   const location = useLocation(); // Get the current location
//   const params = new URLSearchParams(location.search);
//   const jobField = params.get("jobField");
//   const jobPosition = params.get("jobPosition");
//   const navigate = useNavigate(); // Add this line
//   const { getToken } = useAuth(); // Use the getToken function from the useAuth hook

//   const [activities, setActivities] = useState([{ name: "", experience: "" }]);

//   const [results, setResults] = useState([
//     { subject: "", result: "" },
//     { subject: "", result: "" },
//     { subject: "", result: "" },
//   ]);
//   const [skills, setSkills] = useState([]);

//   const handleResultChange = (index, field, value) => {
//     const updatedResults = [...results];
//     updatedResults[index][field] = value;
//     setResults(updatedResults);
//   };

//   const handleAddActivity = () => {
//     setActivities([...activities, { name: "", experience: "" }]);
//   };

//   const handleRemoveActivity = (index) => {
//     const updatedActivities = [...activities];
//     updatedActivities.splice(index, 1);
//     setActivities(updatedActivities);
//   };

//   const handleActivityChange = (index, field, value) => {
//     const updatedActivities = [...activities];
//     updatedActivities[index][field] = value;
//     setActivities(updatedActivities);
//   };

//   const handleAddSkill = () => {
//     setSkills([...skills, ""]);
//   };

//   const handleRemoveSkill = (index) => {
//     const updatedSkills = [...skills];
//     updatedSkills.splice(index, 1);
//     setSkills(updatedSkills);
//   };

//   const handleSkillChange = (index, value) => {
//     const updatedSkills = [...skills];
//     updatedSkills[index] = value;
//     setSkills(updatedSkills);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     // Extract values from the form
//     const mobileNumber = form.mobileNumber.value;
//     const dateofBirth = form.dateofBirth.value;
//     const nic = form.nic.value;
//     const email = form.email.value;
//     const address = form.address.value;

//     // Extract OL Results from the form
//     const olResults = {
//       maths: form.olMaths.value,
//       science: form.olScience.value,
//       english: form.olEnglish.value,
//       sinhala: form.olSinhala.value,
//       history: form.olHistory.value,
//       religion: form.olReligion.value,
//     };

//     // Extract AL Results from the form
//     const alResults = [
//       {
//         subject: form.alSubject1.value,
//         result: form.alResult1.value,
//       },
//       {
//         subject: form.alSubject2.value,
//         result: form.alResult2.value,
//       },
//       {
//         subject: form.alSubject3.value,
//         result: form.alResult3.value,
//       },
//     ];
//     // Extract skills from the form
//     const extractedSkills = skills
//       .map((skill) => skill.trim())
//       .filter((skill) => skill !== "");

//     // Extract activities from the form
//     const extractedActivities = activities.map((activity) => ({
//       name: activity.name.trim(),
//       experience: activity.experience.trim(),
//     }));

//     // Create the new application object
//     const newApplication = {
//       jobField,
//       jobPosition,
//       mobileNumber,
//       dateofBirth,
//       nic,
//       email,
//       address,
//       olResults,
//       alResults,
//       skills: extractedSkills,
//       activities: extractedActivities,
//     };
//     const config = {
//       headers: {
//         Authorization: `Bearer ${getToken()}`, // Include the token here
//       },
//     };
//     axios
//       .post(
//         "http://localhost:3000/api/v1/applications/save-application",
//         newApplication,
//         config // Move the config object here as the second parameter
//       )
//       .then((response) => {
//         console.log(response);
//         alert("Your Job Application Submit Successfully!");
//         navigate("/uservacancy");
//       })
//       .catch((error) => {
//         if (error.response && error.response.status === 401) {
//           alert("Please Log in First");
//         }
//         console.log(error);
//       });
//   };

//   useEffect(() => {
//     // Check if jobField or jobPosition is missing
//     if (!jobField || !jobPosition) {
//       navigate("/uservacancy");
//     }
//   }, [jobField, jobPosition, navigate]);

//   return (
//     <div>
//       <br />
//       <br />
//       <br />
//       <UserSidebar>
//         <br />

//         {/* <ApplicationForm/> */}
//         <div className="container-user-apply container">
//           <Form onSubmit={handleSubmit}>
//             <h4 className="text-center mt-4 mb-4">Job Application Form</h4>

//             <div className="row">
//               <Form.Group className="mb-3 col-6" controlId="formJobFeild">
//                 <Form.Label>Job Field</Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="jobFeild"
//                   value={jobField} // Set the value from the state
//                   readOnly // Make the field read-only if you want to prevent user input
//                 />
//               </Form.Group>

//               <Form.Group className="mb-3 col-6" controlId="formJobDescription">
//                 <Form.Label>Job Position</Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="jobPosition"
//                   value={jobPosition} // Set the value from the state
//                   readOnly // Make the field read-only if you want to prevent user input
//                 />
//               </Form.Group>
//             </div>

//             <div className="row">
//               <Form.Group className="mb-3 col-4" controlId="formSalary">
//                 <Form.Label>Mobile Number</Form.Label>
//                 <Form.Control
//                   type="tel"
//                   placeholder="Mobile Number"
//                   name="mobileNumber"
//                   required
//                 />
//               </Form.Group>

//               <Form.Group className="mb-3 col-4" controlId="formDateofBirth">
//                 <Form.Label>Date of Birth</Form.Label>
//                 <Form.Control type="date" name="dateofBirth" required />
//               </Form.Group>

//               <Form.Group className="mb-3 col-4" controlId="formNic">
//                 <Form.Label>Nic :</Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="nic"
//                   placeholder="984321276v"
//                   required
//                 />
//               </Form.Group>

//               <Form.Group className="mb-3 col-6" controlId="formEmail">
//                 <Form.Label>Email :</Form.Label>
//                 <Form.Control
//                   type="email"
//                   name="email"
//                   placeholder="example@example.com"
//                   required
//                 />{" "}
//               </Form.Group>

//               <Form.Group className="mb-3" controlId="formAddress">
//                 <Form.Label>Address :</Form.Label>
//                 <Form.Control
//                   as="textarea"
//                   placeholder="Address"
//                   rows={2}
//                   name="address"
//                   required
//                 />
//               </Form.Group>
//             </div>

//             <div className="">
//               {/* Educational Qualification */}

//               <Form.Group
//                 className="mb-3"
//                 controlId="formEducationalQualification"
//               >
//                 <Form.Label>Educational Qualification :</Form.Label>

//                 {/* OL Results */}
//                 <Form.Group controlId="formOLResults">
//                   <Form.Label>OL Results :</Form.Label>
//                   <Row>
//                     {/* Subject 1 */}
//                     <Col md={2}>
//                       <InputGroup className="mb-3">
//                         <InputGroup.Text>Maths :</InputGroup.Text>
//                         <FormControl
//                           name="olMaths"
//                           type="text"
//                           placeholder="Result"
//                           required
//                         />
//                       </InputGroup>
//                     </Col>
//                     {/* Subject 2 */}
//                     <Col md={2}>
//                       <InputGroup className="mb-3">
//                         <InputGroup.Text>Science :</InputGroup.Text>
//                         <FormControl
//                           name="olScience"
//                           type="text"
//                           placeholder="Result"
//                           required
//                         />
//                       </InputGroup>
//                     </Col>
//                     {/* Subject 3 */}
//                     <Col md={2}>
//                       <InputGroup className="mb-3">
//                         <InputGroup.Text>English :</InputGroup.Text>
//                         <FormControl
//                           name="olEnglish"
//                           type="text"
//                           placeholder="Result"
//                           required
//                         />
//                       </InputGroup>
//                     </Col>
//                     {/* Subject 4 */}
//                     <Col md={2}>
//                       <InputGroup className="mb-3">
//                         <InputGroup.Text>Sinhala :</InputGroup.Text>
//                         <FormControl
//                           name="olSinhala"
//                           type="text"
//                           placeholder="Result"
//                           required
//                         />
//                       </InputGroup>
//                     </Col>
//                     {/* Subject 5 */}
//                     <Col md={2}>
//                       <InputGroup className="mb-3">
//                         <InputGroup.Text>History :</InputGroup.Text>
//                         <FormControl
//                           name="olHistory"
//                           type="text"
//                           placeholder="Result"
//                           required
//                         />
//                       </InputGroup>
//                     </Col>
//                     {/* Subject 6 */}
//                     <Col md={2}>
//                       <InputGroup className="mb-3">
//                         <InputGroup.Text>Religion :</InputGroup.Text>
//                         <FormControl
//                           name="olReligion"
//                           type="text"
//                           placeholder="Result"
//                           required
//                         />
//                       </InputGroup>
//                     </Col>
//                   </Row>
//                 </Form.Group>

//                 {/* A/L Results */}
//                 <Form.Group
//                   className="mb-3"
//                   controlId="formALResults"
//                 ></Form.Group>
//                 <Form.Label className="">A/L Results :</Form.Label>
//                 <Row>
//                   {results.map((result, index) => (
//                     <Col md={4} key={index}>
//                       <InputGroup className="mb-3">
//                         <InputGroup.Text>{`Subject ${
//                           index + 1
//                         }`}</InputGroup.Text>
//                         <FormControl
//                           type="text"
//                           placeholder="Subject"
//                           value={result.subject}
//                           required
//                           onChange={(e) =>
//                             handleResultChange(index, "subject", e.target.value)
//                           }
//                           name={`alSubject${index + 1}`}
//                         />
//                       </InputGroup>
//                       <InputGroup className="mb-3">
//                         <InputGroup.Text>Result</InputGroup.Text>
//                         <FormControl
//                           type="text"
//                           placeholder="Result"
//                           value={result.result}
//                           required
//                           onChange={(e) =>
//                             handleResultChange(index, "result", e.target.value)
//                           }
//                           name={`alResult${index + 1}`}
//                         />
//                       </InputGroup>
//                     </Col>
//                   ))}
//                 </Row>
//               </Form.Group>
//               {/* Skills */}

//               <div className="row">
//                 <Form.Group className="mb-3 col-12" controlId="formSkills">
//                   <Form.Label>Skills</Form.Label>
//                   {skills.map((skill, index) => (
//                     <InputGroup key={index} className="mb-3">
//                       <FormControl
//                         type="text"
//                         placeholder="Skill"
//                         value={skill}
//                         required
//                         onChange={(e) =>
//                           handleSkillChange(index, e.target.value)
//                         }
//                         name={`skill${index + 1}`}
//                       />
//                       <Button
//                         bsSize="small"
//                         variant="outline-danger"
//                         required
//                         onClick={() => handleRemoveSkill(index)}
//                       >
//                         Remove
//                       </Button>
//                     </InputGroup>
//                   ))}
//                   <Button
//                     variant="outline-primary"
//                     onClick={handleAddSkill}
//                     size="sm"
//                     className="mx-2"
//                   >
//                     Add Skill
//                   </Button>
//                 </Form.Group>
//               </div>
//             </div>

//             {/* Extra Curricular Activities */}

//             <Form.Group
//               className="mb-3 col-12"
//               controlId="formExtraCurricularActivities"
//             >
//               <Form.Label>Extra Curricular Activities</Form.Label>

//               {activities.map((activity, index) => (
//                 <Row key={index} className="mb-3">
//                   <Col>
//                     <Form.Control
//                       type="text"
//                       placeholder="Activity Name"
//                       value={activity.name}
//                       onChange={(e) =>
//                         handleActivityChange(index, "name", e.target.value)
//                       }
//                       name={`activityName${index + 1}`}
//                       required
//                     />
//                   </Col>
//                   <Col>
//                     <Form.Control
//                       type="text"
//                       placeholder="Experience"
//                       value={activity.experience}
//                       onChange={(e) =>
//                         handleActivityChange(
//                           index,
//                           "experience",
//                           e.target.value
//                         )
//                       }
//                       name={`activityExperience${index + 1}`}
//                       required
//                     />
//                   </Col>
//                   <Col>
//                     <Button
//                       className="mt-1"
//                       variant="btn btn-outline-danger"
//                       onClick={() => handleRemoveActivity(index)}
//                       size="sm"
//                     >
//                       Remove
//                     </Button>
//                   </Col>
//                 </Row>
//               ))}

//               <Button
//                 className="mx-1"
//                 variant="btn btn-outline-primary"
//                 onClick={handleAddActivity}
//                 size="sm"
//               >
//                 Add Activity
//               </Button>
//             </Form.Group>

//             <Button
//               type="submit"
//               variant="outline-success"
//               className="px-5 mt-3 submit-button"
//             >
//               Submit
//             </Button>
//           </Form>
//         </div>
//         <br></br>
//         <br></br>
//       </UserSidebar>
//     </div>
//   );
// };

// export default UserJopApply;
