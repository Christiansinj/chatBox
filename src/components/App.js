import React from 'react';
import Formulaire from './Formulaire';

class App extends React.Component {
    render() {
        return(
            <div className="box">
                <div>
                    <div className="messages">

                    </div>
                    <Formulaire />
                </div>
            </div>
        )
    }
}

export default App;