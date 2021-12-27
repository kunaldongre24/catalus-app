import React, { useState, useEffect } from "react";
import axios from "axios";

function Subject() {
  const [subjects, setSubjects] = useState([]);
  useEffect(() => {
    fetchSubjects();
    if (!document.getElementById("subject").value) {
      document.getElementById("button").disabled = "true";
    }
  }, []);
  const fetchSubjects = async () => {
    const response = await axios.get(
      `http://localhost:8000/api/v1/admin/fetchData?target=subject`
    );
    setSubjects(response.data);
    return () => {
      setSubjects([]);
    };
  };
  const uploadData = async (name) => {
    const response = await axios.post(
      `http://localhost:8000/api/v1/admin/uploadData`,
      { name: name, type: "subject" }
    );
    return response;
  };
  const handleUpload = async (e) => {
    e.preventDefault();
    const subjectName = e.target.subject.value;
    if (!subjectName || subjectName === "") {
      return;
    } else {
      const res = await uploadData(subjectName);
      if (res) {
        document.getElementById("subject").value = "";

        fetchSubjects("subject");
      }
    }
  };
  const checkName = (e) => {
    const name = e.target.value;
    const input = document.getElementById("subject");
    const button = document.getElementById("button");
    if (subjects.filter((x) => x.name === name).length) {
      input.style.borderColor = "red";
      button.disabled = true;
    } else {
      input.style.borderColor = "#888";
      button.disabled = false;
    }
  };
  const deleteData = async (id) => {
    const response = await axios.post(
      `http://localhost:8000/api/v1/admin/deleteData`,
      { id: id, type: "subject" }
    );
    fetchSubjects();
    return response;
  };
  return (
    <div>
      <h2 className="heading">Create new subject</h2>
      <form className="container-x" onSubmit={handleUpload}>
        <input
          type="text"
          placeholder={"Enter subject name..."}
          className="input"
          autoComplete="off"
          name="subject"
          id="subject"
          onChange={checkName}
        />

        <button className="create" type="submit" id="button" disabled>
          Create New Subject
        </button>
      </form>

      <table>
        <tr>
          <th>Sr no.</th>
          <th>Subject Name</th>
          <th colSpan={2} className="edit-head">
            Edit
          </th>
        </tr>

        {subjects.map((x, i) => {
          return (
            <tr key={x.id}>
              <td className="serial">{i + 1}</td>
              <td>{x.name}</td>
              <td className="edit">
                <button type="button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="#fff"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z" />
                  </svg>
                </button>
              </td>
              <td className="edit delete">
                <button onClick={() => deleteData(x.id)} type="button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="#fff"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z" />
                  </svg>
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Subject;
