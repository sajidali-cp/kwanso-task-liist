import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import TaskRoute from "./routes/TaskRoute";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<TaskRoute />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
