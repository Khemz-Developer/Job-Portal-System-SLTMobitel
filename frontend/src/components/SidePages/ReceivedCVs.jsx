import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import axios from "axios";
import { useAuth } from "../pages/Authcontext";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const ReceivedCVs = () => {

  const [applications, setApplications] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [applicationsPerPage] = useState(6); // You can adjust the number of jobs per page here
  const [acceptedApplications, setAcceptedApplications] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { isLoggedIn, getToken } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    // Check if the user is not logged in when the component mounts
    if (!isLoggedIn) {
      alert("Please log in first");
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

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

  const handleDelete = async (appId)=>{
    try{
      const config ={
        headers:{
          Authorization:`Bearer ${getToken()}`,
        },
      };

      const response = await axios.delete(
        `http://localhost:3000/api/v1/applications/delete-single-applications/${appId}`,
      config
      );

      if(response.status===200){
        alert("Application Succesfully Deleted !");
        fetchAllApplications();
      }
    }catch(error){
      console.log(error);
    }
  };

  const handleAccept = async (appId) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      };
  
      // Send request to mark application as accepted
      const response = await axios.post(
        `http://localhost:3000/api/v1/applications/accept/${appId}`,
        {},
        config
      );
  
      if (response.status === 200) {
        // Remove accepted application from applications state
        const updatedApplications = applications.filter(
          (application) => application._id !== appId
        );
        setApplications(updatedApplications);
  
        // Add the accepted application to the acceptedApplications state
        setAcceptedApplications([...acceptedApplications, response.data]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  const handleViewPdf = (pdfLink) => {
    window.open(pdfLink, "_blank");
  };
  

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/v1/applications/admin-find-applicant", // address need to chnage
        {
          headers: {
            searchterm: searchTerm,
          },
        }
      );
      setApplications(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllApplications();
  }, [getToken]);

  useEffect(() => {
    //console.log(applications);
  }, [applications]);

   // Pagination logic
   const indexOfLastApplication = currentPage * applicationsPerPage;
   const indexOfFirstApplication = indexOfLastApplication - applicationsPerPage;
   const currentApplication = applications.slice(indexOfFirstApplication, indexOfLastApplication);
 
   const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <Sidebar>
        <h3 className="text-center mt-3"> Applications Received </h3>
        
      
      <div className="search-options  mt-3">
      
        <div className="row my-2">
          <input
            className="col-6 m-3 search-bar"
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by Job Field, Job Position..."
          />
          <button onClick={handleSearch} className="col-1 m-3 searchbutton" type="">
            SEARCH
          </button>
        </div>
      </div>
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
                  <th className="px-4" scope="col">CV File</th>
                  <th scope="col">Manage User</th>
                </tr>
              </thead>
              <tbody>
                {currentApplication.map((application, index) => (
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
                          onClick={()=>handleAccept(application._id)}
                        >
                          Accept
                        </Button>
                      </Link>
                      <Button
                        variant="outline-danger"
                        className="btn "
                        onClick={()=>handleDelete(application._id)}
                      >
                        Delete
                      </Button>
                      <Link to={`view-application/${application._id}`} >
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
          {/* Pagination */}
          <ul className="pagination">
            {Array.from({ length: Math.ceil(applications.length / applicationsPerPage) }, (_, i) => (
              <li key={i} className={`page-item ${i + 1 === currentPage ? "active" : ""}`}>
                <button className="page-link" onClick={() => paginate(i + 1)}>
                  {i + 1}
                </button>
              </li>
            ))}
          </ul>
          </div>
      </Sidebar>
     
      
      
    </div>
  );
};

export default ReceivedCVs;
