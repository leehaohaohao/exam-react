import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home.tsx";
import MouseScrollableGallery from "./components/MouseScrollableGallery.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/photo" element={<MouseScrollableGallery/>}/>
            </Routes>
        </Router>
    </StrictMode>
);
