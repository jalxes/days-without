import React from "react";
import _ from "lodash";
import "./Card.css";
import Time from "./Time";
import { Card as AntCard, Icon, Input } from "antd";
const { TextArea } = Input;
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
        const i = <a onClick={this.openItem}>{this.props.gridLayout.i}</a>;
        const isEditing = this.state.isEditing;
        return (
            <AntCard title={i} extra={<Icon type="close" />}>
                <p>
                    <Time />
                    <TextArea
                        defaultValue={this.state.value}
                        onChange={this.handleChange}
                        onFocus={this.changeTextInput}
                        onBlur={this.changeTextInput}
                        readOnly={!isEditing}
                    />
                </p>
            </AntCard>
        );
    }
}

export default Card;
