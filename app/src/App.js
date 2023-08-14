import React from "react";
import "./App.css";
import ElevateAppBar from "./components/ElevateAppBar";
import GroupByStatus from "./components/GroupByStatus";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <ElevateAppBar />
        <div style={{ marginTop: "50px", marginLeft: "150px" }}>
          <Routes>
            <Route path="/" element={<GroupByStatus />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
