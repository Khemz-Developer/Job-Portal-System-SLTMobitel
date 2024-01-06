// import React, { useEffect, useState, useCallback } from "react";
import React, { useEffect, useState, useCallback } from "react";
import { useUser } from "../pages/UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../pages/Authcontext";
const UserStatus = () => {
  const { userEmail } = useUser();
  const [currentJobs, setCurrentJobs] = useState([]);
  const navigate = useNavigate(); // Add this line
  const { isLoggedIn } = useAuth(); // Use the getToken function from the useAuth hook
  const fetchApplications = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/v1/applications/get-applications-by-email?email=${userEmail}`
      );

      setCurrentJobs(response.data.applications);
    } catch (error) {
      console.error(error);
      // Handle error as needed
    }
  }, [userEmail]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchApplications();
    };

    fetchData();
  }, [userEmail, fetchApplications]); // Include fetchApplications in the dependency array

  useEffect(() => {
    // Check if the user is not logged in
    if (!isLoggedIn) {
      // Show an alert
      alert("Before Apply Vacancies, Please log in first ");
      // Redirect to the login page
      navigate("/login");
    }

    
  }, [isLoggedIn, navigate]);

  return (
    <div>
      <br />
      <h3 className="text-center">Signup Email: {userEmail}</h3>
      {/* ... (other content) */}
      <br /><br />
      <table className="table table-hover">
        <thead className="table-primary">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Job Field</th>
            <th scope="col">Job Position</th>
            <th scope="col">Email</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {currentJobs.map((job, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>{job.jobField}</td>
              <td>{job.jobPosition}</td>
              <td>{job.email}</td>
              <td>{job.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserStatus;
