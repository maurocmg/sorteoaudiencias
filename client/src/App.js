import { Provider } from "react-redux";
import store from "./store";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Asegúrate de importar también "Routes"
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
//import AppLayout from "./components/AppLayout/AppLayout";
//import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/home" element={<Home />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
