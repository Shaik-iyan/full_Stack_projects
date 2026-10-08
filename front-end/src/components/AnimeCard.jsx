import {Link} from "react-router-dom";
function AnimeCard({anime}){
    return(
        
            <Link to={`/anime/${anime.id}`} style={cardStyles.cardContainer}>
                <div style={cardStyles.imageWrapper}>
                    <img src={anime.image}
                    alt={anime.title}
                    style={cardStyles.image} />
                    </div>
                    <div style={cardStyles.textBlock}>
                        <h3 style={cardStyles.animeTitle}>{anime.title}</h3>
                        <p style={cardStyles.animeDescription}>{anime.description}</p>
                    </div>
                
            </Link>
    );
}
export default AnimeCard;
const cardStyles={
    cardContainer:{
        display:'flex',
        flexDirection:'column',
        width:'100%',
        fontFamily:'sans-serif',
        textDecoration:'none',
        color:'inherit',
    },
    imageWrapper:{
        width:'100%',
        aspectRatio:'3/4',
        borderRadius:'6px',
        overflow:'hidden',
        backgroundColor:'#eaeaea',
        marginBottom:'8px'
    },
    image:{
        width:'100%',
        height:'100%',
        objectFit:'cover',
        display:'black',
    },
    textBlock:{
        padding:'0 4px'
    },animeTitle:{
        fontSize:'0.95rem',
        fontWeight:'bold',
        margin:'0 0 4px 0',
        color:'#cbc7c7',
        textTransform:'capitalize'
    },
    animeDescription:{
        fontSize:'0.8rem',
        color:'#666',
        margin:0,
        lineHeight:'1.3'
    }
};