const mongoose = require("mongoose");
const { Schema } = mongoose;

const userEnquirySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});

const userEnquiry = mongoose.model("UserEnquiry", userEnquirySchema);

module.exports = userEnquiry;
