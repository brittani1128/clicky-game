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
let topScore = 0;

class Game extends Component {
    state = {
        characters: characters,
        clicked: clickedArr,
        score: score,
        topScore:topScore,
        message: "Don't click the same image twice!"
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
        // Already guessed
        if (clickedArr.includes(id)){
            if (topScore < score){
                topScore = score;
            }
            
            score = 0;
            clickedArr = [];
            this.setState({
                topScore: topScore,
                score:score,
                message:"You already clicked that one! Game Over!"
            });
        // Guessed all characters
        } 
        // Guessed correctly
        else {
            clickedArr = [...clickedArr,id]
            score ++;
            this.setState({ 
               score:score,
               message:"Nice!"
            })
          if (clickedArr.length === characters.length){
                topScore = score;
                score= 0;
                this.setState({
                    topScore:topScore,
                    score:score,
                    message:"You Won!! Click to play again."
                });
                clickedArr = [];
          }
        
        console.log(clickedArr, score)
        this.shuffle(characters)
    
    }
}

    // Render character card images
    render(){
        return( 
        <div className="container" style={styles.container}>
            <Header message={this.state.message} score={this.state.score} topScore={this.state.topScore}/>
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