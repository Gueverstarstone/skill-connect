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

// 👇 import these two directly
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserAuth from "./pages/UserAuth";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        {/* <Navbar /> */}
        <Header />

        <div className="app-content">
          <Routes>
            {/* Default: go to auth landing (Login in nice background) */}
            <Route path="/" element={<UserAuth />} />

            {/* Standalone login & register (if you want direct URLs) */}
            <Route path="/login" element={<UserAuth />} />
            <Route path="/register" element={<UserAuth />} />

            {/* Your other pages */}
            <Route path="/home" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/workers/:id" element={<ClientDetail />} />
            <Route path="/workers" element={<Clients />} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
