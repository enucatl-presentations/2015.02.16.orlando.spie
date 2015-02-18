/*
 *  /MathJax/extensions/TeX/HTML.js
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
MathJax.Extension["TeX/HTML"]={version:"2.5.0"},MathJax.Hub.Register.StartupHook("TeX Jax Ready",function(){var t=MathJax.InputJax.TeX,e=t.Definitions;e.Add({macros:{href:"HREF_attribute","class":"CLASS_attribute",style:"STYLE_attribute",cssId:"ID_attribute"}},null,!0),t.Parse.Augment({HREF_attribute:function(t){var e=this.GetArgument(t),a=this.GetArgumentMML(t);this.Push(a.With({href:e}))},CLASS_attribute:function(t){var e=this.GetArgument(t),a=this.GetArgumentMML(t);null!=a["class"]&&(e=a["class"]+" "+e),this.Push(a.With({"class":e}))},STYLE_attribute:function(t){var e=this.GetArgument(t),a=this.GetArgumentMML(t);null!=a.style&&(";"!==e.charAt(e.length-1)&&(e+=";"),e=a.style+" "+e),this.Push(a.With({style:e}))},ID_attribute:function(t){var e=this.GetArgument(t),a=this.GetArgumentMML(t);this.Push(a.With({id:e}))},GetArgumentMML:function(t){var e=this.ParseArg(t);return e.inferred&&1==e.data.length?e=e.data[0]:delete e.inferred,e}}),MathJax.Hub.Startup.signal.Post("TeX HTML Ready")}),MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/HTML.js");