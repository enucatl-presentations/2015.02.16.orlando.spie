/*
 *  /MathJax/extensions/TeX/action.js
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
MathJax.Extension["TeX/action"]={version:"2.5.0"},MathJax.Hub.Register.StartupHook("TeX Jax Ready",function(){var t=MathJax.InputJax.TeX,a=MathJax.ElementJax.mml;t.Definitions.Add({macros:{toggle:"Toggle",mathtip:"Mathtip",texttip:["Macro","\\mathtip{#1}{\\text{#2}}",2]}},null,!0),t.Parse.Augment({Toggle:function(e){for(var i,n=[];"\\endtoggle"!==(i=this.GetArgument(e));)n.push(t.Parse(i,this.stack.env).mml());this.Push(a.maction.apply(a,n).With({actiontype:a.ACTIONTYPE.TOGGLE}))},Mathtip:function(t){var e=this.ParseArg(t),i=this.ParseArg(t);this.Push(a.maction(e,i).With({actiontype:a.ACTIONTYPE.TOOLTIP}))}}),MathJax.Hub.Startup.signal.Post("TeX action Ready")}),MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/action.js");