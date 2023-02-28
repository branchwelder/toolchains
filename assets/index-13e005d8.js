(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=e(n);fetch(n.href,s)}})();const at="modulepreload",ct=function(o){return"/toolchains/"+o},Z={},k=function(t,e,i){if(!e||e.length===0)return t();const n=document.getElementsByTagName("link");return Promise.all(e.map(s=>{if(s=ct(s),s in Z)return;Z[s]=!0;const r=s.endsWith(".css"),c=r?'[rel="stylesheet"]':"";if(!!i)for(let p=n.length-1;p>=0;p--){const l=n[p];if(l.href===s&&(!r||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${c}`))return;const d=document.createElement("link");if(d.rel=r?"stylesheet":at,r||(d.as="script",d.crossOrigin=""),d.href=s,document.head.appendChild(d),r)return new Promise((p,l)=>{d.addEventListener("load",p),d.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())},dt=(o,t)=>{const e=o[t];return e?typeof e=="function"?e():Promise.resolve(e):new Promise((i,n)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+t)))})};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var L;const C=window,x=C.trustedTypes,V=x?x.createPolicy("lit-html",{createHTML:o=>o}):void 0,y=`lit$${(Math.random()+"").slice(9)}$`,J="?"+y,ut=`<${J}>`,b=document,T=(o="")=>b.createComment(o),E=o=>o===null||typeof o!="object"&&typeof o!="function",K=Array.isArray,pt=o=>K(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,U=/-->/g,q=/>/g,_=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Y=/'/g,W=/"/g,G=/^(?:script|style|textarea|title)$/i,Q=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),$=Q(1),ht=Q(2),P=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),X=new WeakMap,A=b.createTreeWalker(b,129,null,!1),ft=(o,t)=>{const e=o.length-1,i=[];let n,s=t===2?"<svg>":"",r=I;for(let a=0;a<e;a++){const d=o[a];let p,l,u=-1,h=0;for(;h<d.length&&(r.lastIndex=h,l=r.exec(d),l!==null);)h=r.lastIndex,r===I?l[1]==="!--"?r=U:l[1]!==void 0?r=q:l[2]!==void 0?(G.test(l[2])&&(n=RegExp("</"+l[2],"g")),r=_):l[3]!==void 0&&(r=_):r===_?l[0]===">"?(r=n??I,u=-1):l[1]===void 0?u=-2:(u=r.lastIndex-l[2].length,p=l[1],r=l[3]===void 0?_:l[3]==='"'?W:Y):r===W||r===Y?r=_:r===U||r===q?r=I:(r=_,n=void 0);const v=r===_&&o[a+1].startsWith("/>")?" ":"";s+=r===I?d+ut:u>=0?(i.push(p),d.slice(0,u)+"$lit$"+d.slice(u)+y+v):d+y+(u===-2?(i.push(void 0),a):v)}const c=s+(o[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return[V!==void 0?V.createHTML(c):c,i]};class S{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,r=0;const c=t.length-1,a=this.parts,[d,p]=ft(t,e);if(this.el=S.createElement(d,i),A.currentNode=this.el.content,e===2){const l=this.el.content,u=l.firstChild;u.remove(),l.append(...u.childNodes)}for(;(n=A.nextNode())!==null&&a.length<c;){if(n.nodeType===1){if(n.hasAttributes()){const l=[];for(const u of n.getAttributeNames())if(u.endsWith("$lit$")||u.startsWith(y)){const h=p[r++];if(l.push(u),h!==void 0){const v=n.getAttribute(h.toLowerCase()+"$lit$").split(y),g=/([.?@])?(.*)/.exec(h);a.push({type:1,index:s,name:g[2],strings:v,ctor:g[1]==="."?$t:g[1]==="?"?gt:g[1]==="@"?yt:O})}else a.push({type:6,index:s})}for(const u of l)n.removeAttribute(u)}if(G.test(n.tagName)){const l=n.textContent.split(y),u=l.length-1;if(u>0){n.textContent=x?x.emptyScript:"";for(let h=0;h<u;h++)n.append(l[h],T()),A.nextNode(),a.push({type:2,index:++s});n.append(l[u],T())}}}else if(n.nodeType===8)if(n.data===J)a.push({type:2,index:s});else{let l=-1;for(;(l=n.data.indexOf(y,l+1))!==-1;)a.push({type:7,index:s}),l+=y.length-1}s++}}static createElement(t,e){const i=b.createElement("template");return i.innerHTML=t,i}}function w(o,t,e=o,i){var n,s,r,c;if(t===P)return t;let a=i!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[i]:e._$Cl;const d=E(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==d&&((s=a==null?void 0:a._$AO)===null||s===void 0||s.call(a,!1),d===void 0?a=void 0:(a=new d(o),a._$AT(o,e,i)),i!==void 0?((r=(c=e)._$Co)!==null&&r!==void 0?r:c._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=w(o,a._$AS(o,t.values),a,i)),t}class mt{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:i},parts:n}=this._$AD,s=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:b).importNode(i,!0);A.currentNode=s;let r=A.nextNode(),c=0,a=0,d=n[0];for(;d!==void 0;){if(c===d.index){let p;d.type===2?p=new H(r,r.nextSibling,this,t):d.type===1?p=new d.ctor(r,d.name,d.strings,this,t):d.type===6&&(p=new _t(r,this,t)),this.u.push(p),d=n[++a]}c!==(d==null?void 0:d.index)&&(r=A.nextNode(),c++)}return s}p(t){let e=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class H{constructor(t,e,i,n){var s;this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cm=(s=n==null?void 0:n.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=w(this,t,e),E(t)?t===f||t==null||t===""?(this._$AH!==f&&this._$AR(),this._$AH=f):t!==this._$AH&&t!==P&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):pt(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==f&&E(this._$AH)?this._$AA.nextSibling.data=t:this.T(b.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=S.createElement(n.h,this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.p(i);else{const r=new mt(s,this),c=r.v(this.options);r.p(i),this.T(c),this._$AH=r}}_$AC(t){let e=X.get(t.strings);return e===void 0&&X.set(t.strings,e=new S(t)),e}k(t){K(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new H(this.O(T()),this.O(T()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cm=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class O{constructor(t,e,i,n,s){this.type=1,this._$AH=f,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=f}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let r=!1;if(s===void 0)t=w(this,t,e,0),r=!E(t)||t!==this._$AH&&t!==P,r&&(this._$AH=t);else{const c=t;let a,d;for(t=s[0],a=0;a<s.length-1;a++)d=w(this,c[i+a],e,a),d===P&&(d=this._$AH[a]),r||(r=!E(d)||d!==this._$AH[a]),d===f?t=f:t!==f&&(t+=(d??"")+s[a+1]),this._$AH[a]=d}r&&!n&&this.j(t)}j(t){t===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class $t extends O{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===f?void 0:t}}const vt=x?x.emptyScript:"";class gt extends O{constructor(){super(...arguments),this.type=4}j(t){t&&t!==f?this.element.setAttribute(this.name,vt):this.element.removeAttribute(this.name)}}class yt extends O{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=(i=w(this,t,e,0))!==null&&i!==void 0?i:f)===P)return;const n=this._$AH,s=t===f&&n!==f||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==f&&(n===f||s);s&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class _t{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){w(this,t)}}const z=C.litHtmlPolyfillSupport;z==null||z(S,H),((L=C.litHtmlVersions)!==null&&L!==void 0?L:C.litHtmlVersions=[]).push("2.6.1");const tt=(o,t,e)=>{var i,n;const s=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let r=s._$litPart$;if(r===void 0){const c=(n=e==null?void 0:e.renderBefore)!==null&&n!==void 0?n:null;s._$litPart$=r=new H(t.insertBefore(T(),c),c,void 0,e??{})}return r._$AI(o),r},At={"--pink":"#ff79c6","--red":"#ff5555","--orange":"#ffad55","--yellow":"#f1fa8c","--green":"#50fa7b","--cyan":"#8be9fd","--blue":"#4395d4","--purple":"#9674c8","--gray":"#848484","--black":"#282a36","--text-light":"#f8f8f2","--text-dark":"#282a36","--pipe":"#b7b7b7","--workspace-background":"#44475a","--toolbar":"#282a36","--tool-background":"#f8f8f2","--tool-background-accent":"#d5d5d5","--background-dots":"#d6cce0","--port":"#b7b7b7"},et=o=>o.composedPath()[0],xt=(o,t)=>et(o).matches(t),M=o=>(t,e,i)=>{o.addEventListener(t,n=>{n.trigger=et(n),(e===""||xt(n,e))&&i(n)})},bt=(o,t,e,i)=>`${o}_${t}_${e}_${i}`;function wt(o,t){const e=M(o);let i=!1,n=1,s=0,r=0,c={x:0,y:0};function a(l){l.style.transformOrigin=`${0}px ${0}px`,l.style.transform="translate("+s+"px, "+r+"px) scale("+n+")"}function d({x:l,y:u}){let h=(l-s)/n,v=(u-r)/n;return{x:h,y:v}}e("pointerdown","",l=>{l.shiftKey||(i=!0,c={x:l.offsetX-s,y:l.offsetY-r},l.detail)}),e("pointermove","",l=>{if(!i||t.transforming)return;s=l.offsetX-c.x,r=l.offsetY-c.y;const u=document.querySelectorAll(".transform-group");for(const h of u)a(h)}),e("pointerup","",l=>{i=!1}),e("wheel","",l=>{let u=(l.offsetX-s)/n,h=(l.offsetY-r)/n;Math.sign(l.deltaY)<0?n*=1.03:n/=1.03,s=l.offsetX-u*n,r=l.offsetY-h*n;const v=document.querySelectorAll(".transform-group");for(const g of v)a(g);l.preventDefault()});function p(l){const u=o.getBoundingClientRect(),h=l.x[1]-l.x[0],v=l.y[1]-l.y[0],g=u.width/h,st=u.height/v,N=Math.min(g,st)*.9;n=N;const B={x:(l.x[0]+l.x[1])/2*N-u.width/2,y:(l.y[0]+l.y[1])/2*N-u.height/2};s=-B.x,r=-B.y;const rt=document.querySelectorAll(".transform-group");for(const lt of rt)a(lt)}return{scale:()=>n,x:()=>s,y:()=>r,setScaleXY:p,toWorkspaceCoords:d}}const kt=(o,t)=>{window.addEventListener("pointermove",e=>{t.mouse=t.panZoom.toWorkspaceCoords({x:e.clientX,y:e.clientY})}),window.addEventListener("keydown",e=>{t.keysPressed.includes(e.key)||t.keysPressed.push(e.key),e.key==="Escape"&&delete t.toolchain.pipes.loose}),window.addEventListener("keyup",e=>{t.keysPressed.splice(t.keysPressed.indexOf(e.key),1)})};function It(o,t){const e=M(o);function i(s){let r=n(s).dataset.toolid;return[r,t.toolchain.tools[r]]}function n(s){return s.target.closest(".tool")}e("pointerdown",".remove",s=>{let[r,c]=i(s);console.log(`Removing ${r}`),delete t.toolchain.tools[r]}),e("pointerdown",".drag",s=>{let[r,c]=i(s),a=n(s);a.parentNode.appendChild(a),t.selection.add(r),t.transforming=!0}),e("pointermove","",s=>{if(!t.transforming)return;let r=s.movementX/t.panZoom.scale(),c=s.movementY/t.panZoom.scale();t.selection.forEach(a=>{t.toolchain.tools[a].pos.x+=r,t.toolchain.tools[a].pos.y+=c})}),e("pointerup","",s=>{t.selection.clear(),t.transforming=!1}),e("pointerdown",".pin",s=>{let[r,c]=i(s);c.uiState.toolbar=!c.uiState.toolbar}),e("pointerdown",".toggle-state",s=>{let[r,c]=i(s);c.uiState.statePanel=!c.uiState.statePanel,console.log("Toggle state")})}function Tt(o,t){const e=M(o);function i(c){let a=n(c).dataset.toolid;return[a,t.toolchain.tools[a]]}function n(c){return c.target.closest(".tool")}function s(c){let a=c.getBoundingClientRect();return t.panZoom.toWorkspaceCoords({x:a.left+a.width/2,y:a.top+a.height/2})}function r(c,a){if(c.toolID==a.toolID){console.log("Can't connect a tool to itself!");return}let d=bt(c.toolID,c.portID,a.toolID,a.portID);t.toolchain.pipes[d]={start:c,end:a}}e("click",".inports .port",c=>{const[a,d]=i(c),p=c.target.dataset.portid,l=s(c.target);if("loose"in t.toolchain.pipes){let u=t.toolchain.pipes.loose.start;if(!u){delete t.toolchain.pipes.loose;return}let h={toolID:a,portID:p,x:l.x,y:l.y};r(u,h),delete t.toolchain.pipes.loose}else t.toolchain.pipes.loose={end:{toolID:a,portID:p,x:l.x,y:l.y}}}),e("pointerdown",".outports .port",c=>{let[a,d]=i(c);const p=c.target.dataset.portid,l=s(c.target);if("loose"in t.toolchain.pipes){let u=t.toolchain.pipes.loose.end;if(!u){delete t.toolchain.pipes.loose;return}let h={toolID:a,portID:p,x:l.x,y:l.y};r(h,u),delete t.toolchain.pipes.loose}else t.toolchain.pipes.loose={start:{toolID:a,portID:p,x:l.x,y:l.y}}})}function*Et(o,t){let e=!0;for(const i of o)e||(yield t),e=!1,yield i}const Pt=$`,`,St=$`[`,Ht=$`]`;function Dt(o){if(Array.isArray(o))return Ct(o);if(!o)return Ot();let t=[];for(const[e,i]of Object.entries(o))t.push($`
        <span class="state-key">${e}:</span>
        <span class="state-value">${j(i)}</span>
      `);return $`<div class="keyval-container">${t}</div>`}function Ct(o){let t=[];for(const i of o)t.push(j(i));return[St,...Et(t,Pt),Ht]}function Ot(){return $`<span class="undef">null</span>`}function Nt(o){return $`<span class="number">${o}</span>`}function Lt(o){return $`<span class="string">${o}</span>`}function Mt(o){return $`<span class="boolean">${o}</span>`}function jt(o){return $`<span>undef</span>`}function j(o){let t;switch(typeof o){case"object":t=Dt(o);break;case"number":t=Nt(o);break;case"string":t=Lt(o);break;case"boolean":t=Mt(o);break;case"undefined":t=jt();break}return t}function Rt(o){let t=[];for(const[e,i]of Object.entries(o))t.push($` <span class="state-key">${e}</span>
        <span class="state-value">${j(i)}</span>`);return t}function Bt(o){return $` <div class="state-container">${Rt(o)}</div>`}const Zt={boolean:"var(--green)",string:"var(--purple)",number:"var(--blue)",array:"var(--pink)",object:"var(--orange)"};function F(o,t){return $`<div
    class="port"
    data-portid=${o}
    style="--port-color: ${Zt[t.type]}">
    ${o}
  </div>`}function Vt(o,t){return $`<div
    class="tool ${t.uiState.toolbar?"show-toolbar":"hide-toolbar"} ${t.uiState.statePanel?"show-state":"hide-state"}"
    data-toolid=${o}
    style="
      --x:${t.pos.x}px;
      --y:${t.pos.y}px;
      --ui-width:${t.ui.width};
      --ui-height:${t.ui.height};">
    <div class="tool-background">
      <div class="b1"></div>
      <div class="b2"></div>
      <div class="b3"></div>
    </div>
      <div class="toolbar">
        <span class="tool-displayname">${t.ui.displayName}</span>
        <span class="tool-actions">
          <i class="toggle-state fa-solid fa-code fa-xs "></i>
          <i class="remove fa-solid fa-rectangle-xmark"></i>
          <i class="pin fa-solid fa-xs fa-thumbtack"></i>
          <i class="drag fa-solid fa-grip-vertical"></i>
        </span>
      </div>
      <div class="inports port-container">
        ${Object.entries(t.inports).map(([e,i])=>F(e,i))}
      </div>
      <div class="outports port-container">
        ${Object.entries(t.outports).map(([e,i])=>F(e,i))}
      </div>
      <div class="tool-view">${t.render()}</div>
      <div class="tool-state">${Bt(t.state)}</div>
    </div>
  </div>`}let m={mouse:null,initialized:!1,toolbox:["test","dataViewer","color","toggle","text"],imports:{},toolchain:{tools:{},pipes:{}},theme:At,panZoom:null,transforming:!1,selection:new Set,keysPressed:[]},Ut={toolClass:null,inports:{},outports:{},state:{},lifecycle:{},ui:{displayName:null,height:"100px",width:"100px"},pos:{x:0,y:0},focus:!1,uiState:{toolbar:!0,statePanel:!1}};const qt=(o,t)=>{console.log(`${o} says: ${t}`)},Yt=o=>({log:t=>qt(o,t)});let D=0;function Wt(o){return Object.entries(o.toolchain.tools).map(([t,e])=>Vt(t,e))}function Xt(o){let t=o.start??m.mouse,e=o.end??m.mouse;return`M${t.x},${t.y}
    C${t.x+100},${t.y}
    ${e.x-100},${e.y}
    ${e.x},${e.y}`}function zt(o){return Object.entries(o.toolchain.pipes).map(([t,e])=>(console.log(),ht`<path class="pipe" data-pipeid=${t} d="${Xt(e)}" />`))}const ot=o=>{const t=o.panZoom?o.panZoom.x():0,e=o.panZoom?o.panZoom.y():0,i=o.panZoom?o.panZoom.scale():1;return $`<div id="app-container">
    <div id="top-bar"><span>toolchains</span></div>
    <div id="workspace">
      <canvas
        id="background"
        style="--offset-x: ${t}px;--offset-y: ${e}px;--scale: ${i}"></canvas>
      <svg id="pipes" preserveAspectRatio="xMidYMid meet">
        <g class="transform-group">${zt(o)}</g>
      </svg>
      <div id="toolchain" class="transform-group">${Wt(o)}</div>
      <div id="toolbox">
        <div id="toolbox-title">toolbox</div>
        ${o.toolbox.map(n=>$`<button class="add-tool" @click=${()=>Jt(n)}>
              ${n}
            </button>`)}
      </div>
    </div>
  </div>`};function nt(o){const t=m.imports[o];let e=`${o}_${D}`,i=JSON.parse(JSON.stringify(Ut));i.pos.x+=D*30,i.pos.y+=D*30,Object.assign(i,t(Yt(e))),"init"in i&&i.init(),m.toolchain.tools[e]=i,D++}async function Ft(o){const{default:t}=await dt(Object.assign({"./tools/color.js":()=>k(()=>import("./color-2505eb2b.js"),[]),"./tools/dataViewer.js":()=>k(()=>import("./dataViewer-41cfd44b.js"),[]),"./tools/test.js":()=>k(()=>import("./test-359c1c1d.js"),[]),"./tools/text.js":()=>k(()=>import("./text-7f436ad7.js"),[]),"./tools/toggle.js":()=>k(()=>import("./toggle-3c2ac58c.js"),[])}),`./tools/${o}.js`);m.imports[o]=t,nt(o)}async function Jt(o){o in m.imports?nt(o,m.imports[o].lifecycle):Ft(o)}function Kt(){Object.entries(m.theme).map(([o,t])=>{document.documentElement.style.setProperty(o,t)})}function it(){tt(ot(m),document.body),window.requestAnimationFrame(it)}function Gt(){if(m.initialized)return;let o=window.innerHeight*.01;document.documentElement.style.setProperty("--vh",`${o}px`),m.initialized=!0,Kt(),tt(ot(m),document.body)}window.addEventListener("resize",()=>{let o=window.innerHeight*.01;document.documentElement.style.setProperty("--vh",`${o}px`)});Gt();const Qt=document.getElementById("pipes"),R=document.getElementById("workspace"),te=wt(Qt,m);m.panZoom=te;kt(R,m);Tt(R,m);It(R,m);window.requestAnimationFrame(it);export{$ as y};
