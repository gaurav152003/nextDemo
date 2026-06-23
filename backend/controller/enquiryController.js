const Enquiry = require("../models/Enquiry");

const generateTicket = () => {
  return "REQ-" + Math.floor(100000 + Math.random() * 900000);
};

exports.createEnquiry = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    const enquiry = await Enquiry.create({
      ticketId: generateTicket(),
      name,
      email,
      phone,
      subject,
      message,
    });

    res.status(201).json({
      success: true,
      enquiry,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getEnquiries = async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({
      createdAt: -1,
    });

    res.json(enquiries);
  } catch (error) {
    res.status(500).json({
      success: false,
    });
  }
};

exports.deleteEnquiry = async (req, res) => {
  try {
    await Enquiry.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
    });
  }
};

exports.updateStatus = async (req, res) => {
  try {
    const enquiry = await Enquiry.findByIdAndUpdate(
      req.params.id,
      {
        status: req.body.status,
      },
      {
        new: true,
      },
    );

    res.json(enquiry);
  } catch (error) {
    res.status(500).json({
      success: false,
    });
  }
};
