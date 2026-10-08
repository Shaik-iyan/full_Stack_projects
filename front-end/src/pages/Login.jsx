import { useState } from "react";
function Login(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    function handleSubmit(event){
        event.preventDefault();
        console.log("Email",email);
        console.log("Password",password);
        alert("Login form Submitted");
    }
    return(
        <div style={styles.pageContainer}>
            <div style={styles.loginCard}>
            <h1 style={styles.heading}>Login To AnimeVerse</h1>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.inputGroup}>

                    <label style={styles.label}>Email</label>
                    
                    <input type="email"
                    value={email}
                    onChange={(event)=>setEmail(event.target.value)}
                    placeholder="Enter Your email"
                    required style={styles.input}/>

                </div>

                <div style={styles.inputGroup}>
                    <label style={styles.label}>Password</label>
                     <input type="password"
                    value={password}
                    onChange={(event)=>setPassword(event.target.value)}
                    placeholder="Enter Your password"
                    required style={styles.input} />
                </div>
                <button type="submit" style={styles.button}>Sign In</button>
            </form>
        </div>
        </div>
   );
}
export default Login;
const styles={
    pageContainer:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        minHeight:'80vh',
        backgroundColor:'#121212',
        padding:'20px',
        fontFamily:'sans-serif',
    },loginCard:{
        width:'100%',
        maxWidth:'400px',
        backgroundColor:'#1e1e1e',
        padding:'40px 30px',
        borderRadius:'12px',
        boxShadow:'0 8px 24px rgba(0,0,0,0.3)',
        border: '1px solid #2a2a2a',

    },heading:{
        color:'#ffffff',
        textAlign:'center',
        fontSize:'28px',
        marginBottom:'30px',

    },form:{
        display:'flex',
        flexDirection:'column',
        gap:'20px',
    },inputGroup:{
        display:'flex',
        flexDirection:'column',
        gap:'8px',

    },label:{
        color:'#b3b3b3',
        fontSize:'14px',
        fontWeight:'500',

    },input:{
        padding:'12px 16px',
        backgroundColor:'#2a2a2a',
        border:'1px solid #444444',
        borderRadius:'8px',
        color:'#ffffff',
        outline:'none',
        transition:'border-color 0.2s',

    },button:{
        marginTop:'10px',
        padding:'14px',
        backgroundColor:'#ffffff',
        color:'#121212',
        border:'none',
        borderRadius:'8px',
        fontSize:'16px',
        fontWeight:'600',
        cursor:'pointer',
        transition:'background-color 0.2s',

    }
};