(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(4),r=n.n(c),l=n(1),i=(n(3),function(e){return new Promise(function(t,n){isNaN(e)?n(console.error("That's not a number")):setTimeout(t,e)})}),s=function(e,t,n,a,o,c,r){return new Promise(function(l,i){console.log("creat div",e),"red"===e?(t("light"),o("Starting"),l()):"yellow"===e?(n("light"),c("Resolving"),o(""),l()):"green"===e?(a("light"),r("Done"),c(""),l()):i(console.error("thrown an error in creatDiv Method"))})},u=function(){return function(e,t,n,a,o,c){s("red",e,t,n,a,o,c).then(function(){return i(3e3)}).then(function(){return s("yellow",e,t,n,a,o,c)}).then(function(){return i(4e3)}).then(function(){return s("green",e,t,n,a,o,c)}).then(function(){return i(6e3)}).then(function(){e(""),n(""),t(""),c("")}).then(console.log("Cleaned")).catch(function(e){return console.log(e)})}},m=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),i=Object(l.a)(r,2),s=i[0],m=i[1],d=Object(a.useState)(""),x=Object(l.a)(d,2),f=x[0],g=x[1],h=Object(a.useState)(""),E=Object(l.a)(h,2),b=E[0],v=E[1],N=Object(a.useState)(""),j=Object(l.a)(N,2),p=j[0],w=j[1],B=Object(a.useState)(""),O=Object(l.a)(B,2),C=O[0],S=O[1];return o.a.createElement("div",null,o.a.createElement("p",{className:"text"}," click on the first circle to run a Promise "),o.a.createElement("div",{className:"dotBox"},o.a.createElement("div",{onClick:u(c,m,g,v,w,S),className:"dotBox-dotBig dotBox-dotBig-red-".concat(n)}),o.a.createElement("div",{className:"dotBox-dot dotBox-dot-yellow-".concat(s)}),o.a.createElement("div",{className:"dotBox-dotBig dotBox-dotBig-green-".concat(f)})),o.a.createElement("div",{className:"textContainer"},o.a.createElement("div",{className:"textContainer-text1"},b.length>0&&o.a.createElement("p",{className:"textContainer-text"},b)),o.a.createElement("div",{className:"textContainer-text2"},p.length>0&&o.a.createElement("p",{className:"textContainer-text"},p)),o.a.createElement("div",{className:"textContainer-text3"},C.length>0&&o.a.createElement("p",{className:"textContainer-text textContainer-text-done"},C))))},d=document.getElementById("root");r.a.render(o.a.createElement(function(){return o.a.createElement("div",{className:"App"},o.a.createElement(m,null))},null),d)},3:function(e,t,n){},5:function(e,t,n){e.exports=n(10)}},[[5,1,2]]]);
//# sourceMappingURL=main.a11c8bf0.chunk.js.map