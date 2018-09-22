import React from "react";
import "./CharacterCard.css";


const CharacterCard = (props) => {
    return (
  
    <div className="card">
        <div className="img-container">
            <img className="image" alt={props.name} alt="pic" src={props.image}/>
        </div>
    </div>   

    )
}

export default CharacterCard;