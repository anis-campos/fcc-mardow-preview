import React, {useEffect, useState, createRef} from "react";
import {VERTICAL, HORIZONTAL} from "./constants";
import PropTypes from "prop-types";

export function Pane(props) {
    const {component: P, direction, num, firstBounds, setFirstBounds} = props;

    let ref = createRef();

    const [localDirection, setLocalDirection] = useState(null);



    if (localDirection && localDirection !== direction) {
        setLocalDirection(direction);

    }

    console.log(firstBounds);



    const map = {};
    map[VERTICAL] = ['left', 'right'];
    map[HORIZONTAL] = ['top', 'bottom'];


    const style = firstBounds ? {
        width: direction===VERTICAL?`${firstBounds.w}px`:null,
        height: direction===HORIZONTAL?`${firstBounds.h}px`:null,
    } : {};

    return (<div ref={ref}
                 style={
                     style
                 }
                 className={`pane pane-${direction === VERTICAL ? 'col' : 'row'} pane-${map[direction][num - 1]} ${firstBounds?'drag':''}`}>
        <P className="pane-content"/>
    </div>);
}

Pane.propTypes = {
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    direction: PropTypes.number.isRequired,
    num: PropTypes.number.isRequired,
    firstBounds: PropTypes.object,
    setFirstBounds: PropTypes.func,
};
