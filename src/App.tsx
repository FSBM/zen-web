import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OnboardLayout from "./pages/OnboardLayout";
import { Dashboard } from "./pages/Dashboard";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OnboardLayout />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;