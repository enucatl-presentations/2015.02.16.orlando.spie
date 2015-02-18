/*
 *  /MathJax/extensions/TeX/newcommand.js
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
MathJax.Extension["TeX/newcommand"]={version:"2.5.0"},MathJax.Hub.Register.StartupHook("TeX Jax Ready",function(){var t=MathJax.InputJax.TeX,e=t.Definitions;e.Add({macros:{newcommand:"NewCommand",renewcommand:"NewCommand",newenvironment:"NewEnvironment",renewenvironment:"NewEnvironment",def:"MacroDef",let:"Let"}},null,!0),t.Parse.Augment({NewCommand:function(e){var i=this.trimSpaces(this.GetArgument(e)),s=this.GetBrackets(e),r=this.GetBrackets(e),n=this.GetArgument(e);"\\"===i.charAt(0)&&(i=i.substr(1)),i.match(/^(.|[a-z]+)$/i)||t.Error(["IllegalControlSequenceName","Illegal control sequence name for %1",e]),s&&(s=this.trimSpaces(s),s.match(/^[0-9]+$/)||t.Error(["IllegalParamNumber","Illegal number of parameters specified in %1",e])),this.setDef(i,["Macro",n,s,r])},NewEnvironment:function(e){var i=this.trimSpaces(this.GetArgument(e)),s=this.GetBrackets(e),r=this.GetBrackets(e),n=this.GetArgument(e),a=this.GetArgument(e);s&&(s=this.trimSpaces(s),s.match(/^[0-9]+$/)||t.Error(["IllegalParamNumber","Illegal number of parameters specified in %1",e])),this.setEnv(i,["BeginEnv",[null,"EndEnv"],n,a,s,r])},MacroDef:function(t){var e=this.GetCSname(t),i=this.GetTemplate(t,"\\"+e),s=this.GetArgument(t);i instanceof Array?this.setDef(e,["MacroWithTemplate",s].concat(i)):this.setDef(e,["Macro",s,i])},Let:function(t){var i,s=this.GetCSname(t),r=this.GetNext();"="===r&&(this.i++,r=this.GetNext()),"\\"===r?(t=this.GetCSname(t),i=this.csFindMacro(t),i||(e.mathchar0mi[t]?i=["csMathchar0mi",e.mathchar0mi[t]]:e.mathchar0mo[t]?i=["csMathchar0mo",e.mathchar0mo[t]]:e.mathchar7[t]?i=["csMathchar7",e.mathchar7[t]]:null!=e.delimiter["\\"+t]&&(i=["csDelimiter",e.delimiter["\\"+t]]))):(i=["Macro",r],this.i++),this.setDef(s,i)},setDef:function(t,i){i.isUser=!0,e.macros[t]=i},setEnv:function(t,i){i.isUser=!0,e.environment[t]=i},GetCSname:function(e){var i=this.GetNext();"\\"!==i&&t.Error(["MissingCS","%1 must be followed by a control sequence",e]);var s=this.trimSpaces(this.GetArgument(e));return s.substr(1)},GetTemplate:function(e,i){var s,r=[],n=0;s=this.GetNext();for(var a=this.i;this.i<this.string.length;){if(s=this.GetNext(),"#"===s)a!==this.i&&(r[n]=this.string.substr(a,this.i-a)),s=this.string.charAt(++this.i),s.match(/^[1-9]$/)||t.Error(["CantUseHash2","Illegal use of # in template for %1",i]),parseInt(s)!=++n&&t.Error(["SequentialParam","Parameters for %1 must be numbered sequentially",i]),a=this.i+1;else if("{"===s)return a!==this.i&&(r[n]=this.string.substr(a,this.i-a)),r.length>0?[n,r]:n;this.i++}t.Error(["MissingReplacementString","Missing replacement string for definition of %1",e])},MacroWithTemplate:function(e,i,s,r){if(s){var n=[];this.GetNext(),r[0]&&!this.MatchParam(r[0])&&t.Error(["MismatchUseDef","Use of %1 doesn't match its definition",e]);for(var a=0;s>a;a++)n.push(this.GetParameter(e,r[a+1]));i=this.SubstituteArgs(n,i)}this.string=this.AddArgs(i,this.string.slice(this.i)),this.i=0,++this.macroCount>t.config.MAXMACROS&&t.Error(["MaxMacroSub1","MathJax maximum macro substitution count exceeded; is there a recursive macro call?"])},BeginEnv:function(t,e,i,s,r){if(s){var n=[];if(null!=r){var a=this.GetBrackets("\\begin{"+name+"}");n.push(null==a?r:a)}for(var h=n.length;s>h;h++)n.push(this.GetArgument("\\begin{"+name+"}"));e=this.SubstituteArgs(n,e),i=this.SubstituteArgs([],i)}return this.string=this.AddArgs(e,this.string.slice(this.i)),this.i=0,t},EndEnv:function(t,e,i){var s="\\end{\\end\\"+t.name+"}";return this.string=this.AddArgs(i,s+this.string.slice(this.i)),this.i=0,null},GetParameter:function(e,i){if(null==i)return this.GetArgument(e);for(var s=this.i,r=0,n=0;this.i<this.string.length;)if("{"===this.string.charAt(this.i))this.i===s&&(n=1),this.GetArgument(e),r=this.i-s;else{if(this.MatchParam(i))return n&&(s++,r-=2),this.string.substr(s,r);this.i++,r++,n=0}t.Error(["RunawayArgument","Runaway argument for %1?",e])},MatchParam:function(t){return this.string.substr(this.i,t.length)!==t?0:(this.i+=t.length,1)}}),t.Environment=function(t){e.environment[t]=["BeginEnv","EndEnv"].concat([].slice.call(arguments,1)),e.environment[t].isUser=!0},MathJax.Hub.Startup.signal.Post("TeX newcommand Ready")}),MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/newcommand.js");