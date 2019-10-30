!function(e){var t={};function n(s){if(t[s])return t[s].exports;var o=t[s]={i:s,l:!1,exports:{}};return e[s].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(s,o,function(t){return e[t]}.bind(null,o));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const s=new WeakMap,o=e=>"function"==typeof e&&s.has(e),i=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,a=(e,t,n=null)=>{for(;t!==n;){const n=t.nextSibling;e.removeChild(t),t=n}},r={},l={},p=`{{lit-${String(Math.random()).slice(2)}}}`,c=`\x3c!--${p}--\x3e`,d=new RegExp(`${p}|${c}`),h="$lit$";class u{constructor(e,t){this.parts=[],this.element=t;const n=[],s=[],o=document.createTreeWalker(t.content,133,null,!1);let i=0,a=-1,r=0;const{strings:l,values:{length:c}}=e;for(;r<c;){const e=o.nextNode();if(null!==e){if(a++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:n}=t;let s=0;for(let e=0;e<n;e++)m(t[e].name,h)&&s++;for(;s-- >0;){const t=l[r],n=b.exec(t)[2],s=n.toLowerCase()+h,o=e.getAttribute(s);e.removeAttribute(s);const i=o.split(d);this.parts.push({type:"attribute",index:a,name:n,strings:i}),r+=i.length-1}}"TEMPLATE"===e.tagName&&(s.push(e),o.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(p)>=0){const s=e.parentNode,o=t.split(d),i=o.length-1;for(let t=0;t<i;t++){let n,i=o[t];if(""===i)n=g();else{const e=b.exec(i);null!==e&&m(e[2],h)&&(i=i.slice(0,e.index)+e[1]+e[2].slice(0,-h.length)+e[3]),n=document.createTextNode(i)}s.insertBefore(n,e),this.parts.push({type:"node",index:++a})}""===o[i]?(s.insertBefore(g(),e),n.push(e)):e.data=o[i],r+=i}}else if(8===e.nodeType)if(e.data===p){const t=e.parentNode;null!==e.previousSibling&&a!==i||(a++,t.insertBefore(g(),e)),i=a,this.parts.push({type:"node",index:a}),null===e.nextSibling?e.data="":(n.push(e),a--),r++}else{let t=-1;for(;-1!==(t=e.data.indexOf(p,t+1));)this.parts.push({type:"node",index:-1}),r++}}else o.currentNode=s.pop()}for(const e of n)e.parentNode.removeChild(e)}}const m=(e,t)=>{const n=e.length-t.length;return n>=0&&e.slice(n)===t},f=e=>-1!==e.index,g=()=>document.createComment(""),b=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class y{constructor(e,t,n){this.__parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this.__parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=i?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],n=this.template.parts,s=document.createTreeWalker(e,133,null,!1);let o,a=0,r=0,l=s.nextNode();for(;a<n.length;)if(o=n[a],f(o)){for(;r<o.index;)r++,"TEMPLATE"===l.nodeName&&(t.push(l),s.currentNode=l.content),null===(l=s.nextNode())&&(s.currentNode=t.pop(),l=s.nextNode());if("node"===o.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(l.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,o.name,o.strings,this.options));a++}else this.__parts.push(void 0),a++;return i&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const _=` ${p} `;class v{constructor(e,t,n,s){this.strings=e,this.values=t,this.type=n,this.processor=s}getHTML(){const e=this.strings.length-1;let t="",n=!1;for(let s=0;s<e;s++){const e=this.strings[s],o=e.lastIndexOf("\x3c!--");n=(o>-1||n)&&-1===e.indexOf("--\x3e",o+1);const i=b.exec(e);t+=null===i?e+(n?_:c):e.substr(0,i.index)+i[1]+i[2]+h+i[3]+p}return t+=this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const w=e=>null===e||!("object"==typeof e||"function"==typeof e),S=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class x{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new k(this)}_getValue(){const e=this.strings,t=e.length-1;let n="";for(let s=0;s<t;s++){n+=e[s];const t=this.parts[s];if(void 0!==t){const e=t.value;if(w(e)||!S(e))n+="string"==typeof e?e:String(e);else for(const t of e)n+="string"==typeof t?t:String(t)}}return n+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class k{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===r||w(e)&&e===this.value||(this.value=e,o(e)||(this.committer.dirty=!0))}commit(){for(;o(this.value);){const e=this.value;this.value=r,e(this)}this.value!==r&&this.committer.commit()}}class P{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(g()),this.endNode=e.appendChild(g())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=g()),e.__insert(this.endNode=g())}insertAfterPart(e){e.__insert(this.startNode=g()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){for(;o(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=r,e(this)}const e=this.__pendingValue;e!==r&&(w(e)?e!==this.value&&this.__commitText(e):e instanceof v?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):S(e)?this.__commitIterable(e):e===l?(this.value=l,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,n="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof y&&this.value.template===t)this.value.update(e.values);else{const n=new y(t,e.processor,this.options),s=n._clone();n.update(e.values),this.__commitNode(s),this.value=n}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,s=0;for(const o of e)void 0===(n=t[s])&&(n=new P(this.options),t.push(n),0===s?n.appendIntoPart(this):n.insertAfterPart(t[s-1])),n.setValue(o),n.commit(),s++;s<t.length&&(t.length=s,this.clear(n&&n.endNode))}clear(e=this.startNode){a(this.startNode.parentNode,e.nextSibling,this.endNode)}}class C{constructor(e,t,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this.__pendingValue=e}commit(){for(;o(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=r,e(this)}if(this.__pendingValue===r)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=r}}class N extends x{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new T(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class T extends k{}let A=!1;try{const e={get capture(){return A=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class E{constructor(e,t,n){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;o(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=r,e(this)}if(this.__pendingValue===r)return;const e=this.__pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),s=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=O(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=r}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const O=e=>e&&(A?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const R=new class{handleAttributeExpressions(e,t,n,s){const o=t[0];if("."===o){return new N(e,t.slice(1),n).parts}return"@"===o?[new E(e,t.slice(1),s.eventContext)]:"?"===o?[new C(e,t.slice(1),n)]:new x(e,t,n).parts}handleTextExpression(e){return new P(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function j(e){let t=V.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},V.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const s=e.strings.join(p);return void 0===(n=t.keyString.get(s))&&(n=new u(e,e.getTemplateElement()),t.keyString.set(s,n)),t.stringsArray.set(e.strings,n),n}const V=new Map,M=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const $=(e,...t)=>new v(e,t,"html",R),z=133;function I(e,t){const{element:{content:n},parts:s}=e,o=document.createTreeWalker(n,z,null,!1);let i=U(s),a=s[i],r=-1,l=0;const p=[];let c=null;for(;o.nextNode();){r++;const e=o.currentNode;for(e.previousSibling===c&&(c=null),t.has(e)&&(p.push(e),null===c&&(c=e)),null!==c&&l++;void 0!==a&&a.index===r;)a.index=null!==c?-1:a.index-l,a=s[i=U(s,i)]}p.forEach(e=>e.parentNode.removeChild(e))}const D=e=>{let t=11===e.nodeType?0:1;const n=document.createTreeWalker(e,z,null,!1);for(;n.nextNode();)t++;return t},U=(e,t=-1)=>{for(let n=t+1;n<e.length;n++){const t=e[n];if(f(t))return n}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const F=(e,t)=>`${e}--${t}`;let L=!0;void 0===window.ShadyCSS?L=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),L=!1);const q=e=>t=>{const n=F(t.type,e);let s=V.get(n);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},V.set(n,s));let o=s.stringsArray.get(t.strings);if(void 0!==o)return o;const i=t.strings.join(p);if(void 0===(o=s.keyString.get(i))){const n=t.getTemplateElement();L&&window.ShadyCSS.prepareTemplateDom(n,e),o=new u(t,n),s.keyString.set(i,o)}return s.stringsArray.set(t.strings,o),o},W=["html","svg"],H=new Set,B=(e,t,n)=>{H.add(e);const s=n?n.element:document.createElement("template"),o=t.querySelectorAll("style"),{length:i}=o;if(0===i)return void window.ShadyCSS.prepareTemplateStyles(s,e);const a=document.createElement("style");for(let e=0;e<i;e++){const t=o[e];t.parentNode.removeChild(t),a.textContent+=t.textContent}(e=>{W.forEach(t=>{const n=V.get(F(t,e));void 0!==n&&n.keyString.forEach(e=>{const{element:{content:t}}=e,n=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{n.add(e)}),I(e,n)})})})(e);const r=s.content;n?function(e,t,n=null){const{element:{content:s},parts:o}=e;if(null==n)return void s.appendChild(t);const i=document.createTreeWalker(s,z,null,!1);let a=U(o),r=0,l=-1;for(;i.nextNode();){for(l++,i.currentNode===n&&(r=D(t),n.parentNode.insertBefore(t,n));-1!==a&&o[a].index===l;){if(r>0){for(;-1!==a;)o[a].index+=r,a=U(o,a);return}a=U(o,a)}}}(n,a,r.firstChild):r.insertBefore(a,r.firstChild),window.ShadyCSS.prepareTemplateStyles(s,e);const l=r.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(n){r.insertBefore(a,r.firstChild);const e=new Set;e.add(a),I(n,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const J={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},G=(e,t)=>t!==e&&(t==t||e==e),Q={attribute:!0,type:String,converter:J,reflect:!1,hasChanged:G},K=Promise.resolve(!0),Y=1,X=4,Z=8,ee=16,te=32,ne="finalized";class se extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=K,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,n)=>{const s=this._attributeNameForProperty(n,t);void 0!==s&&(this._attributeToPropertyMap.set(s,n),e.push(s))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=Q){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[n]},set(t){const s=this[e];this[n]=t,this._requestUpdate(e,s)},configurable:!0,enumerable:!0})}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty(ne)||e.finalize(),this[ne]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const n of t)this.createProperty(n,e[n])}}static _attributeNameForProperty(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,n=G){return n(e,t)}static _propertyValueFromAttribute(e,t){const n=t.type,s=t.converter||J,o="function"==typeof s?s:s.fromAttribute;return o?o(e,n):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const n=t.type,s=t.converter;return(s&&s.toAttribute||J.toAttribute)(e,n)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|te,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t,n=Q){const s=this.constructor,o=s._attributeNameForProperty(e,n);if(void 0!==o){const e=s._propertyValueToAttribute(t,n);if(void 0===e)return;this._updateState=this._updateState|Z,null==e?this.removeAttribute(o):this.setAttribute(o,e),this._updateState=this._updateState&~Z}}_attributeToProperty(e,t){if(this._updateState&Z)return;const n=this.constructor,s=n._attributeToPropertyMap.get(e);if(void 0!==s){const e=n._classProperties.get(s)||Q;this._updateState=this._updateState|ee,this[s]=n._propertyValueFromAttribute(t,e),this._updateState=this._updateState&~ee}}_requestUpdate(e,t){let n=!0;if(void 0!==e){const s=this.constructor,o=s._classProperties.get(e)||Q;s._valueHasChanged(this[e],t,o.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==o.reflect||this._updateState&ee||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,o))):n=!1}!this._hasRequestedUpdate&&n&&this._enqueueUpdate()}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){let e,t;this._updateState=this._updateState|X;const n=this._updatePromise;this._updatePromise=new Promise((n,s)=>{e=n,t=s});try{await n}catch(e){}this._hasConnected||await new Promise(e=>this._hasConnectedResolver=e);try{const e=this.performUpdate();null!=e&&await e}catch(e){t(e)}e(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&te}get _hasRequestedUpdate(){return this._updateState&X}get hasUpdated(){return this._updateState&Y}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{(e=this.shouldUpdate(t))&&this.update(t)}catch(t){throw e=!1,t}finally{this._markUpdated()}e&&(this._updateState&Y||(this._updateState=this._updateState|Y,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~X}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}se[ne]=!0;const oe="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ie=Symbol();class ae{constructor(e,t){if(t!==ie)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(oe?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const re=(e,...t)=>{const n=t.reduce((t,n,s)=>t+(e=>{if(e instanceof ae)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[s+1],e[0]);return new ae(n,ie)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const le=e=>e.flat?e.flat(1/0):function e(t,n=[]){for(let s=0,o=t.length;s<o;s++){const o=t[s];Array.isArray(o)?e(o,n):n.push(o)}return n}(e);class pe extends se{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){le(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?oe?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof v&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}pe.finalized=!0,pe.render=(e,t,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const s=n.scopeName,o=M.has(t),i=L&&11===t.nodeType&&!!t.host,r=i&&!H.has(s),l=r?document.createDocumentFragment():t;if(((e,t,n)=>{let s=M.get(t);void 0===s&&(a(t,t.firstChild),M.set(t,s=new P(Object.assign({templateFactory:j},n))),s.appendInto(t)),s.setValue(e),s.commit()})(e,l,Object.assign({templateFactory:q(s)},n)),r){const e=M.get(l);M.delete(l);const n=e.value instanceof y?e.value.template:void 0;B(s,l,n),a(t,t.firstChild),t.appendChild(l),M.set(t,e)}!o&&i&&window.ShadyCSS.styleElement(t.host)};const ce=re`
  .site {
    margin: 10%;
  }
    
  
  ol {
      margin: 0;
      padding: 0
  }
  
  table td,
  table th {
      padding: 0
  }
  
  .c29 {
      padding-top: 14pt;
      border-top-width: 3pt;
      border-bottom-color: #7f7f7f;
      padding-bottom: 5pt;
      line-height: 1.0;
      page-break-after: avoid;
      border-top-style: solid;
      border-bottom-width: 1pt;
      border-top-color: #262626;
      border-bottom-style: solid;
      orphans: 2;
      widows: 2;
      text-align: left
  }
  
  .c19 {
      padding-top: 5pt;
      border-top-width: 3pt;
      border-bottom-color: #7f7f7f;
      padding-bottom: 5pt;
      line-height: 1.0;
      page-break-after: avoid;
      border-top-style: solid;
      border-bottom-width: 1pt;
      border-top-color: #262626;
      border-bottom-style: solid;
      orphans: 2;
      widows: 2;
      text-align: left
  }
  
  .c0 {
      margin-left: 18pt;
      padding-top: 0pt;
      padding-left: -7.2pt;
      padding-bottom: 6pt;
      line-height: 1.3;
      orphans: 2;
      widows: 2;
      text-align: left
  }
  
  .c10 {
      margin-left: 10.8pt;
      padding-top: 0pt;
      text-indent: -10.8pt;
      padding-bottom: 6pt;
      line-height: 1.3;
      orphans: 2;
      widows: 2;
      text-align: left
  }
  
  .c22 {
      padding-top: 0pt;
      text-indent: -10.5pt;
      padding-bottom: 6pt;
      line-height: 1.3;
      orphans: 2;
      widows: 2;
      text-align: left
  }
  
  .c31 {
      padding-top: 0pt;
      padding-bottom: 9pt;
      line-height: 1.0;
      orphans: 2;
      widows: 2;
      text-align: left
  }
  
  .c3 {
      background-color: #ffffff;
      font-weight: 400;
      text-decoration: none;
      vertical-align: baseline;
      font-family: "Tahoma";
      font-style: normal
  }
  
  .c35 {
      padding-top: 12pt;
      padding-bottom: 0pt;
      line-height: 1.0;
      orphans: 2;
      widows: 2;
      text-align: left
  }
  
  .c17 {
      padding-top: 0pt;
      padding-bottom: 0pt;
      line-height: 1.3;
      orphans: 2;
      widows: 2;
      text-align: left
  }
  
  .c1 {
      padding-top: 0pt;
      padding-bottom: 9pt;
      line-height: 1.3;
      orphans: 2;
      widows: 2;
      text-align: left
  }

.c13 {
    color: #000000;
    font-weight: 400;
    text-decoration: none;
    vertical-align: baseline;
    font-family: "Times New Roman";
    font-style: normal
}

.c8 {
    background-color: #ffffff;
    font-weight: 700;
    text-decoration: none;
    vertical-align: baseline;
    font-family: "Tahoma";
    font-style: normal
}

.c21 {
    font-weight: 400;
    text-decoration: none;
    vertical-align: baseline;
    font-family: "Tahoma";
    font-style: italic
}

.c6 {
    font-weight: 400;
    text-decoration: none;
    vertical-align: baseline;
    font-family: "Tahoma";
    font-style: normal
}

.c25 {
    text-decoration-skip-ink: none;
    -webkit-text-decoration-skip: none;
    color: #1155cc;
    text-decoration: underline
}

.c34 {
    text-decoration-skip-ink: none;
    -webkit-text-decoration-skip: none;
    color: #53c3c7;
    text-decoration: underline
}

.c24 {
    text-decoration: none;
    vertical-align: baseline;
    font-family: "Tahoma";
    font-style: normal
}

.c20 {
    -webkit-text-decoration-skip: none;
    color: #0073b1;
    text-decoration: underline;
    text-decoration-skip-ink: none
}

.c9 {
    background-color: #ffffff;
    font-size: 9pt;
    font-weight: 700
}

.c28 {
    text-decoration: none;
    vertical-align: baseline;
    font-style: normal
}

.c7 {
    color: inherit;
    text-decoration: inherit
}

.c15 {
    color: #808080;
    font-size: 10pt
}

.c2 {
    color: #808080;
    font-size: 9pt
}

.c18 {
    max-width: 500.2pt;
    padding: 64.8pt 53.2pt 72pt 58.5pt
}

.c36 {
    font-weight: 400;
}

.c23 {
    padding: 0;
    margin: 0
}

.c26 {
    font-weight: 400;
    font-family: "Tahoma"
}

.c30 {
    color: #7f7f7f;
    font-size: 10pt
}

.c5 {
    margin-left: 20pt;
    padding-left: 0pt
}

.c4 {
    color: #7f7f7f;
    font-size: 9pt
}

.c11 {
    color: #0e0b05;
    font-size: 12pt
}

.c27 {
    color: #0e0b05;
    font-size: 30pt
}

.c14 {
    background-color: #ffffff
}

.c33 {
    height: 10pt
}

.c37 {
    font-style: italic
}

.c16 {
    font-weight: 700
}

.c32 {
    color: #000000
}

.c12 {
    font-size: 9pt
}

.title {
    padding-top: 6pt;
    color: #000000;
    font-weight: 700;
    font-size: 35pt;
    padding-bottom: 9pt;
    font-family: "Tahoma";
    line-height: 1.0;
    orphans: 2;
    widows: 2;
    text-align: left
}

.subtitle {
    padding-top: 0pt;
    color: #7f7f7f;
    font-size: 12pt;
    padding-bottom: 27pt;
    font-family: "Tahoma";
    line-height: 1.2;
    orphans: 2;
    widows: 2;
    text-align: left
}

li {
    color: #7f7f7f;
    font-size: 10pt;
    font-family: "Tahoma"
}

p {
    margin: 0;
    color: #7f7f7f;
    font-size: 10pt;
    font-family: "Tahoma"
}

h1 {
    padding-top: 5pt;
    color: #0e0b05;
    border-top-width: 3pt;
    border-bottom-color: #7f7f7f;
    font-weight: 700;
    font-size: 12pt;
    padding-bottom: 5pt;
    line-height: 1.0;
    page-break-after: avoid;
    border-top-style: solid;
    border-bottom-width: 1pt;
    border-top-color: #262626;
    font-family: "Tahoma";
    border-bottom-style: solid;
    orphans: 2;
    widows: 2;
    text-align: left
}

h2 {
    padding-top: 2pt;
    color: #0e0b05;
    font-size: 11pt;
    padding-bottom: 0pt;
    font-family: "Tahoma";
    line-height: 1.3;
    page-break-after: avoid;
    orphans: 2;
    widows: 2;
    text-align: left
}

h3 {
    padding-top: 2pt;
    color: #0e0b05;
    font-size: 12pt;
    padding-bottom: 0pt;
    font-family: "Tahoma";
    line-height: 1.3;
    page-break-after: avoid;
    orphans: 2;
    widows: 2;
    text-align: left
}

h4 {
    padding-top: 2pt;
    color: #0e0b05;
    font-size: 10pt;
    padding-bottom: 0pt;
    font-family: "Tahoma";
    line-height: 1.3;
    page-break-after: avoid;
    orphans: 2;
    widows: 2;
    text-align: left
}

h5 {
    padding-top: 2pt;
    color: #0e0b05;
    font-weight: 700;
    font-size: 9pt;
    padding-bottom: 0pt;
    font-family: "Tahoma";
    line-height: 1.3;
    page-break-after: avoid;
    orphans: 2;
    widows: 2;
    text-align: left
}

h6 {
    padding-top: 2pt;
    color: #0e0b05;
    font-weight: 700;
    font-size: 9pt;
    padding-bottom: 0pt;
    font-family: "Tahoma";
    line-height: 1.3;
    page-break-after: avoid;
    orphans: 2;
    widows: 2;
    text-align: left
}
#myBtn {
    display: none; /* Hidden by default */
    position: fixed; /* Fixed/sticky position */
    bottom: 30px; /* Place the button at the bottom of the page */
    right: 40px; /* Place the button 30px from the right */
    z-index: 99; /* Make sure it does not overlap */
    border: none; /* Remove borders */
    outline: none; /* Remove outline */
    background-color: red; /* Set a background color */
    color: white; /* Text color */
    cursor: pointer; /* Add a mouse pointer on hover */
    padding: 15px; /* Some padding */
    border-radius: 10px; /* Rounded corners */
    font-size: 18px; /* Increase font size */
}

#myBtn:hover {
    background-color: #555; /* Add a dark-grey background on hover */
}`;customElements.define("resume-jf",class extends pe{static get styles(){return[ce,re`
      :host { 
        display: block; 
      }`]}static get properties(){return{resume:{type:Object}}}constructor(){super(),this.resume={firstName:"Joeman",lastName:"Fong",email:"joemanfong@gmail.com",phoneNumber:"778.883.5667",socialMedia:["https://linkedin.com/in/joemanfong","https://github.com/joeFong","https://medium.com/@joemanfong","https://joefong.xyz"],professionalSummary:[{skill:"3+ years of experience in full-stack web application development",bolded:[]},{skill:"3+ years of experience working with web technologies including;",bolded:["PHP","JavaScript","NodeJS"]},{skill:"2+ years building and architecturing marketplace solutions with",bolded:["Stripe"]},{skill:"2+ years deploying and writing automated builds with",bolded:["Gulp","Webpack"]},{skill:"2+ years providing SEO solutions with",bolded:["Google Analytics","Google Tag Manager","Facebook Analytics"]},{skill:"2+ years of experience working with relational databases including;",bolded:["MySQL","SQL Server"]},{skill:"2+ years of experience working with open-source libraries and frameworks including;",bolded:["Laravel","Drupal","Wordpress","Socket.IO","Web Driver.IO","Jest","AngularJS","Angular 2-4","React","React Native","Redux","Polymer","LitHTML","VueJS"]},{skill:"2+ years of experience operating in an agile development environment in a ",bolded:["LAMP","LEMP","stack"]},{skill:"Working as a DevOps Engineer with experience in a Cloud environment using various technologies such as AWS EC2, Dockers, Containers, Vultr, Iocage, and Nginx Reverse Proxies on a ",bolded:["Linux OS"]}],experience:[{jobTitle:"Devradius",role:"Full Stack Developer",duration:"April 2017 - Present",summaryOfCompany:"Development agency focused on providing website and application development, CMS development and dedicated and shared hosting cloud environment solutions to businesses.",bulletsOfRole:["Design, architect and implement complex SaaS, web, android and iOS applications for key clients","Lead weekly agile sprints and participate in weekly team meetings to review project pipelines","Mentor junior co-op students and developers through shadowing and overseeing project responsibilities"]},{jobTitle:"Thrinacia",role:"Front End Developer",duration:"April 2017 - Present (Same organization as Devradius)",summaryOfCompany:"Providing SaaS crowdfunding infrastructure services focused on building, customizing and deploying white label crowdfunding applications/platforms, campaigns, widgets and applications to customers.",bulletsOfRole:["Lead the flagship software product through designing, developing and maintaining front-end software development features","Walk clients through project scope and deliverables and provide ongoing client consultation","Contributed to the deployment of over 6000+ SaaS crowdfunding platforms"]},{jobTitle:"DRIVE Business Intelligence Inc., Quupe Technologies (Internship Experience)",role:"Full-Stack Developer",duration:"September 2016 – May 2017",summaryOfCompany:"",bulletsOfRole:[]}],keyProjects:[{projectName:"Spoonful",role:"Full Stack Developer",bulletsOfRole:["Design, architect, implement native Android and IOS application with React Native","Design and develop a RESTful API with Headless Wordpress","Implement OAuth2 Authentication for Social Logins","Create modular plugins for data synchronization of over 300K and growing identified scannable products in the USA"]},{projectName:"PHM",role:"Full Stack Developer",bulletsOfRole:["Design, architect, implement a web application for a technical recruitment company","Scope and implement an internal system for managing email campaigns for clients/users","Functions include candidate registration, client application, and viewable jobs via filterable queries"]},{projectName:"Aventria",role:"Full Stack Developer",bulletsOfRole:["Design, architect, implement complex web applications to quickly deploy customized user plugins containing a suite of tools for over 200+ health clinics and hospitals all across the US","Develop scalable solutions from front to back end for major pharmaceutical companies to quickly diagnose patients","Maintain and extend functionality for all sites in production"]},{projectName:"StudySquare",role:"Full Stack Developer",bulletsOfRole:["Develop a complex peer-to-peer tutoring web application with Stripe marketplace architecture","Design and develop a white boarding tool with sockiet.IO for users and tutors to concurrently connect","Implement a chat system for users to communicate concurrently","Implement Stripe API to enable a marketplace platform"]},{projectName:"Thrinacia",role:"Full Stack Developer",bulletsOfRole:["Implement front end business logic for Stripe marketplace including PCI compliant Stripe Elements, and Strong Customer Authentication","Strong understanding of marketplace solutions","Architect, design and develop embeddable crowdfunding tools in React, LitHTML, and Polymer","Manage, maintain and develop an embeddable complex web components developed in AngularJs and Angular"]}],education:[{schoolName:"British Columbia Institute of Technology",yearCompleted:"2017",educationCompleted:"Associates Degree, Graduated With Distinctions, Computer Technology/Computer Systems Technology"}]},console.log(this.resume)}render(){return $`
    <div class="c14 c18">
      <p class="c31"><span class="c24 c16 c27">${this.resume.firstName}<span class="c24 c27 c16">&nbsp;${this.resume.lastName}</span></p>
      <p class="c1"><span class="c12 c34"><a class="c7" href="mailto:${this.resume.email}">${this.resume.email}</a></span><span class="c12">&nbsp;| </span><span class="c16 c12">${this.resume.phoneNumber}</span><span class="c6 c4">&nbsp;</span></p>
      <p class="c1">
        ${this.resume.socialMedia.map((e,t,n)=>$`
          <span class="c25 c14 c12">
            <a class="c7" href="${e}">${e}</a>
          </span>
          ${n.length!=t+1?$`<span class="c12"> | </span>`:$`<span class="c6 c12 c32">&nbsp;</span>`}
        `)}
      </p>
      <h1 class="c29"><span class="c24 c11 c16">PROFESSIONAL SUMMARY</span></h1>
      <ul class="c23 lst-kix_list_14-0 start">
        ${this.resume.professionalSummary.map(e=>$`
          <li class="c17 c5">
            <span class="c14 c12">
              ${e.skill}
              ${e.bolded.map((e,t,n)=>$`
                <span class="c8 c4">${e}</span>${n.length!=t+1?$`<span class="c3 c4">, </span>`:$`<span class="c3 c4"></span>`}
              `)}
            </span>
          </li>
        `)}
      </ul>
      <h1 class="c19"><span class="c24 c11 c16">Experience</span></h1>
      ${this.resume.experience.map((e,t,n)=>$`
        <p class="c1"><span class="c24 c4 c16">${e.jobTitle} | ${e.role} | ${e.duration}</span></p>
        <p class="c1"><span class="c12 c37">${e.summaryOfCompany}</span></p>
        <ul class="c23 lst-kix_list_2-0 start">
          ${e.bulletsOfRole.map(e=>$`
            <li class="c0"><span class="c6 c4">${e}</li>
          `)}
        </ul>
      `)}
      
      <h1 class="c19"><span class="c24 c11 c16">KEY PROJECTS</span></h1>
      ${this.resume.keyProjects.map(e=>$`
        <p class="c10"><span class="c24 c4 c16">${e.role} (Client: ${e.projectName})</span></p>
        <ul class="c23 lst-kix_list_2-0">
        ${e.bulletsOfRole.map(e=>$`
          <li class="c0"><span class="c6 c4">${e}</span></li>
        `)}
        </ul>
      `)}
      <h1 class="c19" id="h.aljsgaeh8u18"><span class="c24 c11 c16">Education</span></h1>
      ${this.resume.education.map(e=>$`
        <p class="c1"><span>${e.schoolName} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${e.yearCompleted}<br>${e.educationCompleted}</span></p>
      `)}
      <div>
          <p class="c33 c35"><span class="c6 c11"></span></p>
      </div>
    </div>
    `}})}]);