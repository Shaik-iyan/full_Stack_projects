import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const EpisodePlayer = () => {
  const navigate = useNavigate();

  const { id, season, episode } = useParams();

  const currentSeason = Number(season) || 1;
  const currentEpisode = Number(episode) || 1;

  const totalEpisodes = 25;

  const episodes = Array.from(
    { length: totalEpisodes },
    (_, index) => index + 1
  );


  const openEpisode = (episodeNumber) => {
    navigate(
      `/anime/${id}/season/${currentSeason}/episode/${episodeNumber}`
    );
  };

  const goToPreviousEpisode = () => {
    if (currentEpisode > 1) {
      navigate(
        `/anime/${id}/season/${currentSeason}/episode/${
          currentEpisode - 1
        }`
      );
    }
  };

  const goToNextEpisode = () => {
    if (currentEpisode < totalEpisodes) {
      navigate(
        `/anime/${id}/season/${currentSeason}/episode/${
          currentEpisode + 1
        }`
      );
    }
  };

  const styles = {
    page: {
      minHeight: "100vh",
      width: "100%",
      background: "#0b0b0f",
      color: "#ffffff",
      padding: "40px 5%",
      fontFamily: "Arial, Helvetica, sans-serif",
      boxSizing: "border-box",
    },

    header: {
      maxWidth: "1200px",
      margin: "0 auto 25px",
    },

    title: {
      margin: "0",
      fontSize: "32px",
      fontWeight: "700",
      textTransform: "capitalize",
    },

    subtitle: {
      marginTop: "8px",
      color: "#999999",
      fontSize: "17px",
    },

    videoContainer: {
      maxWidth: "1200px",
      margin: "0 auto",
    },

    video: {
      width: "100%",
      height: "600px",
      background:
        "radial-gradient(circle, #22222a 0%, #0d0d12 60%, #050507 100%)",
      border: "1px solid #29292f",
      borderRadius: "14px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      boxShadow: "0 15px 50px rgba(0,0,0,0.55)",
      boxSizing: "border-box",
    },

    playButton: {
      width: "80px",
      height: "80px",
      borderRadius: "50%",
      border: "none",
      background: "#e50914",
      color: "#ffffff",
      fontSize: "30px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingLeft: "6px",
    },

    videoTitle: {
      marginTop: "22px",
      fontSize: "22px",
      fontWeight: "600",
    },

    videoSubtitle: {
      marginTop: "7px",
      color: "#888888",
      fontSize: "14px",
    },

    navigation: {
      maxWidth: "1200px",
      margin: "25px auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "20px",
    },

    navigationButton: {
      padding: "13px 22px",
      border: "none",
      borderRadius: "8px",
      background: "#e50914",
      color: "#ffffff",
      fontSize: "15px",
      fontWeight: "600",
      cursor: "pointer",
    },

    disabledButton: {
      background: "#29292f",
      color: "#666666",
      cursor: "not-allowed",
    },

    currentEpisode: {
      padding: "10px 18px",
      background: "#18181d",
      border: "1px solid #303038",
      borderRadius: "8px",
      color: "#ffffff",
      fontSize: "16px",
      fontWeight: "600",
    },

    episodesContainer: {
      maxWidth: "1200px",
      margin: "45px auto 0",
    },

    episodesTitle: {
      margin: "0 0 20px",
      fontSize: "25px",
      fontWeight: "700",
    },

    episodesGrid: {
      display: "grid",
      gridTemplateColumns:
        "repeat(auto-fill, minmax(85px, 1fr))",
      gap: "12px",
    },

    episodeButton: {
      minHeight: "48px",
      border: "1px solid #303038",
      borderRadius: "8px",
      background: "#17171c",
      color: "#dddddd",
      fontSize: "14px",
      fontWeight: "600",
      cursor: "pointer",
    },

    activeEpisode: {
      background: "#e50914",
      border: "1px solid #e50914",
      color: "#ffffff",
    },
  };

  return (
    <div style={styles.page}>

      <div style={styles.header}>

        <h1 style={styles.title}>
          {id}
        </h1>

        <p style={styles.subtitle}>
          Season {currentSeason} • Episode {currentEpisode}
        </p>

      </div>

      <div style={styles.videoContainer}>

        <div style={styles.video}>

          <button
            style={styles.playButton}
            onClick={() => {
              alert(
                `Playing Season ${currentSeason}, Episode ${currentEpisode}`
              );
            }}
          >
            ▶
          </button>

          <div style={styles.videoTitle}>
            Episode {currentEpisode}
          </div>

          <div style={styles.videoSubtitle}>
            Season {currentSeason}
          </div>

        </div>

      </div>

      <div style={styles.navigation}>

        <button
          style={{
            ...styles.navigationButton,

            ...(currentEpisode === 1
              ? styles.disabledButton
              : {}),
          }}
          onClick={goToPreviousEpisode}
          disabled={currentEpisode === 1}
        >
          ← Previous Episode
        </button>

        <div style={styles.currentEpisode}>
          Episode {currentEpisode}
        </div>

        <button
          style={{
            ...styles.navigationButton,

            ...(currentEpisode === totalEpisodes
              ? styles.disabledButton
              : {}),
          }}
          onClick={goToNextEpisode}
          disabled={currentEpisode === totalEpisodes}
        >
          Next Episode →
        </button>

      </div>

      <div style={styles.episodesContainer}>

        <h2 style={styles.episodesTitle}>
          All Episodes
        </h2>


        <div style={styles.episodesGrid}>

          {episodes.map((episodeNumber) => {

            const isActive =
              episodeNumber === currentEpisode;

            return (
              <button
                key={episodeNumber}

                style={{
                  ...styles.episodeButton,

                  ...(isActive
                    ? styles.activeEpisode
                    : {}),
                }}

                onClick={() =>
                  openEpisode(episodeNumber)
                }
              >
                EP {episodeNumber}
              </button>
            );

          })}

        </div>

      </div>

    </div>
  );
};

export default EpisodePlayer;