/** @jsx jsx */
import {jsx} from '@emotion/core'
import css from "@emotion/css/macro";
import {useEffect, useState} from "react";
import {SplitPane} from "./split-pane";
import marked from 'marked';
import prismjs from 'prismjs';
import 'prismjs/themes/prism-solarizedlight.css'
import defaultMd from './test.md'

const renderer = new marked.Renderer();

renderer.code = function (code, lang) {
    code = this.options.highlight(code, lang);
    if (!lang) {
        return `<pre><code>${code}</code></pre>`;
    }

    const langClass = "language-" + lang;
    return `<pre class="${langClass}"><code class="${langClass}">${code}</code></pre>`;
};

marked.setOptions({
    renderer,
    highlight: function (code, lang) {
        try {
            const encoded = prismjs.highlight(code, prismjs.languages[lang], lang);
            return encoded
        } catch {
            return code;
        }
    }
});

const Viewer = function (props) {
    return (
        <div id={'preview'} css={css`width: 100%; flex: 1; overflow: auto;align-items: flex-start;`}
             dangerouslySetInnerHTML={{'__html': marked(props.md, {breaks: true})}}/>
    );
};

const Editor = function (props) {
    return (
        <textarea id={'editor'} value={props.md} onChange={props.onEditorChanged}
                  css={css`width: 100%; flex: 1; resize:none`}/>
    );
};

export function Markdown() {

    const [md, setMd] = useState('   ');

    useEffect(() => {
        if (md === '   ')
            fetch(defaultMd).then(response => {
                return response.text()
            }).then(text => {
                setMd(text)
            })
    });

    function onEditorChanged(e) {
        setMd(e.target.value);
    }

    return (
        <SplitPane header={{title: "Markdown"}}>
            <Editor title={"Markdown Editor"} md={md} onEditorChanged={onEditorChanged}/>
            <Viewer title={"Preview"} md={md}/>
        </SplitPane>
    )


}
