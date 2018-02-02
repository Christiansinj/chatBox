import React from 'react';
import { render } from 'react-dom';
// CSS
import './index.css';

class Connection extends React.Component {
    render() {
        return(
            <div className="connexionBox">
                 <form className="connexion">
                    <input type="text" placeholder="Pseudo" required/>
                    <button type="submit">Go</button>
                </form>
            </div>
        )
    }
}

render(
    <Connection />,
    document.getElementById('root')
);