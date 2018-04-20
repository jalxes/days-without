import React from "react";
import _ from "lodash";
import "./Grid.css";
import "../../node_modules/react-grid-layout/css/styles.css";
import "../../node_modules/react-resizable/css/styles.css";
import { Responsive, WidthProvider } from "react-grid-layout";
import Time from "./Time";
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
            layouts: this.generateLayout()
        };
    }

    generateLayout() {
        return _.map(_.range(0, 25), function(item, i) {
            return {
                x: _.random(0, 4),
                y: 1,
                w: 1,
                h: 3,
                i: i.toString()
            };
        });
    }

    getCards(layout) {
        return layout.map((item, i) => {
            return (
                <div key={i} data-grid={item} className="{l.static ? 'static' : ''} item">
                    <span className="text">{i}</span>
                    <Time />
                </div>
            );
        });
    }

    // getCards(layout) {
    //     return layout.map((item, i) => {
    //         return <Card key={i} id={i} data-grid={item} />;
    //     });
    // }

    render() {
        const { layouts } = this.state;
        // console.log(this.getCards(layouts));
        return (
            <ResponsiveGridLayout
                {...this.props}
                className="layout"
                layouts={layouts}
                margin={[25, 25]}
                preventCollision={true}
            >
                {this.getCards(layouts)}
            </ResponsiveGridLayout>
        );
    }
}

export default Grid;
