import React from "react";
import * as Moment from "moment";

class Time extends React.Component {
    static defaultProps = {
        date: new Moment()
    };
    constructor(props) {
        super(props);
        this.state = {
            date: new Moment().diff(props.date)
        };
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
        return <b> {Moment.duration(this.state.date).humanize()} </b>;
    }
}

export default Time;
