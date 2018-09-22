import React from "react";
import "./CharacterCard.css";

const styles = {
    image: {
        height:150,
        width:150
    }
}

const CharacterCard = (props) => {
    return (
  
    <div className="card">
        <div className="img-container">
            <img className="image" style={styles.image} alt={props.name} alt="pic" src={props.image} onClick={() => props.handleClick(props.id)}/>
        </div>
    </div>   

    )
}

export default CharacterCard;