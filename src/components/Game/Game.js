import React, {Component} from "react";
// import "./CharacterPage.css";
import CharacterCard from "../CharacterCard/CharacterCard";
import characters from "../../characters.json"

const styles = {
    container: {
        width:800
    }
}

class Game extends Component {
    state = {
        characters
    }

    addCharacterId(newId) {
        console.log("this works");
        this.setState({
            charIdArray: [...this.state.charIdArray, newId ]
        })
    }
    render(){
        return( 
        <div className="container" style={styles.container}>
            {this.state.characters.map(character => (
                <CharacterCard 
                    id={character.id}
                    name={character.name}
                    image={character.image}
                    />
            ))}
            
        </div>
     );
    }
}


export default Game;