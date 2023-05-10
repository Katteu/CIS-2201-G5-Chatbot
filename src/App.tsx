import "./App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./modules/Register";
import SignedInLayout from "./components/SignedInLayout";
import SignedOutLayout from "./components/SignedOutLayout";
import Dashboard from "./modules/Dashboard";
import Landing from "./modules/Landing";
import Borrowing from "./modules/Borrowing";
import MeetingScheduler from "./modules/MeetingScheduler";
import BulletinBoard from "./modules/BulletinBoard";
import Chatbot from "./modules/Chatbot";
import EventManager from "./modules/EventManager";
import Inventory from "./modules/Inventory";
import Grievances from "./modules/Grievances";
import RoomIssues from "./modules/RoomIssues";
import SeatingAssignment from "./modules/SeatingAssignment";
import Logincb from "./modules/Login/logincb";
import Livechat from "./modules/Chatbot/categories/livechat";
import Profilecb from "./modules/Login/profile";

function App() {
  return (
    <Routes>
      <Route element={<SignedInLayout />} >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/borrowing" element={<Borrowing />} />
        <Route path="/seating-assignment" element={<SeatingAssignment />} />
        <Route path="/meeting-scheduler" element={<MeetingScheduler />} />
        <Route path="/bulletin-board" element={<BulletinBoard />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/event-manager" element={<EventManager />} />
        <Route path="/inventory" element={<Inventory/>} />
        <Route path="/grievances" element={<Grievances />} />
        <Route path="/room-issues" element={<RoomIssues />} />
      </Route>
      <Route element={<SignedOutLayout />} >
        <Route path="/" element={<Landing/>} />
        <Route path="/login" element={<Logincb />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profilecb />} />
      </Route>  
    </Routes>
  );
}

export default App;
