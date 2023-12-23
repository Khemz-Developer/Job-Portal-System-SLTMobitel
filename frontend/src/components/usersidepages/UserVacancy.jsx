import React, { useEffect, useState } from "react";
import "./uservacancy.css";
import JobCard from "../JobCard";
import axios from "axios";

const UserVacancy = () => {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/v1/jobs/get-all-jobs"
      );
      setJobs(response.data);
      //console.log(response.data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/v1/jobs/user-find-job",
        {
          headers: {
            searchterm: searchTerm,
          },
        }
      );
      setJobs(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    fetchData(); // Call fetchData function when the component mounts
  }, []); // The empty dependency array means this useEffect runs once after the initial render

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>

      <h3 className="pt-5 text-center">Job Vacancies Available For You !</h3>
      
      <div className="search-options  mt-5">
      
        <div className="row my-5">
          <input
            className="col-6 m-3 search-bar"
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by Job Field, Job Position, Location"
          />
          <button onClick={handleSearch} className="col-1 m-3 searchbutton" type="">
            SEARCH
          </button>
        </div>
      </div>

      <div className="main-div">
        <div className="row">
          <div className="Right-side  ">
            {jobs.map((job, index) => (
              <JobCard
                key={job._id}
                jobField={job.jobField}
                jobPosition={job.jobPosition}
                jobDescription={job.jobDescription}
                workLocation={job.workLocation}
                workMethod={job.workMethod}
                salary={job.salary}
                dueDate={job.dueDate}
                workType={job.workType}
                requiredSkills={job.requiredSkills}
                educationalQualifications={job.educationalQualifications}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserVacancy;
