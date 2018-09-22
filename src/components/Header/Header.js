
import React from "react";

const styles = {
    heading: {
        height:300,
        textAlign:"center",
        paddingTop:100
    }
}

const Header = () => (
    <div className="heading" style={styles.heading}>
        <h1>CLICKY GAME</h1>
        <h3>Don't click on the same image twice!</h3>
    </div>
)


export default Header;