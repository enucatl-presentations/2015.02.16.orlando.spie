/*
 *  /MathJax/extensions/jsMath2jax.js
 *
 *  Copyright (c) 2009-2015 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
MathJax.Extension.jsMath2jax={version:"2.5.0",config:{preview:"TeX"},PreProcess:function(e){this.configured||(this.config=MathJax.Hub.CombineConfig("jsMath2jax",this.config),this.config.Augment&&MathJax.Hub.Insert(this,this.config.Augment),"undefined"==typeof this.config.previewTeX||this.config.previewTeX||(this.config.preview="none"),this.previewClass=MathJax.Hub.config.preRemoveClass,this.configured=!0),"string"==typeof e&&(e=document.getElementById(e)),e||(e=document.body);var t,a=e.getElementsByTagName("span");for(t=a.length-1;t>=0;t--)String(a[t].className).match(/(^| )math( |$)/)&&this.ConvertMath(a[t],"");var i=e.getElementsByTagName("div");for(t=i.length-1;t>=0;t--)String(i[t].className).match(/(^| )math( |$)/)&&this.ConvertMath(i[t],"; mode=display")},ConvertMath:function(e,t){if(0===e.getElementsByTagName("script").length){var a=e.parentNode,i=this.createMathTag(t,e.innerHTML);e.nextSibling?a.insertBefore(i,e.nextSibling):a.appendChild(i),"none"!==this.config.preview&&this.createPreview(e),a.removeChild(e)}},createPreview:function(e){var t=this.config.preview;"TeX"===t&&(t=[this.filterPreview(e.innerHTML)]),t&&(t=MathJax.HTML.Element("span",{className:MathJax.Hub.config.preRemoveClass},t),e.parentNode.insertBefore(t,e))},createMathTag:function(e,t){t=t.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&");var a=document.createElement("script");return a.type="math/tex"+e,MathJax.HTML.setScript(a,t),a},filterPreview:function(e){return e}},MathJax.Hub.Register.PreProcessor(["PreProcess",MathJax.Extension.jsMath2jax],8),MathJax.Ajax.loadComplete("[MathJax]/extensions/jsMath2jax.js");