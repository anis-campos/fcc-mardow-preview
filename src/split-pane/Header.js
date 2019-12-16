/** @jsx jsx */
import {jsx} from '@emotion/core'

import css from "@emotion/css/macro";
import PropTypes from "prop-types";

export const Header = (props) => {

    return (
        <div className={"split-pane-header"}
             css={css`
                        text-align: left; 
                        border-bottom: white solid 2px;
                        width: 100%; 
                        margin: 0;
                        height: 10vh;
                        padding: 10px 50px 0 50px;
             `}>
            <span>Markdown Editor</span>
            <button onClick={props.toggleDirection}
                    css={css``}>Switch
            </button>
        </div>
    )
};

Header.propTypes = {
    toggleDirection: PropTypes.func.isRequired
};
