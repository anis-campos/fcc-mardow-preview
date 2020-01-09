/** @jsx jsx */
import {jsx} from '@emotion/core'
import css from '@emotion/css/macro'

import {VERTICAL, HORIZONTAL, BOTH, EDITOR, PREVIEW} from "./constants";
import PropTypes from "prop-types";

export function Pane(props) {
    const {component: PaneContent, direction, num, size, state, title} = props;

    const map = {};
    map[VERTICAL] = ['left', 'right'];
    map[HORIZONTAL] = ['top', 'bottom'];


    const style = size ? {
        width: direction === VERTICAL ? `${size.w}px` : null,
        height: direction === HORIZONTAL ? `${size.h}px` : null,
    } : {};

    const Title = ({val}) => (
        <div css={css` background: aqua; color: black;border-bottom: white 2px solid; padding: 5px; font-size: 0.6em`}>{val}</div>
    )

    return (
        <div style={style}
             className={`pane pane-${direction === VERTICAL ? 'col' : 'row'} pane-${map[direction][num - 1]} ${size && state === BOTH ? 'drag' : ''}`}>
            {title && <Title val={title}/>}
            <div className="pane-content">{PaneContent}</div>

        </div>);
}

Pane.propTypes = {
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    direction: PropTypes.number.isRequired,
    num: PropTypes.number.isRequired,
    size: PropTypes.object,
    state: PropTypes.oneOf([BOTH, EDITOR, PREVIEW]).isRequired,
    title: PropTypes.string
};
