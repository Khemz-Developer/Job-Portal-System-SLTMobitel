import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./view.css";

const View = () => {
  const { id } = useParams();
  const [job, setJob] = useState({});

  useEffect(() => {
    // Make a request for a user with a given ID
    axios
      .get(`http://localhost:3000/api/v1/jobs/${id}`)
      .then((response) => {
        // handle success
        setJob(response.data);
      })
      .catch(function (error) {
        // handle error
        console.error(error);
      });
  }, [id]);
  return (
    <div>
      <br /><br /><br /><br /> <br /> <br />
      
      <div className="container conttt">
        <div className="">
          <h2 className="text-center mb-4 text-2xl font-semibold jobdetails">
            Job Details
          </h2>
          <div className="mb-4">
            <span className="fontTitle">Job Field:</span> {job.jobField}
          </div>
          <div className="mb-4">
            <span className="fontTitle">Job Position:</span> {job.jobPosition}
          </div>
          <div className="mb-4">
            <span className="fontTitle">Work Method:</span> {job.workMethod}
          </div>
          <div className="mb-4">
            <span className="fontTitle">Work Location:</span> {job.workLocation}
          </div>
          <div className="mb-4">
            <span className="fontTitle">Work Type:</span> {job.workType}
          </div>
          <div className="mb-4">
            <span className="fontTitle">Required Skills:</span>{" "}
            {job.requiredSkills && job.requiredSkills.join(", ")}
          </div>
          <div className="mb-4">
            <span className="fontTitle">Educational Qualifications:</span>{" "}
            {job.educationalQualifications}
          </div>
          <div className="mb-4">
            <span className="fontTitle">Due Date:</span> {job.dueDate}
          </div>
          <div className="mb-4">
            <span className="fontTitle">Salary: Rs</span> {job.salary}
          </div>
          <div className="mb-4">
            <span className="fontTitle">Job Description:</span>{" "}
            {job.jobDescription}
          </div>

          <Link
            to="/modification"
            className="px-4 py-2 text-sm btn btn-outline-secondary mb-3 back-button"
          >
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default View;
