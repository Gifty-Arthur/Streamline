// App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./Components/pages/Home";
import Login from "./Components/pages/Login";
import Footer from "./Components/pages/Footer";
import Who from ".//Components/pages/Who";

import Finish from "./Components/pages/NewHome/Finish";
import Membership from "./Components/pages/NewHome/Membership";

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Finish" element={<Finish />} />
          <Route path="Membership" element={<Membership />} />
          <Route path="who" element={<Who />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
