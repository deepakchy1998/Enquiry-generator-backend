 const UserEnquiry = require('../../models/enquiry.model');

 // Controller function to insert a new enquiry
 const enquiryInsert = async (req, res) => {
    try {
        const newEnquiry = new UserEnquiry(req.body);
        const savedEnquiry = await newEnquiry.save();
        res.status(201).json(savedEnquiry);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


const hi = async (req, res) => {
    res.status(200).json({ message: "Welcome to Backend API CAll" });
}

const enquiryList = async (req, res) => {
    try {
        const enquiries = await UserEnquiry.find();
        res.status(200).json(enquiries);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const enquiryDelete = async (req, res) => {
    try {
        const deletedEnquiry = await UserEnquiry.findByIdAndDelete(req.params.id);
        if (!deletedEnquiry) {
            return res.status(404).json({ message: "Enquiry not found" });
        }
        res.status(200).json({ message: "Enquiry deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const enquiryEdit = async (req, res) => {
    try {
        const updatedEnquiry = await UserEnquiry.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedEnquiry) {
            return res.status(404).json({ message: "Enquiry not found" });
        }
        res.status(200).json(updatedEnquiry);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    enquiryInsert,
    enquiryList,
    enquiryDelete,
    enquiryEdit,
    hi
};