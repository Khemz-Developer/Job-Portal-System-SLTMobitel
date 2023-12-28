const express=require('express');  

const JobController = require('../controllers/JobController');
const verifyToken =require('../middleware/Authmiddleware');

const router = express.Router();

// Admin routes:

router.get('/get-all',verifyToken,JobController.getAllJobs);
router.post('/save-job',verifyToken,JobController.saveJob);
router.get('/find-job',verifyToken,JobController.findJob);
router.put('/update-job/:id',verifyToken,JobController.updateJob);
router.delete('/delete-job/:id',verifyToken,JobController.deleteJob);
router.get('/find-all-job-byjobfeild',JobController.findJobByJobFeild);
router.get('/find-all-job-bylocation',verifyToken,JobController.findJobByJobLocation);
router.get('/user-find-job',JobController.JobFind);
router.get('/total-job-count',JobController.JobCount);
router.get('/get-all-jobs-Feilds',JobController.getUniqueJobFields);
// User routes
router.get('/get-all-jobs',JobController.getAllJobs);
router.get('/:id',JobController.singleJob);


module.exports=router;