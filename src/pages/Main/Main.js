import React, {Component} from "react";
import NavBar from "../../components/NavBar/NavBar";
import Game from "../../components/Game/Game";
import Header from "../../components/Header/Header";


//main home page

//nave bar
//header
//game

class Main extends Component {
  

    render(){
      return (
        <div>

          <NavBar /> 
          <Header /> 
          
          <Game />  
        </div>
      )
    }
  
  }
export default Main;


