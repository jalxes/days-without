import React from "react";
import * as Moment from "moment";
import _ from "lodash";
import logo from "./logo.svg";
import "./App.css";
import "../node_modules/react-grid-layout/css/styles.css";
import "../node_modules/react-resizable/css/styles.css";
import { Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveGridLayout = WidthProvider(Responsive);
const startDate = new Moment();

class Time extends React.Component {
    static defaultProps = {
        date: startDate,
        text: "without AngularJs"
    }
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
                without {this.props.text}
            </p>
        );
    }
}

class Grid extends React.Component {
    static defaultProps = {
        className: "layout",
        rowHeight: 30,
        breakpoints:{ xxlg: 1670, lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 },
        cols:{ xxlg: 5, lg: 4, md: 3, sm: 2, xs: 2, xxs: 1 },
        onLayoutChange: function() {},
    };
    constructor(props) {
        super(props);
        this.state = {
            date: new Moment().diff(props.date),
            currentBreakpoint: "lg",
            compactType: "vertical",
            mounted: false,
            layouts: { lg: this.generateLayout() }
        };
    }

    generateLayout() {
        return _.map(_.range(0, 25), function(item, i) {
          return {
            x: _.random(0, 4),
            y: 1,
            w: 1,
            h: 3,
            i: i.toString(),
          };
        });
    }

    generateDOM() {
        return _.map(this.state.layouts.lg, function(l, i) {
            return (
                <div key={i} className="{l.static ? 'static' : ''} item">
                    <span className="text">{i}</span>
                    <Time date={startDate} />
                </div>
            );
        });
    }

    render() {
        return (
            <ResponsiveGridLayout
                {...this.props}    
                className="layout"
                layouts={this.state.layouts}
                
                margin={[25, 25]}
                preventCollision={true}
            >
                {this.generateDOM()}
            </ResponsiveGridLayout>
        );
    }
}
class App extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <Grid />
            </div>
        );
    }
}

export default App;
