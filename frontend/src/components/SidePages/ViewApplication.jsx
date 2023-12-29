import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ViewApplication = () => {
  const { id } = useParams();
  const [application, setApplication] = useState({});

  useEffect(() => {
    // Make a request for a user with a given ID
    axios
      .get(`http://localhost:3000/api/v1/applications/${id}`)
      .then((response) => {
        // handle success
        setApplication(response.data);
       // console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.error(error);
      });
  }, [id]);

  return (
    <div>
      <br />
      <br />
      <br />
      <br /> <br /> <br />
      <div className="container conttt">
        <div className="">
          <h2 className="text-center mb-4 text-2xl font-semibold jobdetails">
            Applicant Full Details
          </h2>
          <div className="mb-4">
            <span className="fontTitle">Job Field:</span> {application.jobField}
          </div>
          <div className="mb-4">
            <span className="fontTitle">Job Position :</span>{" "}
            {application.jobPosition}
          </div>
          <div className="mb-4">
            <span className="fontTitle">Full Name :</span>{" "}
            {application.nameofApplicant}
          </div>
          <div className="mb-4">
            <span className="fontTitle">Mobile Number :</span>{" "}
            {application.mobileNumber}
          </div>
          <div className="mb-4">
            <span className="fontTitle">Date of Birth :</span>{" "}
            {application.dateofBirth}
          </div>
          <div className="mb-4">
            <span className="fontTitle">Nic :</span> {application.nic}
          </div>
          <div className="mb-4">
            <span className="fontTitle">Email :</span> {application.email}
          </div>
          <div className="mb-4">
            <span className="fontTitle">Address :</span> {application.address}
          </div>
          <div className="mb-4">
            <span className="fontTitle">Skills :</span> {application.skills}
          </div>

          <div className="mb-4">
            <span className="fontTitle">O/L Results:</span>
            {application.olResults ? (
              <ul className="mx-3">
                {Object.entries(application.olResults).map(
                  ([subject, result], index) => (
                    <li key={index}>
                      <span>{subject}:</span> {result}
                    </li>
                  )
                )}
              </ul>
            ) : (
              <p>No O/L results available</p>
            )}
          </div>
          <div className="mb-4">
            <span className="fontTitle">A/L Results:</span>
            {application.alResults && application.alResults.length > 0 ? (
              <ul className="mx-3">
                {application.alResults.map((result, index) => (
                  <li key={index}>
                    <span>{result.subject}:</span> {result.result}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No A/L results available</p>
            )}
          </div>
          <div className="mb-4">
          <span className="fontTitle">Extra Curricular Activites : </span>
          {application.activities && application.activities.length>0 ? (
            <ul className="mx-3">
              {application.activities.map((result,index)=>(
                <li key={index}>
                  <span>{result.name} :</span> {result.experience}
                </li>
              ))}
            </ul>
          ):(
            <p>No A/L results available</p>
            )
          }
         
          </div>

          
          <Link
            to="/received"
            className="px-4 py-2 text-sm btn btn-outline-secondary mb-3 back-button"
          >
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewApplication;
