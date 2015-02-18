/*
 *  /MathJax/extensions/TeX/unicode.js
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
MathJax.Extension["TeX/unicode"]={version:"2.5.0",unicode:{},config:MathJax.Hub.CombineConfig("TeX.unicode",{fonts:"STIXGeneral,'Arial Unicode MS'"})},MathJax.Hub.Register.StartupHook("TeX Jax Ready",function(){var t=MathJax.InputJax.TeX,e=MathJax.ElementJax.mml,a=MathJax.Extension["TeX/unicode"].unicode;t.Definitions.Add({macros:{unicode:"Unicode"}},null,!0),t.Parse.Augment({Unicode:function(t){var n,i=this.GetBrackets(t);i&&(i.replace(/ /g,"").match(/^(\d+(\.\d*)?|\.\d+),(\d+(\.\d*)?|\.\d+)$/)?(i=i.replace(/ /g,"").split(/,/),n=this.GetBrackets(t)):(n=i,i=null));var o=this.trimSpaces(this.GetArgument(t)),c=parseInt(o.match(/^x/)?"0"+o:o);a[c]?n||(n=a[c][2]):a[c]=[800,200,n,c],i&&(a[c][0]=Math.floor(1e3*i[0]),a[c][1]=Math.floor(1e3*i[1]));var u=this.stack.env.font,d={};n?(a[c][2]=d.fontfamily=n.replace(/"/g,"'"),u&&(u.match(/bold/)&&(d.fontweight="bold"),u.match(/italic|-mathit/)&&(d.fontstyle="italic"))):u&&(d.mathvariant=u),d.unicode=[].concat(a[c]),this.Push(e.mtext(e.entity("#"+o)).With(d))}}),MathJax.Hub.Startup.signal.Post("TeX unicode Ready")}),MathJax.Hub.Register.StartupHook("HTML-CSS Jax Ready",function(){var t=MathJax.ElementJax.mml,e=MathJax.Extension["TeX/unicode"].config.fonts,a=t.mbase.prototype.HTMLgetVariant;t.mbase.Augment({HTMLgetVariant:function(){var t=a.call(this);if(t.unicode&&(delete t.unicode,delete t.FONTS),!this.unicode)return t;t.unicode=!0,t.defaultFont||(t=MathJax.Hub.Insert({},t),t.defaultFont={family:e});var n=this.unicode[2];return n?n+=","+e:n=e,t.defaultFont[this.unicode[3]]=[this.unicode[0],this.unicode[1],500,0,500,{isUnknown:!0,isUnicode:!0,font:n}],t}})}),MathJax.Hub.Register.StartupHook("SVG Jax Ready",function(){var t=MathJax.ElementJax.mml,e=MathJax.Extension["TeX/unicode"].config.fonts,a=t.mbase.prototype.SVGgetVariant;t.mbase.Augment({SVGgetVariant:function(){var t=a.call(this);return t.unicode&&(delete t.unicode,delete t.FONTS),this.unicode?(t.unicode=!0,t.forceFamily||(t=MathJax.Hub.Insert({},t)),t.defaultFamily=e,t.noRemap=!0,t.h=this.unicode[0],t.d=this.unicode[1],t):t}})}),MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/unicode.js");