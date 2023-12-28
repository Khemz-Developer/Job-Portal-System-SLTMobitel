const express = require('express');

const JobApplyController = require('../controllers/JobApplyController');

const UserverifyToken = require('../middleware/UserAuthmiddleware');
const verifyController =require('../middleware/Authmiddleware');

const router = express.Router();

router.post('/save-application',verifyController,JobApplyController.saveApplication);


//Admin Job Application Received Part
router.get('/get-all-applications',verifyController,JobApplyController.getAllApplications);
module.exports=router;