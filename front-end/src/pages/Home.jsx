import AnimeCard from "../components/AnimeCard";
import aot from "../assets/images/aot.jpg";
import bleach from "../assets/images/bleach.jpg";
import frieren from "../assets/images/frieren.jpg";
import slime from "../assets/images/slime.jpeg";
import demonslayer from "../assets/images/demonslayer.jpg";
import jjk from "../assets/images/jjk.jpg";
function Home(){
    const animeList=[
        {
        id:1,
        title:"Bleach",
        description:"Ichigo becomes a soul reaper and protects the living",
        image:bleach
    },{
        id:2,
        title:"Attack on Titan",
        description:"Humanity fights for survival against Titans",
        image:aot
    },{
        id:3,
        title:"fririen",
        description:"An elf mage begins a new journey after the hero's adventure",
        image:frieren
    },{
        id:4,
        title:" That Time I Got Reincarnated As a Alime",
        description:"A man is reincarnated into another world as apowerful slime",
        image:slime
    },{
        id:5,
        title:" Demon Slayer",
        description:"tanjiro fights demons while searching for a cure",
        image:demonslayer
    },{
        id:6,
        title:"Jujutsu Kaisen",
        description:"yuji enters the world of cursed spirits and sorcers.",
        image:jjk
    }];
    return(
    <div style={styles.container}>
        <h1 style={styles.title}>Start Your Anime Journey</h1>
        <div style={styles.grid}>
            {animeList.map((anime)=>(
                <AnimeCard key={anime.id}
                anime={anime} />
            ))}
        </div>
    </div>);
}
export default Home;

const styles={
    container:{
        padding:'20px',
        maxWidth:'1200px',
        margin:'0 auto',
        fontFamily:'sans-serif'
    },
        title:{
            textAlign:'center',
            marginBottom:'30px',
            color:'#888383'
        },grid:{
            display:'grid',
            gridTemplateColumns:'repeat(auto-fill,minmax(180px,1fr))',
            gap:'20px'
        }
    
};