import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./layout/Rootlayout";
import Members from "./pages/main/Members";
import Login from "./pages/Login/Login";
import Project from "./pages/Project/Project";
import Recruit from "./pages/recruit/Recruit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Members />} />
          <Route path="/members" element={<Members />} />
          <Route path="/login" element={<Login />} />
          <Route path="/project" element={<Project />} />
          <Route path="/recruit" element={<Recruit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
