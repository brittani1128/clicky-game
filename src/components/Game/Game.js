import React, {Component} from "react";
// import "./CharacterPage.css";
import CharacterCard from "./CharacterCard/CharacterCard";
import characters from "../../characters.json"

const styles = {
    container: {
        width:800
    }
}

let clickedArr = [];
let score = 0;

class Game extends Component {
    state = {
        characters: characters,
        clicked: clickedArr,
        score: score
    }

    
    //Handle click event
    handleClick = id => {
        if (clickedArr.includes(id)){
            console.log("Already clicked! Game Over!");
            score = 0;
            clickedArr = [];
        } else {
            clickedArr = [...clickedArr,id]
            score ++;
            
            
        }
        console.log(clickedArr, score)
        this.setState({ score: score })
        // this.setState({
        //     clicked: [...this.state.clickedArr, id ]
        // })
    }

    render(){
        return( 
        <div className="container" style={styles.container}>
            {this.state.characters.map(character => (
                <CharacterCard 
                    id={character.id}
                    key={character.id}
                    name={character.name}
                    image={character.image}
                    handleClick={this.handleClick}
                

                    />
            ))}
            
        </div>
     );
    }
}


export default Game;