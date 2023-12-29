const mongoose = require("mongoose");

const JobApplySchema = new mongoose.Schema({
  jobField: {
    type: String,
    required: true,
    enum: ["HR", "Finance", "Telecommunication", "Software"], //  predefined job fields
  },
  jobPosition: {
    type: String,
    required: true,
  },
  nameofApplicant:{
    type: String,

  },
  cvFile: {
    type: String, //  store the file path or URL in the database
  },
  mobileNumber: {
    type: String,
    required: true,
  },
  dateofBirth: {
    type: Date,
    required: true,
  },
  nic: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  olResults: {
    maths: String,
    science: String,
    english: String,
    sinhala: String,
    history: String,
    religion: String,
  },
  alResults: [
    {
      subject: String,
      result: String,
    },
  ],
  skills: [String],
  activities: [
    {
      name: String,
      experience: String,
    },
  ],
  status: {
    type: String,
    enum: ["Pending", "Accepted", "Rejected"], // Add enum for predefined status values
    default: "Pending", // Set a default status if needed
  },
  
});

module.exports = mongoose.model("JobApplication", JobApplySchema);
