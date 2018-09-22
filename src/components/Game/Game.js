import React, {Component} from "react";
// import "./CharacterPage.css";
import CharacterCard from "./CharacterCard/CharacterCard";
import characters from "../../characters.json"
import Header from "../Header/Header"

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

    // Shuffle characters array
    shuffle = characters => {
        for (let i=characters.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = characters[i];
            characters[i] = characters[j];
            characters[j] = temp;
          }

      return characters;
    }

    componentDidMount() {
        this.setState({ characters: this.shuffle(this.state.characters) });
    };
    
    // Handle click event
    handleClick = id => {
        if (clickedArr.includes(id)){
            console.log("Already clicked! Game Over!");
            score = 0;
            clickedArr = [];
            this.setState({
                
                score:score
            })
        } else {
            clickedArr = [...clickedArr,id]
            score ++;
            this.setState({ 
               
            })
            
        }
        console.log(clickedArr, score)
        this.shuffle(characters)
    
    }

    // Render character card images
    render(){
        return( 
        <div className="container" style={styles.container}>
            <Header />
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