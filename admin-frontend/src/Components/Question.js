import React, { useState, useEffect } from "react";
import axios from "axios";

function Subtopic() {
  const [chapters, setChapters] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [selectedOption, setSelectedOption] = useState();
  const [optionCount, setOptionCount] = useState(1);
  const [filteredChapters, setFilteredChapters] = useState([]);
  const [filteredTopics, setFilteredTopics] = useState([]);
  const [subtopics, setSubtopics] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [editId, setEditId] = useState();
  const [showModal, toggleModal] = useState(false);
  useEffect(() => {
    fetchChapters();
    fetchSubjects();
    fetchSubtopics();
    fetchQuestions();
    if (
      !document.getElementById("subtopic").value ||
      !selectedOption ||
      !chapters.length ||
      !subjects.length ||
      !subtopics.length
    ) {
      document.getElementById("button").disabled = "true";
    }
  }, []);
  useEffect(() => {
    if (showModal)
      setTimeout(
        function () {
          toggleModal(false);
        },
        [4000]
      );
  }, [showModal]);
  const fetchChapters = async () => {
    const response = await axios.get(
      `http://localhost:8000/api/v1/admin/fetchData?target=chapter`
    );
    setChapters(response.data);
    return () => {
      setChapters([]);
    };
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

  const fetchSubtopics = async () => {
    const response = await axios.get(
      `http://localhost:8000/api/v1/admin/fetchData?target=subtopic`
    );
    setSubtopics(response.data);
    return () => {
      setSubtopics([]);
    };
  };
  const fetchQuestions = async () => {
    const response = await axios.get(
      `http://localhost:8000/api/v1/admin/fetchData?target=question`
    );
    setQuestions(response.data);
    return () => {
      setQuestions([]);
    };
  };
  const handleSelect = (e) => {
    const selected = e.target.value;
    setSelectedOption(selected);
  };

  const handleSubject = (e) => {
    const subject = parseInt(e.target.value);
    const chapter = chapters.filter((x) => x.subject_id === subject);
    setFilteredChapters(chapter);
  };
  const handleChapter = (e) => {
    const chapter = parseInt(e.target.value);
    const topic = subtopics.filter((x) => x.chapter_id === chapter);
    setFilteredTopics(topic);
  };
  const checkName = (e) => {
    const name = e.target.value;
    const input = document.getElementById("subtopic");
    const button = document.getElementById("button");
    if (
      subtopics.filter((x) => x.name.toLowerCase() === name.toLowerCase())
        .length
    ) {
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
      { id: id, type: "subtopic" }
    );
    fetchSubtopics();
    return response;
  };
  const uploadQuestion = async (e) => {
    e.preventDefault();
    if (
      !document.getElementById("subtopic").value ||
      !selectedOption ||
      !chapters.length ||
      !subjects.length ||
      !subtopics.length
    ) {
      return alert("Something is missing");
    }
    const options = document.getElementsByName("option");
    const optionStatement = document.getElementsByName("option-state");
    const question = document.getElementById("subtopic").value;
    const chapter = e.target.chapter.value;
    const subject = e.target.subject.value;
    const topic = e.target.topic.value;
    const qr = await axios.post(
      `http://localhost:8000/api/v1/admin/uploadData`,
      {
        statement: question,
        chapter_id: chapter,
        subject_id: subject,
        subtopic_id: topic,
        correct_option_id: 0,
        type: "question",
      }
    );
    for (var i = 0; i < options.length; i++) {
      const response = await uploadOption(
        optionStatement[options[i].value].value,
        qr.data.insertId
      );
      if (parseInt(options[i].value) === parseInt(selectedOption)) {
        const ur = await axios.put(
          `http://localhost:8000/api/v1/admin/updateData/${qr.data.insertId}`,
          {
            type: "question",
            correct_option_id: response.data.insertId,
          }
        );
      }
    }
    fetchQuestions();
    setOptionCount(1);

    document.getElementById("subtopic").value = "";
    toggleModal(true);
  };
  const uploadOption = async (statement, questionId) => {
    const checkRes = await axios.post(
      `http://localhost:8000/api/v1/admin/checkOption`,
      { option: statement }
    );
    console.log(checkRes);
    var response = { data: {} };
    if (!checkRes.data.length) {
      response = await axios.post(
        `http://localhost:8000/api/v1/admin/uploadData`,
        {
          value: statement,
          type: "_option",
        }
      );
    } else {
      response.data.insertId = checkRes.data[0].id;
    }
    await axios.post(`http://localhost:8000/api/v1/admin/uploadData`, {
      question_id: questionId,
      option_id: response.data.insertId,
      type: "question_option_map",
    });
    return response;
  };
  const updateData = async (id) => {
    const name = document.getElementsByName(`topic-${id}`)[0].value;
    const subject = document.getElementsByName(`subject-${id}`)[0].value;
    const chapter = document.getElementsByName(`chapter-${id}`)[0].value;
    const response = await axios.put(
      `http://localhost:8000/api/v1/admin/updateData/${id}`,
      {
        type: "subtopic",
        name: name,
        subject_id: subject,
        chapter_id: chapter,
      }
    );
    setEditId();
    fetchSubtopics();

    return () => {
      setSubjects([]);
    };
  };
  return (
    <div>
      <div
        className="modal-f"
        style={showModal ? { opacity: 1, marginTop: "40px" } : {}}
      >
        Question Upload Successfully
      </div>
      <h2 className="heading"></h2>
      <form className="container-x" onSubmit={uploadQuestion}>
        <select name="subject" onChange={handleSubject}>
          <option value="-1">Select Subject</option>
          {subjects.map((x) => {
            return (
              <option value={x.id} key={x.id}>
                {x.name}
              </option>
            );
          })}
        </select>
        {filteredChapters.length ? (
          <select name="chapter" onChange={handleChapter}>
            <option value="-1">Select Chapter</option>
            {filteredChapters.map((x) => {
              return (
                <option value={x.id} key={x.id}>
                  {x.name}
                </option>
              );
            })}
          </select>
        ) : (
          ""
        )}
        {filteredTopics.length ? (
          <select name="topic">
            <option value="-1">Select Topic</option>
            {filteredTopics.map((x) => {
              return (
                <option value={x.id} key={x.id}>
                  {x.name}
                </option>
              );
            })}
          </select>
        ) : (
          ""
        )}
        <br />
        <br />
        <textarea
          type="text"
          autoComplete="off"
          className="input"
          id="subtopic"
          placeholder={"Enter question statement..."}
          onChange={checkName}
          style={{ width: "80%", resize: "vertical" }}
        ></textarea>
        <div
          style={{
            fontSize: "14px",
            color: "rgba(255,255,255,0.6)",
            marginTop: "10px",
          }}
        >
          Options
          <br />
          <ul className="options">
            {[...Array(optionCount)].map((e, i) => (
              <li key={i} className="do">
                <input
                  type="radio"
                  className={"co"}
                  name="option"
                  value={i}
                  onChange={handleSelect}
                />
                <textarea
                  className="option-input"
                  name={"option-state"}
                  placeholder="Enter option statement"
                ></textarea>
                <span>Marked as correct</span>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="borderLess"
            onClick={() => {
              setOptionCount(optionCount + 1);
            }}
          >
            Add option +
          </button>
        </div>

        <br />
        <br />
        <button className="create" id="button" disabled style={{ margin: 0 }}>
          Create New Question
        </button>
      </form>

      <table>
        <tr>
          <th>Sr no.</th>
          <th>Question Statement</th>
          <th>Topic Name</th>
          <th>Chapter Name</th>
          <th>Subject Name</th>
          <th colSpan={2} className="edit-head">
            Edit
          </th>
        </tr>
        {questions.map((x, i) => {
          const edit = editId === x.id;
          return (
            <tr key={x.id}>
              <td className="serial">{i + 1}</td>
              <td>
                {edit ? (
                  <input
                    type="text"
                    className="table-input"
                    name={`topic-${x.id}`}
                    defaultValue={x.statement}
                  />
                ) : (
                  x.statement
                )}
              </td>
              <td>
                {edit ? (
                  <select name={`topic-${x.id}`} defaultValue={x.subtopic_id}>
                    {subtopics.map((topic) => {
                      return (
                        <option value={topic.id} key={topic.id}>
                          {topic.name}
                        </option>
                      );
                    })}
                  </select>
                ) : (
                  subtopics
                    .filter((topic) => topic.id === x.subtopic_id)
                    .map((data) => data.name)
                )}
              </td>

              <td>
                {edit ? (
                  <select name={`chapter-${x.id}`} defaultValue={x.chapter_id}>
                    {chapters.map((chapter) => {
                      return (
                        <option value={chapter.id} key={chapter.id}>
                          {chapter.name}
                        </option>
                      );
                    })}
                  </select>
                ) : (
                  chapters
                    .filter((chapter) => chapter.id === x.chapter_id)
                    .map((data) => data.name)
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

export default Subtopic;
