/*
 *  /MathJax/extensions/TeX/AMSmath.js
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
MathJax.Extension["TeX/AMSmath"]={version:"2.5.0",number:0,startNumber:0,IDs:{},eqIDs:{},labels:{},eqlabels:{},refs:[]},MathJax.Hub.Register.StartupHook("TeX Jax Ready",function(){var t=MathJax.ElementJax.mml,e=MathJax.InputJax.TeX,a=MathJax.Extension["TeX/AMSmath"],i=e.Definitions,l=e.Stack.Item,n=e.config.equationNumbers,r=function(t){for(var a=[],i=0,l=t.length;l>i;i++)a[i]=e.Parse.prototype.Em(t[i]);return a.join(" ")};i.Add({mathchar0mo:{iiiint:["2A0C",{texClass:t.TEXCLASS.OP}]},macros:{mathring:["Accent","2DA"],nobreakspace:"Tilde",negmedspace:["Spacer",t.LENGTH.NEGATIVEMEDIUMMATHSPACE],negthickspace:["Spacer",t.LENGTH.NEGATIVETHICKMATHSPACE],idotsint:["MultiIntegral","\\int\\cdots\\int"],dddot:["Accent","20DB"],ddddot:["Accent","20DC"],sideset:["Macro","\\mathop{\\mathop{\\rlap{\\phantom{#3}}}\\nolimits#1\\!\\mathop{#3}\\nolimits#2}",3],boxed:["Macro","\\fbox{$\\displaystyle{#1}$}",1],tag:"HandleTag",notag:"HandleNoTag",label:"HandleLabel",ref:"HandleRef",eqref:["HandleRef",!0],substack:["Macro","\\begin{subarray}{c}#1\\end{subarray}",1],injlim:["NamedOp","inj&thinsp;lim"],projlim:["NamedOp","proj&thinsp;lim"],varliminf:["Macro","\\mathop{\\underline{\\mmlToken{mi}{lim}}}"],varlimsup:["Macro","\\mathop{\\overline{\\mmlToken{mi}{lim}}}"],varinjlim:["Macro","\\mathop{\\underrightarrow{\\mmlToken{mi}{lim}\\Rule{-1pt}{0pt}{1pt}}\\Rule{0pt}{0pt}{.45em}}"],varprojlim:["Macro","\\mathop{\\underleftarrow{\\mmlToken{mi}{lim}\\Rule{-1pt}{0pt}{1pt}}\\Rule{0pt}{0pt}{.45em}}"],DeclareMathOperator:"HandleDeclareOp",operatorname:"HandleOperatorName",genfrac:"Genfrac",frac:["Genfrac","","","",""],tfrac:["Genfrac","","","",1],dfrac:["Genfrac","","","",0],binom:["Genfrac","(",")","0",""],tbinom:["Genfrac","(",")","0",1],dbinom:["Genfrac","(",")","0",0],cfrac:"CFrac",shoveleft:["HandleShove",t.ALIGN.LEFT],shoveright:["HandleShove",t.ALIGN.RIGHT],xrightarrow:["xArrow",8594,5,6],xleftarrow:["xArrow",8592,7,3]},environment:{align:["AMSarray",null,!0,!0,"rlrlrlrlrlrl",r([0,2,0,2,0,2,0,2,0,2,0])],"align*":["AMSarray",null,!1,!0,"rlrlrlrlrlrl",r([0,2,0,2,0,2,0,2,0,2,0])],multline:["Multline",null,!0],"multline*":["Multline",null,!1],split:["AMSarray",null,!1,!1,"rl",r([0])],gather:["AMSarray",null,!0,!0,"c"],"gather*":["AMSarray",null,!1,!0,"c"],alignat:["AlignAt",null,!0,!0],"alignat*":["AlignAt",null,!1,!0],alignedat:["AlignAt",null,!1,!1],aligned:["AlignedAMSArray",null,null,null,"rlrlrlrlrlrl",r([0,2,0,2,0,2,0,2,0,2,0]),".5em","D"],gathered:["AlignedAMSArray",null,null,null,"c",null,".5em","D"],subarray:["Array",null,null,null,null,r([0,0,0,0]),"0.1em","S",1],smallmatrix:["Array",null,null,null,"c",r([1/3]),".2em","S",1],equation:["EquationBegin","Equation",!0],"equation*":["EquationBegin","EquationStar",!1],eqnarray:["AMSarray",null,!0,!0,"rcl",t.LENGTH.THICKMATHSPACE,".5em"],"eqnarray*":["AMSarray",null,!1,!0,"rcl",t.LENGTH.THICKMATHSPACE,".5em"]},delimiter:{"\\lvert":["2223",{texClass:t.TEXCLASS.OPEN}],"\\rvert":["2223",{texClass:t.TEXCLASS.CLOSE}],"\\lVert":["2225",{texClass:t.TEXCLASS.OPEN}],"\\rVert":["2225",{texClass:t.TEXCLASS.CLOSE}]}},null,!0),e.Parse.Augment({HandleTag:function(a){var i=this.GetStar(),l=this.trimSpaces(this.GetArgument(a)),r=l;i||(l=n.formatTag(l));var s=this.stack.global;s.tagID=r,s.notags&&e.Error(["CommandNotAllowedInEnv","%1 not allowed in %2 environment",a,s.notags]),s.tag&&e.Error(["MultipleCommand","Multiple %1",a]),s.tag=t.mtd.apply(t,this.InternalMath(l)).With({id:n.formatID(r)})},HandleNoTag:function(){this.stack.global.tag&&delete this.stack.global.tag,this.stack.global.notag=!0},HandleLabel:function(t){var i=this.stack.global,l=this.GetArgument(t);""!==l&&(a.refUpdate||(i.label&&e.Error(["MultipleCommand","Multiple %1",t]),i.label=l,(a.labels[l]||a.eqlabels[l])&&e.Error(["MultipleLabel","Label '%1' multiply defined",l]),a.eqlabels[l]={tag:"???",id:""}))},HandleRef:function(e,i){var l=this.GetArgument(e),r=a.labels[l]||a.eqlabels[l];r||(r={tag:"???",id:""},a.badref=!a.refUpdate);var s=r.tag;i&&(s=n.formatTag(s)),this.Push(t.mrow.apply(t,this.InternalMath(s)).With({href:n.formatURL(r.id),"class":"MathJax_ref"}))},HandleDeclareOp:function(t){var a=this.GetStar()?"":"\\nolimits",i=this.trimSpaces(this.GetArgument(t));"\\"==i.charAt(0)&&(i=i.substr(1));var l=this.GetArgument(t);l=l.replace(/\*/g,"\\text{*}").replace(/-/g,"\\text{-}"),e.Definitions.macros[i]=["Macro","\\mathop{\\rm "+l+"}"+a]},HandleOperatorName:function(t){var e=this.GetStar()?"":"\\nolimits",a=this.trimSpaces(this.GetArgument(t));a=a.replace(/\*/g,"\\text{*}").replace(/-/g,"\\text{-}"),this.string="\\mathop{\\rm "+a+"}"+e+" "+this.string.slice(this.i),this.i=0},HandleShove:function(t,a){var i=this.stack.Top();("multline"!==i.type||i.data.length)&&e.Error(["CommandAtTheBeginingOfLine","%1 must come at the beginning of the line",t]),i.data.shove=a},CFrac:function(a){var i=this.trimSpaces(this.GetBrackets(a,"")),l=this.GetArgument(a),n=this.GetArgument(a),r=t.mfrac(e.Parse("\\strut\\textstyle{"+l+"}",this.stack.env).mml(),e.Parse("\\strut\\textstyle{"+n+"}",this.stack.env).mml());i={l:t.ALIGN.LEFT,r:t.ALIGN.RIGHT,"":""}[i],null==i&&e.Error(["IllegalAlign","Illegal alignment specified in %1",a]),i&&(r.numalign=r.denomalign=i),this.Push(r)},Genfrac:function(a,i,l,n,r){i=null==i?this.GetDelimiterArg(a):this.convertDelimiter(i),l=null==l?this.GetDelimiterArg(a):this.convertDelimiter(l),null==n&&(n=this.GetArgument(a)),null==r&&(r=this.trimSpaces(this.GetArgument(a)));var s=this.ParseArg(a),o=this.ParseArg(a),h=t.mfrac(s,o);if(""!==n&&(h.linethickness=n),(i||l)&&(h=e.fixedFence(i,h.With({texWithDelims:!0}),l)),""!==r){var g=["D","T","S","SS"][r];null==g&&e.Error(["BadMathStyleFor","Bad math style for %1",a]),h=t.mstyle(h),"D"===g?(h.displaystyle=!0,h.scriptlevel=0):(h.displaystyle=!1,h.scriptlevel=r-1)}this.Push(h)},Multline:function(t,a){return this.Push(t),this.checkEqnEnv(),l.multline(a,this.stack).With({arraydef:{displaystyle:!0,rowspacing:".5em",width:e.config.MultLineWidth,columnwidth:"100%",side:e.config.TagSide,minlabelspacing:e.config.TagIndent}})},AMSarray:function(t,a,i,n,r){return this.Push(t),i&&this.checkEqnEnv(),n=n.replace(/[^clr]/g,"").split("").join(" "),n=n.replace(/l/g,"left").replace(/r/g,"right").replace(/c/g,"center"),l.AMSarray(t.name,a,i,this.stack).With({arraydef:{displaystyle:!0,rowspacing:".5em",columnalign:n,columnspacing:r||"1em",rowspacing:"3pt",side:e.config.TagSide,minlabelspacing:e.config.TagIndent}})},AlignedAMSArray:function(t){var e=this.GetBrackets("\\begin{"+t.name+"}");return this.setArrayAlign(this.AMSarray.apply(this,arguments),e)},AlignAt:function(t,a,i){var l,n,r="",s=[];for(i||(n=this.GetBrackets("\\begin{"+t.name+"}")),l=this.GetArgument("\\begin{"+t.name+"}"),l.match(/[^0-9]/)&&e.Error(["PositiveIntegerArg","Argument to %1 must me a positive integer","\\begin{"+t.name+"}"]);l>0;)r+="rl",s.push("0em 0em"),l--;if(s=s.join(" "),i)return this.AMSarray(t,a,i,r,s);var o=this.Array.call(this,t,null,null,r,s,".5em","D");return this.setArrayAlign(o,n)},EquationBegin:function(t,e){return this.checkEqnEnv(),this.stack.global.forcetag=e&&"none"!==n.autoNumber,t},EquationStar:function(t,e){return this.stack.global.tagged=!0,e},checkEqnEnv:function(){this.stack.global.eqnenv&&e.Error(["ErroneousNestingEq","Erroneous nesting of equation structures"]),this.stack.global.eqnenv=!0},MultiIntegral:function(t,e){var a=this.GetNext();if("\\"===a){var i=this.i;a=this.GetArgument(t),this.i=i,"\\limits"===a&&(e="\\idotsint"===t?"\\!\\!\\mathop{\\,\\,"+e+"}":"\\!\\!\\!\\mathop{\\,\\,\\,"+e+"}")}this.string=e+" "+this.string.slice(this.i),this.i=0},xArrow:function(a,i,l,n){var r={width:"+"+(l+n)+"mu",lspace:l+"mu"},s=this.GetBrackets(a),o=this.ParseArg(a),h=t.mo(t.chars(String.fromCharCode(i))).With({stretchy:!0,texClass:t.TEXCLASS.REL}),g=t.munderover(h);g.SetData(g.over,t.mpadded(o).With(r).With({voffset:".15em"})),s&&(s=e.Parse(s,this.stack.env).mml(),g.SetData(g.under,t.mpadded(s).With(r).With({voffset:"-.24em"}))),this.Push(g.With({subsupOK:!0}))},GetDelimiterArg:function(t){var a=this.trimSpaces(this.GetArgument(t));return""==a?null:(null==i.delimiter[a]&&e.Error(["MissingOrUnrecognizedDelim","Missing or unrecognized delimiter for %1",t]),this.convertDelimiter(a))},GetStar:function(){var t="*"===this.GetNext();return t&&this.i++,t}}),l.Augment({autoTag:function(){var i=this.global;if(!i.notag){a.number++,i.tagID=n.formatNumber(a.number.toString());var l=e.Parse("\\text{"+n.formatTag(i.tagID)+"}",{}).mml();i.tag=t.mtd(l).With({id:n.formatID(i.tagID)})}},getTag:function(){var t=this.global,e=t.tag;if(t.tagged=!0,t.label&&(n.useLabelIds&&(e.id=n.formatID(t.label)),a.eqlabels[t.label]={tag:t.tagID,id:e.id}),document.getElementById(e.id)||a.IDs[e.id]||a.eqIDs[e.id]){var i,l=0;do l++,i=e.id+"_"+l;while(document.getElementById(i)||a.IDs[i]||a.eqIDs[i]);e.id=i,t.label&&(a.eqlabels[t.label].id=i)}return a.eqIDs[e.id]=1,this.clearTag(),e},clearTag:function(){var t=this.global;delete t.tag,delete t.tagID,delete t.label},fixInitialMO:function(e){for(var a=0,i=e.length;i>a;a++)if(e[a]&&"mspace"!==e[a].type&&("texatom"!==e[a].type||e[a].data[0]&&e[a].data[0].data.length)){e[a].isEmbellished()&&e.unshift(t.mi());break}}}),l.multline=l.array.Subclass({type:"multline",Init:function(t,e){this.SUPER(arguments).Init.apply(this),this.numbered=t&&"none"!==n.autoNumber,this.save={notag:e.global.notag},e.global.tagged=!t&&!e.global.forcetag},EndEntry:function(){this.table.length&&this.fixInitialMO(this.data);var e=t.mtd.apply(t,this.data);this.data.shove&&(e.columnalign=this.data.shove),this.row.push(e),this.data=[]},EndRow:function(){1!=this.row.length&&e.Error(["MultlineRowsOneCol","The rows within the %1 environment must have exactly one column","multline"]),this.table.push(this.row),this.row=[]},EndTable:function(){if(this.SUPER(arguments).EndTable.call(this),this.table.length){var e,a=this.table.length-1,i=-1;for(this.table[0][0].columnalign||(this.table[0][0].columnalign=t.ALIGN.LEFT),this.table[a][0].columnalign||(this.table[a][0].columnalign=t.ALIGN.RIGHT),!this.global.tag&&this.numbered&&this.autoTag(),this.global.tag&&!this.global.notags&&(i="left"===this.arraydef.side?0:this.table.length-1,this.table[i]=[this.getTag()].concat(this.table[i])),e=0,a=this.table.length;a>e;e++){var l=e===i?t.mlabeledtr:t.mtr;this.table[e]=l.apply(t,this.table[e])}}this.global.notag=this.save.notag}}),l.AMSarray=l.array.Subclass({type:"AMSarray",Init:function(t,e,a,i){this.SUPER(arguments).Init.apply(this),this.numbered=e&&"none"!==n.autoNumber,this.save={notags:i.global.notags,notag:i.global.notag},i.global.notags=a?null:t,i.global.tagged=!e&&!i.global.forcetag},EndEntry:function(){this.row.length&&this.fixInitialMO(this.data),this.row.push(t.mtd.apply(t,this.data)),this.data=[]},EndRow:function(){var e=t.mtr;!this.global.tag&&this.numbered&&this.autoTag(),this.global.tag&&!this.global.notags?(this.row=[this.getTag()].concat(this.row),e=t.mlabeledtr):this.clearTag(),this.numbered&&delete this.global.notag,this.table.push(e.apply(t,this.row)),this.row=[]},EndTable:function(){this.SUPER(arguments).EndTable.call(this),this.global.notags=this.save.notags,this.global.notag=this.save.notag}}),l.start.Augment({oldCheckItem:l.start.prototype.checkItem,checkItem:function(i){if("stop"===i.type){var r=this.mmlData(),s=this.global;if(!a.display||s.tag||s.tagged||s.isInner||"all"!==n.autoNumber&&!s.forcetag||this.autoTag(),s.tag){var o=[this.getTag(),t.mtd(r)],h={side:e.config.TagSide,minlabelspacing:e.config.TagIndent,columnalign:r.displayAlign,displaystyle:"inherit"};r.displayAlign===t.INDENTALIGN.LEFT?(h.width="100%","0"!==r.displayIndent&&(h.columnwidth=r.displayIndent+" fit",h.columnspacing="0",o=[o[0],t.mtd(),o[1]])):r.displayAlign===t.INDENTALIGN.RIGHT&&(h.width="100%","0"!==r.displayIndent&&(h.columnwidth="fit "+r.displayIndent,h.columnspacing="0",o[2]=t.mtd())),r=t.mtable(t.mlabeledtr.apply(t,o)).With(h)}return l.mml(r)}return this.oldCheckItem.call(this,i)}}),e.prefilterHooks.Add(function(t){a.display=t.display,a.number=a.startNumber,a.eqlabels=a.eqIDs={},a.badref=!1,a.refUpdate&&(a.number=t.script.MathJax.startNumber)}),e.postfilterHooks.Add(function(t){t.script.MathJax.startNumber=a.startNumber,a.startNumber=a.number,MathJax.Hub.Insert(a.IDs,a.eqIDs),MathJax.Hub.Insert(a.labels,a.eqlabels),a.badref&&!t.math.texError&&a.refs.push(t.script)},100),MathJax.Hub.Register.MessageHook("Begin Math Input",function(){a.refs=[],a.refUpdate=!1}),MathJax.Hub.Register.MessageHook("End Math Input",function(){if(a.refs.length){a.refUpdate=!0;for(var t=0,e=a.refs.length;e>t;t++)a.refs[t].MathJax.state=MathJax.ElementJax.STATE.UPDATE;return MathJax.Hub.processInput({scripts:a.refs,start:(new Date).getTime(),i:0,j:0,jax:{},jaxIDs:[]})}return null}),e.resetEquationNumbers=function(t,e){a.startNumber=t||0,e||(a.labels=a.IDs={})},MathJax.Hub.Startup.signal.Post("TeX AMSmath Ready")}),MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/AMSmath.js");