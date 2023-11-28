import "./App.css";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import EmployeeProductiveDashboard from "./components/EmployeeProductiveDashboard";
import Users from "./components/Users";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/logo" element={<Login />} />
        <Route path="/EmployeeProductiveDashboard" element={<EmployeeProductiveDashboard />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </Router>
  );
}

export default App;