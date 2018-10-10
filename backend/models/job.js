// /backend/data.js
const mongoose = require("mongoose");
const JobSchema = mongoose.Schema;

// this will be our data base's data structure 
const JobSchema = new Schema(
  {
    job_id: Number,
    message: String
    status: String
    target_host: String
  },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Job", JobSchema);
