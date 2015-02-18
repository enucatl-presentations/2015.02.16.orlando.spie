/*
 *  /MathJax/extensions/TeX/boldsymbol.js
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
MathJax.Extension["TeX/boldsymbol"]={version:"2.5.0"},MathJax.Hub.Register.StartupHook("TeX Jax Ready",function(){var t=MathJax.ElementJax.mml,a=MathJax.InputJax.TeX,o=a.Definitions,s={};s[t.VARIANT.NORMAL]=t.VARIANT.BOLD,s[t.VARIANT.ITALIC]=t.VARIANT.BOLDITALIC,s[t.VARIANT.FRAKTUR]=t.VARIANT.BOLDFRAKTUR,s[t.VARIANT.SCRIPT]=t.VARIANT.BOLDSCRIPT,s[t.VARIANT.SANSSERIF]=t.VARIANT.BOLDSANSSERIF,s["-tex-caligraphic"]="-tex-caligraphic-bold",s["-tex-oldstyle"]="-tex-oldstyle-bold",o.Add({macros:{boldsymbol:"Boldsymbol"}},null,!0),a.Parse.Augment({mmlToken:function(a){if(this.stack.env.boldsymbol){var o=a.Get("mathvariant");a.mathvariant=null==o?t.VARIANT.BOLD:s[o]||o}return a},Boldsymbol:function(t){var a=this.stack.env.boldsymbol,o=this.stack.env.font;this.stack.env.boldsymbol=!0,this.stack.env.font=null;var s=this.ParseArg(t);this.stack.env.font=o,this.stack.env.boldsymbol=a,this.Push(s)}}),MathJax.Hub.Startup.signal.Post("TeX boldsymbol Ready")}),MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/boldsymbol.js");