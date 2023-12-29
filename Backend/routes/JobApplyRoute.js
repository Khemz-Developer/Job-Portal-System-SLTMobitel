const express = require('express');

const JobApplyController = require('../controllers/JobApplyController');

const UserverifyToken = require('../middleware/UserAuthmiddleware');
const verifyController =require('../middleware/Authmiddleware');

const router = express.Router();

router.post('/save-application',verifyController,JobApplyController.saveApplication);


//Admin Job Application Received Part
router.get('/get-all-applications',verifyController,JobApplyController.getAllApplications);
router.delete('/delete-single-applications/:id',verifyController,JobApplyController.deleteApplication);
router.get('/get-accepted-applications', verifyController, JobApplyController.getAcceptedApplication);
router.get('/:id',JobApplyController.singleApplication);
router.post('/accept/:id',JobApplyController.acceptApplication);

module.exports=router;