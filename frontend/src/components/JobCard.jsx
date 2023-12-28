import React, { useState } from "react";
import "./jobcard.css";

import { Link, useNavigate } from "react-router-dom";

const JobCard = (props) => {
  const navigate = useNavigate();
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleApplyClick = () => {
    navigate("/apply", {
      state: {
        jobField: props.jobField,
        jobPosition: props.jobPosition,
      },
    });
  };

  return (
    <>
      <div className="row pt-5">
        <div className="card col-10 col-md-8 col-lg-10 mx-auto">
          <div className="card-body">
            <h5 className="card-title mb-3 text-center">{props.jobField}</h5>
            <h6 className="card-subtitle mb-3 mx-2 text-muted text-center">
              Job Position : {props.jobPosition}
            </h6>
            <p className="card-text mx-2">Location: {props.workLocation}</p>
            <p className="card-text mx-2">Salary: Rs: {props.salary}</p>
            <p className="card-text mx-2">Due Date: {props.dueDate}</p>
            <p className="card-text mx-2">Work Method: {props.workMethod}</p>
            <p className="card-text mx-2">Work Type: {props.workType}</p>

            {showDetails && (
              <div className="row">
                {/* <p className="card-text ">{props.jobDescription}</p> */}

                <p className="card-text mx-2">
                  Required Skills: {props.requiredSkills.join(", ")}
                </p>
                <p className="card-text mx-2">
                  Educational Qualifications: {props.educationalQualifications}
                </p>
                {/* <Link to={"/apply"}> */}

                <Link
                  to={`/apply?jobField=${props.jobField}&jobPosition=${props.jobPosition}`}
                >
                  <button
                    onClick={handleApplyClick}
                    className="btn btn-outline-primary mx-2 col-4"
                  >
                    Apply
                  </button>
                </Link>
              </div>
            )}
            <div className="row">
              <div className="col">
                <button
                  className={`btn btn-outline-primary px-3 mx-2  mt-2 ${
                    showDetails ? "btn-outline-danger" : ""
                  }`}
                  onClick={toggleDetails}
                >
                  {showDetails ? "Hide Details" : "See More"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobCard;



// import React, { useState } from "react";
// import "./jobcard.css";

// const JobCard = (props) => {
//   const [showDetails, setShowDetails] = useState(false);

//   const toggleDetails = () => {
//     setShowDetails(!showDetails);
//   };

//   return (
//     <>
//       <div className="row pt-5">
//         <div className="card col-5 w-50">
//           <div className="card-body">
//             <h5 className="card-title text-center">{props.jobField}</h5>
//             <h6 className="card-title">Job Position:{props.jobPosition}</h6>
//             <p className="card-text">Job Description:{props.jobDescription}</p>
//             <p>Location: {props.workLocation}</p>

//             {showDetails && (
//               <div>
//                 <p>Salary: {props.salary}</p>
//                 <p>Due Date: {props.dueDate}</p>
//                 <p>Work Method: {props.workMethod}</p>
//                 <p>Work Type: {props.workType}</p>
//                 <p>Required Skills: {props.requiredSkills.join(", ")}</p>
//                 <p>Educational Qualifications: {props.educationalQualifications}</p>
//               </div>
//             )}

//             <button className="btn btn-primary" onClick={toggleDetails}>
//               {showDetails ? "Hide Details" : "See More"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default JobCard;




// import React, { useState } from "react";
// import "./jobcard.css";

// import { Link, useNavigate } from "react-router-dom";

// const JobCard = (props) => {
//   const navigate = useNavigate();
//   const [showDetails, setShowDetails] = useState(false);

//   const toggleDetails = () => {
//     setShowDetails(!showDetails);
//   };

//   const handleApplyClick = () => {
//     navigate("/apply", {
//       state: {
//         jobField: props.jobField,
//         jobPosition: props.jobPosition,
//       },
//     });
//   };

//   return (
//     <>
//       <div className="row pt-5">
//         <div className="card col-10 col-md-8 col-lg-10 mx-auto">
//           <div className="card-body">
//             <h5 className="card-title mb-3 text-center">{props.jobField}</h5>
//             <h6 className="card-subtitle mb-3 mx-2 text-muted text-center">
//               Job Position : {props.jobPosition}
//             </h6>
//             <p className="card-text mx-2">Location: {props.workLocation}</p>
//             <p className="card-text mx-2">Salary: Rs: {props.salary}</p>
//             <p className="card-text mx-2">Due Date: {props.dueDate}</p>
//             <p className="card-text mx-2">Work Method: {props.workMethod}</p>
//             <p className="card-text mx-2">Work Type: {props.workType}</p>

//             {showDetails && (
//               <div className="row">
//                 {/* <p className="card-text ">{props.jobDescription}</p> */}

//                 <p className="card-text mx-2">
//                   Required Skills: {props.requiredSkills.join(", ")}
//                 </p>
//                 <p className="card-text mx-2">
//                   Educational Qualifications: {props.educationalQualifications}
//                 </p>
//                 {/* <Link to={"/apply"}> */}

//                 <Link
//                   to={`/apply?jobField=${props.jobField}&jobPosition=${props.jobPosition}`}
//                 >
//                   <button
//                     onClick={handleApplyClick}
//                     className="btn btn-outline-primary mx-2 col-4"
//                   >
//                     Apply
//                   </button>
//                 </Link>
//               </div>
//             )}
//             <div className="row">
//               <div className="col">
//                 <button
//                   className={`btn btn-outline-primary px-3 mx-2  mt-2 ${
//                     showDetails ? "btn-outline-danger" : ""
//                   }`}
//                   onClick={toggleDetails}
//                 >
//                   {showDetails ? "Hide Details" : "See More"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default JobCard;

// // import React from "react";
// // import "./jobcard.css";

// // const JobCard = (props) => {

// //   return (
// //     <>
// //       <div className="row pt-5">
// //         <div className="card col-5 w-50">
// //           <div className="card-body ">
// //             <h5 className="card-title">{props.jobField}</h5>
// //             <h6 className="card-title">{props.jobPosition}</h6>
// //             <p className="card-text">{props.jobDescription}</p>
// //             <p>Location :{props.workLocation}</p>
// //             <a href="/user-job-view" className="btn btn-primary">
// //               + See More
// //             </a>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default JobCard;

// // import React, { useState } from "react";
// // import "./jobcard.css";

// // const JobCard = (props) => {
// //   const [showDetails, setShowDetails] = useState(false);

// //   const toggleDetails = () => {
// //     setShowDetails(!showDetails);
// //   };

// //   return (
// //     <>
// //       <div className="row pt-5">
// //         <div className="card col-5 w-50">
// //           <div className="card-body">
// //             <h5 className="card-title text-center">{props.jobField}</h5>
// //             <h6 className="card-title">Job Position:{props.jobPosition}</h6>
// //             <p className="card-text">Job Description:{props.jobDescription}</p>
// //             <p>Location: {props.workLocation}</p>

// //             {showDetails && (
// //               <div>
// //                 <p>Salary: {props.salary}</p>
// //                 <p>Due Date: {props.dueDate}</p>
// //                 <p>Work Method: {props.workMethod}</p>
// //                 <p>Work Type: {props.workType}</p>
// //                 <p>Required Skills: {props.requiredSkills.join(", ")}</p>
// //                 <p>Educational Qualifications: {props.educationalQualifications}</p>
// //               </div>
// //             )}

// //             <button className="btn btn-primary" onClick={toggleDetails}>
// //               {showDetails ? "Hide Details" : "See More"}
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default JobCard;
