(this["webpackJsonpfcc-markdown"]=this["webpackJsonpfcc-markdown"]||[]).push([[0],{36:function(e,t,n){e.exports=n.p+"static/media/test.313b144a.md"},39:function(e,t,n){e.exports=n(54)},44:function(e,t,n){},45:function(e,t,n){},49:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(17),o=n.n(i),r=(n(44),n(2)),l=(n(45),n(11)),s=n(7),u=n(37);var d={name:"d5npkr",styles:"background:aqua;color:black;border-bottom:white 2px solid;padding:5px;font-size:0.6em"};function m(e){var t=e.component,n=e.direction,c=e.num,a=e.size,i=e.state,o=e.title,l={0:["left","right"],1:["top","bottom"]},s=a?{width:0===n?"".concat(a.w,"px"):null,height:1===n?"".concat(a.h,"px"):null}:{};return Object(r.a)("div",{style:s,className:"pane pane-".concat(0===n?"col":"row"," pane-").concat(l[n][c-1]," ").concat(a&&2===i?"drag":"")},o&&Object(r.a)((function(e){var t=e.val;return Object(r.a)("div",{css:d},t)}),{val:o}),Object(r.a)("div",{className:"pane-content"},t))}var h={name:"1l4py54",styles:"background-color:white;width:2px;height:100%;cursor:inherit;"},p={name:"1snbd4w",styles:"background-color:white;height:2px;width:100%;cursor:inherit;"},b={name:"1tfwu3k",styles:"display:flex;flex-direction:column;align-items:center;width:10px;height:90vh;cursor:col-resize;"},f={name:"x9zwa1",styles:"display:flex;flex-direction:row;align-items:center;width:100vw;height:10px;cursor:row-resize;"};function v(e){var t=e.onMouseDown,n=e.direction,c=0===n?h:p,a=0===n?b:f;return Object(r.a)("div",{className:"separator",css:a,onMouseDown:t},Object(r.a)("div",{css:c}))}var w=n(71),j=n(72),O=n(74),g=n(75),x=n(76),E=n(55),y=n(73);var k={name:"hejdht",styles:"text-align:left;border-bottom:white solid 2px;width:100%;margin:0;height:10vh;padding:10px 50px 0 50px;"},S=function(e){var t=0===e.direction?w.a:j.a;return Object(r.a)("div",{className:"split-pane-header",css:k},Object(r.a)("span",null,"Markdown Editor"),Object(r.a)(E.a,{color:"primary",variant:"contained",onClick:e.toggleDirection},Object(r.a)(t,null)),Object(r.a)(y.a,{color:"primary"},Object(r.a)(E.a,{variant:2===e.editorState?"contained":null,onClick:function(){return e.setEditorState(2)},css:Object(s.a)("")}," ",Object(r.a)(O.a,null)),Object(r.a)(E.a,{variant:3===e.editorState?"contained":null,onClick:function(){return e.setEditorState(3)},css:Object(s.a)("")}," ",Object(r.a)(g.a,null)),Object(r.a)(E.a,{variant:4===e.editorState?"contained":null,onClick:function(){return e.setEditorState(4)},css:Object(s.a)("")}," ",Object(r.a)(x.a,null))))};S.defaultProps={editorState:2};var z={name:"1otepfl",styles:"width:100%;height:90vh;display:flex;"};function N(e){var t=e.titles,n=Object(u.a)(e,["titles"]),a=Object(c.useState)(null),i=Object(l.a)(a,2),o=i[0],s=i[1],d=Object(c.useState)(n.direction),h=Object(l.a)(d,2),p=h[0],b=h[1],f=Object(c.useState)(2),w=Object(l.a)(f,2),j=w[0],O=w[1],g=Object(c.useState)(null),x=Object(l.a)(g,2),E=x[0],y=x[1],k=Object(c.useRef)(null),N=function(e){s(null)},C=Object(l.a)(n.children,2),D=C[0],L=C[1],H=Object(l.a)(t,2);H[0],H[1];Object(c.useEffect)((function(){var e=function(){y(null),s(null)},t=function(e){if(o){var t=10*document.documentElement.clientHeight/100,n=20*document.documentElement.clientWidth/100,c=80*document.documentElement.clientWidth/100,a=28*document.documentElement.clientHeight/100,i=62*document.documentElement.clientHeight/100,r=0===p?{w:e.clientX,h:E.h}:{w:E.w,h:e.clientY-t};r.w=r.w<n?n:r.w>c?c:r.w,r.h=r.h<a?a:r.h>i?i:r.h,s({x:e.clientX,y:e.clientY}),y(r)}};return E||y({w:document.documentElement.clientWidth/2,h:4*document.documentElement.clientHeight/10}),k.current.style.flexDirection=0===p?"row":"column",window.addEventListener("resize",e),document.addEventListener("mousemove",t),document.addEventListener("mouseup",N),function(){document.removeEventListener("mousemove",t),document.removeEventListener("mouseup",N),window.removeEventListener("resize",e)}}),[E,p,o]);var M=z;return Object(r.a)("div",Object.assign({},n,{className:"split-pane-wrapper ".concat(o?"disable-selection":"")}),Object(r.a)(S,{direction:p,toggleDirection:function(){console.log("CHANGING DIRECTION"),b(0===p?1:0),y(null),s(null)},setEditorState:function(e){O(e),y(null),s(null)},editorState:j}),Object(r.a)("div",{className:"split-pane",ref:k,css:M},4!==j&&Object(r.a)(m,{title:D.props.title,state:j,component:D,direction:p,num:1,size:E}),2===j&&Object(r.a)(v,{onMouseDown:function(e){s({x:e.clientX,y:e.clientY})},direction:p}),3!==j&&Object(r.a)(m,{title:L.props.title,state:j,component:L,direction:p,num:2})))}N.defaultProps={direction:0,panes:[],titles:[]};n(49);var C=N,D=n(23),L=n.n(D),H=n(26),M=n.n(H),I=(n(53),n(36)),W=n.n(I);var P=new L.a.Renderer;P.code=function(e,t,n){if(e=this.options.highlight(e,t),!t)return"<pre><code>".concat(e,"</code></pre>");var c="language-"+t;return'<pre class="'.concat(c,'"><code class="').concat(c,'">').concat(e,"</code></pre>")},L.a.setOptions({renderer:P,highlight:function(e,t){try{return M.a.highlight(e,M.a.languages[t],t)}catch(n){return e}}});var R={name:"13txzil",styles:"width:100%;flex:1;overflow:auto;align-items:flex-start;"},X=function(e){return Object(r.a)("div",{id:"preview",css:R,dangerouslySetInnerHTML:{__html:L()(e.md,{breaks:!0})}})},Y={name:"wajf49",styles:"width:100%;flex:1;resize:none"},A=function(e){return Object(r.a)("textarea",{id:"editor",value:e.md,onChange:e.onEditorChanged,css:Y})};function B(){var e=Object(c.useState)("   "),t=Object(l.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){"   "===n&&fetch(W.a).then((function(e){return e.text()})).then((function(e){a(e)}))})),Object(r.a)(C,null,Object(r.a)(A,{title:"Markdown Editor",md:n,onEditorChanged:function(e){a(e.target.value)}}),Object(r.a)(X,{title:"Preview",md:n}))}var G=function(){return Object(r.a)("div",{className:"App"},Object(r.a)(B,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[39,1,2]]]);
//# sourceMappingURL=main.07fe72b6.chunk.js.map