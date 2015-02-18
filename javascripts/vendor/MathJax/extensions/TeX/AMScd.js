/*
 *  /MathJax/extensions/TeX/AMScd.js
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
MathJax.Extension["TeX/AMScd"]={version:"2.5.0",config:MathJax.Hub.CombineConfig("TeX.CD",{colspace:"5pt",rowspace:"5pt",harrowsize:"2.75em",varrowsize:"1.75em",hideHorizontalLabels:!1})},MathJax.Hub.Register.StartupHook("TeX Jax Ready",function(){var t=MathJax.ElementJax.mml,e=MathJax.InputJax.TeX,i=e.Stack.Item,a=e.Definitions,s=MathJax.Extension["TeX/AMScd"].config;a.environment.CD="CD_env",a.special["@"]="CD_arrow",a.macros.minCDarrowwidth="CD_minwidth",a.macros.minCDarrowheight="CD_minheight",e.Parse.Augment({CD_env:function(t){return this.Push(t),i.array().With({arraydef:{columnalign:"center",columnspacing:s.colspace,rowspacing:s.rowspace,displaystyle:!0},minw:this.stack.env.CD_minw||s.harrowsize,minh:this.stack.env.CD_minh||s.varrowsize})},CD_arrow:function(a){var h=this.string.charAt(this.i);if(!h.match(/[><VA.|=]/))return this.Other(a);this.i++;var n=this.stack.Top();(!n.isa(i.array)||n.data.length)&&(this.CD_cell(a),n=this.stack.Top());for(var r=n.table.length%2===1,m=(n.row.length+(r?0:1))%2;m;)this.CD_cell(a),m--;var o,l={minsize:n.minw,stretchy:!0},c={minsize:n.minh,stretchy:!0,symmetric:!0,lspace:0,rspace:0};if("."===h);else if("|"===h)o=this.mmlToken(t.mo("\u2225").With(c));else if("="===h)o=this.mmlToken(t.mo("=").With(l));else{var p={">":"\u2192","<":"\u2190",V:"\u2193",A:"\u2191"}[h],d=this.GetUpTo(a+h,h),D=this.GetUpTo(a+h,h);if(">"===h||"<"===h){if(o=t.mo(p).With(l),d||(d="\\kern "+n.minw),d||D){var v={width:"+11mu",lspace:"6mu"};o=t.munderover(this.mmlToken(o)),d&&(d=e.Parse(d,this.stack.env).mml(),o.SetData(o.over,t.mpadded(d).With(v).With({voffset:".1em"}))),D&&(D=e.Parse(D,this.stack.env).mml(),o.SetData(o.under,t.mpadded(D).With(v))),s.hideHorizontalLabels&&(o=t.mpadded(o).With({depth:0,height:".67em"}))}}else o=p=this.mmlToken(t.mo(p).With(c)),(d||D)&&(o=t.mrow(),d&&o.Append(e.Parse("\\scriptstyle\\llap{"+d+"}",this.stack.env).mml()),o.Append(p.With({texClass:t.TEXCLASS.ORD})),D&&o.Append(e.Parse("\\scriptstyle\\rlap{"+D+"}",this.stack.env).mml()))}o&&this.Push(o),this.CD_cell(a)},CD_cell:function(e){var a=this.stack.Top();(a.table||[]).length%2===0&&0===(a.row||[]).length&&this.Push(t.mpadded().With({height:"8.5pt",depth:"2pt"})),this.Push(i.cell().With({isEntry:!0,name:e}))},CD_minwidth:function(t){this.stack.env.CD_minw=this.GetDimen(t)},CD_minheight:function(t){this.stack.env.CD_minh=this.GetDimen(t)}})}),MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/AMScd.js");