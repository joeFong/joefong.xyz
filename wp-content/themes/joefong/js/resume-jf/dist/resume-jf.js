!function(e){var t={};function s(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=e,s.c=t,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=0)}([function(e,t,s){"use strict";s.r(t);
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
const n=new WeakMap,i=e=>"function"==typeof e&&n.has(e),o=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,a=(e,t,s=null)=>{for(;t!==s;){const s=t.nextSibling;e.removeChild(t),t=s}},r={},l={},p=`{{lit-${String(Math.random()).slice(2)}}}`,c=`\x3c!--${p}--\x3e`,d=new RegExp(`${p}|${c}`),h="$lit$";class u{constructor(e,t){this.parts=[],this.element=t;const s=[],n=[],i=document.createTreeWalker(t.content,133,null,!1);let o=0,a=-1,r=0;const{strings:l,values:{length:c}}=e;for(;r<c;){const e=i.nextNode();if(null!==e){if(a++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:s}=t;let n=0;for(let e=0;e<s;e++)m(t[e].name,h)&&n++;for(;n-- >0;){const t=l[r],s=b.exec(t)[2],n=s.toLowerCase()+h,i=e.getAttribute(n);e.removeAttribute(n);const o=i.split(d);this.parts.push({type:"attribute",index:a,name:s,strings:o}),r+=o.length-1}}"TEMPLATE"===e.tagName&&(n.push(e),i.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(p)>=0){const n=e.parentNode,i=t.split(d),o=i.length-1;for(let t=0;t<o;t++){let s,o=i[t];if(""===o)s=g();else{const e=b.exec(o);null!==e&&m(e[2],h)&&(o=o.slice(0,e.index)+e[1]+e[2].slice(0,-h.length)+e[3]),s=document.createTextNode(o)}n.insertBefore(s,e),this.parts.push({type:"node",index:++a})}""===i[o]?(n.insertBefore(g(),e),s.push(e)):e.data=i[o],r+=o}}else if(8===e.nodeType)if(e.data===p){const t=e.parentNode;null!==e.previousSibling&&a!==o||(a++,t.insertBefore(g(),e)),o=a,this.parts.push({type:"node",index:a}),null===e.nextSibling?e.data="":(s.push(e),a--),r++}else{let t=-1;for(;-1!==(t=e.data.indexOf(p,t+1));)this.parts.push({type:"node",index:-1}),r++}}else i.currentNode=n.pop()}for(const e of s)e.parentNode.removeChild(e)}}const m=(e,t)=>{const s=e.length-t.length;return s>=0&&e.slice(s)===t},f=e=>-1!==e.index,g=()=>document.createComment(""),b=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
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
class y{constructor(e,t,s){this.__parts=[],this.template=e,this.processor=t,this.options=s}update(e){let t=0;for(const s of this.__parts)void 0!==s&&s.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=o?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],s=this.template.parts,n=document.createTreeWalker(e,133,null,!1);let i,a=0,r=0,l=n.nextNode();for(;a<s.length;)if(i=s[a],f(i)){for(;r<i.index;)r++,"TEMPLATE"===l.nodeName&&(t.push(l),n.currentNode=l.content),null===(l=n.nextNode())&&(n.currentNode=t.pop(),l=n.nextNode());if("node"===i.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(l.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,i.name,i.strings,this.options));a++}else this.__parts.push(void 0),a++;return o&&(document.adoptNode(e),customElements.upgrade(e)),e}}
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
 */const _=` ${p} `;class v{constructor(e,t,s,n){this.strings=e,this.values=t,this.type=s,this.processor=n}getHTML(){const e=this.strings.length-1;let t="",s=!1;for(let n=0;n<e;n++){const e=this.strings[n],i=e.lastIndexOf("\x3c!--");s=(i>-1||s)&&-1===e.indexOf("--\x3e",i+1);const o=b.exec(e);t+=null===o?e+(s?_:c):e.substr(0,o.index)+o[1]+o[2]+h+o[3]+p}return t+=this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
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
const w=e=>null===e||!("object"==typeof e||"function"==typeof e),S=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class x{constructor(e,t,s){this.dirty=!0,this.element=e,this.name=t,this.strings=s,this.parts=[];for(let e=0;e<s.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new P(this)}_getValue(){const e=this.strings,t=e.length-1;let s="";for(let n=0;n<t;n++){s+=e[n];const t=this.parts[n];if(void 0!==t){const e=t.value;if(w(e)||!S(e))s+="string"==typeof e?e:String(e);else for(const t of e)s+="string"==typeof t?t:String(t)}}return s+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class P{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===r||w(e)&&e===this.value||(this.value=e,i(e)||(this.committer.dirty=!0))}commit(){for(;i(this.value);){const e=this.value;this.value=r,e(this)}this.value!==r&&this.committer.commit()}}class k{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(g()),this.endNode=e.appendChild(g())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=g()),e.__insert(this.endNode=g())}insertAfterPart(e){e.__insert(this.startNode=g()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){for(;i(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=r,e(this)}const e=this.__pendingValue;e!==r&&(w(e)?e!==this.value&&this.__commitText(e):e instanceof v?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):S(e)?this.__commitIterable(e):e===l?(this.value=l,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,s="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=s:this.__commitNode(document.createTextNode(s)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof y&&this.value.template===t)this.value.update(e.values);else{const s=new y(t,e.processor,this.options),n=s._clone();s.update(e.values),this.__commitNode(n),this.value=s}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let s,n=0;for(const i of e)void 0===(s=t[n])&&(s=new k(this.options),t.push(s),0===n?s.appendIntoPart(this):s.insertAfterPart(t[n-1])),s.setValue(i),s.commit(),n++;n<t.length&&(t.length=n,this.clear(s&&s.endNode))}clear(e=this.startNode){a(this.startNode.parentNode,e.nextSibling,this.endNode)}}class C{constructor(e,t,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=s}setValue(e){this.__pendingValue=e}commit(){for(;i(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=r,e(this)}if(this.__pendingValue===r)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=r}}class N extends x{constructor(e,t,s){super(e,t,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new T(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class T extends P{}let A=!1;try{const e={get capture(){return A=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class E{constructor(e,t,s){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=s,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;i(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=r,e(this)}if(this.__pendingValue===r)return;const e=this.__pendingValue,t=this.value,s=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),n=null!=e&&(null==t||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=O(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=r}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const O=e=>e&&(A?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);
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
 */const R=new class{handleAttributeExpressions(e,t,s,n){const i=t[0];if("."===i){return new N(e,t.slice(1),s).parts}return"@"===i?[new E(e,t.slice(1),n.eventContext)]:"?"===i?[new C(e,t.slice(1),s)]:new x(e,t,s).parts}handleTextExpression(e){return new k(e)}};
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
 */function V(e){let t=j.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},j.set(e.type,t));let s=t.stringsArray.get(e.strings);if(void 0!==s)return s;const n=e.strings.join(p);return void 0===(s=t.keyString.get(n))&&(s=new u(e,e.getTemplateElement()),t.keyString.set(n,s)),t.stringsArray.set(e.strings,s),s}const j=new Map,M=new WeakMap;
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const $=(e,...t)=>new v(e,t,"html",R),I=133;function L(e,t){const{element:{content:s},parts:n}=e,i=document.createTreeWalker(s,I,null,!1);let o=U(n),a=n[o],r=-1,l=0;const p=[];let c=null;for(;i.nextNode();){r++;const e=i.currentNode;for(e.previousSibling===c&&(c=null),t.has(e)&&(p.push(e),null===c&&(c=e)),null!==c&&l++;void 0!==a&&a.index===r;)a.index=null!==c?-1:a.index-l,a=n[o=U(n,o)]}p.forEach(e=>e.parentNode.removeChild(e))}const z=e=>{let t=11===e.nodeType?0:1;const s=document.createTreeWalker(e,I,null,!1);for(;s.nextNode();)t++;return t},U=(e,t=-1)=>{for(let s=t+1;s<e.length;s++){const t=e[s];if(f(t))return s}return-1};
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
const D=(e,t)=>`${e}--${t}`;let F=!0;void 0===window.ShadyCSS?F=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),F=!1);const q=e=>t=>{const s=D(t.type,e);let n=j.get(s);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},j.set(s,n));let i=n.stringsArray.get(t.strings);if(void 0!==i)return i;const o=t.strings.join(p);if(void 0===(i=n.keyString.get(o))){const s=t.getTemplateElement();F&&window.ShadyCSS.prepareTemplateDom(s,e),i=new u(t,s),n.keyString.set(o,i)}return n.stringsArray.set(t.strings,i),i},W=["html","svg"],H=new Set,J=(e,t,s)=>{H.add(e);const n=s?s.element:document.createElement("template"),i=t.querySelectorAll("style"),{length:o}=i;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(n,e);const a=document.createElement("style");for(let e=0;e<o;e++){const t=i[e];t.parentNode.removeChild(t),a.textContent+=t.textContent}(e=>{W.forEach(t=>{const s=j.get(D(t,e));void 0!==s&&s.keyString.forEach(e=>{const{element:{content:t}}=e,s=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{s.add(e)}),L(e,s)})})})(e);const r=n.content;s?function(e,t,s=null){const{element:{content:n},parts:i}=e;if(null==s)return void n.appendChild(t);const o=document.createTreeWalker(n,I,null,!1);let a=U(i),r=0,l=-1;for(;o.nextNode();){for(l++,o.currentNode===s&&(r=z(t),s.parentNode.insertBefore(t,s));-1!==a&&i[a].index===l;){if(r>0){for(;-1!==a;)i[a].index+=r,a=U(i,a);return}a=U(i,a)}}}(s,a,r.firstChild):r.insertBefore(a,r.firstChild),window.ShadyCSS.prepareTemplateStyles(n,e);const l=r.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(s){r.insertBefore(a,r.firstChild);const e=new Set;e.add(a),L(s,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const B={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},G=(e,t)=>t!==e&&(t==t||e==e),K={attribute:!0,type:String,converter:B,reflect:!1,hasChanged:G},Q=Promise.resolve(!0),Y=1,X=4,Z=8,ee=16,te=32,se="finalized";class ne extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=Q,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,s)=>{const n=this._attributeNameForProperty(s,t);void 0!==n&&(this._attributeToPropertyMap.set(n,s),e.push(n))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=K){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const s="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[s]},set(t){const n=this[e];this[s]=t,this._requestUpdate(e,n)},configurable:!0,enumerable:!0})}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty(se)||e.finalize(),this[se]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const s of t)this.createProperty(s,e[s])}}static _attributeNameForProperty(e,t){const s=t.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,s=G){return s(e,t)}static _propertyValueFromAttribute(e,t){const s=t.type,n=t.converter||B,i="function"==typeof n?n:n.fromAttribute;return i?i(e,s):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const s=t.type,n=t.converter;return(n&&n.toAttribute||B.toAttribute)(e,s)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|te,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,s){t!==s&&this._attributeToProperty(e,s)}_propertyToAttribute(e,t,s=K){const n=this.constructor,i=n._attributeNameForProperty(e,s);if(void 0!==i){const e=n._propertyValueToAttribute(t,s);if(void 0===e)return;this._updateState=this._updateState|Z,null==e?this.removeAttribute(i):this.setAttribute(i,e),this._updateState=this._updateState&~Z}}_attributeToProperty(e,t){if(this._updateState&Z)return;const s=this.constructor,n=s._attributeToPropertyMap.get(e);if(void 0!==n){const e=s._classProperties.get(n)||K;this._updateState=this._updateState|ee,this[n]=s._propertyValueFromAttribute(t,e),this._updateState=this._updateState&~ee}}_requestUpdate(e,t){let s=!0;if(void 0!==e){const n=this.constructor,i=n._classProperties.get(e)||K;n._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==i.reflect||this._updateState&ee||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):s=!1}!this._hasRequestedUpdate&&s&&this._enqueueUpdate()}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){let e,t;this._updateState=this._updateState|X;const s=this._updatePromise;this._updatePromise=new Promise((s,n)=>{e=s,t=n});try{await s}catch(e){}this._hasConnected||await new Promise(e=>this._hasConnectedResolver=e);try{const e=this.performUpdate();null!=e&&await e}catch(e){t(e)}e(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&te}get _hasRequestedUpdate(){return this._updateState&X}get hasUpdated(){return this._updateState&Y}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{(e=this.shouldUpdate(t))&&this.update(t)}catch(t){throw e=!1,t}finally{this._markUpdated()}e&&(this._updateState&Y||(this._updateState=this._updateState|Y,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~X}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}ne[se]=!0;const ie="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,oe=Symbol();class ae{constructor(e,t){if(t!==oe)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(ie?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const re=e=>e.flat?e.flat(1/0):function e(t,s=[]){for(let n=0,i=t.length;n<i;n++){const i=t[n];Array.isArray(i)?e(i,s):s.push(i)}return s}(e);class le extends ne{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){re(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?ie?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof v&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}le.finalized=!0,le.render=(e,t,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const n=s.scopeName,i=M.has(t),o=F&&11===t.nodeType&&!!t.host,r=o&&!H.has(n),l=r?document.createDocumentFragment():t;if(((e,t,s)=>{let n=M.get(t);void 0===n&&(a(t,t.firstChild),M.set(t,n=new k(Object.assign({templateFactory:V},s))),n.appendInto(t)),n.setValue(e),n.commit()})(e,l,Object.assign({templateFactory:q(n)},s)),r){const e=M.get(l);M.delete(l);const s=e.value instanceof y?e.value.template:void 0;J(n,l,s),a(t,t.firstChild),t.appendChild(l),M.set(t,e)}!i&&o&&window.ShadyCSS.styleElement(t.host)};const pe=((e,...t)=>{const s=t.reduce((t,s,n)=>t+(e=>{if(e instanceof ae)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+e[n+1],e[0]);return new ae(s,oe)})`    
  
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
    padding: 44.8pt 33.5pt 52pt 33.5pt
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

@media print {
    #page-break-1 {
        page-break-before: always;
    }
  }

@media only screen and (max-width: 600px) {
    .c18 {
        max-width: 500.2pt;
        padding: 54.8pt 43.2pt 62pt 48.5pt
    }
}
`,ce={firstName:"Lorem",lastName:"Ipsum",email:"fakeemail@gmail.com",phoneNumber:"123.456.7890",socialMedia:["https://linkedin.com/in/loremipson","https://github.com/loremipson","https://medium.com/@loremipson","https://joefong.xyz"],professionalSummary:[{skill:"3+ years of experience in full-stack web application development",bolded:[]},{skill:"3+ years of experience working with web technologies including;",bolded:["PHP","JavaScript","NodeJS"]},{skill:"2+ years building and architecturing marketplace solutions with",bolded:["Stripe"]},{skill:"2+ years deploying and writing automated builds with",bolded:["Gulp","Webpack"]},{skill:"2+ years providing SEO solutions with",bolded:["Google Analytics","Google Tag Manager","Facebook Analytics"]},{skill:"2+ years of experience working with relational databases including;",bolded:["MySQL","SQL Server"]},{skill:"2+ years of experience working with open-source libraries and frameworks including;",bolded:["Laravel","Drupal","Wordpress","Socket.IO","Web Driver.IO","Jest","AngularJS","Angular 2-4","React","React Native","Redux","Polymer","LitHTML","VueJS"]},{skill:"2+ years of experience operating in an agile development environment in a ",bolded:["LAMP","LEMP","stack"]},{skill:"Working as a DevOps Engineer with experience in a Cloud environment using various technologies such as AWS EC2, Dockers, Containers, Vultr, Iocage, and Nginx Reverse Proxies on a ",bolded:["Linux OS"]}],experience:[{jobTitle:"Lorem Ipsum",role:"Full Stack Developer",duration:"April 2017 - Present",summaryOfCompany:"Development agency focused on providing website and application development, CMS development and dedicated and shared hosting cloud environment solutions to businesses.",bulletsOfRole:["Design, architect and implement complex SaaS, web, android and iOS applications for key clients","Lead weekly agile sprints and participate in weekly team meetings to review project pipelines","Mentor junior co-op students and developers through shadowing and overseeing project responsibilities"]},{jobTitle:"Lorem Ipsum",role:"Front End Developer",duration:"April 2017 - Present (Same organization as Lorem Ipsum)",summaryOfCompany:"Providing SaaS crowdfunding infrastructure services focused on building, customizing and deploying white label crowdfunding applications/platforms, campaigns, widgets and applications to customers.",bulletsOfRole:["Lead the flagship software product through designing, developing and maintaining front-end software development features","Walk clients through project scope and deliverables and provide ongoing client consultation","Contributed to the deployment of over 6000+ SaaS crowdfunding platforms"]},{jobTitle:"Lorem Ipsum (Internship Experience)",role:"Full-Stack Developer",duration:"September 2016 – May 2017",summaryOfCompany:"",bulletsOfRole:[]}],keyProjects:[{projectName:"Lorem Ipsum",role:"Full Stack Developer",bulletsOfRole:["Design, architect, implement native Android and IOS application with React Native","Design and develop a RESTful API with Headless Wordpress","Implement OAuth2 Authentication for Social Logins","Create modular plugins for data synchronization of over 300K and growing identified scannable products in the USA"]},{projectName:"Lorem Ipsum",role:"Full Stack Developer",bulletsOfRole:["Design, architect, implement a web application for a technical recruitment company","Scope and implement an internal system for managing email campaigns for clients/users","Functions include candidate registration, client application, and viewable jobs via filterable queries"]},{projectName:"Lorem Ipsum",role:"Full Stack Developer",bulletsOfRole:["Design, architect, implement complex web applications to quickly deploy customized user plugins containing a suite of tools for over 200+ health clinics and hospitals all across the US","Develop scalable solutions from front to back end for major pharmaceutical companies to quickly diagnose patients","Maintain and extend functionality for all sites in production"]},{projectName:"Lorem Ipsum",role:"Full Stack Developer",bulletsOfRole:["Develop a complex peer-to-peer tutoring web application with Stripe marketplace architecture","Design and develop a white boarding tool with sockiet.IO for users and tutors to concurrently connect","Implement a chat system for users to communicate concurrently","Implement Stripe API to enable a marketplace platform"]},{projectName:"Lorem Ipsum",role:"Full Stack Developer",bulletsOfRole:["Implement front end business logic for Stripe marketplace including PCI compliant Stripe Elements, and Strong Customer Authentication","Strong understanding of marketplace solutions","Architect, design and develop embeddable crowdfunding tools in React, LitHTML, and Polymer","Manage, maintain and develop an embeddable complex web components developed in AngularJs and Angular"]}],education:[{schoolName:"Lorem Ipsum University",yearCompleted:"2017",educationCompleted:"Associates Degree, Graduated With Distinctions"}]};customElements.define("resume-jf",class extends le{static get styles(){return[pe]}static get properties(){return{resume:{type:Object},theme:{type:String}}}constructor(){super(),this.theme="classic",this.resume=ce}classicTheme(){return $`
    <div id="resumeContainer" class="c14 c18">
      <p class="c31"><span class="c24 c16 c27">${this.resume.firstName}<span class="c24 c27 c16">&nbsp;${this.resume.lastName}</span></p>
      <p class="c1"><span class="c12 c34"><a class="c7" href="mailto:${this.resume.email}">${this.resume.email}</a></span><span class="c12">&nbsp;| </span><span class="c16 c12">${this.resume.phoneNumber}</span><span class="c6 c4">&nbsp;</span></p>
      <p class="c1">
        ${this.resume.socialMedia.map((e,t,s)=>$`
          <span class="c25 c14 c12">
            <a class="c7" href="${e}">${e}</a>
          </span>
          ${s.length!=t+1?$`<span class="c12"> | </span>`:$`<span class="c6 c12 c32">&nbsp;</span>`}
        `)}
      </p>
      <h1 class="c29"><span class="c24 c11 c16">PROFESSIONAL SUMMARY</span></h1>
      <ul class="c23 lst-kix_list_14-0 start">
        ${this.resume.professionalSummary.map(e=>$`
          <li class="c17 c5">
            <span class="c14 c12">
              ${e.skill}
              ${e.bolded.map((e,t,s)=>$`
                <span class="c8 c4">${e}</span>${s.length!=t+1?$`<span class="c3 c4">, </span>`:$`<span class="c3 c4"></span>`}
              `)}
            </span>
          </li>
        `)}
      </ul>
      <h1 class="c19"><span class="c24 c11 c16">Experience</span></h1>
      ${this.resume.experience.map((e,t,s)=>$`
        <p class="c1"><span class="c24 c4 c16">${e.jobTitle} | ${e.role} | ${e.duration}</span></p>
        <p class="c1"><span class="c12 c37">${e.summaryOfCompany}</span></p>
        <ul class="c23 lst-kix_list_2-0 start">
          ${e.bulletsOfRole.map(e=>$`
            <li class="c0"><span class="c6 c4">${e}</li>
          `)}
        </ul>
      `)}
      
      <h1 id="page-break-1" class="c19"><span class="c24 c11 c16">KEY PROJECTS</span></h1>
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
    `}render(){return"classic"==this.theme?this.classicTheme():$`
    <div class="c14 c18">
      <p>A Theme is required.</p>
    </div>
    `}})}]);