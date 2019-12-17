/** @jsx jsx */
import {jsx} from '@emotion/core'

import css from "@emotion/css/macro";
import React, {useEffect, useRef, useState} from "react";
import PropTypes from "prop-types";
import {Pane} from "./Pane";
import {Separator} from "./Separator";
import {HORIZONTAL, VERTICAL} from "./constants";
import {Header} from "./Header";

export function Wrapper({panes, ...props}) {


    const [pos, setPos] = useState(null);
    const [direction, setDirection] = useState(props.direction);
    const [firstPaneSize, setFirstPaneSize] = useState(null);

    const ref = useRef(null);


    const onMouseDown = (e) => {
        setPos({x: e.clientX, y: e.clientY})
    };

    const onMouseUp = (e) => {
        setPos(null)
    };

    const onMouseMove = (e) => {
        if (!pos) return;

        const hOffset = document.documentElement.clientHeight * 10 / 100;
        const minW = document.documentElement.clientWidth * 20 / 100;
        const maxW = document.documentElement.clientWidth * 80 / 100;
        const minH = document.documentElement.clientHeight * 28 / 100 ;
        const maxH = document.documentElement.clientHeight * 62 / 100;

        const newSizeFirst = direction === VERTICAL ?
            {w: e.clientX, h: firstPaneSize.h}
            : {w: firstPaneSize.w, h: e.clientY - hOffset};

        newSizeFirst.w = newSizeFirst.w < minW ? minW : newSizeFirst.w > maxW ? maxW : newSizeFirst.w;
        newSizeFirst.h = newSizeFirst.h < minH ? minH : newSizeFirst.h > maxH ? maxH : newSizeFirst.h;

        setPos({x: e.clientX, y: e.clientY});

        setFirstPaneSize(newSizeFirst)

    };

    const [pane1, pane2] = panes;
    const toggleDirection = () => {
        console.log("CHANGING DIRECTION");
        setDirection(direction === VERTICAL ? HORIZONTAL : VERTICAL);
        setFirstPaneSize(null);
        setPos(null)
    };


    const onResize = () => {
        setFirstPaneSize(null);
        setPos(null)
    };

    useEffect(() => {


            if (!firstPaneSize)
                setFirstPaneSize({
                        w: document.documentElement.clientWidth / 2,
                        h: document.documentElement.clientHeight * 4 / 10
                    }
                );

            if (direction === VERTICAL) {
                ref.current.style.flexDirection = "row"
            } else {
                ref.current.style.flexDirection = "column"

            }

            window.addEventListener('resize', onResize);

            document.addEventListener("mousemove", onMouseMove);
            document.addEventListener("mouseup", onMouseUp);


            return () => {
                document.removeEventListener("mousemove", onMouseMove);
                document.removeEventListener("mouseup", onMouseUp);
                window.removeEventListener('resize', onResize);

            }

        }
    )
    ;

    const SplitPane = css`    
    width: 100%;
    height: 90vh;
    display: flex;`;

    return (
        <div {...props} className={`split-pane-wrapper ${pos ? 'disable-selection' : ''}`}>
            <Header toggleDirection={toggleDirection}/>
            <div className={"split-pane"} ref={ref} css={SplitPane} >
                <Pane component={pane1} direction={direction} num={1} size={firstPaneSize}  />
                <Separator onMouseDown={onMouseDown} direction={direction} />
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


