import React, { useEffect, useState } from "react";
import "./uservacancy.css";
import JobCard from "../JobCard";
import axios from "axios";
const UserVacancy = () => {
  const [jobs, setJobs] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/v1/jobs/get-all-jobs");
      setJobs(response.data);
      console.log(response.data);
    } catch (error) {
      console.log("Error fetching data:", error);
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

      <div className="main-div">
        <div className="row">
          {/* <div className="Left-side col-3">One of three columns</div> */}

          <div className="Right-side col-12">

           {jobs.map((job,index)=>(
               <JobCard 
               key={job._id} 
               jobField={job.jobField} 
               jobPosition={job.jobPosition} 
               jobDescription={job.jobDescription} 
               workLocation={job.workLocation}
               workMethod= {job.workMethod}
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
