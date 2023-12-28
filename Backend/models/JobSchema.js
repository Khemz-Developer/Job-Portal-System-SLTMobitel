
//database ake table ke hadnn ynne
const mongoose = require("mongoose");
const JobSchema = new mongoose.Schema({
  
  jobField: {
    type: String,
    required: true,
    enum: ["HR", "Finance", "Telecommunication", "Software","Management"], // Assuming predefined job fields
  },
  jobPosition: {
    type: String,
    required: true,
  },
  workMethod: {
    type: String,
    required: true,
    enum: ["Onsite", "Hybrid", "Online"], // Assuming predefined work methods
  },
  jobDescription: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  dueDate: {
    type: Date,
    required: true,
  },
  workLocation: {
    type: String,
    required: true,
  },
  workType: {
    type: String,
    required: true,
    enum: ["Part Time", "Full Time"], // Assuming predefined work types
  },
  requiredSkills: [
    {
      type: String,
      required: true,
    },
  ],
  educationalQualifications: {
    type: String,
    required: true,
    enum: ["Undergraduate", "Postgraduate"], // Assuming predefined educational qualifications
  },
});
module.exports = mongoose.model("Job", JobSchema);
