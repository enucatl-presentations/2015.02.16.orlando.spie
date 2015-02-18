/*
 *  /MathJax/extensions/TeX/verb.js
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
MathJax.Extension["TeX/verb"]={version:"2.5.0"},MathJax.Hub.Register.StartupHook("TeX Jax Ready",function(){var t=MathJax.ElementJax.mml,i=MathJax.InputJax.TeX,e=i.Definitions;e.Add({macros:{verb:"Verb"}},null,!0),i.Parse.Augment({Verb:function(e){var a=this.GetNext(),s=++this.i;for(""==a&&i.Error(["MissingArgFor","Missing argument for %1",e]);this.i<this.string.length&&this.string.charAt(this.i)!=a;)this.i++;this.i==this.string.length&&i.Error(["NoClosingDelim","Can't find closing delimiter for %1",e]);var r=this.string.slice(s,this.i).replace(/ /g,"\xa0");this.i++,this.Push(t.mtext(r).With({mathvariant:t.VARIANT.MONOSPACE}))}}),MathJax.Hub.Startup.signal.Post("TeX verb Ready")}),MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/verb.js");