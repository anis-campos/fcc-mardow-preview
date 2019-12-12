
import React,{useEffect, useRef, useState} from "react";
import PropTypes from "prop-types";
import {Pane} from "./Pane";
import {Separator} from "./Separator";
import {HORIZONTAL, VERTICAL} from "./constants";
import {Header} from "./Header";

export function Wrapper({panes, ...props}) {


    const [pos, setPos] = useState(null);
    const [direction, setDirection] = useState(props.direction);
    const [firstBounds, setFirstBounds] = useState(null);

    const ref = useRef(null);


    const onMouseDown = (e) => {
        setPos({x: e.clientX, y: e.clientY})
    };

    const onMouseUp = (e) => {
        setPos(null)
    };

    const onMouseMove = (e) => {
        if (!pos) return;

        const minW = document.documentElement.clientWidth * 20 / 100;
        const maxW = document.documentElement.clientWidth * 80 / 100;
        const minH = document.documentElement.clientHeight * 20 / 100;
        const maxH = document.documentElement.clientHeight * 70 / 100;


        // const newSizeFirst = direction === VERTICAL ?
        //     {w: firstBounds.w + e.clientX - pos.x, h: firstBounds.h}
        //     : {w: firstBounds.w, h: firstBounds.h + e.clientY - pos.y};

        const newSizeFirst = direction === VERTICAL ?
            {w:  e.clientX, h: firstBounds.h}
            : {w: firstBounds.w, h:  e.clientY };

        newSizeFirst.w = newSizeFirst.w < minW ? minW : newSizeFirst.w > maxW ? maxW : newSizeFirst.w;
        newSizeFirst.h = newSizeFirst.h < minH ? minH : newSizeFirst.h > maxH ? maxH : newSizeFirst.h;

        setPos({x: e.clientX, y: e.clientY});

        setFirstBounds(newSizeFirst)

    };

    const [pane1, pane2] = panes;
    const toggleDirection = () => {
        setDirection(direction === VERTICAL ? HORIZONTAL : VERTICAL);
        setFirstBounds(null)
    };

    useEffect(() => {
        if (direction === VERTICAL) {
            ref.current.style.flexDirection = "row"
        } else {
            ref.current.style.flexDirection = "column"

        }


        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);


        return () => {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseup", onMouseUp);
        }

    });


    return (
        <div {...props} className={`split-pane-wrapper ${pos ? 'disable-selection' : ''}`}>
            <Header toggleDirection={toggleDirection}/>
            <div className={"split-pane"} ref={ref}>
                <Pane component={pane1} direction={direction} num={1} firstBounds={firstBounds}
                      setFirstBounds={setFirstBounds}/>
                <Separator onMouseDown={onMouseDown} direction={direction} firstBounds={firstBounds}/>
                <Pane component={pane2} direction={direction} num={2}/>
            </div>
        </div>
    );


}


Wrapper.propTypes = {
    direction: PropTypes.oneOf([VERTICAL, HORIZONTAL]).isRequired,
    panes: PropTypes.array
};

Wrapper.defaultProps = {
    direction: VERTICAL,
    panes: []
};


