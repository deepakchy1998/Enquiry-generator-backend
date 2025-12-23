const express = require('express');
const enquiryRouter = express.Router();
const { enquiryInsert,enquiryList, enquiryDelete, enquiryEdit } = require('../../controllers/web/userEnquiryController');

// Define the route for inserting a new enquiry
enquiryRouter.post('/insert', enquiryInsert);
enquiryRouter.get('/enquiries', enquiryList);
enquiryRouter.delete('/delete/:id', enquiryDelete);
enquiryRouter.put('/edit/:id', enquiryEdit);
module.exports = enquiryRouter;