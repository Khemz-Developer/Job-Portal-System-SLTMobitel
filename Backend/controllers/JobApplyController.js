
const JobApplication = require("../models/JobApplySchema");

const saveApplication = (req, resp) => {
  // Create a new Job instance using the data from the request body
  console.log(req.body);
  const {
    jobField,
    jobPosition,
    nameofApplicant,
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
    nameofApplicant,
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



const getAllApplications =async (req,res)=>{
  try{
    const applications =await JobApplication.find({});
    res.status(200).json(applications);
  }catch{
    res.status(500).json({message:"Error:"+error.message});
  }
}

module.exports = {
  saveApplication,getAllApplications
};
