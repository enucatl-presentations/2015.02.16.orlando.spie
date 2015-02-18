/*
 *  /MathJax/jax/output/SVG/autoload/annotation-xml.js
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
MathJax.Hub.Register.StartupHook("SVG Jax Ready",function(){var t=MathJax.ElementJax.mml,a=MathJax.OutputJax.SVG,e=a.BBOX;e.FOREIGN=e.Subclass({type:"foreignObject",removeable:!1}),t["annotation-xml"].Augment({toSVG:function(){var t=this.SVG();this.SVGhandleSpace(t);for(var a=this.Get("encoding"),e=0,i=this.data.length;i>e;e++)t.Add(this.data[e].toSVG(a),t.w,0);return t.Clean(),this.SVGhandleColor(t),this.SVGsaveData(t),t}}),t.xml.Augment({toSVG:function(){var t=a.textSVG.parentNode;a.mathDiv.style.width="auto",t.insertBefore(this.div,a.textSVG);var i=this.div.offsetWidth,h=this.div.offsetHeight,n=MathJax.HTML.addElement(this.div,"span",{style:{display:"inline-block",overflow:"hidden",height:h+"px",width:"1px",marginRight:"-1px"}}),o=this.div.offsetHeight-h;h-=o,this.div.removeChild(n),t.removeChild(this.div),a.mathDiv.style.width="";for(var d=1e3/a.em,s=e.FOREIGN({y:-h+"px",width:i+"px",height:h+o+"px",transform:"scale("+d+") matrix(1 0 0 -1 0 0)"}),l=0,r=this.data.length;r>l;l++)s.element.appendChild(this.data[l].cloneNode(!0));return s.w=i*d,s.h=h*d,s.d=o*d,s.r=s.w,s.l=0,s.Clean(),this.SVGsaveData(s),s}}),MathJax.Hub.Startup.signal.Post("SVG annotation-xml Ready"),MathJax.Ajax.loadComplete(a.autoloadDir+"/annotation-xml.js")});