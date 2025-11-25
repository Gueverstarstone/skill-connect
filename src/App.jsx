import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home'
import Admin from './pages/Admin'
import WorkerDetails from './pages/WorkerDetails'
import Workers from './pages/Workers'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/workerDetails" element={<WorkerDetails/>} />
          <Route path="/workers" element={<Workers/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
