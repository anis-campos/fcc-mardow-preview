/** @jsx jsx */
import {jsx} from '@emotion/core'

import css from "@emotion/css/macro";
import {VERTICAL} from "./constants";
import PropTypes from "prop-types";

const VerticalBar = css`
                background-color: white;
                width:   2px;
                height:  100% ;
                cursor:inherit ;
`;


const HorizontalBar = css`
                background-color: white;
                height:   2px;
                width:  100% ;
                cursor:inherit ;
             
`;

const VerticalWrapper = css`
                display: flex;
                flex-direction: column;
                align-items: center;
                width:   10px;
                height:  90vh ;
                cursor:col-resize ;
             
`;

const HorizontalWrapper = css`
                display: flex;
                flex-direction: row;
                align-items: center;
                width:   100vw;
                height:  10px;
                
                cursor:row-resize ;
             
`;

export function Separator(props) {
    const {onMouseDown, direction} = props;

    const bar = direction === VERTICAL ? VerticalBar : HorizontalBar,
        wrapper = direction === VERTICAL ? VerticalWrapper : HorizontalWrapper;


    return (
        <div className="separator" css={wrapper} onMouseDown={onMouseDown}>
            <div css={bar}/>
        </div>
    )
}

Separator.propTypes = {
    onMouseDown: PropTypes.func.isRequired,
    direction: PropTypes.number.isRequired
};

