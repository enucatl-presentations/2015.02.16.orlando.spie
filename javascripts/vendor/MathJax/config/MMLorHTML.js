/*
 *  /MathJax/config/MMLorHTML.js
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
!function(t,a){var e=MathJax.Hub.CombineConfig("MMLorHTML",{prefer:{MSIE:"MML",Firefox:"HTML",Opera:"HTML",Chrome:"HTML",Safari:"HTML",other:"HTML"}}),r={Firefox:3,Opera:9.52,MSIE:6,Chrome:.3,Safari:2,Konqueror:4},o="0.0"===a.version||a.versionAtLeast(r[a]||0),M=a.isFirefox&&a.versionAtLeast("1.5")||a.isMSIE&&a.hasMathPlayer||a.isSafari&&a.versionAtLeast("5.0")||a.isOpera&&a.versionAtLeast("9.52");t.Register.StartupHook("End Config",function(){var a=e.prefer&&"object"==typeof e.prefer?e.prefer[MathJax.Hub.Browser]||e.prefer.other||"HTML":e.prefer;o||M?!M||"MML"!==a&&o?(MathJax.OutputJax["HTML-CSS"]?MathJax.OutputJax["HTML-CSS"].Register("jax/mml"):t.config.jax.unshift("output/HTML-CSS"),t.Startup.signal.Post("HTML-CSS output selected")):(MathJax.OutputJax.NativeMML?MathJax.OutputJax.NativeMML.Register("jax/mml"):t.config.jax.unshift("output/NativeMML"),t.Startup.signal.Post("NativeMML output selected")):(t.PreProcess.disabled=!0,t.prepareScripts.disabled=!0,MathJax.Message.Set(["MathJaxNotSupported","Your browser does not support MathJax"],null,4e3),t.Startup.signal.Post("MathJax not supported"))})}(MathJax.Hub,MathJax.Hub.Browser),MathJax.Ajax.loadComplete("[MathJax]/config/MMLorHTML.js");