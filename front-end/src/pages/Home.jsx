import React, { useEffect, useState } from "react";
import AnimeCard from "../components/AnimeCard";

import aot from "../assets/images/aot.jpg";
import bleach from "../assets/images/bleach.jpg";
import frieren from "../assets/images/frieren.jpg";
import slime from "../assets/images/slime.jpeg";
import demonslayer from "../assets/images/demonslayer.jpg";
import jjk from "../assets/images/jjk.jpg";

function Home() {
  // Your original anime
  const defaultAnimeList = [
    {
      id: 1,
      title: "Attack on Titan",
      description:
        "Humanity fights for survival against mysterious giant Titans.",
      image: aot,
      genres: ["Action", "Fantasy"],
    },

    {
      id: 2,
      title: "Bleach",
      description:
        "Ichigo Kurosaki becomes a Soul Reaper and protects the living world.",
      image: bleach,
      genres: ["Action", "Adventure", "Supernatural"],
    },

    {
      id: 3,
      title: "Frieren",
      description:
        "An elven mage begins a journey to understand humans and the memories of her past.",
      image: frieren,
      genres: ["Fantasy", "Adventure", "Drama"],
    },

    {
      id: 4,
      title: "That Time I Got Reincarnated as a Slime",
      description:
        "A man is reincarnated in another world as a powerful slime.",
      image: slime,
      genres: ["Fantasy", "Adventure", "Isekai"],
    },

    {
      id: 5,
      title: "Demon Slayer",
      description:
        "Tanjiro becomes a demon slayer to save his sister and defeat powerful demons.",
      image: demonslayer,
      genres: ["Action", "Adventure", "Fantasy"],
    },

    {
      id: 6,
      title: "Jujutsu Kaisen",
      description:
        "Yuji Itadori joins the world of jujutsu sorcerers and battles dangerous curses.",
      image: jjk,
      genres: ["Action", "Supernatural", "Fantasy"],
    },
  ];

  const [animeList, setAnimeList] = useState(defaultAnimeList);

  // Load anime added from Admin Dashboard
  useEffect(() => {
    const savedAnime =
      JSON.parse(localStorage.getItem("animeList")) || [];

    setAnimeList([
      ...defaultAnimeList,
      ...savedAnime,
    ]);
  }, []);

  return (
    <div style={styles.container}>

      <h1 style={styles.title}>
        Start Your Anime Journey
      </h1>

      <div style={styles.grid}>

        {animeList.map((anime) => (
          <AnimeCard
            key={anime.id}
            anime={anime}
          />
        ))}

      </div>

    </div>
  );
}

export default Home;

const styles = {
  container: {
    padding: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
    fontFamily: "sans-serif",
  },

  title: {
    textAlign: "center",
    marginBottom: "30px",
    color: "#883883",
  },

  grid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fill, minmax(180px, 1fr))",
    gap: "20px",
  },
};