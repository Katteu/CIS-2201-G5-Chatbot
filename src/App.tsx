import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SignedInLayout from "./components/SignedInLayout";
import SignedOutLayout from "./components/SignedOutLayout";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";

function App() {
  return (
    <Routes>
      <Route element={<SignedInLayout />} >
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route element={<SignedOutLayout />} >
        <Route path="/" element={<Landing/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
