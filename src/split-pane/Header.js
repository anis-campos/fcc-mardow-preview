/** @jsx jsx */
import {jsx} from '@emotion/core'

import css from "@emotion/css/macro";
import PropTypes from "prop-types";
import {
    FormatListNumbered as EditorIcon,
    Pageview as PreviewIcon,
    ViewArray as Ver,
    ViewCompact as Both,
    ViewDay as Hor
} from '@material-ui/icons'
import {Box, Button, ButtonGroup} from '@material-ui/core'
import {BOTH, EDITOR, PREVIEW, VERTICAL} from "./constants";

export const Header = (props) => {

    const DirectionIcon = props.direction === VERTICAL ? Ver : Hor;
    const title = props.title || "SplitPane Title";
    return (
        <Box display="flex" alignItems="flex-start" className={"split-pane-header"}
            // css={css`
            //            text-align: left;
            //            border-bottom: white solid 2px;
            //            width: 100%;
            //            margin: 0;
            //            height: 10vh;
            //            padding: 10px 50px 0 50px;
            // `}
        >

            {/*<span css={css`*/}
            {/*            flex: 5;*/}
            {/* `}></span>*/}
            <Box pl="50px">{title}</Box>

            <Box alignSelf="flex-end">
                <Box mr="10px"><Button marginRight="10px" color="primary" variant="contained"
                                       css={css`margin-right: 10px`}
                                       onClick={props.toggleDirection}><DirectionIcon/>
                </Button></Box>
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
            </Box>


        </Box>
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
