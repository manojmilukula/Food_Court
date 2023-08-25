var express = require('express');
var router = express.Router();
var ctrllocations = require('../controller/location');
var ctrlothers=require('../controller/others');
/* GET home page. */
router.get('/', ctrllocations.homelist);
router.get('/location',ctrllocations.locationinfo);
router.get('/location2',ctrllocations.locationinfo2);
router.get('/location3',ctrllocations.locationinfo3);
router.get('/location/review/new',ctrllocations.addReview);
router.get('/about',ctrlothers.about);
module.exports = router;