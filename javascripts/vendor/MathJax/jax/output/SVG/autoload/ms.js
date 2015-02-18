/*
 *  /MathJax/jax/output/SVG/autoload/ms.js
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
MathJax.Hub.Register.StartupHook("SVG Jax Ready",function(){var t=MathJax.ElementJax.mml,a=MathJax.OutputJax.SVG;t.ms.Augment({toSVG:function(){this.SVGgetStyles();var t=this.SVG();this.SVGhandleSpace(t);var a=this.getValues("lquote","rquote"),e=this.SVGgetVariant(),s=this.SVGgetScale(),o=this.data.join("");return t.Add(this.SVGhandleVariant(e,s,a.lquote+o+a.rquote)),t.Clean(),this.SVGhandleColor(t),this.SVGsaveData(t),t}}),t.ms.prototype.defaults.mathvariant="monospace",MathJax.Hub.Startup.signal.Post("SVG ms Ready"),MathJax.Ajax.loadComplete(a.autoloadDir+"/ms.js")});