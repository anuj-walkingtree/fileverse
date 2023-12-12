import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/landing/*" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
