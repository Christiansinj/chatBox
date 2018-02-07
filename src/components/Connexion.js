// Components Formulaire

import React from 'react';

class Connexion extends React.Component {

    goToChat = event => {
        console.log('YO');
    };

    render() {
        return(
            <div className="connexionBox" onSubmit={(e) => this.goToChat(e)}>
                 <form className="connexion">
                    <input type="text" placeholder="Pseudo" required/>
                    <button type="submit">Go</button>
                </form>
            </div>
        )
    }
}

export default Connexion;
