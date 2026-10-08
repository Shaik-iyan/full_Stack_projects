import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import animeList from "../data/animeList";

const Genres = () => {
  const navigate = useNavigate();

  const genres = [
    "All",
    "Action",
    "Adventure",
    "Comedy",
    "Romance",
    "Fantasy",
    "Horror",
    "Mystery",
    "Sports",
    "Isekai",
    "Supernatural",
    "Drama",
  ];

  const [selectedGenre, setSelectedGenre] = useState("All");

  const filteredAnime =
    selectedGenre === "All"
      ? animeList
      : animeList.filter((anime) =>
          anime.genres.some(
            (genre) =>
              genre.toLowerCase() ===
              selectedGenre.toLowerCase()
          )
        );

  const styles = {
    page: {
      minHeight: "100vh",
      background: "#0b0b12",
      color: "#fff",
      padding: "40px 6%",
      boxSizing: "border-box",
      fontFamily: "Arial, sans-serif",
    },

    header: {
      textAlign: "center",
      marginBottom: "45px",
    },

    heading: {
      fontSize: "42px",
      fontWeight: "800",
      margin: "0 0 10px",
    },

    subtitle: {
      color: "#aaa",
      fontSize: "17px",
      margin: 0,
    },

    genreSection: {
      marginBottom: "45px",
    },

    sectionHeading: {
      fontSize: "26px",
      marginBottom: "20px",
    },

    genreButtons: {
      display: "flex",
      flexWrap: "wrap",
      gap: "12px",
    },

    genreButton: {
      padding: "11px 20px",
      border: "1px solid #333",
      borderRadius: "25px",
      background: "#15151f",
      color: "#fff",
      cursor: "pointer",
      fontSize: "15px",
    },

    activeGenreButton: {
      background: "#e50914",
      borderColor: "#e50914",
    },

    animeSection: {
      marginTop: "20px",
    },

    titleContainer: {
      marginBottom: "25px",
    },

    animeHeading: {
      fontSize: "30px",
      margin: "0 0 5px",
    },

    animeCount: {
      color: "#999",
      margin: 0,
    },

    animeGrid: {
      display: "grid",
      gridTemplateColumns:
        "repeat(auto-fill, minmax(250px, 1fr))",
      gap: "25px",
    },

    card: {
      background: "#15151f",
      borderRadius: "15px",
      overflow: "hidden",
      border: "1px solid #252535",
    },

    imageContainer: {
      width: "100%",
      height: "350px",
    },

    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
    },

    cardContent: {
      padding: "20px",
    },

    cardTitle: {
      fontSize: "23px",
      margin: "0 0 12px",
    },

    genreTags: {
      display: "flex",
      flexWrap: "wrap",
      gap: "7px",
      marginBottom: "15px",
    },

    genreTag: {
      background: "#292936",
      color: "#ddd",
      padding: "5px 9px",
      borderRadius: "5px",
      fontSize: "12px",
    },

    description: {
      color: "#aaa",
      fontSize: "14px",
      lineHeight: "1.6",
      marginBottom: "18px",
    },

    viewButton: {
      width: "100%",
      padding: "12px",
      border: "none",
      borderRadius: "8px",
      background: "#e50914",
      color: "#fff",
      fontSize: "15px",
      fontWeight: "600",
      cursor: "pointer",
    },

    noAnime: {
      textAlign: "center",
      padding: "70px 20px",
      background: "#15151f",
      borderRadius: "15px",
      border: "1px solid #252535",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <h1 style={styles.heading}>Explore Anime</h1>

        <p style={styles.subtitle}>
          Discover anime by your favorite genres
        </p>
      </div>

      <section style={styles.genreSection}>
        <h2 style={styles.sectionHeading}>Genres</h2>

        <div style={styles.genreButtons}>
          {genres.map((genre) => {
            const isActive = selectedGenre === genre;

            return (
              <button
                key={genre}
                onClick={() => setSelectedGenre(genre)}
                style={{
                  ...styles.genreButton,
                  ...(isActive
                    ? styles.activeGenreButton
                    : {}),
                }}
              >
                {genre}
              </button>
            );
          })}
        </div>
      </section>

      <section style={styles.animeSection}>
        <div style={styles.titleContainer}>
          <h2 style={styles.animeHeading}>
            {selectedGenre === "All"
              ? "All Anime"
              : `${selectedGenre} Anime`}
          </h2>

          <p style={styles.animeCount}>
            {filteredAnime.length} anime found
          </p>
        </div>

        {filteredAnime.length > 0 ? (
          <div style={styles.animeGrid}>
            {filteredAnime.map((anime) => (
              <div
                key={anime.id}
                style={styles.card}
              >
                <div style={styles.imageContainer}>
                  <img
                    src={anime.image}
                    alt={anime.title}
                    style={styles.image}
                  />
                </div>

                <div style={styles.cardContent}>
                  <h3 style={styles.cardTitle}>
                    {anime.title}
                  </h3>

                  <div style={styles.genreTags}>
                    {anime.genres.map((genre) => (
                      <span
                        key={genre}
                        style={styles.genreTag}
                      >
                        {genre}
                      </span>
                    ))}
                  </div>

                  <p style={styles.description}>
                    {anime.description}
                  </p>

                  <button
                    style={styles.viewButton}
                    onClick={() =>
                      navigate(`/anime/${anime.id}`)
                    }
                  >
                    View Anime
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={styles.noAnime}>
            <h3>No Anime Found</h3>

            <p>
              There are currently no anime available
              in the {selectedGenre} genre.
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Genres;