const express=require('express');  

const JobController = require('../controllers/JobController');
const verifyToken =require('../middleware/Authmiddleware');

const router = express.Router();

router.get('/get-all',verifyToken,JobController.getAllJobs);
router.post('/save-job',verifyToken,JobController.saveJob);
router.get('/find-job',verifyToken,JobController.findJob);
router.put('/update-job/:id',verifyToken,JobController.updateJob);
router.delete('/delete-job/:id',verifyToken,JobController.deleteJob);
// router.get('/find-all-customer',verifyToken,CustomerController.findAllCustomers);
router.get('/find-all-job-byjobfeild',verifyToken,JobController.findJobByJobFeild);
router.get('/find-all-job-bylocation',verifyToken,JobController.findJobByJobLocation);
router.get('/:id',JobController.singleJob);

module.exports=router;