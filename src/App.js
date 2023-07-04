import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing, Error, Register, Dashboard } from "./pages/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="landing" element={<Landing />} />
        <Route path="*" element={<Error />} />
        <Route path="register" element={<Register />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
