/*
 *  /MathJax/jax/output/SVG/autoload/mmultiscripts.js
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
MathJax.Hub.Register.StartupHook("SVG Jax Ready",function(){var t=MathJax.ElementJax.mml,s=MathJax.OutputJax.SVG;t.mmultiscripts.Augment({toSVG:function(t,a){this.SVGgetStyles();var e=this.SVG(),i=this.SVGgetScale(e);this.SVGhandleSpace(e);var h,r=this.data[this.base]?this.SVGdataStretched(this.base,t,a):s.BBOX.G().Clean(),d=s.TeX.x_height*i,p=s.TeX.scriptspace*i*.75,u=this.SVGgetScripts(p),l=u[0],c=u[1],m=u[2],x=u[3],S=(this.data[1]||this).SVGgetScale(),n=s.TeX.sup_drop*S,o=s.TeX.sub_drop*S,f=r.h-n,G=r.d+o,M=0;r.ic&&(M=r.ic),!this.data[this.base]||"mi"!==this.data[this.base].type&&"mo"!==this.data[this.base].type||1!==this.data[this.base].data.join("").length||1!==r.scale||r.stretched||this.data[this.base].Get("largeop")||(f=G=0);var V=this.getValues("subscriptshift","superscriptshift"),b=this.SVGgetMu(e);V.subscriptshift=""===V.subscriptshift?0:s.length2em(V.subscriptshift,b),V.superscriptshift=""===V.superscriptshift?0:s.length2em(V.superscriptshift,b);var g=0;if(m?g=m.w+M:x&&(g=x.w-M),e.Add(r,Math.max(0,g),0),c||x)if(l||m){G=Math.max(G,s.TeX.sub2*i);var w=s.TeX.rule_thickness*i,y=(l||m).h,v=(c||x).d;m&&(y=Math.max(y,m.h)),x&&(v=Math.max(v,x.d)),3*w>f-v-(y-G)&&(G=3*w-f+v+y,n=.8*d-(f-v),n>0&&(f+=n,G-=n)),f=Math.max(f,V.superscriptshift),G=Math.max(G,V.subscriptshift),c&&e.Add(c,g+r.w+p,f),x&&e.Add(x,g+M-x.w,f),l&&e.Add(l,g+r.w+p-M,-G),m&&e.Add(m,g-m.w,-G)}else{var A=this.getValues("displaystyle","texprimestyle");h=s.TeX[A.displaystyle?"sup1":A.texprimestyle?"sup3":"sup2"],f=Math.max(f,h*i,V.superscriptshift),c&&(f=Math.max(f,c.d+.25*d)),x&&(f=Math.max(f,x.d+.25*d)),c&&e.Add(c,g+r.w+p,f),x&&e.Add(x,0,f)}else G=Math.max(G,s.TeX.sub1*i,V.subscriptshift),l&&(G=Math.max(G,l.h-.8*d)),m&&(G=Math.max(G,m.h-.8*d)),l&&e.Add(l,g+r.w+p-M,-G),m&&e.Add(m,0,-G);e.Clean(),this.SVGhandleColor(e),this.SVGsaveData(e);var X=this.SVGdata;return X.dx=g,X.s=p,X.u=f,X.v=G,X.delta=M,e},SVGgetScripts:function(t){for(var a,e,i=[],h=1,r=this.data.length,d=0,p=0;4>p;p+=2){for(;r>h&&"mprescripts"!==this.data[h].type;){for(var u=p;p+2>u;u++)this.data[h]&&"none"!==this.data[h].type&&(i[u]||(i[u]=s.BBOX.G()),i[u].Add(this.data[h].toSVG().With({x:d}))),h++;e=i[p]||{w:0},a=i[p+1]||{w:0},e.w=a.w=d=Math.max(e.w,a.w)}h++,d=0}for(u=0;4>u;u++)i[u]&&(i[u].w+=t,i[u].Clean());return i}}),MathJax.Hub.Startup.signal.Post("SVG mmultiscripts Ready"),MathJax.Ajax.loadComplete(s.autoloadDir+"/mmultiscripts.js")});