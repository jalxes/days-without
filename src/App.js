import React from "react";
import "./App.css";
import Grid from "./components/Grid";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Days Without</h1>
                </header>
                <Grid />
            </div>
        );
    }
}

export default App;
