import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Booking from "./Booking";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Booking />} />
      </Routes>
    </Router>
  );
}

export default App;
