const express = require('express');

const JobApplyController = require('../controllers/JobApplyController');

const UserverifyToken = require('../middleware/UserAuthmiddleware');

const router = express.Router();

router.post('/save-application',JobApplyController.saveApplication);

module.exports=router;