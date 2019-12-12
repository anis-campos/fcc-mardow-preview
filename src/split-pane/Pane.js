
import React,{useEffect, useState, createRef} from "react";
import {VERTICAL, HORIZONTAL} from "./constants";
import PropTypes from "prop-types";

export function Pane(props) {
    const {component: P, direction, num, firstBounds, setFirstBounds} = props;

    const ref = createRef();

    const [localDirection, setLocalDirection] = useState(null);


    if (localDirection && localDirection !== direction) {
        ref.current.style.flex = "1";
    }


    useEffect(() => {

        if (num === 1) {

            if (!firstBounds) {
                setFirstBounds({h: ref.current.clientHeight, w: ref.current.clientWidth});
                ref.current.style.flex = "none";
                return
            }

            if (localDirection && localDirection !== direction) {
                setLocalDirection(direction);
                setFirstBounds({h: ref.current.clientHeight, w: ref.current.clientWidth});
                ref.current.style.flex = "none";
                return
            }


            if (direction === VERTICAL) {
                ref.current.style.width = `${firstBounds.w}px`;
            } else
                ref.current.style.height = `${firstBounds.h}px`;
        }

    });

    const map = {};
    map[VERTICAL] = ['left', 'right'];
    map[HORIZONTAL] = ['top', 'bottom'];


    return (<div ref={ref}
                 className={`pane pane-${direction === VERTICAL ? 'col' : 'row'} pane-${map[direction][num - 1]}`}><P/>
    </div>);
}

Pane.propTypes = {
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    direction: PropTypes.number.isRequired,
    num: PropTypes.number.isRequired,
    firstBounds: PropTypes.object,
    setFirstBounds: PropTypes.func,
};
