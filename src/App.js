import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardPage, MessagePage } from "./Pages/index.js";
import Sidenav from "./Components/Sidenav/Navbar";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="main-body">
        <Sidenav />
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/message" element={<MessagePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
