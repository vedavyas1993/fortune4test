import React, { useState } from "react";
import axios from "axios";
import styles from "./index.module.css";
function FormComponent() {
  const URL = "http://13.232.8.85:8081/htschool/api/add-response-data";
  const initialFormState = {
    student_email: "",
    student_name: "",
    gender: "",
    standard: "",
    student_contact_no: "",
    school_address: "",
    city: "",
    pincode: "",
    school_id: "",
  };
  const [studentInfo, setStudentInfo] = useState({
    ...initialFormState,
  });

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    console.log("studentInfo", studentInfo);
    try {
      const response = await axios.post(URL, studentInfo);
      if (response.data.status === 1) {
        alert(response.data.data);
      } else {
        //   display error message from response
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form className={styles.form} onSubmit={formSubmitHandler}>
        <label htmlFor="student_email">Student Email</label>
        <input
          id="student_email"
          type="email"
          value={studentInfo.student_email}
          onChange={(e) => {
            setStudentInfo((prev) => {
              return { ...prev, student_email: e.target.value };
            });
          }}></input>

        <label htmlFor="student_name">Student Name</label>
        <input
          id="student_name"
          type="text"
          value={studentInfo.student_name}
          onChange={(e) => {
            setStudentInfo((prev) => {
              return { ...prev, student_name: e.target.value };
            });
          }}></input>
        {/* dropdown */}
        <label htmlFor="gender">Gender</label>
        <select
          id="gender"
          value={studentInfo.gender}
          onChange={(e) => {
            console.log("gender", e.target.value);
            setStudentInfo((prev) => {
              return { ...prev, gender: e?.target?.value };
            });
          }}>
          <option value="">Please Select a gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        {/* dropdown */}
        <label htmlFor="standard">Standard</label>
        <select
          id="standard"
          value={studentInfo.standard}
          onChange={(e) => {
            setStudentInfo((prev) => {
              return { ...prev, standard: e?.target?.value };
            });
          }}>
          <option value="">Please Select a standard</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>

        <label htmlFor="student_contact_no">Student Contact Number</label>
        <input
          id="student_contact_no"
          type="tel"
          value={studentInfo.student_contact_no}
          onChange={(e) => {
            setStudentInfo((prev) => {
              return { ...prev, student_contact_no: e.target.value };
            });
          }}></input>
        <label htmlFor="school_address">School Address</label>
        <input
          id="school_address"
          type="text"
          value={studentInfo.school_address}
          onChange={(e) => {
            setStudentInfo((prev) => {
              return { ...prev, school_address: e.target.value };
            });
          }}></input>
        <label htmlFor="city">City</label>
        <input
          id="city"
          type="text"
          value={studentInfo.city}
          onChange={(e) => {
            setStudentInfo((prev) => {
              return { ...prev, city: e.target.value };
            });
          }}></input>
        <label htmlFor="pincode">Pincode</label>
        <input
          id="pincode"
          type="text"
          value={studentInfo.pincode}
          onChange={(e) => {
            setStudentInfo((prev) => {
              return { ...prev, pincode: e.target.value };
            });
          }}></input>
        <label htmlFor="school_id">School Id</label>
        <input
          id="school_id"
          type="text"
          value={studentInfo.school_id}
          onChange={(e) => {
            setStudentInfo((prev) => {
              return { ...prev, school_id: e.target.value };
            });
          }}></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormComponent;
