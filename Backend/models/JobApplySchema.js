const mongoose = require('mongoose');

const JobApplySchema = new mongoose.Schema({
    jobField: {
        type: String,
        required: true,
        enum: ["HR", "Finance", "Telecommunication", "Software"], // Assuming predefined job fields
      },
    jobPosition:{
        type:String,
        required:true
    },
    mobileNumber: {
        type: String,
        required: true,
      },
      dateOfBirth: {
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
      // Add more fields as needed
      // ...
    //   cvFile: {
    //     type: String, // Assuming you store the file path or URL in the database
    //   },
    });

module.exports = mongoose.model("JobApplication",JobApplySchema);