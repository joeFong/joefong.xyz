!function(t){var e={};function s(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=e,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=0)}([function(t,e,s){"use strict";s.r(e);
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
const n=new WeakMap,a=t=>"function"==typeof t&&n.has(t),i=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,o=(t,e,s=null)=>{for(;e!==s;){const s=e.nextSibling;t.removeChild(e),e=s}},c={},r={},l=`{{lit-${String(Math.random()).slice(2)}}}`,p=`\x3c!--${l}--\x3e`,d=new RegExp(`${l}|${p}`),h="$lit$";class u{constructor(t,e){this.parts=[],this.element=e;const s=[],n=[],a=document.createTreeWalker(e.content,133,null,!1);let i=0,o=-1,c=0;const{strings:r,values:{length:p}}=t;for(;c<p;){const t=a.nextNode();if(null!==t){if(o++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:s}=e;let n=0;for(let t=0;t<s;t++)f(e[t].name,h)&&n++;for(;n-- >0;){const e=r[c],s=b.exec(e)[2],n=s.toLowerCase()+h,a=t.getAttribute(n);t.removeAttribute(n);const i=a.split(d);this.parts.push({type:"attribute",index:o,name:s,strings:i}),c+=i.length-1}}"TEMPLATE"===t.tagName&&(n.push(t),a.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(l)>=0){const n=t.parentNode,a=e.split(d),i=a.length-1;for(let e=0;e<i;e++){let s,i=a[e];if(""===i)s=g();else{const t=b.exec(i);null!==t&&f(t[2],h)&&(i=i.slice(0,t.index)+t[1]+t[2].slice(0,-h.length)+t[3]),s=document.createTextNode(i)}n.insertBefore(s,t),this.parts.push({type:"node",index:++o})}""===a[i]?(n.insertBefore(g(),t),s.push(t)):t.data=a[i],c+=i}}else if(8===t.nodeType)if(t.data===l){const e=t.parentNode;null!==t.previousSibling&&o!==i||(o++,e.insertBefore(g(),t)),i=o,this.parts.push({type:"node",index:o}),null===t.nextSibling?t.data="":(s.push(t),o--),c++}else{let e=-1;for(;-1!==(e=t.data.indexOf(l,e+1));)this.parts.push({type:"node",index:-1}),c++}}else a.currentNode=n.pop()}for(const t of s)t.parentNode.removeChild(t)}}const f=(t,e)=>{const s=t.length-e.length;return s>=0&&t.slice(s)===e},m=t=>-1!==t.index,g=()=>document.createComment(""),b=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
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
class y{constructor(t,e,s){this.__parts=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this.__parts)void 0!==s&&s.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=i?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],s=this.template.parts,n=document.createTreeWalker(t,133,null,!1);let a,o=0,c=0,r=n.nextNode();for(;o<s.length;)if(a=s[o],m(a)){for(;c<a.index;)c++,"TEMPLATE"===r.nodeName&&(e.push(r),n.currentNode=r.content),null===(r=n.nextNode())&&(n.currentNode=e.pop(),r=n.nextNode());if("node"===a.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(r.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(r,a.name,a.strings,this.options));o++}else this.__parts.push(void 0),o++;return i&&(document.adoptNode(t),customElements.upgrade(t)),t}}
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
 */const _=` ${l} `;class v{constructor(t,e,s,n){this.strings=t,this.values=e,this.type=s,this.processor=n}getHTML(){const t=this.strings.length-1;let e="",s=!1;for(let n=0;n<t;n++){const t=this.strings[n],a=t.lastIndexOf("\x3c!--");s=(a>-1||s)&&-1===t.indexOf("--\x3e",a+1);const i=b.exec(t);e+=null===i?t+(s?_:p):t.substr(0,i.index)+i[1]+i[2]+h+i[3]+l}return e+=this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
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
const w=t=>null===t||!("object"==typeof t||"function"==typeof t),S=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class x{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new P(this)}_getValue(){const t=this.strings,e=t.length-1;let s="";for(let n=0;n<e;n++){s+=t[n];const e=this.parts[n];if(void 0!==e){const t=e.value;if(w(t)||!S(t))s+="string"==typeof t?t:String(t);else for(const e of t)s+="string"==typeof e?e:String(e)}}return s+=t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class P{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===c||w(t)&&t===this.value||(this.value=t,a(t)||(this.committer.dirty=!0))}commit(){for(;a(this.value);){const t=this.value;this.value=c,t(this)}this.value!==c&&this.committer.commit()}}class k{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(g()),this.endNode=t.appendChild(g())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=g()),t.__insert(this.endNode=g())}insertAfterPart(t){t.__insert(this.startNode=g()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;a(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=c,t(this)}const t=this.__pendingValue;t!==c&&(w(t)?t!==this.value&&this.__commitText(t):t instanceof v?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):S(t)?this.__commitIterable(t):t===r?(this.value=r,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,s="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=s:this.__commitNode(document.createTextNode(s)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof y&&this.value.template===e)this.value.update(t.values);else{const s=new y(e,t.processor,this.options),n=s._clone();s.update(t.values),this.__commitNode(n),this.value=s}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,n=0;for(const a of t)void 0===(s=e[n])&&(s=new k(this.options),e.push(s),0===n?s.appendIntoPart(this):s.insertAfterPart(e[n-1])),s.setValue(a),s.commit(),n++;n<e.length&&(e.length=n,this.clear(s&&s.endNode))}clear(t=this.startNode){o(this.startNode.parentNode,t.nextSibling,this.endNode)}}class C{constructor(t,e,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this.__pendingValue=t}commit(){for(;a(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=c,t(this)}if(this.__pendingValue===c)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=c}}class T extends x{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new N(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class N extends P{}let A=!1;try{const t={get capture(){return A=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class E{constructor(t,e,s){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=s,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;a(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=c,t(this)}if(this.__pendingValue===c)return;const t=this.__pendingValue,e=this.value,s=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),n=null!=t&&(null==e||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=O(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=c}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const O=t=>t&&(A?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);
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
 */const V=new class{handleAttributeExpressions(t,e,s,n){const a=e[0];if("."===a){return new T(t,e.slice(1),s).parts}return"@"===a?[new E(t,e.slice(1),n.eventContext)]:"?"===a?[new C(t,e.slice(1),s)]:new x(t,e,s).parts}handleTextExpression(t){return new k(t)}};
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
 */function M(t){let e=j.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},j.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const n=t.strings.join(l);return void 0===(s=e.keyString.get(n))&&(s=new u(t,t.getTemplateElement()),e.keyString.set(n,s)),e.stringsArray.set(t.strings,s),s}const j=new Map,z=new WeakMap;
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const R=(t,...e)=>new v(t,e,"html",V),D=133;function I(t,e){const{element:{content:s},parts:n}=t,a=document.createTreeWalker(s,D,null,!1);let i=U(n),o=n[i],c=-1,r=0;const l=[];let p=null;for(;a.nextNode();){c++;const t=a.currentNode;for(t.previousSibling===p&&(p=null),e.has(t)&&(l.push(t),null===p&&(p=t)),null!==p&&r++;void 0!==o&&o.index===c;)o.index=null!==p?-1:o.index-r,o=n[i=U(n,i)]}l.forEach(t=>t.parentNode.removeChild(t))}const F=t=>{let e=11===t.nodeType?0:1;const s=document.createTreeWalker(t,D,null,!1);for(;s.nextNode();)e++;return e},U=(t,e=-1)=>{for(let s=e+1;s<t.length;s++){const e=t[s];if(m(e))return s}return-1};
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
const L=(t,e)=>`${t}--${e}`;let q=!0;void 0===window.ShadyCSS?q=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),q=!1);const H=t=>e=>{const s=L(e.type,t);let n=j.get(s);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},j.set(s,n));let a=n.stringsArray.get(e.strings);if(void 0!==a)return a;const i=e.strings.join(l);if(void 0===(a=n.keyString.get(i))){const s=e.getTemplateElement();q&&window.ShadyCSS.prepareTemplateDom(s,t),a=new u(e,s),n.keyString.set(i,a)}return n.stringsArray.set(e.strings,a),a},W=["html","svg"],J=new Set,B=(t,e,s)=>{J.add(t);const n=s?s.element:document.createElement("template"),a=e.querySelectorAll("style"),{length:i}=a;if(0===i)return void window.ShadyCSS.prepareTemplateStyles(n,t);const o=document.createElement("style");for(let t=0;t<i;t++){const e=a[t];e.parentNode.removeChild(e),o.textContent+=e.textContent}(t=>{W.forEach(e=>{const s=j.get(L(e,t));void 0!==s&&s.keyString.forEach(t=>{const{element:{content:e}}=t,s=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{s.add(t)}),I(t,s)})})})(t);const c=n.content;s?function(t,e,s=null){const{element:{content:n},parts:a}=t;if(null==s)return void n.appendChild(e);const i=document.createTreeWalker(n,D,null,!1);let o=U(a),c=0,r=-1;for(;i.nextNode();){for(r++,i.currentNode===s&&(c=F(e),s.parentNode.insertBefore(e,s));-1!==o&&a[o].index===r;){if(c>0){for(;-1!==o;)a[o].index+=c,o=U(a,o);return}o=U(a,o)}}}(s,o,c.firstChild):c.insertBefore(o,c.firstChild),window.ShadyCSS.prepareTemplateStyles(n,t);const r=c.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==r)e.insertBefore(r.cloneNode(!0),e.firstChild);else if(s){c.insertBefore(o,c.firstChild);const t=new Set;t.add(o),I(s,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const $={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},G=(t,e)=>e!==t&&(e==e||t==t),Q={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:G},K=Promise.resolve(!0),Y=1,X=4,Z=8,tt=16,et=32,st="finalized";class nt extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=K,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,s)=>{const n=this._attributeNameForProperty(s,e);void 0!==n&&(this._attributeToPropertyMap.set(n,s),t.push(n))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=Q){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const s="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[s]},set(e){const n=this[t];this[s]=e,this._requestUpdate(t,n)},configurable:!0,enumerable:!0})}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty(st)||t.finalize(),this[st]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const s of e)this.createProperty(s,t[s])}}static _attributeNameForProperty(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,s=G){return s(t,e)}static _propertyValueFromAttribute(t,e){const s=e.type,n=e.converter||$,a="function"==typeof n?n:n.fromAttribute;return a?a(t,s):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const s=e.type,n=e.converter;return(n&&n.toAttribute||$.toAttribute)(t,s)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|et,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,s){e!==s&&this._attributeToProperty(t,s)}_propertyToAttribute(t,e,s=Q){const n=this.constructor,a=n._attributeNameForProperty(t,s);if(void 0!==a){const t=n._propertyValueToAttribute(e,s);if(void 0===t)return;this._updateState=this._updateState|Z,null==t?this.removeAttribute(a):this.setAttribute(a,t),this._updateState=this._updateState&~Z}}_attributeToProperty(t,e){if(this._updateState&Z)return;const s=this.constructor,n=s._attributeToPropertyMap.get(t);if(void 0!==n){const t=s._classProperties.get(n)||Q;this._updateState=this._updateState|tt,this[n]=s._propertyValueFromAttribute(e,t),this._updateState=this._updateState&~tt}}_requestUpdate(t,e){let s=!0;if(void 0!==t){const n=this.constructor,a=n._classProperties.get(t)||Q;n._valueHasChanged(this[t],e,a.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==a.reflect||this._updateState&tt||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,a))):s=!1}!this._hasRequestedUpdate&&s&&this._enqueueUpdate()}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){let t,e;this._updateState=this._updateState|X;const s=this._updatePromise;this._updatePromise=new Promise((s,n)=>{t=s,e=n});try{await s}catch(t){}this._hasConnected||await new Promise(t=>this._hasConnectedResolver=t);try{const t=this.performUpdate();null!=t&&await t}catch(t){e(t)}t(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&et}get _hasRequestedUpdate(){return this._updateState&X}get hasUpdated(){return this._updateState&Y}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{(t=this.shouldUpdate(e))&&this.update(e)}catch(e){throw t=!1,e}finally{this._markUpdated()}t&&(this._updateState&Y||(this._updateState=this._updateState|Y,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~X}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0)}updated(t){}firstUpdated(t){}}nt[st]=!0;const at="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,it=Symbol();class ot{constructor(t,e){if(e!==it)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(at?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const ct=(t,...e)=>{const s=e.reduce((e,s,n)=>e+(t=>{if(t instanceof ot)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+t[n+1],t[0]);return new ot(s,it)};
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const rt=t=>t.flat?t.flat(1/0):function t(e,s=[]){for(let n=0,a=e.length;n<a;n++){const a=e[n];Array.isArray(a)?t(a,s):s.push(a)}return s}(t);class lt extends nt{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const t=this.styles,e=[];if(Array.isArray(t)){rt(t).reduceRight((t,e)=>(t.add(e),t),new Set).forEach(t=>e.unshift(t))}else t&&e.push(t);return e}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?at?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){super.update(t);const e=this.render();e instanceof v&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){}}lt.finalized=!0,lt.render=(t,e,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const n=s.scopeName,a=z.has(e),i=q&&11===e.nodeType&&!!e.host,c=i&&!J.has(n),r=c?document.createDocumentFragment():e;if(((t,e,s)=>{let n=z.get(e);void 0===n&&(o(e,e.firstChild),z.set(e,n=new k(Object.assign({templateFactory:M},s))),n.appendInto(e)),n.setValue(t),n.commit()})(t,r,Object.assign({templateFactory:H(n)},s)),c){const t=z.get(r);z.delete(r);const s=t.value instanceof y?t.value.template:void 0;B(n,r,s),o(e,e.firstChild),e.appendChild(r),z.set(e,t)}!a&&i&&window.ShadyCSS.styleElement(e.host)};const pt=ct`
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
}`;customElements.define("resume-jf",class extends lt{static get styles(){return[pt,ct`
      :host { 
        display: block; 
      }`]}render(){return R`
    <div class="c14 c18">
      <p class="c31"><span class="c24 c16 c27">JOEMAN<span class="c24 c27 c16">&nbsp;FONG</span></p>
      <p class="c1"><span class="c12 c34"><a class="c7" href="mailto:JoemanFong@gmail.com">JoemanFong@gmail.com</a></span><span class="c12">&nbsp;| </span><span class="c16 c12">778.883.5667</span><span class="c6 c4">&nbsp;</span></p>
      <p class="c1"><span class="c26 c12">&nbsp;</span><span class="c25 c14 c12 c36"><a class="c7" href="https://linkedin.com/in/joemanfong">https://linkedin.com/in/joemanfong</a></span><span class="c12">&nbsp;| </span><span class="c25 c26 c14 c12"><a class="c7" href="https://github.com/joeFong&amp;sa=D&amp;ust=1571819728121000">https://github.com/joeFong</a></span><span class="c20 c14 c12 c26">&nbsp;| </span><span class="c25 c14 c12"><a class="c7" href="https://medium.com/@joemanfong">https://medium.com/@joemanfong</a></span><span class="c14 c12 c20">&nbsp;| </span><span class="c25 c14 c12"><a class="c7" href="https://joefong.xyz">https://</a></span><span class="c12 c25"><a class="c7" href="https://joefong.xyz&amp;sa=D&amp;ust=1571819728123000">joefong.xyz</a></span><span class="c6 c12 c32">&nbsp;</span></p>
      <h1 class="c29"><span class="c24 c11 c16">PROFESSIONAL SUMMARY</span></h1>
      <ul class="c23 lst-kix_list_14-0 start">
          <li class="c17 c5"><span class="c14 c12">3+ years of experience in full-stack web application development</span></li>
          <li class="c17 c5"><span class="c14 c12">3</span><span class="c3 c4">+ years of experience working with web technologies including; </span><span class="c4 c8">PHP</span><span class="c3 c4">, </span><span class="c8 c4">JavaScript</span><span class="c3 c4">, </span><span class="c8 c4">NodeJS</span></li>
          <li class="c17 c5"><span class="c14 c12">2+ years building and architecturing marketplace solutions with </span><span class="c9">Stripe</span><span class="c3 c4">&nbsp;</span></li>
          <li class="c17 c5"><span class="c14 c12">2+ years deploying and writing automated builds with </span><span class="c8 c4">Gulp, and Webpack</span></li>
          <li class="c17 c5"><span class="c14 c12">2+ years providing </span><span class="c9">SEO</span><span class="c3 c4">&nbsp;solutions with Google Analytics, Google Tag Manager, &nbsp;Facebook Analytics</span></li>
          <li class="c17 c5"><span class="c14 c12">2+ years of experience working with relational databases including; </span><span class="c8 c4">MySQL</span><span class="c3 c4">, </span><span class="c8 c4">SQL Server</span></li>
          <li class="c17 c5"><span class="c14 c12">2+ years of experience working with open-source libraries and frameworks including; </span><span class="c9">Laravel</span><span class="c14 c12">, </span><span class="c9">Drupal</span><span class="c14 c12">, </span><span class="c9">Wordpress,</span><span class="c14 c12">&nbsp;</span><span class="c9">Socket.IO, </span><span class="c8 c4">Web Driver.IO</span><span class="c3 c4">,</span><span class="c8 c4">&nbsp;Jest</span><span class="c3 c4">, </span><span class="c9">AngularJS</span><span class="c14 c12">, </span><span class="c9">Angular 2-4</span><span class="c14 c12">, </span><span class="c9">React, React Native</span><span class="c14 c12">, </span><span class="c9">Redux </span><span class="c3 c4">and </span><span class="c8 c4">Polymer, LitHTML</span><span class="c9">, VueJS</span><span class="c14 c12">, </span></li>
          <li class="c17 c5"><span class="c14 c12">2+ years of experience operating in an agile development environment with </span><span class="c4 c16 c28">LAMP </span><span class="c6 c4">and </span><span class="c28 c4 c16">LEMP </span><span class="c6 c4">stack</span></li>
          <li class="c17 c5"><span class="c14 c12">Develops in a </span><span class="c16 c12">Linux OS </span><span class="c12">as a DevOps Engineer with experience working in a Cloud environment using various cloud technologies such as AWS EC2, Dockers, Containers, Vultr, Iocage, and Nginx Reverse Proxies</span></li>
      </ul>
      <h1 class="c19"><span class="c24 c11 c16">Experience</span></h1>
      <p class="c1"><span class="c24 c4 c16">Devradius | Full Stack Developer | April 2017 - Present</span></p>
      <p class="c1"><span class="c12 c37">Development agency focused on providing website and application development, CMS development and dedicated and shared hosting cloud environment solutions to businesses.</span></p>
      <ul class="c23 lst-kix_list_2-0 start">
          <li class="c0"><span class="c6 c4">Design, architect and implement complex SaaS, web, android and iOS applications for </span><span class="c12">key </span><span class="c6 c4">clients</span></li>
          <li class="c0"><span class="c6 c4">Lead weekly agile sprints and participate in weekly team meetings to review project pipelines </span></li>
          <li class="c0"><span class="c6 c4">Mentor junior co-op students and developers through shadowing and overseeing project responsibilities</span></li>
      </ul>
      <p class="c10"><span class="c24 c4 c16">Thrinacia </span><span class="c16 c12">| Front-End Developer | April 2017 - Present (Same organization as Devradius)</span></p>
      <p class="c22"><span class="c4 c21">&nbsp; &nbsp; Providing SaaS crowdfunding infrastructure services focused on building, customizing and deploying white label crowdfunding applications/platforms, campaigns, widgets and applications to customers</span></p>
      <ul class="c23 lst-kix_list_2-0">
          <li class="c0"><span class="c4 c6">Lead the flagship software product through designing, developing and maintaining front-end software development features</span></li>
          <li class="c0"><span class="c6 c4">Walk clients through project scope and deliverables and provide ongoing client consultation</span></li>
          <li class="c0"><span class="c14 c12">Contributed to the deployment</span><span class="c3 c4">&nbsp;of over </span><span class="c14 c12">6000</span><span class="c3 c4">+ </span><span class="c14 c12">SaaS </span><span class="c3 c4">crowdfun</span><span class="c14 c12">ding platforms </span></li>
      </ul>
      <p class="c10"><span class="c24 c4 c16">DRIVE Business Intelligence Inc., Quupe Technologies (Internship Experience)</span></p>
      <p class="c10"><span class="c24 c4 c16">Full-Stack Developer | September 2016 &ndash; May 2017</span></p>
      <h1 class="c19"><span class="c24 c11 c16">KEY PROJECTS</span></h1>
      <p class="c10"><span class="c24 c4 c16">Full-Stack Developer (Client: Spoonful)</span></p>
      <ul class="c23 lst-kix_list_2-0">
          <li class="c0"><span class="c6 c4">Design, architect, implement native Android and IOS application with React Native&nbsp;</span></li>
          <li class="c0"><span class="c6 c4">Design and develop a RESTful API with Headless Wordpress</span></li>
          <li class="c0"><span class="c6 c4">Implement OAuth2 Authentication for </span><span class="c12">Social Logins</span><span class="c6 c4">&nbsp;</span></li>
          <li class="c0"><span class="c3 c4">Create modular plugins </span><span class="c14 c12">for</span><span class="c3 c4">&nbsp;data synchronization of over 300K and growing identified scannable products in the USA</span></li>
      </ul>
      <p class="c10"><span class="c8 c4">Full-Stack Developer (Client: PHM)</span></p>
      <ul class="c23 lst-kix_list_2-0">
          <li class="c0"><span class="c2 c3">Design, architect, implement a web application </span><span class="c2 c14">for a technical recruitment company</span><span class="c3 c2">&nbsp;</span></li>
          <li class="c0"><span class="c2">Scope and implement an</span><span class="c6 c2">&nbsp;internal system for managing email </span><span class="c2">campaigns </span><span class="c6 c2">for </span><span class="c2">clients/users</span></li>
          <li class="c0"><span class="c2">Functions include </span><span class="c6 c2">candidate</span><span class="c2">&nbsp;registration</span><span class="c6 c2">, client</span><span class="c2">&nbsp;application</span><span class="c6 c2">, and viewable jobs via filterable queries&nbsp;</span></li>
      </ul>
      <p class="c10"><span class="c24 c2 c16">Full-Stack Developer (Client: Aventria)</span></p>
      <ul class="c23 lst-kix_list_2-0">
          <li class="c0"><span class="c6 c2">Design, architect, implement complex web applications to quickly deploy customized user plugins containing a suite of tools for over </span><span class="c2">200</span><span class="c6 c2">+ health clinics and hospitals all across the US</span></li>
          <li class="c0"><span class="c2">Develop scalable solutions from front to back end for major pharmaceutical companies to quickly diagnose patients &nbsp;</span></li>
          <li class="c0"><span class="c6 c2">Maintain and extend functionality for all sites in production</span></li>
      </ul>
      <p class="c10"><span class="c2 c16 c24">Full-Stack Developer (Client: StudySquare)</span></p>
      <ul class="c23 lst-kix_list_2-0">
          <li class="c0"><span class="c6 c2">Develop a complex peer-to-peer tutoring web application wi</span><span class="c2">th Stripe marketplace architecture</span></li>
          <li class="c0"><span class="c2">Design and develop a </span><span class="c6 c2">white boarding tool with sockiet.IO for users and tutors to concurrently connect</span></li>
          <li class="c0"><span class="c6 c2">Implement a chat system for users to communicate concurrently</span></li>
          <li class="c0"><span class="c6 c2">Implement Stripe API to enable a marketplace platform</span></li>
      </ul>
      <p class="c10"><span class="c24 c2 c16">Front-End Developer (Project: Thrinacia)</span></p>
      <ul class="c23 lst-kix_list_2-0">
          <li class="c0"><span class="c3 c2">Implement front end business logic for Stripe marketplace including PCI compliant Stripe Elements, and Strong Customer Authentication</span></li>
          <li class="c0"><span class="c2 c14">Strong understanding of marketplace solutions </span></li>
          <li class="c0"><span class="c6 c2">Architect, design and develop embeddable crowdfunding tools in React, LitHTML, and Polymer</span></li>
          <li class="c0" id="h.gjdgxs"><span class="c6 c2">Manage, maintain and develop an embeddable complex web components developed in AngularJs and </span><span class="c2">Angular</span><span class="c6 c2">&nbsp;</span></li>
      </ul>
      <h1 class="c19" id="h.aljsgaeh8u18"><span class="c24 c11 c16">Education</span></h1>
      <p class="c1"><span>British Columbia Institute of Technology &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2017<br>Associates Degree, Graduated With Distinctions, Computer Technology/Computer Systems Technology</span></p>
      <div>
          <p class="c33 c35"><span class="c6 c11"></span></p>
      </div>
    </div>
    `}})}]);