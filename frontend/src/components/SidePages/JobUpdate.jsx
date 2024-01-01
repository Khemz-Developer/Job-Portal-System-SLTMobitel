
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../pages/Authcontext";
import { Link } from "react-router-dom";
const JobUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getToken } = useAuth();

  const [job, setJob] = useState({
    jobField: "",
    jobPosition: "",
    workMethod: "",
    jobDescription: "",
    salary: "",
    dueDate: "",
    workLocation: "",
    workType: "",
    requiredSkills: [],
    educationalQualifications: "",
  });

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/v1/jobs/${id}`,
          {
            headers: {
              Authorization: `Bearer ${getToken()}`,
            },
          }
        );
        setJob(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchJobDetails();
  }, [id]);

  const handleUpdate = async () => {
    try {
      const response = await axios.put(
        `http://localhost:3000/api/v1/jobs/update-job/${id}`,
        job,
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        }
      );
      console.log(response.data); // Updated job details
      navigate("/modification");
      alert("Successfully updated!");
    } catch (error) {
      alert("You don't have access to update!");
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJob((prevJob) => ({
      ...prevJob,
      [name]: name === "requiredSkills" ? value.split(",") : value,
    }));
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5 mb-10">
            <div className="card-body">
              <h3 className="mb-4 text-center"> Job Update Form </h3>
              <form>
                <div className="mb-3">
                  <label>Job Field:</label>
                  <select
                    name="jobField"
                    value={job.jobField}
                    onChange={handleChange}
                    className="form-control"
                  >
                    <option value="HR">HR</option>
                    <option value="Finance">Finance</option>
                    <option value="Telecommunication">Telecommunication</option>
                    <option value="Software">Software</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label>Job Position:</label>
                  <input
                    type="text"
                    name="jobPosition"
                    value={job.jobPosition}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label>Work Method:</label>
                  <select
                    name="workMethod"
                    value={job.workMethod}
                    onChange={handleChange}
                    className="form-control"
                  >
                    <option value="Onsite">Onsite</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="Online">Online</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label>Job Description:</label>
                  <textarea
                    name="jobDescription"
                    value={job.jobDescription}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label>Salary:</label>
                  <input
                    type="text"
                    name="salary"
                    value={job.salary}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label>Due Date:</label>
                  <input
                    type="date"
                    name="dueDate"
                    value={job.dueDate}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label>Work Location:</label>
                  <input
                    type="text"
                    name="workLocation"
                    value={job.workLocation}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label>Work Type:</label>
                  <select
                    name="workType"
                    value={job.workType}
                    onChange={handleChange}
                    className="form-control"
                  >
                    <option value="Part Time">Part Time</option>
                    <option value="Full Time">Full Time</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label>Required Skills (comma-separated):</label>
                  <input
                    type="text"
                    name="requiredSkills"
                    value={job.requiredSkills && job.requiredSkills.join(", ")}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label>Educational Qualifications:</label>
                  <select
                    name="educationalQualifications"
                    value={job.educationalQualifications}
                    onChange={handleChange}
                    className="form-control"
                  >
                    <option value="Undergraduate">Undergraduate</option>
                    <option value="Postgraduate">Postgraduate</option>
                  </select>
                </div>
                <button
                  type="button"
                  onClick={handleUpdate}
                  className="btn btn-outline-primary"
                >
                  Update Job
                </button>
                <Link
                  to="/modification"
                  className="btn btn-outline-secondary m-2 " // Add Bootstrap classes for styling
                >
                  Back
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobUpdate;


