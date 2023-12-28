import React, { useEffect, useState } from "react";
import "./home.css";
import Middle from "../Middle";
import Footer from "../Footer";
import axios from "axios";
import SliderComponent from "../SliderComponent";

const Home = () => {
  const [jobcount, setjobcount] = useState(undefined);
  const [totaljobFeilds, setJobFeilds] = useState([]);


  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/v1/jobs/get-all-jobs-Feilds"
      );
      setJobFeilds(response.data.jobFields); // Update this line
      console.log(response.data.jobFields);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const findAllCounts = async () => {
    const jobCount = await axios.get(
      "http://localhost:3000/api/v1/jobs/total-job-count"
    );
    setjobcount(jobCount.data);
    console.log(jobCount);
    //console.log(jobCount.data);
  };

  useEffect(() => {
    findAllCounts();
    fetchData();
  }, []);

  return (
    <div className="outer-home-div">
      <Middle></Middle>
      <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <h1 className="active-jobs">{jobcount} Active Local Jobs Found !</h1>
      
      <SliderComponent jobFields={totaljobFeilds} />
      <br /> <br /> <br /> <br />
      <Footer />
    </div>
  );
};

export default Home;








// import React, { useEffect, useState } from "react";
// import "./home.css";
// import Middle from "../Middle";
// import Footer from "../Footer";
// import axios from "axios";
// import SliderComponent from "../SliderComponent";

// const Home = () => {
//   const [jobcount, setjobcount] = useState(undefined);
//   const [totaljobFeilds, setJobFeilds] = useState([]);


//   const fetchData = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:3000/api/v1/jobs/get-all-jobs-Feilds"
//       );
//       setJobFeilds(response.data.jobFields); // Update this line
//       console.log(response.data.jobFields);
//     } catch (error) {
//       console.log("Error fetching data:", error);
//     }
//   };

//   const findAllCounts = async () => {
//     const jobCount = await axios.get(
//       "http://localhost:3000/api/v1/jobs/total-job-count"
//     );
//     setjobcount(jobCount.data);
//     console.log(jobCount);
//     //console.log(jobCount.data);
//   };

//   useEffect(() => {
//     findAllCounts();
//     fetchData();
//   }, []);

//   return (
//     <div className="outer-home-div">
//       <Middle></Middle>
//       <br /> <br /> <br /> <br /> <br /> <br /> <br />
//       <h1 className="active-jobs">{jobcount} Active Local Jobs Found !</h1>
      
//       <SliderComponent jobFields={totaljobFeilds} />
//       <br /> <br /> <br /> <br />
//       <Footer />
//     </div>
//   );
// };

// export default Home;
