/*
 *  /MathJax/extensions/CHTML-preview.js
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
!function(e,t){var a=e.config.menuSettings,i=MathJax.Extension["CHTML-preview"]={version:"2.5.0",config:e.CombineConfig("CHTML-preview",{Chunks:{EqnChunk:1e4,EqnChunkFactor:1,EqnChunkDelay:0},color:"inherit!important",updateTime:30,updateDelay:6,messageStyle:"none",disabled:!1}),Config:function(){e.Config({"HTML-CSS":this.config.Chunks,SVG:this.config.Chunks}),MathJax.Ajax.Styles({".MathJax_Preview .MJXc-math":{color:this.config.color}});var t,i,o,s,n,r=this.config;r.disabled||null!=a.CHTMLpreview||e.Config({menuSettings:{CHTMLpreview:!0}}),e.Register.MessageHook("Begin Math Output",function(){!s&&a.CHTMLpreview&&"CommonHTML"!==a.renderer&&(t=e.processUpdateTime,i=e.processUpdateDelay,o=e.config.messageStyle,e.processUpdateTime=r.updateTime,e.processUpdateDelay=r.updateDelay,e.Config({messageStyle:r.messageStyle}),MathJax.Message.Clear(0,0),n=!0)}),e.Register.MessageHook("End Math Output",function(){!s&&n&&(e.processUpdateTime=t,e.processUpdateDelay=i,e.Config({messageStyle:o}),s=!0)})},Preview:function(e){if(a.CHTMLpreview&&"CommonHTML"!==a.renderer){var i=e.script.MathJax.preview||e.script.previousSibling;return i&&i.className===MathJax.Hub.config.preRemoveClass||(i=t.Element("span",{className:MathJax.Hub.config.preRemoveClass}),e.script.parentNode.insertBefore(i,e.script),e.script.MathJax.preview=i),i.innerHTML="",i.style.color="inherit",this.postFilter(i,e)}},postFilter:function(t,a){if(!a.math.root.toCommonHTML){var i=MathJax.Callback.Queue();i.Push(["Require",MathJax.Ajax,"[MathJax]/jax/output/CommonHTML/config.js"],["Require",MathJax.Ajax,"[MathJax]/jax/output/CommonHTML/jax.js"]),e.RestartAfter(i.Push({}))}a.math.root.toCommonHTML(t)},Register:function(t){e.Register.StartupHook(t+" Jax Require",function(){var e=MathJax.InputJax[t];e.postfilterHooks.Add(["Preview",MathJax.Extension["CHTML-preview"]],50)})}};i.Register("TeX"),i.Register("MathML"),i.Register("AsciiMath"),e.Register.StartupHook("End Config",["Config",i]),e.Startup.signal.Post("CHTML-preview Ready")}(MathJax.Hub,MathJax.HTML),MathJax.Ajax.loadComplete("[MathJax]/extensions/CHTML-preview.js");