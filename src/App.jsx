import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import WorkerDetails from "./pages/WorkerDetails";
import Workers from "./pages/Workers";
import Clients from "./pages/Clients";
import ClientDetail from "./pages/ClientDetail";
import AllRequests from "./pages/AllRequests";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        {/* <Navbar /> */}
        <Header />

        <div className="app-content">
          <Routes>
            {/* Default redirect */}
            <Route path="/" element={<Navigate to="/home" replace />} />

            {/* Public pages */}
            <Route path="/home" element={<Home />} />

            {/* Worker pages */}
            <Route path="/workers" element={<Clients />} />
            <Route path="/workers/:id" element={<WorkerDetails />} />
            <Route path="/requests" element={<AllRequests />} />

            {/* Protected admin page */}
            <Route path="/admin" element={<Admin />} />

            {/* Catch all unknown routes */}
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </div>

        <Footer />
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
