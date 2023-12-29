
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

const deleteApplication = async (req, res)=>{
  ApplicationId = req.params.id;

  try{
    const deleteApp = await JobApplication.findByIdAndDelete(ApplicationId);
  if(!deleteApp){
    return res.status(404).json({message:" Application Not Found!"});

  }else{
    return res.status(200).json({message:" Application was deleted"});
  }
  }catch(error){
    return res.status(500).json({message :"Error :"+error});
  }
}

const singleApplication = async (req, res) => {
  const applicationId = req.params.id;
  try {
    const application = await JobApplication.findById(applicationId).lean();
    if (!application) {
      return res.status(404).json({ message: "Application Not Found!" });
    }
    res.status(200).json(application);
  } catch (error) {
    res.status(500).json({ message: "Error: " + error.message });
  }
};

module.exports = {
  saveApplication,getAllApplications,singleApplication,deleteApplication
};
