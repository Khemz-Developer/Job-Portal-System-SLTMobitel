import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import axios from "axios";
import { useAuth } from "../pages/Authcontext";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const ReceivedCVs = () => {
  const [applications, setApplications] = useState([]);
  const { getToken } = useAuth();

  const fetchAllApplications = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      };

      const response = await axios.get(
        "http://localhost:3000/api/v1/applications/get-all-applications",

        config
      );
      setApplications(response.data);
      //console.log(response.data);
      //console.log(applications);

    } catch (error) {
     // alert("You must Login First");
      console.log(error) ;
    }
  };

  const handleViewPdf = (pdfLink) => {
    window.open(pdfLink, "_blank");
  };
  
  useEffect(() => {
    fetchAllApplications();
  }, [getToken]);

  useEffect(() => {
    //console.log(applications);
  }, [applications]);

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <Sidebar>
        <h3> Received CVs</h3>
        {/*table */}
        <div className="container modi-container  pt-5">
          <div className="">
            <table className="table table-hover">
              <thead className="table-primary ">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Job Feild</th>
                  <th scope="col">Job Position</th>
                  <th scope="col">Email</th>
                  <th scope="col">View Cv</th>
                  <th scope="col">Manage User</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((application, index) => (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{application.jobField}</td>
                    <td>{application.jobPosition}</td>
                    <td>{application.email}</td>
                    <td><Link >
                    <Button
                        variant="outline-secondary"
                        className="btn mx-2 my-1 "
                        onClick={() => handleViewPdf(application.cvFile)}
                      >
                        View PDF
                      </Button>
                      </Link></td>
                    <td className="flex ">
                      <Link >
                        <Button
                          variant="outline-secondary"
                          className="btn mx-2 "
                        >
                          Accept
                        </Button>
                      </Link>
                      <Button
                        variant="outline-danger"
                        className="btn "
                        
                      >
                        Reject
                      </Button>
                      <Link >
                        <Button variant="outline-info" className="btn m-2 ">
                          View
                        </Button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          </div>
      </Sidebar>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default ReceivedCVs;
