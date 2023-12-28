import React, { useEffect, useState } from "react";
import "./home.css";

import Middle from "../Middle";
import Footer from "../Footer";
import axios from "axios";



const Home = () => {
  const [jobcount, setjobcount] = useState(undefined);

  const findAllCounts = async () => {
    const jobCount = await axios.get(
      "http://localhost:3000/api/v1/jobs/total-job-count"
    );
    setjobcount(jobCount.data);
    console.log(jobCount);
    console.log(jobCount.data);
  };

  useEffect(() => {
    findAllCounts();
  }, []);

  return (
    <div className="outer-home-div">
      <Middle></Middle>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1 className="active-jobs">{jobcount} Active Local Jobs Found !</h1>

     

     

      <Footer />
    </div>
  );
};

export default Home;
