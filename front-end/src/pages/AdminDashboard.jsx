import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const [activeOperation, setActiveOperation] = useState("");

  const [animeData, setAnimeData] = useState({
    title: "",
    description: "",
    image: "",
    genres: "",
  });

  const [episodeData, setEpisodeData] = useState({
    animeId: "",
    season: "",
    episode: "",
    title: "",
    videoUrl: "",
  });

  const [removeAnimeId, setRemoveAnimeId] = useState("");
  const [removeEpisodeId, setRemoveEpisodeId] = useState("");

  // ------------------------------------------------
  // CHECK ADMIN LOGIN
  // ------------------------------------------------

  const isAdmin = localStorage.getItem("isAdmin") === "true";

  if (!isAdmin) {
    return (
      <div style={styles.accessDenied}>
        <h2>Access Denied</h2>
        <p>You must login as an admin to access this page.</p>

        <button
          style={styles.backButton}
          onClick={() => navigate("/login")}
        >
          Go to Login
        </button>
      </div>
    );
  }

  // ------------------------------------------------
  // ADD ANIME
  // ------------------------------------------------

  const handleAddAnime = (e) => {
    e.preventDefault();

    const newAnime = {
      id: Date.now(),
      title: animeData.title,
      description: animeData.description,
      image: animeData.image,

      // Convert genres into an array
      genres: animeData.genres
        .split(",")
        .map((genre) => genre.trim())
        .filter((genre) => genre !== ""),
    };

    const existingAnime =
      JSON.parse(localStorage.getItem("animeList")) || [];

    existingAnime.push(newAnime);

    localStorage.setItem(
      "animeList",
      JSON.stringify(existingAnime)
    );

    alert("Anime added successfully!");

    setAnimeData({
      title: "",
      description: "",
      image: "",
      genres: "",
    });
  };

  // ------------------------------------------------
  // ADD EPISODE
  // ------------------------------------------------

  const handleAddEpisode = (e) => {
    e.preventDefault();

    const newEpisode = {
      id: Date.now(),
      animeId: episodeData.animeId,
      season: Number(episodeData.season),
      episode: Number(episodeData.episode),
      title: episodeData.title,
      videoUrl: episodeData.videoUrl,
    };

    const existingEpisodes =
      JSON.parse(localStorage.getItem("episodes")) || [];

    existingEpisodes.push(newEpisode);

    localStorage.setItem(
      "episodes",
      JSON.stringify(existingEpisodes)
    );

    alert("Episode added successfully!");

    setEpisodeData({
      animeId: "",
      season: "",
      episode: "",
      title: "",
      videoUrl: "",
    });
  };

  // ------------------------------------------------
  // REMOVE ANIME
  // ------------------------------------------------

  const handleRemoveAnime = (e) => {
    e.preventDefault();

    const existingAnime =
      JSON.parse(localStorage.getItem("animeList")) || [];

    const updatedAnime = existingAnime.filter(
      (anime) => String(anime.id) !== String(removeAnimeId)
    );

    localStorage.setItem(
      "animeList",
      JSON.stringify(updatedAnime)
    );

    alert("Anime removed successfully!");

    setRemoveAnimeId("");
  };

  // ------------------------------------------------
  // REMOVE EPISODE
  // ------------------------------------------------

  const handleRemoveEpisode = (e) => {
    e.preventDefault();

    const existingEpisodes =
      JSON.parse(localStorage.getItem("episodes")) || [];

    const updatedEpisodes = existingEpisodes.filter(
      (episode) =>
        String(episode.id) !== String(removeEpisodeId)
    );

    localStorage.setItem(
      "episodes",
      JSON.stringify(updatedEpisodes)
    );

    alert("Episode removed successfully!");

    setRemoveEpisodeId("");
  };

  // ------------------------------------------------
  // LOGOUT ADMIN
  // ------------------------------------------------

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("userEmail");

    navigate("/login");
  };

  // ------------------------------------------------
  // DASHBOARD
  // ------------------------------------------------

  return (
    <div style={styles.container}>

      <div style={styles.header}>
        <div>
          <h1 style={styles.heading}>Admin Dashboard</h1>
          <p style={styles.subtitle}>
            Manage AnimeVerse
          </p>
        </div>

        <button
          style={styles.logoutButton}
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>

      {/* OPERATION BUTTONS */}

      <div style={styles.operations}>

        <button
          style={styles.operationButton}
          onClick={() => setActiveOperation("addAnime")}
        >
          + Add Anime
        </button>

        <button
          style={styles.operationButton}
          onClick={() => setActiveOperation("addEpisode")}
        >
          + Add Episode
        </button>

        <button
          style={styles.operationButton}
          onClick={() => setActiveOperation("removeAnime")}
        >
          − Remove Anime
        </button>

        <button
          style={styles.operationButton}
          onClick={() => setActiveOperation("removeEpisode")}
        >
          − Remove Episode
        </button>

      </div>

      {/* ADD ANIME */}

      {activeOperation === "addAnime" && (
        <div style={styles.formCard}>

          <h2>Add Anime</h2>

          <form onSubmit={handleAddAnime}>

            <input
              type="text"
              placeholder="Anime title"
              value={animeData.title}
              onChange={(e) =>
                setAnimeData({
                  ...animeData,
                  title: e.target.value,
                })
              }
              style={styles.input}
              required
            />

            <textarea
              placeholder="Anime description"
              value={animeData.description}
              onChange={(e) =>
                setAnimeData({
                  ...animeData,
                  description: e.target.value,
                })
              }
              style={styles.textarea}
              required
            />

            <input
              type="text"
              placeholder="Anime image URL"
              value={animeData.image}
              onChange={(e) =>
                setAnimeData({
                  ...animeData,
                  image: e.target.value,
                })
              }
              style={styles.input}
              required
            />

            <input
              type="text"
              placeholder="Genres e.g. Action, Fantasy, Adventure"
              value={animeData.genres}
              onChange={(e) =>
                setAnimeData({
                  ...animeData,
                  genres: e.target.value,
                })
              }
              style={styles.input}
              required
            />

            <button
              type="submit"
              style={styles.submitButton}
            >
              Add Anime
            </button>

          </form>
        </div>
      )}

      {/* ADD EPISODE */}

      {activeOperation === "addEpisode" && (
        <div style={styles.formCard}>

          <h2>Add Episode</h2>

          <form onSubmit={handleAddEpisode}>

            <input
              type="text"
              placeholder="Anime ID"
              value={episodeData.animeId}
              onChange={(e) =>
                setEpisodeData({
                  ...episodeData,
                  animeId: e.target.value,
                })
              }
              style={styles.input}
              required
            />

            <input
              type="number"
              placeholder="Season number"
              value={episodeData.season}
              onChange={(e) =>
                setEpisodeData({
                  ...episodeData,
                  season: e.target.value,
                })
              }
              style={styles.input}
              required
            />

            <input
              type="number"
              placeholder="Episode number"
              value={episodeData.episode}
              onChange={(e) =>
                setEpisodeData({
                  ...episodeData,
                  episode: e.target.value,
                })
              }
              style={styles.input}
              required
            />

            <input
              type="text"
              placeholder="Episode title"
              value={episodeData.title}
              onChange={(e) =>
                setEpisodeData({
                  ...episodeData,
                  title: e.target.value,
                })
              }
              style={styles.input}
              required
            />

            <input
              type="text"
              placeholder="Video URL"
              value={episodeData.videoUrl}
              onChange={(e) =>
                setEpisodeData({
                  ...episodeData,
                  videoUrl: e.target.value,
                })
              }
              style={styles.input}
              required
            />

            <button
              type="submit"
              style={styles.submitButton}
            >
              Add Episode
            </button>

          </form>
        </div>
      )}

      {/* REMOVE ANIME */}

      {activeOperation === "removeAnime" && (
        <div style={styles.formCard}>

          <h2>Remove Anime</h2>

          <form onSubmit={handleRemoveAnime}>

            <input
              type="text"
              placeholder="Enter Anime ID"
              value={removeAnimeId}
              onChange={(e) =>
                setRemoveAnimeId(e.target.value)
              }
              style={styles.input}
              required
            />

            <button
              type="submit"
              style={styles.deleteButton}
            >
              Remove Anime
            </button>

          </form>
        </div>
      )}

      {/* REMOVE EPISODE */}

      {activeOperation === "removeEpisode" && (
        <div style={styles.formCard}>

          <h2>Remove Episode</h2>

          <form onSubmit={handleRemoveEpisode}>

            <input
              type="text"
              placeholder="Enter Episode ID"
              value={removeEpisodeId}
              onChange={(e) =>
                setRemoveEpisodeId(e.target.value)
              }
              style={styles.input}
              required
            />

            <button
              type="submit"
              style={styles.deleteButton}
            >
              Remove Episode
            </button>

          </form>
        </div>
      )}

    </div>
  );
};

// ------------------------------------------------
// STYLES
// ------------------------------------------------

const styles = {
  container: {
    minHeight: "100vh",
    padding: "40px",
    background: "#0b0b12",
    color: "white",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "35px",
  },

  heading: {
    margin: 0,
    fontSize: "32px",
  },

  subtitle: {
    color: "#aaa",
    marginTop: "5px",
  },

  operations: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    marginBottom: "35px",
  },

  operationButton: {
    padding: "18px",
    border: "none",
    borderRadius: "12px",
    background: "#191927",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
  },

  formCard: {
    maxWidth: "650px",
    margin: "auto",
    padding: "30px",
    background: "#151520",
    borderRadius: "15px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
  },

  input: {
    width: "100%",
    boxSizing: "border-box",
    padding: "13px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #333",
    background: "#0d0d15",
    color: "white",
    fontSize: "15px",
  },

  textarea: {
    width: "100%",
    boxSizing: "border-box",
    minHeight: "120px",
    padding: "13px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #333",
    background: "#0d0d15",
    color: "white",
    fontSize: "15px",
    resize: "vertical",
  },

  submitButton: {
    width: "100%",
    padding: "14px",
    border: "none",
    borderRadius: "8px",
    background: "#7c3aed",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
  },

  deleteButton: {
    width: "100%",
    padding: "14px",
    border: "none",
    borderRadius: "8px",
    background: "#dc2626",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
  },

  logoutButton: {
    padding: "10px 18px",
    border: "none",
    borderRadius: "8px",
    background: "#dc2626",
    color: "white",
    cursor: "pointer",
  },

  accessDenied: {
    minHeight: "100vh",
    background: "#0b0b12",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  backButton: {
    padding: "12px 20px",
    border: "none",
    borderRadius: "8px",
    background: "#7c3aed",
    color: "white",
    cursor: "pointer",
  },
};

export default AdminDashboard;