/*
 *  /MathJax/extensions/HTML-CSS/handle-floats.js
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
MathJax.Extension["HTML-CSS/handle-floats"]={version:"2.5.0"},MathJax.Hub.Config({"HTML-CSS":{styles:{".MathJax_Display":{display:"table-cell",padding:"1em 0 ! important",width:MathJax.Hub.Browser.isMSIE&&(document.documentMode||0)<8?"100%":"1000em"}}}}),MathJax.Hub.Register.StartupHook("HTML-CSS Jax Ready",function(){var a=MathJax.OutputJax["HTML-CSS"],t=a.Translate;a.Augment({Translate:function(e,n){if(t.call(this,e,n),e.MathJax.elementJax.HTMLCSS.display){var s=e.nextSibling;if(!s||"MathJax_MSIE_Separator"!==s.className){var l=a.Element("span",{className:"MathJax_MSIE_Separator"});e.parentNode.insertBefore(l,s)}}}}),MathJax.Hub.Startup.signal.Post("HTML-CSS handle-floats Ready")}),MathJax.Ajax.loadComplete("[MathJax]/extensions/HTML-CSS/handle-floats.js");