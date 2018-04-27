import React from "react";
import _ from "lodash";
import "./Card.css";
import "../assets/pencil.svg";
import Time from "./Time";
import { Card as AntCard, Icon, Input } from "antd";
class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            value: "without that stuff"
        };
    }

    handleChange = event => {
        this.setState({ value: event.target.value });
    };

    changeTextInput = () => {
        this.setState(prevState => ({
            isEditing: !prevState.isEditing
        }));
    };

    render() {
        const i = this.props.gridLayout.i;
        const text = this.state.isEditing ? (
            <Input defaultValue={this.state.value} onChange={this.handleChange} />
        ) : (
            this.state.value
        );
        const icon = this.state.isEditing ? <Icon type="check" /> : <Icon type="edit" />;
        return (
            <AntCard title={i} extra={<Icon type="close" />}>
                <a onClick={this.changeTextInput}>{icon}</a>
                <p>
                    <Time />
                    {text}
                </p>
            </AntCard>
        );
    }
}

export default Card;
