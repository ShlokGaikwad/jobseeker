import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing, Error, Register, ProtectedRoute } from "./pages/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  AddJobs,
  AllJobs,
  Profile,
  SharedLayout,
  Stats,
} from "./pages/dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path="all-jobs" element={<AllJobs />} />
          <Route path="add-jobs" element={<AddJobs />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="landing" element={<Landing />} />
        <Route path="*" element={<Error />} />
        <Route path="register" element={<Register />} />
      </Routes>
      <ToastContainer position="top-center" />
    </Router>
  );
}

export default App;
