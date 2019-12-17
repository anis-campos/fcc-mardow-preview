/** @jsx jsx */
import {jsx} from '@emotion/core'

import css from "@emotion/css/macro";
import PropTypes from "prop-types";
import {
    FormatListNumbered as EditorIcon,
    Pageview as PreviewIcon,
    ViewCompact as Both,
    ViewDay as Hor,
    ViewArray as Ver
} from '@material-ui/icons'
import {Button, ButtonGroup} from '@material-ui/core'
import {BOTH, EDITOR, PREVIEW, VERTICAL} from "./constants";

export const Header = (props) => {

    const DirectionIcon = props.direction === VERTICAL ? Ver : Hor;
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


            <Button color="primary" variant="contained" onClick={props.toggleDirection}><DirectionIcon/>
            </Button>
            <ButtonGroup color="primary">
                <Button variant={props.editorState === BOTH ? "contained" : null}
                        onClick={() => props.setEditorState(BOTH)}
                        css={css``}> <Both/>
                </Button>
                <Button variant={props.editorState === EDITOR ? "contained" : null}
                        onClick={() => props.setEditorState(EDITOR)}
                        css={css``}> <EditorIcon/>
                </Button>
                <Button variant={props.editorState === PREVIEW ? "contained" : null}
                        onClick={() => props.setEditorState(PREVIEW)}
                        css={css``}> <PreviewIcon/>
                </Button>
            </ButtonGroup>


        </div>
    )
};

Header.propTypes = {
    toggleDirection: PropTypes.func.isRequired,
    direction: PropTypes.number.isRequired,
    setEditorState: PropTypes.func.isRequired,
    editorState: PropTypes.oneOf([BOTH, PREVIEW, EDITOR]).isRequired
};

Header.defaultProps = {
    editorState: BOTH
};
