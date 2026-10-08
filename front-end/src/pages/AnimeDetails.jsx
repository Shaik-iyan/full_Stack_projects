import { useParams, Link } from "react-router-dom";

import aot from "../assets/images/aot.jpg";
import bleach from "../assets/images/bleach.jpg";
import frieren from "../assets/images/frieren.jpg";
import slime from "../assets/images/slime.jpeg";
import demonslayer from "../assets/images/demonslayer.jpg";
import jjk from "../assets/images/jjk.jpg";

function AnimeDetails() {

    const { id } = useParams();

    const animeList = [
        {
            id: 1,
            title: "Bleach",
            description:
                "Ichigo becomes a Soul Reaper and protects the living world from dangerous spirits.",
            image: bleach,
            rating: 9.0,
            year: 2004,
            genres: ["Action", "Adventure", "Supernatural"],
            seasons: [
                {
                    season: 1,
                    episodes: 20
                },
                {
                    season: 2,
                    episodes: 15
                }
            ]
        },

        {
            id: 2,
            title: "Attack on Titan",
            description:
                "Humanity fights for survival against terrifying Titans outside the walls.",
            image: aot,
            rating: 9.1,
            year: 2013,
            genres: ["Action", "Drama", "Fantasy"],
            seasons: [
                {
                    season: 1,
                    episodes: 25
                },
                {
                    season: 2,
                    episodes: 12
                }
            ]
        },

        {
            id: 3,
            title: "Frieren: Beyond Journey's End",
            description:
                "An elf mage begins a new journey after the end of the hero's adventure.",
            image: frieren,
            rating: 9.3,
            year: 2023,
            genres: ["Adventure", "Fantasy", "Drama"],
            seasons: [
                {
                    season: 1,
                    episodes: 28
                }
            ]
        },

        {
            id: 4,
            title: "That Time I Got Reincarnated as a Slime",
            description:
                "A man is reincarnated into another world as a powerful slime.",
            image: slime,
            rating: 8.1,
            year: 2018,
            genres: ["Fantasy", "Adventure", "Isekai"],
            seasons: [
                {
                    season: 1,
                    episodes: 24
                },
                {
                    season: 2,
                    episodes: 24
                }
            ]
        },

        {
            id: 5,
            title: "Demon Slayer",
            description:
                "Tanjiro fights demons while searching for a cure for his sister.",
            image: demonslayer,
            rating: 8.6,
            year: 2019,
            genres: ["Action", "Adventure", "Supernatural"],
            seasons: [
                {
                    season: 1,
                    episodes: 26
                },
                {
                    season: 2,
                    episodes: 18
                }
            ]
        },

        {
            id: 6,
            title: "Jujutsu Kaisen",
            description:
                "Yuji enters the world of cursed spirits and sorcerers.",
            image: jjk,
            rating: 8.7,
            year: 2020,
            genres: ["Action", "Adventure", "Supernatural"],
            seasons: [
                {
                    season: 1,
                    episodes: 24
                },
                {
                    season: 2,
                    episodes: 23
                }
            ]
        }
    ];

    const anime = animeList.find(
        (item) => item.id === Number(id)
    );

    if (!anime) {
        return (
            <div style={styles.notFound}>

                <h1>Anime Not Found</h1>

                <p>Anime ID: {id}</p>

                <Link
                    to="/"
                    style={styles.primaryButton}
                >
                    ← Back To Home
                </Link>

            </div>
        );
    }

    return (

        <main style={styles.page}>

            
            <section style={styles.detailsBox}>

              

                <div>
                    <img
                        src={anime.image}
                        alt={anime.title}
                        style={styles.poster}
                    />
                </div>

                <div style={styles.content}>

                    <p style={styles.label}>
                        ANIME DETAILS
                    </p>

                    <h1 style={styles.title}>
                        {anime.title}
                    </h1>


                    <div style={styles.info}>

                        <span style={styles.infoBox}>
                            ⭐ {anime.rating}
                        </span>

                        <span style={styles.infoBox}>
                            📅 {anime.year}
                        </span>

                    </div>


                    <div style={styles.genres}>

                        {anime.genres.map((genre) => (

                            <span
                                key={genre}
                                style={styles.genre}
                            >
                                {genre}
                            </span>

                        ))}

                    </div>


                    <p style={styles.description}>
                        {anime.description}
                    </p>


                    <Link
                        to="/"
                        style={styles.backButton}
                    >
                        ← Back To Home
                    </Link>

                </div>

            </section>


            <section style={styles.episodesSection}>

                <p style={styles.label}>
                    WATCH NOW
                </p>

                <h2 style={styles.episodesTitle}>
                    Seasons & Episodes
                </h2>


                {anime.seasons.map((season) => (

                    <div
                        key={season.season}
                        style={styles.seasonBox}
                    >

                        <h3 style={styles.seasonTitle}>
                            Season {season.season}
                        </h3>


                        <div style={styles.episodeGrid}>

                            {Array.from(
                                {
                                    length: season.episodes
                                },
                                (_, index) => (
                                    <Link key={index}
                                    to={`/anime/${anime.id}/season/${season.season}/episode/${index}+1`} style={styles.episodeButton}>
                                        Episode {index+1}
                                    </Link>

                                )
                            )}

                        </div>

                    </div>

                ))}

            </section>

        </main>
    );
}


const styles = {

    page: {
        minHeight: "100vh",
        padding: "60px 6% 100px",
        background:
            "radial-gradient(circle at top, rgba(124,58,237,0.18), transparent 45%), #080b14",
        color: "white"
    },


    detailsBox: {
        maxWidth: "1150px",
        margin: "0 auto",
        padding: "45px",
        display: "flex",
        gap: "55px",
        background: "rgba(17,22,34,0.95)",
        border: "1px solid #282f42",
        borderRadius: "22px",
        boxShadow: "0 20px 60px rgba(0,0,0,0.45)"
    },


    poster: {
        width: "300px",
        height: "430px",
        objectFit: "cover",
        borderRadius: "14px",
        display: "block",
        boxShadow: "0 15px 35px rgba(0,0,0,0.55)"
    },


    content: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },


    label: {
        color: "#a78bfa",
        fontSize: "13px",
        fontWeight: "700",
        letterSpacing: "3px",
        marginBottom: "12px"
    },


    title: {
        fontSize: "52px",
        lineHeight: "1.1",
        margin: "0 0 20px"
    },


    info: {
        display: "flex",
        gap: "12px",
        marginBottom: "20px"
    },


    infoBox: {
        background: "#1b2130",
        border: "1px solid #30384d",
        padding: "9px 14px",
        borderRadius: "8px",
        color: "#d7dbea"
    },


    genres: {
        display: "flex",
        flexWrap: "wrap",
        gap: "9px",
        marginBottom: "25px"
    },


    genre: {
        background: "rgba(139,92,246,0.15)",
        color: "#c4b5fd",
        border: "1px solid rgba(139,92,246,0.5)",
        padding: "7px 14px",
        borderRadius: "20px",
        fontSize: "13px"
    },


    description: {
        maxWidth: "700px",
        color: "#aeb6c8",
        fontSize: "17px",
        lineHeight: "1.8",
        marginBottom: "25px"
    },


    backButton: {
        width: "fit-content",
        padding: "12px 20px",
        background: "#8b5cf6",
        color: "white",
        borderRadius: "8px",
        fontWeight: "600",
        textDecoration: "none"
    },


    episodesSection: {
        maxWidth: "1150px",
        margin: "55px auto 0"
    },


    episodesTitle: {
        fontSize: "34px",
        margin: "8px 0 35px"
    },


    seasonBox: {
        background: "#111622",
        border: "1px solid #282f42",
        borderRadius: "16px",
        padding: "25px",
        marginBottom: "25px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.25)"
    },


    seasonTitle: {
        fontSize: "22px",
        marginBottom: "22px"
    },


    episodeGrid: {
        display: "grid",
        gridTemplateColumns:
            "repeat(auto-fill, minmax(125px, 1fr))",
        gap: "12px"
    },


    episodeButton: {
        minHeight: "44px",
        padding: "10px",
        background: "#181e2c",
        color: "#cbd2e1",
        border: "1px solid #30384b",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "14px",
        textDecoration:"none"
    },


    primaryButton: {
        display: "inline-block",
        padding: "12px 20px",
        background: "#8b5cf6",
        color: "white",
        borderRadius: "8px",
        textDecoration: "none"
    },


    notFound: {
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "15px",
        color: "white"
    }

};

export default AnimeDetails;