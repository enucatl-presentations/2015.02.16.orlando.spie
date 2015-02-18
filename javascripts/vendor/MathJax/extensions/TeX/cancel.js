/*
 *  /MathJax/extensions/TeX/cancel.js
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
MathJax.Extension["TeX/cancel"]={version:"2.5.0",ALLOWED:{color:1,mathcolor:1,background:1,mathbackground:1,padding:1,thickness:1}},MathJax.Hub.Register.StartupHook("TeX Jax Ready",function(){var t=MathJax.InputJax.TeX,e=MathJax.ElementJax.mml,a=MathJax.Extension["TeX/cancel"];a.setAttributes=function(t,e){if(""!==e){e=e.replace(/ /g,"").split(/,/);for(var n=0,s=e.length;s>n;n++){var c=e[n].split(/[:=]/);a.ALLOWED[c[0]]&&("true"===c[1]&&(c[1]=!0),"false"===c[1]&&(c[1]=!1),t[c[0]]=c[1])}}return t},t.Definitions.Add({macros:{cancel:["Cancel",e.NOTATION.UPDIAGONALSTRIKE],bcancel:["Cancel",e.NOTATION.DOWNDIAGONALSTRIKE],xcancel:["Cancel",e.NOTATION.UPDIAGONALSTRIKE+" "+e.NOTATION.DOWNDIAGONALSTRIKE],cancelto:"CancelTo"}},null,!0),t.Parse.Augment({Cancel:function(t,n){var s=this.GetBrackets(t,""),c=this.ParseArg(t),i=a.setAttributes({notation:n},s);this.Push(e.menclose(c).With(i))},CancelTo:function(t){var n=this.ParseArg(t),s=this.GetBrackets(t,""),c=this.ParseArg(t),i=a.setAttributes({notation:e.NOTATION.UPDIAGONALSTRIKE+" "+e.NOTATION.UPDIAGONALARROW},s);n=e.mpadded(n).With({depth:"-.1em",height:"+.1em",voffset:".1em"}),this.Push(e.msup(e.menclose(c).With(i),n))}}),MathJax.Hub.Startup.signal.Post("TeX cancel Ready")}),MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/cancel.js");