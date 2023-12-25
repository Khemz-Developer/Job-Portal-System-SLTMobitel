const JobApplication = require("../models/JobApplySchema");

const saveApplication = (req, resp) => {
  // Create a new Job instance using the data from the request body
  console.log(req.body);
  const {
    jobField,
    jobPosition,
    mobileNumber,
    dateOfBirth,
    nic,
    email,
    address,
    olResults,
    alResults,
    skills,
    activities,
    // cvFile,
  } = req.body;

  const tempApplication = new JobApplication({
    jobField,
    jobPosition,
    mobileNumber,
    dateOfBirth,
    nic,
    email,
    address,
    olResults,
    alResults,
    skills,
    activities,
    // cvFile,
  });
  tempApplication.save()
  .then((result)=>{
    resp.status(201).json({status:true,message:'Application was saved!'});
  })
  .catch((error)=>{
    resp.status(500).json(error);
  })
};

module.exports={
  saveApplication
}
