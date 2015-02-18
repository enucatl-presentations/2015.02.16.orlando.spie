/*
 *  /MathJax/jax/input/TeX/config.js
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
MathJax.InputJax.TeX=MathJax.InputJax({id:"TeX",version:"2.5.0",directory:MathJax.InputJax.directory+"/TeX",extensionDir:MathJax.InputJax.extensionDir+"/TeX",config:{TagSide:"right",TagIndent:"0.8em",MultLineWidth:"85%",equationNumbers:{autoNumber:"none",formatNumber:function(t){return t},formatTag:function(t){return"("+t+")"},formatID:function(t){return"mjx-eqn-"+String(t).replace(/[:"'<>&]/g,"")},formatURL:function(t){return"#"+escape(t)},useLabelIds:!0}}}),MathJax.InputJax.TeX.Register("math/tex"),MathJax.InputJax.TeX.loadComplete("config.js");