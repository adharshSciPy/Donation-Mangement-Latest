import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./scenes/main/Register";
import Login from "./scenes/main/Login";
import ReliefCenter from "./scenes/volunteer/reliefCenter/ReliefCenter";
import CollectionCenter from "./scenes/volunteer/collection/CollectionCenter";
import NavBar from "./scenes/main/NavBar";
import SnackBar from "./scenes/main/Snackbar";
import axios from "axios";
import MyReliefCenter from "./scenes/volunteer/reliefCenter/MyReliefCenter";
import MyCollectionCenter from "./scenes/volunteer/collection/MyCollectionCenter"
import LandingPage from "./scenes/main/LandingPage";

function App() {
  axios.defaults.baseURL = "http://localhost:5000";
  // axios.defaults.withCredentials = true;

  return (
    <BrowserRouter>
      <NavBar />
      <SnackBar />
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

    
        {/* Volunterrs */}
        <Route path="/volunteer">
          {/* relief-center */}
          <Route path="relief-center" element={<ReliefCenter />} />
          <Route path="my-relief-center" element={<MyReliefCenter />} />
      

          {/* collection center */}
          <Route path="collection-center" element={<CollectionCenter />} />
          <Route path="my-collection-center" element={<MyCollectionCenter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
