import React from "react";
import "./Card.css";
import Time from "./Time";
import { Card as AntCard, Icon, Input } from "antd";
const { TextArea } = Input;
class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            value: this.getFromLS('cardValue' + props.gridLayout.i)
        };
    }
    getFromLS(key) {
        let ls = {};
        if (global.localStorage) {
            try {
                ls = JSON.parse(global.localStorage.getItem("rgl-8")) || {};
            } catch (e) {
                /*Ignore*/
            }
        }
        return ls[key];
    }

    saveToLS(key, value) {
        let ls = {};
        if (global.localStorage) {
            ls = JSON.parse(global.localStorage.getItem("rgl-8")) || {};
            ls[key] = value;

            global.localStorage.setItem(
                "rgl-8",
                JSON.stringify(ls)
            );
        }
    }

    handleChange = event => {
        this.setState({ value: event.target.value });
        this.saveToLS('cardValue' + this.props.gridLayout.i, event.target.value)
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
