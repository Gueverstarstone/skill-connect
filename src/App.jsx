import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import WorkerDetails from "./pages/WorkerDetails";
import Workers from "./pages/Workers";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Clients from "./pages/Clients";
import ClientDetail from "./pages/ClientDetail";
import Header from "./components/Header";
import AllRequests from "./pages/AllRequests";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        {/* <Navbar /> */}
        <Header />

        <div className="app-content">
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/workers/:id" element={<ClientDetail />} />
            {/* Client: browse workers */}
            <Route path="/workers" element={<Clients />} />
            {/* Worker: see requests */}
            <Route path="/requests" element={<AllRequests />} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
