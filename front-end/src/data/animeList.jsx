
    
import aot from "../assets/images/aot.jpg";
import bleach from "../assets/images/bleach.jpg";
import frieren from "../assets/images/frieren.jpg";
import slime from "../assets/images/slime.jpeg";
import demonslayer from "../assets/images/demonslayer.jpg";
import jjk from "../assets/images/jjk.jpg";
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
export default animeList;