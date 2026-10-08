import {Link} from "react-router-dom";
function Header(){
    return(
        <header className="site-header" style={{paddingtop:'30px'}}>
            <Link style={{textDecoration:'none'}} to="/" className="nav-logo">AnimeVerse</Link>
            <nav  className="nav-links" style={styles}>
                <Link style={styles} to="/">Home</Link>
                <Link style={styles}to="/genres">Genres</Link>
                <Link style={styles}to="/login">Login</Link>
                <Link style={styles} to="/admin">Admin</Link>
            </nav>
        </header>
    );
}
export default Header;
const styles={
    paddingTop:'20px',
    textDecoration:'none',
   alignItems: 'center',
    textAlign: 'center',
    fontStyle: 'italic',
    display:'flex',
    paddingLeft:"100px",
    gap:'20px',
};