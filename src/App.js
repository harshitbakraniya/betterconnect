import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import Footer from "./components/Footer/Footer";
import Home from "./containers/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TeacherRegistration from "./containers/TeacherRegistration/TeacherRegistration";
import Search from "./containers/Search/Search";
import Login from "./containers/Login/Login";
import BatchDetail from "./containers/BatchDetail/BatchDetail";

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teacher" element={<TeacherRegistration />} />
        <Route path="/batchdetail" element={<BatchDetail />} />
        <Route path="/search" element={<Search />} />
        <Route path="/teacher/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
