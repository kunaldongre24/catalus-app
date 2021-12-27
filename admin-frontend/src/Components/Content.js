import React from "react";
import "../style/Content.css";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import Subject from "./Subject";
import Chapter from "./Chapter";
import Question from "./Question";
import Subtopic from "./Subtopic";

function Content() {
  return (
    <div className="Content">
      <div className="path-name">
        <Route path="/" exact render={(props) => "Dashboard"} />
        <Route path="/subjects" render={(props) => "Subjects"} />
        <Route path="/chapters" render={(props) => "Chapters"} />
        <Route path="/subtopics" render={(props) => "Subtopics"} />
        <Route path="/questions" render={(props) => "Questions"} />
      </div>
      <Switch>
        <Route path="/subjects" exact component={Subject} />
        <Route path="/chapters" exact component={Chapter} />
        <Route path="/questions" exact component={Question} />
        <Route path="/subtopics" exact component={Subtopic} />
        <Route path="/" exact component={Dashboard} />
      </Switch>
    </div>
  );
}

export default Content;
