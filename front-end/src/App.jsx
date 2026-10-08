import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";

import Home from "./pages/Home";
import Genres from "./pages/Genres";
import Login from "./pages/Login";
import AnimeDetails from "./pages/AnimeDetails";
import EpisodePlayer from "./pages/EpisodePlayer";
import AdminDashboard from "./pages/AdminDashboard";

import "./App.css";

function App() {
    return (
        <BrowserRouter>

            <Header />

            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/genres"
                    element={<Genres />}
                />

                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/anime/:id"
                    element={<AnimeDetails />}
                />
        
                <Route
                    path="/anime/:id/season/:season/episode/:episode"
                    element={<EpisodePlayer />}
                />
                <Route 
                path="/admin"
                element={<AdminDashboard /> } />

            </Routes>

        </BrowserRouter>
    );
}

export default App;