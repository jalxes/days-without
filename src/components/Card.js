import React from "react";
import _ from "lodash";
import "./Grid.css";
import Time from "./Time";
import { Card as AntCard } from "antd";

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "without that stuff"
        };
    }

    render() {
        const i = this.props.gridLayout.i;
        return (
            <AntCard title={i}>
                <p>
                    <Time />
                    {this.state.value}
                </p>
            </AntCard>
        );
    }
}

export default Card;
