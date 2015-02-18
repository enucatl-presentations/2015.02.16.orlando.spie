/*
 *  /MathJax/extensions/TeX/mathchoice.js
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
MathJax.Hub.Register.StartupHook("TeX Jax Ready",function(){var t=MathJax.ElementJax.mml,e=MathJax.InputJax.TeX,i=e.Definitions;i.Add({macros:{mathchoice:"MathChoice"}},null,!0),e.Parse.Augment({MathChoice:function(e){var i=this.ParseArg(e),s=this.ParseArg(e),a=this.ParseArg(e),h=this.ParseArg(e);this.Push(t.TeXmathchoice(i,s,a,h))}}),t.TeXmathchoice=t.mbase.Subclass({type:"TeXmathchoice",notParent:!0,choice:function(){if(null==this.selection){this.selection=0;var t=this.getValues("displaystyle","scriptlevel");this.selection=t.scriptlevel>0?Math.min(3,t.scriptlevel+1):t.displaystyle?0:1}return this.selection},selected:function(){return this.data[this.choice()]},setTeXclass:function(t){return this.selected().setTeXclass(t)},isSpacelike:function(){return this.selected().isSpacelike()},isEmbellished:function(){return this.selected().isEmbellished()},Core:function(){return this.selected()},CoreMO:function(){return this.selected().CoreMO()},toHTML:function(t){return t=this.HTMLcreateSpan(t),t.bbox=this.Core().toHTML(t).bbox,t.firstChild&&t.firstChild.style.marginLeft&&(t.style.marginLeft=t.firstChild.style.marginLeft,t.firstChild.style.marginLeft=""),t},toSVG:function(){var t=this.Core().toSVG();return this.SVGsaveData(t),t},toCommonHTML:function(t){return t=this.CHTMLcreateSpan(t),this.CHTMLhandleStyle(t),this.CHTMLhandleColor(t),this.CHTMLaddChild(t,this.choice(),{}),t}}),MathJax.Hub.Startup.signal.Post("TeX mathchoice Ready")}),MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/mathchoice.js");