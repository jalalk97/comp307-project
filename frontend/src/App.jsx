import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Landing from "./components/Landing";
import LoginPage from "./features/auth/LoginPage";
import RegisterPage from "./components/RegisterPage"; // Import RegisterPage
import FeedbackPage from "./components/Feedback";
import Dashboard from "./components/Dashboard";
import CreateMeeting from "./components/CreateMeeting";
import AlternateMeeting from "./components/AlternateMeeting";
import Availability from "./components/Availability";

function App() {
  //for testing purposes leave as is. Will implement protected routes later
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="feedback" element={<FeedbackPage />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="create-meeting" element={<CreateMeeting />} />
        <Route path="alternate-meeting" element={<AlternateMeeting />} />
        <Route path="availability" element={<Availability />} />
      </Route>
    </Routes>
  );
}

export default App;
