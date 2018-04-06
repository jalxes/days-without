import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const startDate = new Date();

class Time extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    componentDidMount() {
        this.timeId = setInterval(() => this.clock(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timeId);
    }

    clock() {
        this.setState((prevState, props) => ({
            date: new Date()
        }));
    }
    render() {
        return (
            <p>
                {" "}
                We start at
                <b> {this.props.date.toLocaleString()} </b>
                and now are
                <b> {this.state.date.toLocaleString()} </b>
            </p>
        );
    }
}

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <Time date={startDate} />
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
