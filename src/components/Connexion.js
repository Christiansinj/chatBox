// Components Formulaire

import React from 'react';

class Connexion extends React.Component {

    goToChat = event => {
        event.preventDefault();
        console.log(this.pseudoInput.value);
    };

    render() {
        return(
            <div className="connexionBox" onSubmit={(e) => this.goToChat(e)}>
                 <form className="connexion">
                    <input type="text" placeholder="Pseudo" required ref={input => {this.pseudoInput = input}}/>
                    <button type="submit">Go</button>
                </form>
            </div>
        )
    }
}

export default Connexion;
