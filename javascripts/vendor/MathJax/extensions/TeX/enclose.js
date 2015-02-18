/*
 *  /MathJax/extensions/TeX/enclose.js
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
MathJax.Extension["TeX/enclose"]={version:"2.5.0",ALLOWED:{arrow:1,color:1,mathcolor:1,background:1,mathbackground:1,padding:1,thickness:1}},MathJax.Hub.Register.StartupHook("TeX Jax Ready",function(){var a=MathJax.InputJax.TeX,e=MathJax.ElementJax.mml,t=MathJax.Extension["TeX/enclose"].ALLOWED;a.Definitions.Add({macros:{enclose:"Enclose"}},null,!0),a.Parse.Augment({Enclose:function(a){var n=this.GetArgument(a),o=this.GetBrackets(a),s=this.ParseArg(a),r={notation:n.replace(/,/g," ")};if(o){o=o.replace(/ /g,"").split(/,/);for(var i=0,l=o.length;l>i;i++){var c=o[i].split(/[:=]/);t[c[0]]&&(c[1]=c[1].replace(/^"(.*)"$/,"$1"),"true"===c[1]&&(c[1]=!0),"false"===c[1]&&(c[1]=!1),"arrow"===c[0]&&c[1]?r.notation=r.notation+" updiagonalarrow":r[c[0]]=c[1])}}this.Push(e.menclose(s).With(r))}}),MathJax.Hub.Startup.signal.Post("TeX enclose Ready")}),MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/enclose.js");