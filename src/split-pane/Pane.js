import React, {useState, createRef} from "react";
import {VERTICAL, HORIZONTAL} from "./constants";
import PropTypes from "prop-types";

export function Pane(props) {
    const {component: P, direction, num, size} = props;

    const map = {};
    map[VERTICAL] = ['left', 'right'];
    map[HORIZONTAL] = ['top', 'bottom'];


    const style = size ? {
        width: direction===VERTICAL?`${size.w}px`:null,
        height: direction===HORIZONTAL?`${size.h}px`:null,
    } : {};

    return (
        <div style={ style }
                 className={`pane pane-${direction === VERTICAL ? 'col' : 'row'} pane-${map[direction][num - 1]} ${size?'drag':''}`}>
        <P className="pane-content"/>
    </div>);
}

Pane.propTypes = {
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    direction: PropTypes.number.isRequired,
    num: PropTypes.number.isRequired,
    size: PropTypes.object
};
