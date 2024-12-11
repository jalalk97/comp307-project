import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Landing from "./components/Landing";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage"; // Import RegisterPage
import FeedbackPage from "./components/Feedback";
import Dashboard from "./components/Dashboard";


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
      </Route>
    </Routes>
  );
}

export default App;