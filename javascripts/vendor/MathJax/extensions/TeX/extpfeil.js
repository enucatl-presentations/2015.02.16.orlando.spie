/*
 *  /MathJax/extensions/TeX/extpfeil.js
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
MathJax.Extension["TeX/extpfeil"]={version:"2.5.0"},MathJax.Hub.Register.StartupHook("TeX Jax Ready",function(){var t=MathJax.InputJax.TeX,e=t.Definitions;e.Add({macros:{xtwoheadrightarrow:["Extension","AMSmath"],xtwoheadleftarrow:["Extension","AMSmath"],xmapsto:["Extension","AMSmath"],xlongequal:["Extension","AMSmath"],xtofrom:["Extension","AMSmath"],Newextarrow:["Extension","AMSmath"]}},null,!0),MathJax.Hub.Register.StartupHook("TeX AMSmath Ready",function(){MathJax.Hub.Insert(e,{macros:{xtwoheadrightarrow:["xArrow",8608,12,16],xtwoheadleftarrow:["xArrow",8606,17,13],xmapsto:["xArrow",8614,6,7],xlongequal:["xArrow",61,7,7],xtofrom:["xArrow",8644,12,12],Newextarrow:"NewExtArrow"}})}),t.Parse.Augment({NewExtArrow:function(r){var a=this.GetArgument(r),o=this.GetArgument(r),n=this.GetArgument(r);a.match(/^\\([a-z]+|.)$/i)||t.Error(["NewextarrowArg1","First argument to %1 must be a control sequence name",r]),o.match(/^(\d+),(\d+)$/)||t.Error(["NewextarrowArg2","Second argument to %1 must be two integers separated by a comma",r]),n.match(/^(\d+|0x[0-9A-F]+)$/i)||t.Error(["NewextarrowArg3","Third argument to %1 must be a unicode character number",r]),a=a.substr(1),o=o.split(","),n=parseInt(n),e.macros[a]=["xArrow",n,parseInt(o[0]),parseInt(o[1])]}}),MathJax.Hub.Startup.signal.Post("TeX extpfeil Ready")}),MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/extpfeil.js");