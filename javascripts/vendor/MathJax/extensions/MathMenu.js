/*
 *  /MathJax/extensions/MathMenu.js
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
!function(e,t,o,n,i){var a="2.5.0",s=MathJax.Callback.Signal("menu");MathJax.Extension.MathMenu={version:a,signal:s};var r,u,l=function(e){return MathJax.Localization._.apply(MathJax.Localization,[["MathMenu",e]].concat([].slice.call(arguments,1)))},h=e.Browser.isPC,d=e.Browser.isMSIE,c=(document.documentMode||0)>8,m=h?null:"5px",M=e.CombineConfig("MathMenu",{delay:150,closeImg:o.urlRev(i.imageDir+"/CloseX-31.png"),showRenderer:!0,showMathPlayer:!0,showFontMenu:!1,showContext:!1,showDiscoverable:!1,showLocale:!0,showLocaleURL:!1,semanticsAnnotations:{TeX:["TeX","LaTeX","application/x-tex"],StarMath:["StarMath 5.0"],Maple:["Maple"],ContentMathML:["MathML-Content","application/mathml-content+xml"],OpenMath:["OpenMath"]},windowSettings:{status:"no",toolbar:"no",locationbar:"no",menubar:"no",directories:"no",personalbar:"no",resizable:"yes",scrollbars:"yes",width:400,height:300,left:Math.round((screen.width-400)/2),top:Math.round((screen.height-300)/3)},styles:{"#MathJax_About":{position:"fixed",left:"50%",width:"auto","text-align":"center",border:"3px outset",padding:"1em 2em","background-color":"#DDDDDD",color:"black",cursor:"default","font-family":"message-box","font-size":"120%","font-style":"normal","text-indent":0,"text-transform":"none","line-height":"normal","letter-spacing":"normal","word-spacing":"normal","word-wrap":"normal","white-space":"nowrap","float":"none","z-index":201,"border-radius":"15px","-webkit-border-radius":"15px","-moz-border-radius":"15px","-khtml-border-radius":"15px","box-shadow":"0px 10px 20px #808080","-webkit-box-shadow":"0px 10px 20px #808080","-moz-box-shadow":"0px 10px 20px #808080","-khtml-box-shadow":"0px 10px 20px #808080",filter:"progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color='gray', Positive='true')"},".MathJax_Menu":{position:"absolute","background-color":"white",color:"black",width:"auto",padding:h?"2px":"5px 0px",border:"1px solid #CCCCCC",margin:0,cursor:"default",font:"menu","text-align":"left","text-indent":0,"text-transform":"none","line-height":"normal","letter-spacing":"normal","word-spacing":"normal","word-wrap":"normal","white-space":"nowrap","float":"none","z-index":201,"border-radius":m,"-webkit-border-radius":m,"-moz-border-radius":m,"-khtml-border-radius":m,"box-shadow":"0px 10px 20px #808080","-webkit-box-shadow":"0px 10px 20px #808080","-moz-box-shadow":"0px 10px 20px #808080","-khtml-box-shadow":"0px 10px 20px #808080",filter:"progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color='gray', Positive='true')"},".MathJax_MenuItem":{padding:h?"2px 2em":"1px 2em",background:"transparent"},".MathJax_MenuArrow":{position:"absolute",right:".5em",color:"#666666","font-family":d?"'Arial unicode MS'":null},".MathJax_MenuActive .MathJax_MenuArrow":{color:"white"},".MathJax_MenuArrow.RTL":{left:".5em",right:"auto"},".MathJax_MenuCheck":{position:"absolute",left:".7em","font-family":d?"'Arial unicode MS'":null},".MathJax_MenuCheck.RTL":{right:".7em",left:"auto"},".MathJax_MenuRadioCheck":{position:"absolute",left:h?"1em":".7em"},".MathJax_MenuRadioCheck.RTL":{right:h?"1em":".7em",left:"auto"},".MathJax_MenuLabel":{padding:h?"2px 2em 4px 1.33em":"1px 2em 3px 1.33em","font-style":"italic"},".MathJax_MenuRule":{"border-top":h?"1px solid #CCCCCC":"1px solid #DDDDDD",margin:h?"4px 1px 0px":"4px 3px"},".MathJax_MenuDisabled":{color:"GrayText"},".MathJax_MenuActive":{"background-color":h?"Highlight":"#606872",color:h?"HighlightText":"white"},".MathJax_Menu_Close":{position:"absolute",width:"31px",height:"31px",top:"-15px",left:"-15px"}}});e.Register.StartupHook("MathEvents Ready",function(){r=MathJax.Extension.MathEvents.Event.False,u=MathJax.Extension.MathEvents.Hover});var p=MathJax.Menu=MathJax.Object.Subclass({version:a,items:[],posted:!1,title:null,margin:5,Init:function(){this.items=[].slice.call(arguments,0)},With:function(t){return t&&e.Insert(this,t),this},Post:function(e,o,n){e||(e=window.event);var i=document.getElementById("MathJax_MenuFrame");i||(i=p.Background(this),delete f.lastItem,delete f.lastMenu,delete p.skipUp,s.Post(["post",p.jax]),p.isRTL="rtl"===MathJax.Localization.fontDirection());var a=t.Element("div",{onmouseup:p.Mouseup,ondblclick:r,ondragstart:r,onselectstart:r,oncontextmenu:r,menuItem:this,className:"MathJax_Menu"});n||MathJax.Localization.setCSS(a);for(var u=0,l=this.items.length;l>u;u++)this.items[u].Create(a);p.isMobile&&t.addElement(a,"span",{className:"MathJax_Menu_Close",menu:o,ontouchstart:p.Close,ontouchend:r,onmousedown:p.Close,onmouseup:r},[["img",{src:M.closeImg,style:{width:"100%",height:"100%"}}]]),i.appendChild(a),this.posted=!0,a.style.width=a.offsetWidth+2+"px";var d=e.pageX,c=e.pageY;if(d||c||(d=e.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,c=e.clientY+document.body.scrollTop+document.documentElement.scrollTop),o){var m="left",x=o.offsetWidth;for(d=p.isMobile?30:x-2,c=0;o&&o!==i;)d+=o.offsetLeft,c+=o.offsetTop,o=o.parentNode;p.isMobile||(p.isRTL&&d-x-a.offsetWidth>this.margin||!p.isRTL&&d+a.offsetWidth>document.body.offsetWidth-this.margin)&&(m="right",d=Math.max(this.margin,d-x-a.offsetWidth+6)),h||(a.style["borderRadiusTop"+m]=0,a.style["WebkitBorderRadiusTop"+m]=0,a.style["MozBorderRadiusTop"+m]=0,a.style["KhtmlBorderRadiusTop"+m]=0)}else d+a.offsetWidth>document.body.offsetWidth-this.margin&&(d=document.body.offsetWidth-a.offsetWidth-this.margin),p.isMobile&&(d=Math.max(5,d-Math.floor(a.offsetWidth/2)),c-=20),p.skipUp=e.isContextMenu;return a.style.left=d+"px",a.style.top=c+"px",document.selection&&document.selection.empty&&document.selection.empty(),r(e)},Remove:function(e){s.Post(["unpost",p.jax]);var t=document.getElementById("MathJax_MenuFrame");return t&&(t.parentNode.removeChild(t),this.msieFixedPositionBug&&detachEvent("onresize",p.Resize)),p.jax.hover&&(delete p.jax.hover.nofade,u.UnHover(p.jax)),r(e)},Find:function(e){return this.FindN(1,e,[].slice.call(arguments,1))},FindId:function(e){return this.FindN(0,e,[].slice.call(arguments,1))},FindN:function(e,t,o){for(var n=0,i=this.items.length;i>n;n++)if(this.items[n].name[e]===t)return o.length?this.items[n].menu?this.items[n].menu.FindN(e,o[0],o.slice(1)):null:this.items[n];return null},IndexOf:function(e){return this.IndexOfN(1,e)},IndexOfId:function(e){return this.IndexOfN(0,e)},IndexOfN:function(e,t){for(var o=0,n=this.items.length;n>o;o++)if(this.items[o].name[e]===t)return o;return null}},{config:M,div:null,Close:function(e){return p.Event(e,this.menu||this.parentNode,this.menu?"Touchend":"Remove")},Remove:function(e){return p.Event(e,this,"Remove")},Mouseover:function(e){return p.Event(e,this,"Mouseover")},Mouseout:function(e){return p.Event(e,this,"Mouseout")},Mousedown:function(e){return p.Event(e,this,"Mousedown")},Mouseup:function(e){return p.Event(e,this,"Mouseup")},Touchstart:function(e){return p.Event(e,this,"Touchstart")},Touchend:function(e){return p.Event(e,this,"Touchend")},Event:function(e,t,o,n){if(p.skipMouseover&&"Mouseover"===o&&!n)return r(e);if(p.skipUp){if(o.match(/Mouseup|Touchend/))return delete p.skipUp,r(e);("Touchstart"===o||"Mousedown"===o&&!p.skipMousedown)&&delete p.skipUp}e||(e=window.event);var i=t.menuItem;return i&&i[o]?i[o](e,t):null},BGSTYLE:{position:"absolute",left:0,top:0,"z-index":200,width:"100%",height:"100%",border:0,padding:0,margin:0},Background:function(e){var o=t.addElement(document.body,"div",{style:this.BGSTYLE,id:"MathJax_MenuFrame"},[["div",{style:this.BGSTYLE,menuItem:e,onmousedown:this.Remove}]]),n=o.firstChild;return p.msieBackgroundBug&&(n.style.backgroundColor="white",n.style.filter="alpha(opacity=0)"),p.msieFixedPositionBug?(o.width=o.height=0,this.Resize(),attachEvent("onresize",this.Resize)):n.style.position="fixed",o},Resize:function(){setTimeout(p.SetWH,0)},SetWH:function(){var e=document.getElementById("MathJax_MenuFrame");e&&(e=e.firstChild,e.style.width=e.style.height="1px",e.style.width=document.body.scrollWidth+"px",e.style.height=document.body.scrollHeight+"px")},saveCookie:function(){t.Cookie.Set("menu",this.cookie)},getCookie:function(){this.cookie=t.Cookie.Get("menu")},getImages:function(){if(p.isMobile){var e=new Image;e.src=M.closeImg}}}),f=p.ITEM=MathJax.Object.Subclass({name:"",Create:function(e){if(!this.hidden){var o={onmouseover:p.Mouseover,onmouseout:p.Mouseout,onmouseup:p.Mouseup,onmousedown:p.Mousedown,ondragstart:r,onselectstart:r,onselectend:r,ontouchstart:p.Touchstart,ontouchend:p.Touchend,className:"MathJax_MenuItem",menuItem:this};this.disabled&&(o.className+=" MathJax_MenuDisabled"),t.addElement(e,"div",o,this.Label(o,e))}},Name:function(){return l(this.name[0],this.name[1])},Mouseover:function(e,t){if(this.disabled||this.Activate(t),!this.menu||!this.menu.posted){for(var o=document.getElementById("MathJax_MenuFrame").childNodes,n=t.parentNode.childNodes,i=0,a=n.length;a>i;i++){var s=n[i].menuItem;s&&s.menu&&s.menu.posted&&s.Deactivate(n[i])}for(a=o.length-1;a>=0&&t.parentNode.menuItem!==o[a].menuItem;)o[a].menuItem.posted=!1,o[a].parentNode.removeChild(o[a]),a--;this.Timer&&!p.isMobile&&this.Timer(e,t)}},Mouseout:function(e,t){this.menu&&this.menu.posted||this.Deactivate(t),this.timer&&(clearTimeout(this.timer),delete this.timer)},Mouseup:function(e,t){return this.Remove(e,t)},Touchstart:function(e,t){return this.TouchEvent(e,t,"Mousedown")},Touchend:function(e,t){return this.TouchEvent(e,t,"Mouseup")},TouchEvent:function(e,t,o){return this!==f.lastItem&&(f.lastMenu&&p.Event(e,f.lastMenu,"Mouseout"),p.Event(e,t,"Mouseover",!0),f.lastItem=this,f.lastMenu=t),this.nativeTouch?null:(p.Event(e,t,o),!1)},Remove:function(e,t){return t=t.parentNode.menuItem,t.Remove(e,t)},Activate:function(e){this.Deactivate(e),e.className+=" MathJax_MenuActive"},Deactivate:function(e){e.className=e.className.replace(/ MathJax_MenuActive/,"")},With:function(t){return t&&e.Insert(this,t),this},isRTL:function(){return p.isRTL},rtlClass:function(){return this.isRTL()?" RTL":""}});p.ITEM.COMMAND=p.ITEM.Subclass({action:function(){},Init:function(e,t,o){e instanceof Array||(e=[e,e]),this.name=e,this.action=t,this.With(o)},Label:function(){return[this.Name()]},Mouseup:function(e,t){return this.disabled||(this.Remove(e,t),s.Post(["command",this]),this.action.call(this,e)),r(e)}}),p.ITEM.SUBMENU=p.ITEM.Subclass({menu:null,marker:h&&!e.Browser.isSafari?"\u25b6":"\u25b8",markerRTL:h&&!e.Browser.isSafari?"\u25b0":"\u25c2",Init:function(e,t){e instanceof Array||(e=[e,e]),this.name=e;var o=1;t instanceof p.ITEM||(this.With(t),o++),this.menu=p.apply(p,[].slice.call(arguments,o))},Label:function(){return this.menu.posted=!1,[this.Name()+" ",["span",{className:"MathJax_MenuArrow"+this.rtlClass()},[this.isRTL()?this.markerRTL:this.marker]]]},Timer:function(e,t){this.timer&&clearTimeout(this.timer),e={clientX:e.clientX,clientY:e.clientY},this.timer=setTimeout(n(["Mouseup",this,e,t]),M.delay)},Touchend:function(e,t){var o=this.menu.posted,n=this.SUPER(arguments).Touchend.apply(this,arguments);return o&&(this.Deactivate(t),delete f.lastItem,delete f.lastMenu),n},Mouseup:function(e,t){if(!this.disabled)if(this.menu.posted)for(var o=document.getElementById("MathJax_MenuFrame").childNodes,n=o.length-1;n>=0;){var i=o[n];if(i.menuItem.posted=!1,i.parentNode.removeChild(i),i.menuItem===this.menu)break;n--}else this.timer&&(clearTimeout(this.timer),delete this.timer),this.menu.Post(e,t,this.ltr);return r(e)}}),p.ITEM.RADIO=p.ITEM.Subclass({variable:null,marker:h?"\u25cf":"\u2713",Init:function(e,t,o){e instanceof Array||(e=[e,e]),this.name=e,this.variable=t,this.With(o),null==this.value&&(this.value=this.name[0])},Label:function(){var e={className:"MathJax_MenuRadioCheck"+this.rtlClass()};return M.settings[this.variable]!==this.value&&(e={style:{display:"none"}}),[["span",e,[this.marker]]," "+this.Name()]},Mouseup:function(e,t){if(!this.disabled){for(var o=t.parentNode.childNodes,n=0,i=o.length;i>n;n++){var a=o[n].menuItem;a&&a.variable===this.variable&&(o[n].firstChild.style.display="none")}t.firstChild.display="",M.settings[this.variable]=this.value,p.cookie[this.variable]=M.settings[this.variable],p.saveCookie(),s.Post(["radio button",this])}return this.Remove(e,t),this.action&&!this.disabled&&this.action.call(p,this),r(e)}}),p.ITEM.CHECKBOX=p.ITEM.Subclass({variable:null,marker:"\u2713",Init:function(e,t,o){e instanceof Array||(e=[e,e]),this.name=e,this.variable=t,this.With(o)},Label:function(){var e={className:"MathJax_MenuCheck"+this.rtlClass()};return M.settings[this.variable]||(e={style:{display:"none"}}),[["span",e,[this.marker]]," "+this.Name()]},Mouseup:function(e,t){return this.disabled||(t.firstChild.display=M.settings[this.variable]?"none":"",M.settings[this.variable]=!M.settings[this.variable],p.cookie[this.variable]=M.settings[this.variable],p.saveCookie(),s.Post(["checkbox",this])),this.Remove(e,t),this.action&&!this.disabled&&this.action.call(p,this),r(e)}}),p.ITEM.LABEL=p.ITEM.Subclass({Init:function(e,t){e instanceof Array||(e=[e,e]),this.name=e,this.With(t)},Label:function(e){return delete e.onmouseover,delete e.onmouseout,delete e.onmousedown,e.className+=" MathJax_MenuLabel",[this.Name()]}}),p.ITEM.RULE=p.ITEM.Subclass({Label:function(e){return delete e.onmouseover,delete e.onmouseout,delete e.onmousedown,e.className+=" MathJax_MenuRule",null}}),p.About=function(){var o=i["HTML-CSS"]||{},n=(o.imgFonts?"image":o.fontInUse?(o.webFonts?"web":"local")+" "+o.fontInUse:i.SVG?"web SVG":"generic")+" fonts",a=!o.webFonts||o.imgFonts?null:o.allowWebFonts.replace(/otf/,"woff or otf")+" fonts",s=["MathJax.js v"+MathJax.fileversion,["br"]];s.push(["div",{style:{"border-top":"groove 2px",margin:".25em 0"}}]),p.About.GetJax(s,MathJax.InputJax,["InputJax","%1 Input Jax v%2"]),p.About.GetJax(s,MathJax.OutputJax,["OutputJax","%1 Output Jax v%2"]),p.About.GetJax(s,MathJax.ElementJax,["ElementJax","%1 Element Jax v%2"]),s.push(["div",{style:{"border-top":"groove 2px",margin:".25em 0"}}]),p.About.GetJax(s,MathJax.Extension,["Extension","%1 Extension v%2"],!0),s.push(["div",{style:{"border-top":"groove 2px",margin:".25em 0"}}],["center",{},[e.Browser+" v"+e.Browser.version+(a?" \u2014 "+l(a.replace(/ /g,""),a):"")]]),p.About.div=p.Background(p.About);var r=t.addElement(p.About.div,"div",{id:"MathJax_About"},[["b",{style:{fontSize:"120%"}},["MathJax"]]," v"+MathJax.version,["br"],l(n.replace(/ /g,""),"using "+n),["br"],["br"],["span",{style:{display:"inline-block","text-align":"left","font-size":"80%","max-height":"20em",overflow:"auto","background-color":"#E4E4E4",padding:".4em .6em",border:"1px inset"}},s],["br"],["br"],["a",{href:"http://www.mathjax.org/"},["www.mathjax.org"]],["img",{src:M.closeImg,style:{width:"21px",height:"21px",position:"absolute",top:".2em",right:".2em"},onclick:p.About.Remove}]]);MathJax.Localization.setCSS(r);var u=document.documentElement||{},h=window.innerHeight||u.clientHeight||u.scrollHeight||0;p.prototype.msieAboutBug?(r.style.width="20em",r.style.position="absolute",r.style.left=Math.floor((document.documentElement.scrollWidth-r.offsetWidth)/2)+"px",r.style.top=Math.floor((h-r.offsetHeight)/3)+document.body.scrollTop+"px"):(r.style.marginLeft=Math.floor(-r.offsetWidth/2)+"px",r.style.top=Math.floor((h-r.offsetHeight)/3)+"px")},p.About.Remove=function(){p.About.div&&(document.body.removeChild(p.About.div),delete p.About.div)},p.About.GetJax=function(e,t,o,n){var i=[];for(var a in t)t.hasOwnProperty(a)&&t[a]&&(n&&t[a].version||t[a].isa&&t[a].isa(t))&&i.push(l(o[0],o[1],t[a].id||a,t[a].version));i.sort();for(var s=0,r=i.length;r>s;s++)e.push(i[s],["br"]);return e},p.Help=function(){o.Require("[MathJax]/extensions/HelpDialog.js",function(){MathJax.Extension.Help.Dialog()})},p.ShowSource=function(e){e||(e=window.event);var t={screenX:e.screenX,screenY:e.screenY};if(p.jax)if("MathML"===this.format){var i=MathJax.ElementJax.mml;if(i&&"undefined"!=typeof i.mbase.prototype.toMathML)try{p.ShowSource.Text(p.jax.root.toMathML("",p.jax),e)}catch(a){if(!a.restart)throw a;n.After([this,p.ShowSource,t],a.restart)}else if(!o.loadingToMathML)return o.loadingToMathML=!0,p.ShowSource.Window(e),void n.Queue(o.Require("[MathJax]/extensions/toMathML.js"),function(){delete o.loadingToMathML,i.mbase.prototype.toMathML||(i.mbase.prototype.toMathML=function(){})},[this,p.ShowSource,t])}else if("Error"===this.format)p.ShowSource.Text(p.jax.errorText,e);else if(M.semanticsAnnotations[this.format]){var s=p.jax.root.getAnnotation(this.format);s.data[0]&&p.ShowSource.Text(s.data[0].toString())}else{if(null==p.jax.originalText)return void alert(l("NoOriginalForm","No original form available"));p.ShowSource.Text(p.jax.originalText,e)}},p.ShowSource.Window=function(){if(!p.ShowSource.w){var e=[],t=M.windowSettings;for(var o in t)t.hasOwnProperty(o)&&e.push(o+"="+t[o]);p.ShowSource.w=window.open("","_blank",e.join(","))}return p.ShowSource.w},p.ShowSource.Text=function(e,t){var o=p.ShowSource.Window(t);delete p.ShowSource.w,e=e.replace(/^\s*/,"").replace(/\s*$/,""),e=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");var n=l("EqSource","MathJax Equation Source");if(p.isMobile)o.document.open(),o.document.write("<html><head><meta name='viewport' content='width=device-width, initial-scale=1.0' /><title>"+n+"</title></head><body style='font-size:85%'>"),o.document.write("<pre>"+e+"</pre>"),o.document.write("<hr><input type='button' value='"+l("Close","Close")+"' onclick='window.close()' />"),o.document.write("</body></html>"),o.document.close();else{o.document.open(),o.document.write("<html><head><title>"+n+"</title></head><body style='font-size:85%'>"),o.document.write("<table><tr><td><pre>"+e+"</pre></td></tr></table>"),o.document.write("</body></html>"),o.document.close();var i=o.document.body.firstChild;setTimeout(function(){var e,n,a=o.outerHeight-o.innerHeight||30,s=o.outerWidth-o.innerWidth||30;s=Math.max(100,Math.min(Math.floor(.5*screen.width),i.offsetWidth+s+25)),a=Math.max(40,Math.min(Math.floor(.5*screen.height),i.offsetHeight+a+25)),p.prototype.msieHeightBug&&(a+=35),o.resizeTo(s,a);var r;try{r=t.screenX}catch(u){}t&&null!=r&&(e=Math.max(0,Math.min(t.screenX-Math.floor(s/2),screen.width-s-20)),n=Math.max(0,Math.min(t.screenY-Math.floor(a/2),screen.height-a-20)),o.moveTo(e,n))},50)}},p.Scale=function(){var t=i["HTML-CSS"],o=i.NativeMML,n=i.SVG,a=(t||o||n||{config:{scale:100}}).config.scale,s=prompt(l("ScaleMath","Scale all mathematics (compared to surrounding text) by"),a+"%");s&&(s.match(/^\s*\d+(\.\d*)?\s*%?\s*$/)?(s=parseFloat(s),s?s!==a&&(t&&(t.config.scale=s),o&&(o.config.scale=s),n&&(n.config.scale=s),p.cookie.scale=s,p.saveCookie(),e.Rerender()):alert(l("NonZeroScale","The scale should not be zero"))):alert(l("PercentScale","The scale should be a percentage (e.g., 120%%)")))},p.Zoom=function(){MathJax.Extension.MathZoom||o.Require("[MathJax]/extensions/MathZoom.js")},p.Renderer=function(){var o=e.outputJax["jax/mml"];if(o[0]!==M.settings.renderer){var n,i,a=e.Browser,s=p.Renderer.Messages;switch(M.settings.renderer){case"NativeMML":M.settings.warnedMML||(a.isChrome&&"24."!==a.version.substr(0,3)?n=s.MML.WebKit:a.isSafari&&!a.versionAtLeast("5.0")?n=s.MML.WebKit:a.isMSIE?a.hasMathPlayer||(n=s.MML.MSIE):n=s.MML[a],i="warnedMML");break;case"SVG":M.settings.warnedSVG||a.isMSIE&&!c&&(n=s.SVG.MSIE)}if(n){if(n=l(n[0],n[1]),n+="\n\n",n+=l("SwitchAnyway","Switch the renderer anyway?\n\n(Press OK to switch, CANCEL to continue with the current renderer)"),p.cookie.renderer=o[0].id,p.saveCookie(),!confirm(n))return p.cookie.renderer=M.settings.renderer=t.Cookie.Get("menu").renderer,void p.saveCookie();i&&(p.cookie.warned=M.settings.warned=!0),p.cookie.renderer=M.settings.renderer,p.saveCookie()}e.Queue(["setRenderer",e,M.settings.renderer,"jax/mml"],["Rerender",e])}},p.Renderer.Messages={MML:{WebKit:["WebkitNativeMMLWarning","Your browser doesn't seem to support MathML natively, so switching to MathML output may cause the mathematics on the page to become unreadable."],MSIE:["MSIENativeMMLWarning","Internet Explorer requires the MathPlayer plugin in order to process MathML output."],Opera:["OperaNativeMMLWarning","Opera's support for MathML is limited, so switching to MathML output may cause some expressions to render poorly."],Safari:["SafariNativeMMLWarning","Your browser's native MathML does not implement all the features used by MathJax, so some expressions may not render properly."],Firefox:["FirefoxNativeMMLWarning","Your browser's native MathML does not implement all the features used by MathJax, so some expressions may not render properly."]},SVG:{MSIE:["MSIESVGWarning","SVG is not implemented in Internet Explorer prior to IE9 or when it is emulating IE8 or below. Switching to SVG output will cause the mathematics to not display properly."]}},p.Font=function(){var e=i["HTML-CSS"];e&&document.location.reload()},p.Locale=function(){MathJax.Localization.setLocale(M.settings.locale),MathJax.Hub.Queue(["Reprocess",MathJax.Hub])},p.LoadLocale=function(){var e=prompt(l("LoadURL","Load translation data from this URL:"));e&&(e.match(/\.js$/)||alert(l("BadURL","The URL should be for a javascript file that defines MathJax translation data.  Javascript file names should end with '.js'")),o.Require(e,function(t){t!=o.STATUS.OK&&alert(l("BadData","Failed to load translation data from %1",e))}))},p.MPEvents=function(e){var t=M.settings.discoverable,o=p.MPEvents.Messages;if(c)!t&&"Menu Events"===e.name[1]&&M.settings.mpContext&&alert(l.apply(l,o.IE9warning));else{if(M.settings.mpMouse&&!confirm(l.apply(l,o.IE8warning)))return delete p.cookie.mpContext,delete M.settings.mpContext,delete p.cookie.mpMouse,delete M.settings.mpMouse,void p.saveCookie();M.settings.mpContext=M.settings.mpMouse,p.cookie.mpContext=p.cookie.mpMouse=M.settings.mpMouse,p.saveCookie(),MathJax.Hub.Queue(["Rerender",MathJax.Hub])}},p.MPEvents.Messages={IE8warning:["IE8warning","This will disable the MathJax menu and zoom features, but you can Alt-Click on an expression to obtain the MathJax menu instead.\n\nReally change the MathPlayer settings?"],IE9warning:["IE9warning","The MathJax contextual menu will be disabled, but you can Alt-Click on an expression to obtain the MathJax menu instead."]},e.Browser.Select({MSIE:function(e){var t="BackCompat"===document.compatMode,o=e.versionAtLeast("8.0")&&document.documentMode>7;p.Augment({margin:20,msieBackgroundBug:(document.documentMode||0)<9,msieFixedPositionBug:t||!o,msieAboutBug:t,msieHeightBug:(document.documentMode||0)<9}),c&&(delete M.styles["#MathJax_About"].filter,delete M.styles[".MathJax_Menu"].filter)},Firefox:function(e){p.skipMouseover=e.isMobile&&e.versionAtLeast("6.0"),p.skipMousedown=e.isMobile}}),p.isMobile=e.Browser.isMobile,p.noContextMenu=e.Browser.noContextMenu,p.CreateLocaleMenu=function(){if(p.menu){var e=p.menu.Find("Language").menu,t=e.items,o=[],n=MathJax.Localization.strings;for(var i in n)n.hasOwnProperty(i)&&o.push(i);o=o.sort(),e.items=[];for(var a=0,s=o.length;s>a;a++){var r=n[o[a]].menuTitle;r?r+=" ("+o[a]+")":r=o[a],e.items.push(f.RADIO([o[a],r],"locale",{action:p.Locale}))}e.items.push(t[t.length-2],t[t.length-1])}},p.CreateAnnotationMenu=function(){if(p.menu){var e=p.menu.Find("Show Math As","Annotation").menu,t=M.semanticsAnnotations;for(var o in t)t.hasOwnProperty(o)&&e.items.push(f.COMMAND([o,o],p.ShowSource,{hidden:!0,nativeTouch:!0,format:o}))}},e.Register.StartupHook("End Config",function(){M.settings=e.config.menuSettings,"undefined"!=typeof M.settings.showRenderer&&(M.showRenderer=M.settings.showRenderer),"undefined"!=typeof M.settings.showFontMenu&&(M.showFontMenu=M.settings.showFontMenu),"undefined"!=typeof M.settings.showContext&&(M.showContext=M.settings.showContext),p.getCookie(),p.menu=p(f.SUBMENU(["Show","Show Math As"],f.COMMAND(["MathMLcode","MathML Code"],p.ShowSource,{nativeTouch:!0,format:"MathML"}),f.COMMAND(["Original","Original Form"],p.ShowSource,{nativeTouch:!0}),f.SUBMENU(["Annotation","Annotation"],{disabled:!0}),f.RULE(),f.CHECKBOX(["texHints","Show TeX hints in MathML"],"texHints"),f.CHECKBOX(["semantics","Add original form as annotation"],"semantics")),f.RULE(),f.SUBMENU(["Settings","Math Settings"],f.SUBMENU(["ZoomTrigger","Zoom Trigger"],f.RADIO(["Hover","Hover"],"zoom",{action:p.Zoom}),f.RADIO(["Click","Click"],"zoom",{action:p.Zoom}),f.RADIO(["DoubleClick","Double-Click"],"zoom",{action:p.Zoom}),f.RADIO(["NoZoom","No Zoom"],"zoom",{value:"None"}),f.RULE(),f.LABEL(["TriggerRequires","Trigger Requires:"]),f.CHECKBOX(e.Browser.isMac?["Option","Option"]:["Alt","Alt"],"ALT"),f.CHECKBOX(["Command","Command"],"CMD",{hidden:!e.Browser.isMac}),f.CHECKBOX(["Control","Control"],"CTRL",{hidden:e.Browser.isMac}),f.CHECKBOX(["Shift","Shift"],"Shift")),f.SUBMENU(["ZoomFactor","Zoom Factor"],f.RADIO("125%","zscale"),f.RADIO("133%","zscale"),f.RADIO("150%","zscale"),f.RADIO("175%","zscale"),f.RADIO("200%","zscale"),f.RADIO("250%","zscale"),f.RADIO("300%","zscale"),f.RADIO("400%","zscale")),f.RULE(),f.SUBMENU(["Renderer","Math Renderer"],{hidden:!M.showRenderer},f.RADIO("HTML-CSS","renderer",{action:p.Renderer}),f.RADIO("Fast HTML","renderer",{action:p.Renderer,value:"CommonHTML"}),f.RADIO("MathML","renderer",{action:p.Renderer,value:"NativeMML"}),f.RADIO("SVG","renderer",{action:p.Renderer}),f.RULE(),f.CHECKBOX("Fast Preview","CHTMLpreview")),f.SUBMENU("MathPlayer",{hidden:!e.Browser.isMSIE||!M.showMathPlayer,disabled:!e.Browser.hasMathPlayer},f.LABEL(["MPHandles","Let MathPlayer Handle:"]),f.CHECKBOX(["MenuEvents","Menu Events"],"mpContext",{action:p.MPEvents,hidden:!c}),f.CHECKBOX(["MouseEvents","Mouse Events"],"mpMouse",{action:p.MPEvents,hidden:!c}),f.CHECKBOX(["MenuAndMouse","Mouse and Menu Events"],"mpMouse",{action:p.MPEvents,hidden:c})),f.SUBMENU(["FontPrefs","Font Preference"],{hidden:!M.showFontMenu},f.LABEL(["ForHTMLCSS","For HTML-CSS:"]),f.RADIO(["Auto","Auto"],"font",{action:p.Font}),f.RULE(),f.RADIO(["TeXLocal","TeX (local)"],"font",{action:p.Font}),f.RADIO(["TeXWeb","TeX (web)"],"font",{action:p.Font}),f.RADIO(["TeXImage","TeX (image)"],"font",{action:p.Font}),f.RULE(),f.RADIO(["STIXLocal","STIX (local)"],"font",{action:p.Font}),f.RADIO(["STIXWeb","STIX (web)"],"font",{action:p.Font}),f.RULE(),f.RADIO(["AsanaMathWeb","Asana Math (web)"],"font",{action:p.Font}),f.RADIO(["GyrePagellaWeb","Gyre Pagella (web)"],"font",{action:p.Font}),f.RADIO(["GyreTermesWeb","Gyre Termes (web)"],"font",{action:p.Font}),f.RADIO(["LatinModernWeb","Latin Modern (web)"],"font",{action:p.Font}),f.RADIO(["NeoEulerWeb","Neo Euler (web)"],"font",{action:p.Font})),f.SUBMENU(["ContextMenu","Contextual Menu"],{hidden:!M.showContext},f.RADIO("MathJax","context"),f.RADIO(["Browser","Browser"],"context")),f.COMMAND(["Scale","Scale All Math ..."],p.Scale),f.RULE().With({hidden:!M.showDiscoverable,name:["","discover_rule"]}),f.CHECKBOX(["Discoverable","Highlight on Hover"],"discoverable",{hidden:!M.showDiscoverable})),f.SUBMENU(["Locale","Language"],{hidden:!M.showLocale,ltr:!0},f.RADIO("en","locale",{action:p.Locale}),f.RULE().With({hidden:!M.showLocaleURL,name:["","localURL_rule"]}),f.COMMAND(["LoadLocale","Load from URL ..."],p.LoadLocale,{hidden:!M.showLocaleURL})),f.RULE(),f.COMMAND(["About","About MathJax"],p.About),f.COMMAND(["Help","MathJax Help"],p.Help)),p.isMobile&&!function(){var e=M.settings,t=p.menu.Find("Math Settings","Zoom Trigger").menu;t.items[0].disabled=t.items[1].disabled=!0,("Hover"===e.zoom||"Click"==e.zoom)&&(e.zoom="None"),t.items=t.items.slice(0,4),navigator.appVersion.match(/[ (]Android[) ]/)&&p.ITEM.SUBMENU.Augment({marker:"\xbb"})}(),p.CreateLocaleMenu(),p.CreateAnnotationMenu()}),p.showRenderer=function(e){p.cookie.showRenderer=M.showRenderer=e,p.saveCookie(),p.menu.Find("Math Settings","Math Renderer").hidden=!e},p.showMathPlayer=function(e){p.cookie.showMathPlayer=M.showMathPlayer=e,p.saveCookie(),p.menu.Find("Math Settings","MathPlayer").hidden=!e},p.showFontMenu=function(e){p.cookie.showFontMenu=M.showFontMenu=e,p.saveCookie(),p.menu.Find("Math Settings","Font Preference").hidden=!e},p.showContext=function(e){p.cookie.showContext=M.showContext=e,p.saveCookie(),p.menu.Find("Math Settings","Contextual Menu").hidden=!e},p.showDiscoverable=function(e){p.cookie.showDiscoverable=M.showDiscoverable=e,p.saveCookie(),p.menu.Find("Math Settings","Highlight on Hover").hidden=!e,p.menu.Find("Math Settings","discover_rule").hidden=!e},p.showLocale=function(e){p.cookie.showLocale=M.showLocale=e,p.saveCookie(),p.menu.Find("Language").hidden=!e},MathJax.Hub.Register.StartupHook("HTML-CSS Jax Ready",function(){MathJax.OutputJax["HTML-CSS"].config.imageFont||(p.menu.Find("Math Settings","Font Preference","TeX (image)").disabled=!0)}),n.Queue(e.Register.StartupHook("End Config",{}),["getImages",p],["Styles",o,M.styles],["Post",e.Startup.signal,"MathMenu Ready"],["loadComplete",o,"[MathJax]/extensions/MathMenu.js"])}(MathJax.Hub,MathJax.HTML,MathJax.Ajax,MathJax.CallBack,MathJax.OutputJax);