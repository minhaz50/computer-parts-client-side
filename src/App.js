import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Navigation from "./Pages/Shared/Navigation";

function App() {
  return (
    <div className="bg-neutral">
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/home" element={<Home />}>
          Home
        </Route>
        <Route path="/about" element={<About></About>}>
          About
        </Route>
      </Routes>
    </div>
  );
}

export default App;
