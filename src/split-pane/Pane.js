import React from "react";
import {VERTICAL, HORIZONTAL, BOTH, EDITOR, PREVIEW} from "./constants";
import PropTypes from "prop-types";

export function Pane(props) {
    const {component: PaneContent, direction, num, size,state} = props;

    const map = {};
    map[VERTICAL] = ['left', 'right'];
    map[HORIZONTAL] = ['top', 'bottom'];


    const style = size ? {
        width: direction===VERTICAL?`${size.w}px`:null,
        height: direction===HORIZONTAL?`${size.h}px`:null,
    } : {};

    return (
        <div style={ style }
                 className={`pane pane-${direction === VERTICAL ? 'col' : 'row'} pane-${map[direction][num - 1]} ${size&&state===BOTH?'drag':''}`}>
        <PaneContent className="pane-content"/>
    </div>);
}

Pane.propTypes = {
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    direction: PropTypes.number.isRequired,
    num: PropTypes.number.isRequired,
    size: PropTypes.object,
    state: PropTypes.oneOf([BOTH,EDITOR,PREVIEW]).isRequired
};
