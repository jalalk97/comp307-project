import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Landing from "./components/Landing";
import LoginPage from "./features/auth/LoginPage";
import RegisterPage from "./features/auth/RegisterPage";
import FeedbackPage from "./components/Feedback";
import Dashboard from "./components/Dashboard";
import CreateMeeting from "./components/CreateMeeting";
import AlternateMeeting from "./components/AlternateMeeting";
import RemoveMeeting from "./components/RemoveMeeting";
import Availability from "./features/meeting/Availability";
import CreateBorrowMeeting from "./components/CreateBorrowMeeting";
import ActiveAppointmentsAndHistory from "./components/ActiveAppointmentsAndHistory";
import BookWithURL from "./features/booking/BookWithURL";
import ProtectedRoute from "../utils/ProtectedRoute";

function App() {
  //for testing purposes leave as is. Will implement protected routes later
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route
          path="feedback"
          element={
            <ProtectedRoute>
              <FeedbackPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="create-meeting"
          element={
            <ProtectedRoute>
              <CreateMeeting />
            </ProtectedRoute>
          }
        />
        <Route path="alternate-meeting" element={<AlternateMeeting />} />
        <Route
          path="availability"
          element={
            <ProtectedRoute>
              <Availability />
            </ProtectedRoute>
          }
        />
        <Route
          path="create-borrow-meeting"
          element={
            <ProtectedRoute>
              <CreateBorrowMeeting />
            </ProtectedRoute>
          }
        />
        <Route
          path="remove-meeting"
          element={
            <ProtectedRoute>
              <RemoveMeeting />
            </ProtectedRoute>
          }
        />
        <Route
          path="active-appointment-history"
          element={<ActiveAppointmentsAndHistory />}
        />
        <Route path="book-with-url" element={<BookWithURL />} />
      </Route>
    </Routes>
  );
}

export default App;
