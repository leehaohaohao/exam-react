import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home.tsx";
import MouseScrollableGallery from "./components/MouseScrollableGallery.tsx";
import About from "./components/About.tsx";
import Survey from "./components/Survey.tsx";
import LoveForYou from "./components/LoveForYou.tsx";


createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/photo" element={<MouseScrollableGallery/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/survey" element={<Survey/>}/>
                <Route path="/love" element={<LoveForYou/>}/>
            </Routes>
        </Router>
    </StrictMode>
);
