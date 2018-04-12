import React, { Component } from "react";
import * as Moment from "moment";
import GridLayout from 'react-grid-layout';
import logo from "./logo.svg";
import "./App.css";
import "../node_modules/react-grid-layout/css/styles.css";
import "../node_modules/react-resizable/css/styles.css";

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

class Grid extends Component {
    render() {
      var layout = [
        {i: 'grid1', x: 0, y: 0, w: 1, h: 1},
        {i: 'grid2', x: 0, y: 0, w: 1, h: 1}
      ];
      return (
        <GridLayout 
            className="grid" 
            layout={layout} 
            cols={12}
            margin={[10,10]}
            preventCollision={true}
        >
          <div key="item1" 
            className="item" 
            >
              <Time date={startDate} />
          </div>
          <div key="item2"
            className="item" 
            >
              <Time date={startDate} />
          </div>
        </GridLayout>
      )
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
                <Grid/>
            </div>
        );
    }
}

export default App;
