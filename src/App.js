import React, { Component } from "react";
import * as Moment from "moment";
import logo from "./logo.svg";
import "./App.css";

const startDate = new Moment();

class Time extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Moment().diff(props.date) };
    }
    componentDidMount() {
        this.timeId = setInterval(() => this.clock(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timeId);
    }

    clock() {
        this.setState((prevState, props) => ({
            date: new Moment().diff(props.date)
            // date: new Moment().diff(props.date.add(40, "seconds"))
        }));
    }
    render() {
        return (
            <p>
                {" "}
                we are
                <b> {Moment.duration(this.state.date).humanize()} </b>
                without AngularJs
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
            </div>
        );
    }
}

export default App;
