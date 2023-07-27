import React from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Buses from "./components/Buses";
import Reservation from "./components/Reservations";
import Users from "./components/Users";
import Bus from "./components/Bus";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
window.React = React;
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      </div>
      <div className="content">
        <Routes>
          <Route path="/FavourExpress" element={<Buses />} />
          <Route path="/reservations" element={<Reservation />} />
          <Route path="/users" element={<Users />} />
          <Route path="/bus" element={<Bus />} />
        </Routes>
      </div>
    
    </Router>
  );
}

export default App;
