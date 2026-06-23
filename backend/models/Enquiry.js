const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema(
  {
    ticketId: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    phone: String,

    subject: String,

    message: String,

    status: {
      type: String,
      default: "Pending",
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Enquiry", enquirySchema);
