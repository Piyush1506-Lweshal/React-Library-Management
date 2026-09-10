import axios from "axios";
import React, { useState } from "react";

const Student = {
  studentId: "",
  fullName: "",
  email: "",
  phone: "",
  course: "",
  semester: "",
  gender: "",
  address: "",
  joinDate: "",
  status: "Active",
};

//Usestate of error//
const errorState = {
  studentId: "",
  fullName: "",
  email: "",
  phone: "",
  course: "",
  semester: "",
  gender: "",
  address: "",
  joinDate: "",
  status: "",
};

function AddStudents() {
  const [studentErr, setStudentErr] = useState(errorState);
  const [student, setStudent] = useState(Student);
  const handleChange = async (e) => {
    const { name, value } = e.target;
    setStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    // You can operate all useState with individual setters//
    // Individual field validations
    // Email: required and must match pattern
    const emailPattern = /^\S+@\S+\.\S+$/;
    if (!student.email || !emailPattern.test(student.email)) {
      setStudentErr((prevErr) => ({
        ...prevErr,
        email: "Please enter a valid email address.",
      }));
      setStudentErr((prevErr) => ({ ...prevErr, email: "" }));
      return;
    }

    // Course: required
    if (!student.course) {
      setStudentErr((prevErr) => ({
        ...prevErr,
        course: "Please select a course.",
      }));
      setStudentErr((prevErr) => ({ ...prevErr, course: "" }));
      return;
    }

    // Semester: required
    if (!student.semester) {
      setStudentErr((prevErr) => ({
        ...prevErr,
        semester: "Please select a semester.",
      }));
      setStudentErr((prevErr) => ({ ...prevErr, semester: "" }));
      return;
    }

    // Gender: required
    if (!student.gender) {
      setStudentErr((prevErr) => ({
        ...prevErr,
        gender: "Please select a gender.",
      }));
      setStudentErr((prevErr) => ({ ...prevErr, gender: "" }));
      return;
    }

    // Join Date: required and not in future
    if (!student.joinDate) {
      setStudentErr((prevErr) => ({
        ...prevErr,
        joinDate: "Please select a joining date.",
      }));
      setStudentErr((prevErr) => ({ ...prevErr, joinDate: "" }));
      return;
    }
    const today = new Date().toISOString().split("T")[0];
    if (student.joinDate > today) {
      setStudentErr((prevErr) => ({
        ...prevErr,
        joinDate: "Joining date cannot be in the future.",
      }));
      setStudentErr((prevErr) => ({ ...prevErr, joinDate: "" }));
      return;
    }

    // Phone: required and exactly 10 digits
    if (!student.phone || student.phone.length !== 10) {
      setStudentErr((prevErr) => ({
        ...prevErr,
        phone: "Contact number must be exactly 10 digits.",
      }));
      setStudentErr((prevErr) => ({ ...prevErr, phone: "" }));
      return;
    }
    // Full Name: required, min 3 chars
    if (!student.fullName || student.fullName.trim().length < 3) {
      setStudentErr((prevErr) => ({
        ...prevErr,
        fullName: "Full Name must be at least 3 characters.",
      }));
      setStudentErr((prevErr) => ({ ...prevErr, fullName: "" }));
      return;
    }

    // Student ID: required and alphanumeric
    if (!student.studentId || !/^[a-zA-Z0-9_-]+$/.test(student.studentId)) {
      setStudentErr((prevErr) => ({
        ...prevErr,
        studentId: "Student ID is required and should be alphanumeric.",
      }));
      setStudentErr((prevErr) => ({ ...prevErr, studentId: "" }));
    }

    // Address: required, min 10 chars
    if (!student.address || student.address.trim().length < 10) {
      setStudentErr((prevErr) => ({
        ...prevErr,
        address: "Address must be at least 10 characters.",
      }));
      setStudentErr((prevErr) => ({ ...prevErr, address: "" }));
      return;
    }

    //------------try and catch method-------------//
    try {
      const response = await axios.post(
        "http://localhost:9000/new/add-student",
        AddStudent,
      );

      alert(response.data.message || "Student added successfully!");

      setStudent(Student);
    } catch (error) {
      console.error(error);

      alert(error.response?.data?.message || "Failed to add student.");
    }

    // Reset form after successful submission
    setStudent(Student);
  };

  const handleReset = () => {
    setStudent(Student);
  };
  //----------------HTML Code ------------------//
  return (
    <div className="container py-4">
      {/* Header */}
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body">
          <h2 className="fw-bold mb-1">Add Student</h2>
          <p className="text-muted mb-0">
            Register a new student in the library system.
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="card border-0 shadow">
        <div className="card-body p-4">
          <form onSubmit={handleSubmit}>
            <div className="row">
              {/* Student ID */}
              <div className="col-md-6 mb-3">
                <label className="form-label">Student ID</label>
                <input
                  type="text"
                  name="studentId"
                  className="form-control"
                  placeholder="Enter your Student Id"
                  value={student.studentId}
                  onChange={handleChange}
                />
              </div>

              {/* Full Name */}
              <div className="col-md-6 mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  className="form-control"
                  placeholder="Enter Your Full Name"
                  value={student.fullName}
                  onChange={handleChange}
                  minLength="3"
                  maxLength="50"
                />
              </div>

              {/* Email */}
              <div className="col-md-6 mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter Your Email Address"
                  value={student.email}
                  onChange={handleChange}
                />
              </div>

              {/* Phone */}
              <div className="col-md-6 mb-3">
                <label className="form-label">Contact Number</label>
                <input
                  type="tel"
                  name="phone"
                  className="form-control"
                  placeholder="Enter Your Contact Number"
                  value={student.phone}
                  onChange={handleChange}
                  maxLength="10"
                  pattern="\d{10}"
                  inputMode="numeric"
                />
              </div>

              {/* Course */}
              <div className="col-md-6 mb-3">
                <label className="form-label">Course</label>
                <select
                  name="course"
                  className="form-select"
                  value={student.course}
                  onChange={handleChange}
                >
                  <option value="">Select Course</option>
                  <option>BCA</option>
                  <option>BSc</option>
                  <option>BCom</option>
                  <option>MCA</option>
                  <option>MSc</option>
                </select>
              </div>

              {/* Semester */}
              <div className="col-md-6 mb-3">
                <label className="form-label">Semester</label>
                <select
                  name="semester"
                  className="form-select"
                  value={student.semester}
                  onChange={handleChange}
                >
                  <option value="">Select Semester</option>
                  <option>1st</option>
                  <option>2nd</option>
                  <option>3rd</option>
                  <option>4th</option>
                  <option>5th</option>
                  <option>6th</option>
                </select>
              </div>

              {/* Gender */}
              <div className="col-md-6 mb-3">
                <label className="form-label">Gender</label>
                <select
                  name="gender"
                  className="form-select"
                  value={student.gender}
                  onChange={handleChange}
                >
                  <option value="">Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Join Date */}
              <div className="col-md-6 mb-3">
                <label className="form-label">Joining Date</label>
                <input
                  type="date"
                  name="joinDate"
                  className="form-control"
                  value={student.joinDate}
                  onChange={handleChange}
                />
              </div>

              {/* Address */}
              <div className="col-12 mb-3">
                <label className="form-label">Address</label>
                <textarea
                  rows="4"
                  name="address"
                  className="form-control"
                  placeholder="Enter Your Address"
                  value={student.address}
                  onChange={handleChange}
                />
              </div>

              {/* Status */}
              <div className="col-md-6 mb-4">
                <label className="form-label">Status</label>
                <select
                  name="status"
                  className="form-select"
                  value={student.status}
                  onChange={handleChange}
                >
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div>
            </div>

            {/* Buttons */}
            <div className="d-flex gap-2">
              <button type="submit" className="btn btn-primary">
                Add Student
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default AddStudents;

// piyush tiwari i am piyush tiwari
// i am working at a university as a software engineer and i am working on a project which is related to library management system. i have created a react application for this project and i have used react-router-dom for routing and axios for making api calls. i have also used bootstrap for styling the application.

// At a level a scoft driving at a devicePixelRatio
localStorage.getItem("token");
const token = localStorage.getItem("token");
