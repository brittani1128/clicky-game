
import React from "react";

const styles = {
    heading: {
        height:300,
        textAlign:"center",
        paddingTop:70
    },
    scores: {
        fontSize:30
    }
}

const Header = (props) => (
    <div className="heading" style={styles.heading}>
        <h1>CLICKY GAME</h1>
        <h3>Don't click on the same image twice!</h3>
        <div className="scores">
        <span className="scores">Score: {props.score} |</span><span className="scores"> Top Score: {0}</span>
        </div>
    </div>
)


export default Header;