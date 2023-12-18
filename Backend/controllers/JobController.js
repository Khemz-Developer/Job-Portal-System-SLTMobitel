const Job =  require('../models/JobSchema');

const getAllJobs = async (req, res) => {
    try {
      const jobs = await Job.find({});
      res.status(200).json(jobs);
    } catch {
      res.status(500).json({ message: "Error:" + error.message });
    }
  };



const saveJob = (req,resp)=>{
  
  // Create a new Job instance using the data from the request body
  console.log(req.body);
  const tempJob = new Job({
    
    jobField: req.body.jobField,
    jobPosition: req.body.jobPosition,
    workMethod: req.body.workMethod,
    jobDescription: req.body.jobDescription,
    salary: req.body.salary,
    dueDate: req.body.dueDate,
    workLocation: req.body.workLocation,
    workType: req.body.workType,
    requiredSkills: req.body.requiredSkills,
    educationalQualifications: req.body.educationalQualifications,

  });
  tempJob.save().then(result=>{
      resp.status(201).json({status:true,message:'job was saved!'});
  }).catch(error=>{
      resp.status(500).json(error);
  });
};

const findJob = (req,resp)=>{
    Job.findOne({nic:req.headers.nic}).then(result=>{
        if(result==null){
            resp.status(404).json({status:false,message:'job not found!'});
        }else{
            resp.status(200).json({status:true,data:result});
        }
    }).catch(error=>{
        resp.status(500).json(error);
    });
};



const deleteJob = async (req, res) => {
    const jobId = req.params.id;
    try {
      const deleteJobs = await Job.findByIdAndDelete(jobId);
      if (!deleteJobs) {
        return res.status(404).json({ message: "Job not found!" });
      }
     res.status(200).json({ message: "Job was deleted!" });
    } catch (error) {
      console.log(error);
       res.status(500).json({ message: "Error: " + error.message });
    }
  };
  
  
const findJobByJobFeild = (req, resp) => {
    const nameRegex = new RegExp(req.headers.name, 'i'); // 'i' makes the search case-insensitive

    Job.find({ jobField: nameRegex })
        .then(results => {
            if (results.length === 0) {
                resp.status(404).json({ status: false, message: 'Job not found!' });
            } else {
                resp.status(200).json({ status: true, data: results });
            }
        })
        .catch(error => {
            resp.status(500).json(error);
        });
};

const findJobByJobLocation = (req, resp) => {
  const nameRegex = new RegExp(req.headers.name, 'i'); // 'i' makes the search case-insensitive

  Job.find({ workLocation: nameRegex })
      .then(results => {
          if (results.length === 0) {
              resp.status(404).json({ status: false, message: 'Job not found!' });
          } else {
              resp.status(200).json({ status: true, data: results });
          }
      })
      .catch(error => {
          resp.status(500).json(error);
      });
};


const updateJob = async (req, res) => {
  const jobId = req.params.id;
  const {
    jobField,
    jobPosition,
    workMethod,
    jobDescription,
    salary,
    dueDate,
    workLocation,
    workType,
    requiredSkills,
    educationalQualifications,
  } = req.body;

  try {
    // Find the job by ID and update the fields
    const updatedJob = await Job.findByIdAndUpdate(
      jobId,
      {
        jobField,
        jobPosition,
        workMethod,
        jobDescription,
        salary,
        dueDate,
        workLocation,
        workType,
        requiredSkills,
        educationalQualifications,
      },
      { new: true, runValidators: true }
    );

    // Check if the job was not found
    if (!updatedJob) {
      return res.status(404).json({ message: 'Job not found!' });
    }

    // Send the updated job information in the response
    res.status(200).json(updatedJob);
  } catch (error) {
    res.status(500).json({ message: 'Error: ' + error.message });
  }
};

const singleJob  =async(req,res)=>{
    const jobId = req.params.id;
    try{
      const job=await Job.findById(jobId);
      if(!job){
        return res.status(404).json({message:"job Not Found!"})
      }
      res.status(200).json(job);
    }catch(error){
      res.status(500).json({ message: 'Error: ' + error.message });
    }
  }

module.exports={
    saveJob,findJob,deleteJob,updateJob,findJobByJobFeild,getAllJobs,singleJob,findJobByJobLocation
}