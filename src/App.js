/** @jsx jsx */
import {jsx} from '@emotion/core'
import './App.css';
import {SplitPane} from "./split-pane";
import css from '@emotion/css/macro'

const Editor = function () {
    return (
            <textarea css={css`width: 100%; flex: 1; resize:none`}/>
    );
};

const Viewer = function () {
    return (
        <div>
        </div>
    );
};

function App() {


    return (
        <div className="App">
            <SplitPane panes={[Editor, Viewer]} titles={["Markdown Editor","Preview"]}/>
        </div>
    );
}

export default App;
