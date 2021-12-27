import React, { useState, useEffect } from "react";
import axios from "axios";

function Chapter() {
  const [chapters, setChapters] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [editId, setEditId] = useState();
  useEffect(() => {
    fetchChapters();
    fetchSubjects();
    if (!document.getElementById("chapter").value) {
      document.getElementById("button").disabled = "true";
    }
  }, []);
  const fetchChapters = async () => {
    const response = await axios.get(
      `http://localhost:8000/api/v1/admin/fetchData?target=chapter`
    );
    setChapters(response.data);
    return () => {
      setChapters([]);
    };
  };
  const uploadData = async (name, subjectId) => {
    const response = await axios.post(
      `http://localhost:8000/api/v1/admin/uploadData`,
      { name: name, subject_id: subjectId, type: "chapter" }
    );
    return response;
  };
  const deleteData = async (id) => {
    const response = await axios.post(
      `http://localhost:8000/api/v1/admin/deleteData`,
      { id: id, type: "chapter" }
    );
    fetchChapters();
    return response;
  };
  const fetchSubjects = async () => {
    const response = await axios.get(
      `http://localhost:8000/api/v1/admin/fetchData?target=subject`
    );
    setSubjects(response.data);
    return () => {
      setSubjects([]);
    };
  };
  const handleUpload = async (e) => {
    e.preventDefault();
    const chapterName = e.target.chapter.value;
    const subjectId = e.target.subject.value;
    if (!chapterName || chapterName === "" || subjectId < 0) {
      return;
    } else {
      const res = await uploadData(chapterName, subjectId);
      if (res) {
        document.getElementById("chapter").value = "";
        fetchChapters();
      }
    }
  };
  const checkName = (e) => {
    const name = e.target.value;
    const input = document.getElementById("chapter");
    const button = document.getElementById("button");
    if (chapters.filter((x) => x.name === name).length) {
      input.style.borderColor = "red";
      button.disabled = true;
    } else {
      input.style.borderColor = "#888";
      button.disabled = false;
    }
  };
  const updateData = async (id) => {
    const name = document.getElementsByName(`name-${id}`)[0].value;
    const subject = document.getElementsByName(`subject-${id}`)[0].value;
    const response = await axios.put(
      `http://localhost:8000/api/v1/admin/updateData/${id}`,
      {
        type: "chapter",
        name: name,
        subject_id: subject,
      }
    );
    setEditId();
    fetchChapters();

    return () => {
      setSubjects([]);
    };
  };
  return (
    <div>
      <h2 className="heading">Create new chapter</h2>
      <form className="container-x" onSubmit={handleUpload}>
        <input
          type="text"
          autoComplete="off"
          name="chapter"
          placeholder={"Enter chapter name..."}
          className="input"
          onChange={checkName}
          id="chapter"
        />
        <select name="subject">
          <option value={-1}>Select Subject</option>

          {subjects.map((x) => {
            return (
              <option value={x.id} key={x.id}>
                {x.name}
              </option>
            );
          })}
        </select>
        <button className="create" id="button" disabled>
          Create New Chapter
        </button>
      </form>

      <table>
        <tr>
          <th>Sr no.</th>
          <th>Chapter Name</th>
          <th>Subject Name</th>
          <th colSpan={2} className="edit-head">
            Edit
          </th>
        </tr>
        {chapters.map((x, i) => {
          const edit = editId === x.id;
          return (
            <tr key={x.id}>
              <td className="serial">{i + 1}</td>
              <td>
                {edit ? (
                  <input
                    type="text"
                    className="table-input"
                    name={`name-${x.id}`}
                    defaultValue={x.name}
                  />
                ) : (
                  x.name
                )}
              </td>
              <td>
                {edit ? (
                  <select name={`subject-${x.id}`} defaultValue={x.subject_id}>
                    {subjects.map((subject) => {
                      return (
                        <option value={subject.id} key={subject.id}>
                          {subject.name}
                        </option>
                      );
                    })}
                  </select>
                ) : (
                  subjects
                    .filter((subject) => subject.id === x.subject_id)
                    .map((data) => data.name)
                )}
              </td>
              <td className="edit">
                <button
                  onClick={() => (edit ? updateData(x.id) : setEditId(x.id))}
                  type="button"
                >
                  {edit ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 0 24 24"
                      width="24px"
                      fill="#fff"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                    </svg>
                  ) : (
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
                  )}
                </button>
              </td>
              <td className="edit delete">
                <button
                  onClick={() => (edit ? setEditId() : deleteData(x.id))}
                  type="button"
                >
                  {edit ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 0 24 24"
                      width="24px"
                      fill="#fff"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                    </svg>
                  ) : (
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
                  )}
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Chapter;
