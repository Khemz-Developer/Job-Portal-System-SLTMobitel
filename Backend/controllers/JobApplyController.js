// const JobApplication = require("../models/JobApplySchema");

// const saveApplication = (req, resp) => {
//   // Create a new Job instance using the data from the request body
//   console.log(req.body);
//   const {
//     jobField,
//     jobPosition,
//     mobileNumber,
//     dateofBirth,
//     nic,
//     email,
//     address,
//     olResults,
//     alResults,
//     skills,
//     activities,
//   } = req.body;

//   const tempApplication = new JobApplication({
//     jobField,
//     jobPosition,
//     mobileNumber,
//     dateofBirth,
//     nic,
//     email,
//     address,
//     olResults,
//     alResults,
//     skills,
//     activities,
//     cvFile,
//   });
//   tempApplication.save()
//   .then((result)=>{
//     resp.status(201).json({status:true,message:'Application was saved!'});
//   })
//   .catch((error) => {
//     console.error(error);
//     resp.status(500).json(error);
//   });
// };

// module.exports={
//   saveApplication
// }


// jobapplycontroller.js
const JobApplication = require("../models/JobApplySchema");

const saveApplication = (req, resp) => {
  // Create a new Job instance using the data from the request body
  console.log(req.body);
  const {
    jobField,
    jobPosition,
    mobileNumber,
    dateofBirth,
    nic,
    email,
    address,
    olResults,
    alResults,
    skills,
    activities,
    cvFile, // Assuming this is the download URL for the PDF
  } = req.body;

  const tempApplication = new JobApplication({
    jobField,
    jobPosition,
    cvFile, // Store the PDF download URL in the MongoDB document
    mobileNumber,
    dateofBirth,
    nic,
    email,
    address,
    olResults,
    alResults,
    skills,
    activities,
  
  });

  tempApplication.save()
    .then((result) => {
      resp.status(201).json({ status: true, message: 'Application was saved!' });
    })
    .catch((error) => {
      console.error(error);
      resp.status(500).json(error);
    });
};

module.exports = {
  saveApplication
};
