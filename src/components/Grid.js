import React from "react";
import _ from "lodash";
import "./Card.css";
import "../../node_modules/react-grid-layout/css/styles.css";
import "../../node_modules/react-resizable/css/styles.css";
import { Responsive, WidthProvider } from "react-grid-layout";
import Card from "./Card";

const ResponsiveGridLayout = WidthProvider(Responsive);

class Grid extends React.Component {
    static defaultProps = {
        className: "layout",
        rowHeight: 30,
        breakpoints: { xxlg: 1670, lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 },
        cols: { xxlg: 5, lg: 4, md: 3, sm: 2, xs: 2, xxs: 1 },
        onLayoutChange: function() {}
    };
    constructor(props) {
        super(props);
        this.state = {
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
                h: 4,
                i: i.toString()
            };
        });
    }

    render() {
        const { layouts } = this.state;
        // console.log(this.getCards(layouts));
        return (
            <ResponsiveGridLayout
                {...this.props}
                className="layout"
                layouts={layouts}
                margin={[25, 25]}
                draggableHandle=".ant-card-head"
                draggableCancel=".ant-card-body"
            >
                {layouts.lg.map((item, i) => {
                    return (
                        <div key={i}>
                            <Card gridLayout={item} />
                        </div>
                    );
                })}
            </ResponsiveGridLayout>
        );
    }
}

export default Grid;
