/** @jsx jsx */
import {jsx} from '@emotion/core'

import styled from "@emotion/styled/macro";
import {VERTICAL} from "./constants";
import PropTypes from "prop-types";

const VerticalBar = styled.div`
                background-color: white;
                width:   2px;
                height:  100% ;
                cursor:col-resize ;
             
`;


const HorizontalBar = styled.div`
                background-color: white;
                height:   2px;
                width:  100% ;
                cursor:col-resize ;
             
`;

const VerticalWrapper = styled.div`
position: absolute;
display: flex;
                flex-direction: column;
                align-items: center;
                top: 0;
                bottom: 0;
                left: ${props=>props.val}px;
                width:   10px;
                height:  100% ;
                cursor:col-resize ;
             
`;

const HorizontalWrapper = styled.div`
                flex-direction: row;
                align-items: center;
                top: 0;
                left: 0;
                right: 0;
                height:   10px;
                width:  100% ;
                cursor:row-resize ;
             
`;

export function Separator(props) {
    const {onMouseDown, direction} = props;

    const Bar = direction === VERTICAL ? VerticalBar : HorizontalBar;
    const Wrapper = direction === VERTICAL ? VerticalWrapper : HorizontalWrapper;

    const w = direction === VERTICAL ? (props.firstBounds || {w: document.documentElement.clientWidth / 2}).w :
        (props.firstBounds || {h: document.documentElement.clientHeight * 4 / 5}).h;

    return (
        <Wrapper className="separator" val={w} onMouseDown={onMouseDown}> <Bar/></Wrapper>
    )
}

Separator.propTypes = {
    onMouseDown: PropTypes.func.isRequired,
    direction: PropTypes.number.isRequired
};

