/*
 *  /MathJax/jax/output/SVG/autoload/mglyph.js
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
MathJax.Hub.Register.StartupHook("SVG Jax Ready",function(){var t=MathJax.ElementJax.mml,a=MathJax.OutputJax.SVG,i=a.BBOX,e=MathJax.Localization,h="http://www.w3.org/1999/xlink";i.MGLYPH=i.Subclass({type:"image",removeable:!1,Init:function(t,i,e,s,r,l){null==l&&(l={});var n=1e3*t.width/a.em,o=1e3*t.height/a.em,g=n,m=o,d=0;""!==i&&(n=a.length2em(i,r,g),o=g?n/g*m:0),""!==e&&(o=a.length2em(e,r,m),""===i&&(n=m?o/m*g:0)),""!==s&&s.match(/\d/)&&(d=a.length2em(s,r),l.y=-d),l.height=Math.floor(o),l.width=Math.floor(n),l.transform="translate(0,"+o+") matrix(1 0 0 -1 0 0)",l.preserveAspectRatio="none",this.SUPER(arguments).Init.call(this,l),this.element.setAttributeNS(h,"href",t.src),this.w=this.r=n,this.h=this.H=o+d,this.d=this.D=-d,this.l=0}}),t.mglyph.Augment({toSVG:function(a,h){this.SVGgetStyles();var s,r,l=this.SVG();this.SVGhandleSpace(l);var n=this.getValues("src","width","height","valign","alt");if(""===n.src){if(n=this.getValues("index","fontfamily"),n.index){h||(h=this.SVGgetScale());var o={};n.fontfamily&&(o["font-family"]=n.fontfamily),l.Add(i.TEXT(h,String.fromCharCode(n.index),o))}}else if(this.img||(this.img=t.mglyph.GLYPH[n.src]),this.img||(this.img=t.mglyph.GLYPH[n.src]={img:new Image,status:"pending"},s=this.img.img,s.onload=MathJax.Callback(["SVGimgLoaded",this]),s.onerror=MathJax.Callback(["SVGimgError",this]),s.src=n.src,MathJax.Hub.RestartAfter(s.onload)),"OK"!==this.img.status)r=t.Error(e._(["MathML","BadMglyph"],"Bad mglyph: %1",n.src),{mathsize:"75%"}),this.Append(r),l=r.toSVG(),this.data.pop();else{var g=this.SVGgetMu(l);l.Add(i.MGLYPH(this.img.img,n.width,n.height,n.valign,g,{src:n.src,alt:n.alt,title:n.alt}))}return l.Clean(),this.SVGhandleColor(l),this.SVGsaveData(l),l},SVGimgLoaded:function(t,a){"string"==typeof t&&(a=t),this.img.status=a||"OK"},SVGimgError:function(){this.img.img.onload("error")}},{GLYPH:{}}),MathJax.Hub.Startup.signal.Post("SVG mglyph Ready"),MathJax.Ajax.loadComplete(a.autoloadDir+"/mglyph.js")});