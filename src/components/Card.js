import React from "react";
import _ from "lodash";
import "./Grid.css";
import Time from "./Time";

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "without that stuff"
        };
    }

    render() {
        const i = this.props.id;
        return (
            <div
                key={i}
                data-grid={{
                    x: _.random(0, 4),
                    y: 1,
                    w: 1,
                    h: 3,
                    i: i.toString()
                }}
                className="{l.static ? 'static' : ''} item"
            >
                <span className="text">{i}</span>
                <Time />
            </div>
        );
    }
}

export default Card;
