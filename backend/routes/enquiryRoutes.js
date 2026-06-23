const express = require("express");

const router = express.Router();

const {
  createEnquiry,
  getEnquiries,
  deleteEnquiry,
  updateStatus,
} = require("../controller/enquiryController.js");

router.post("/enquiry", createEnquiry);

router.get("/enquiries", getEnquiries);

router.delete("/enquiry/:id", deleteEnquiry);

router.put("/enquiry/:id", updateStatus);

module.exports = router;
