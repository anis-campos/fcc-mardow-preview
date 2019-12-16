import React from 'react';
import './App.css';
import {SplitPane} from "./split-pane";

const Editor = function () {
    return (
        <div>
            This is the editor
            <ul>
                {new Array(50).fill(0).map((x, i) => <li key={i}>Item n{i}</li>)}
            </ul>
        </div>
    );
};

const Viewer = function () {
    return (
        <div>
            This is the viewer
        </div>
    );
};

function App() {


    return (
        <div className="App">


            <header className="App-header">

                <SplitPane panes={[Editor, Viewer]}/>
            </header>
        </div>
    );
}

export default App;
