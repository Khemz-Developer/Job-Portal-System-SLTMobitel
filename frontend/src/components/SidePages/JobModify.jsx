import React, { useEffect,  useState } from "react";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../pages/Authcontext";
import { Button } from "react-bootstrap";
import SearchBar from "../SearchBarByJobFeild";
import SearchByJobLocation from "../SearchByJobLocation";


import "./jobmodify.css";
const JobModify = () => {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(4); // You can adjust the number of jobs per page here
  const { getToken } = useAuth();
  
  const fetchData = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      };

      const response = await axios.get(
        "http://localhost:3000/api/v1/jobs/get-all",
        
        config
      );
      setJobs(response.data);
    } catch (error) {
      alert("You must Login First!");
      console.log(error);
    }
  };

  useEffect(() => {
   fetchData();

  }, [getToken]);

  const handleDelete = async (jobId) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      };

      const response = await axios.delete(
        `http://localhost:3000/api/v1/jobs/delete-job/${jobId}`,
        config
      );

      if (response.status === 200) {
        alert("Job deleted successfully");
        // Fetch updated job list
        fetchData();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleSearch = async (searchTerm) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${getToken()}`,
          name: searchTerm,
        },
      };

      const response = await axios.get(
        "http://localhost:3000/api/v1/jobs/find-all-job-byjobfeild",
        config
      );
      setJobs(response.data.data);
    } catch (error) {
      alert("You must Login First!");
      console.log(error);
    }
  };
  const handleSearch2 = async (searchTerm) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${getToken()}`,
          name: searchTerm,
        },
      };

      const response = await axios.get(
        "http://localhost:3000/api/v1/jobs/find-all-job-bylocation",
        config
      );
      setJobs(response.data.data);
    } catch (error) {
      alert("You must Login First!");
      console.log(error);
    }
  };

  // Pagination logic
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <Sidebar>
        <h3>Job Modifification Form</h3>
        {/* Search Bar Component */}
        <div className="row">
          <div className="col-md-6 ">
            <SearchBar onSearch={handleSearch} />
          </div>
          <div className="col-md-6">
            <SearchByJobLocation onSearch={handleSearch2} />
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
                  <th scope="col">Due Date</th>
                  <th scope="col">Location</th>
                  <th scope="col">Manage User</th>
                </tr>
              </thead>
              <tbody>
                {currentJobs.map((job, index) => (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{job.jobField}</td>
                    <td>{job.jobPosition}</td>
                    <td>{job.dueDate}</td>
                    <td>{job.workLocation}</td>
                    <td className="flex ">
                      <Link to={`jobupdate/${job._id}`}>
                        <Button
                          variant="outline-secondary"
                          className="btn mx-2 "
                        >
                          Edit
                        </Button>
                      </Link>
                      <Button
                        variant="outline-danger"
                        className="btn "
                        onClick={() => handleDelete(job._id)}
                      >
                        Delete
                      </Button>
                      <Link to={`view-user/${job._id}`}>
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
            {Array.from({ length: Math.ceil(jobs.length / jobsPerPage) }, (_, i) => (
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

export default JobModify;




// import React, { useEffect, useState } from "react";
// import Sidebar from "../Sidebar";
// import { Link} from "react-router-dom";
// import axios from "axios";
// import { useAuth } from "../pages/Authcontext";
// import { Button } from "react-bootstrap";
// import SearchBar from "../SearchBarByJobFeild";
// import SearchByJobLocation from "../SearchByJobLocation";
// import "./jobmodify.css";
// const JobModify = () => {
//   const [jobs, setJobs] = useState([]);

//   const { getToken } = useAuth();

//   const fetchData = async () => {
//     try {
//       const config = {
//         headers: {
//           Authorization: `Bearer ${getToken()}`,
//         },
//       };

//       const response = await axios.get(
//         "http://localhost:3000/api/v1/jobs/get-all",
//         config
//       );
//       setJobs(response.data);
//     } catch (error) {
//       //alert('You must Login First!');
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, [getToken]);

//   const handleDelete = async (jobId) => {
//     try {
//       const config = {
//         headers: {
//           Authorization: `Bearer ${getToken()}`,
//         },
//       };

//       const response = await axios.delete(
//         `http://localhost:3000/api/v1/jobs/delete-job/${jobId}`,
//         config
//       );

//       if (response.status === 200) {
//         alert("Job deleted successfully");
//         // Fetch updated job list
//         fetchData();
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   const handleSearch = async (searchTerm) => {
//     try {
//       const config = {
//         headers: {
//           Authorization: `Bearer ${getToken()}`,
//           name: searchTerm,
//         },
//       };

//       const response = await axios.get(
//         "http://localhost:3000/api/v1/jobs/find-all-job-byjobfeild",
//         config
//       );
//       setJobs(response.data.data);
//     } catch (error) {
//      // alert('You must Login First!')
//       console.log(error);
//     }
//   };
//   const handleSearch2 = async (searchTerm) => {
//     try {
//       const config = {
//         headers: {
//           Authorization: `Bearer ${getToken()}`,
//           name: searchTerm,
//         },
//       };

//       const response = await axios.get(
//         "http://localhost:3000/api/v1/jobs/find-all-job-bylocation",
//         config
//       );
//       setJobs(response.data.data);
//     } catch (error) {
//       alert('You must Login First!')
//       console.log(error);
//     }
//   };
//   return (
//     <div>
//       <br></br>
//       <br></br>
//       <br></br>
//       <Sidebar>
//         <h3>Job Modifification Form</h3>
//         {/* Search Bar Component */}
//         <div className="row">
//           <div className="col-md-6 ">
//             <SearchBar onSearch={handleSearch} />
//           </div>
//           <div className="col-md-6">
//             <SearchByJobLocation onSearch={handleSearch2} />
//           </div>
//         </div>

//         {/*table */}
//         <div className="container modi-container  pt-5">
//           <div className="">
//             <table className="table table-hover">
//               <thead className="table-primary ">
//                 <tr>
//                   <th scope="col">#</th>
//                   <th scope="col">Job Feild</th>
//                   <th scope="col">Job Position</th>
//                   <th scope="col">Due Date</th>
//                   <th scope="col">Location</th>
//                   <th scope="col">Manage User</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {jobs.map((job, index) => (
//                   <tr key={index}>
//                     <th>{index + 1}</th>
//                     <td>{job.jobField}</td>
//                     <td>{job.jobPosition}</td>
//                     <td>{job.dueDate}</td>
//                     <td>{job.workLocation}</td>
//                     <td className="flex ">
//                       <Link to={`jobupdate/${job._id}`}>
//                         <Button
//                           variant="outline-secondary"
//                           className="btn mx-2 "
//                         >
//                           Edit
//                         </Button>
//                       </Link>
//                       <Button
//                         variant="outline-danger"
//                         className="btn "
//                         onClick={() => handleDelete(job._id)}
//                       >
//                         Delete
//                       </Button>
//                       <Link to={`view-user/${job._id}`}>
//                         <Button variant="outline-info" className="btn m-2 ">
//                           View
//                         </Button>
//                       </Link>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </Sidebar>
//     </div>
//   );
// };

// export default JobModify;
