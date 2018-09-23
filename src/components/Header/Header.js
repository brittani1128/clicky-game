
import React from "react";
import "./Header.css";


const styles = {
    heading: {
        height:250,
        textAlign:"center",
        paddingTop:70,
        background:"black",
        marginBottom:40
    },
    scores: {
        fontSize:30
    }
}

const Header = (props) => (
    <div className="heading" style={styles.heading}>
        <h1>90's Cartoon Shuffle!</h1>
        <h3>{props.message}</h3>
        <div className="scores">
        <span>Score: {props.score} |</span><span> Top Score: {props.topScore}</span>
        </div>
    </div>
)


export default Header;