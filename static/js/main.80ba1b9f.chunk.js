(this.webpackJsonpcounter_exam_1=this.webpackJsonpcounter_exam_1||[]).push([[0],[,,,function(e,t,n){e.exports={setter:"Setter_setter__2mt7M",setterBody:"Setter_setterBody__22By4",setterActions:"Setter_setterActions__1Aj11",error:"Setter_error__Y7HHZ",setterControls:"Setter_setterControls__2csyL"}},function(e,t,n){e.exports={counter:"Counter_counter__29siA",counterOutput:"Counter_counterOutput__1I8hQ",max:"Counter_max__32UwU",counterControls:"Counter_counterControls__3zft0",counterWarning:"Counter_counterWarning__2wx9-",error:"Counter_error__24ZpG"}},,,function(e,t,n){e.exports={button:"Button_button__ygIhZ"}},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(6),s=n.n(c),u=(n(12),n(2)),o=n(3),i=n.n(o),l=n(7),j=n.n(l),b=n(0);function O(e){return Object(b.jsx)("button",{className:j.a.button,type:e.type,disabled:e.isDisabled,onClick:e.onClick,children:e.title})}function d(e){var t=Object(a.useState)(""),n=Object(u.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)(""),o=Object(u.a)(s,2),l=o[0],j=o[1],d=Object(a.useState)(!1),g=Object(u.a)(d,2),m=g[0],x=g[1],_=Object(a.useState)(!1),v=Object(u.a)(_,2),h=v[0],f=v[1];return Object(b.jsx)("div",{className:i.a.setter,children:Object(b.jsx)("form",{onSubmit:function(t){t.preventDefault();var n={minValue:+r,maxValue:+l};e.onSetStartData(n),e.onChangeMessage("DEFAULT")},children:Object(b.jsxs)("div",{className:i.a.setterBody,children:[Object(b.jsxs)("div",{className:i.a.setterActions,children:[Object(b.jsx)("label",{htmlFor:"startVal",children:"start value:"}),Object(b.jsx)("input",{className:h?i.a.error:"",id:"startVal",type:"number",value:r,onChange:function(t){+t.currentTarget.value<=0||0!==+l&&+t.currentTarget.value>=+l?(f(!0),e.onChangeMessage("ERROR")):(f(!1),m||e.onChangeMessage("SET")),c(t.currentTarget.value)}}),Object(b.jsx)("label",{htmlFor:"maxVal",children:"max value:"}),Object(b.jsx)("input",{className:m?i.a.error:"",id:"maxVal",type:"number",value:l,onChange:function(t){+t.currentTarget.value<=0||0!==+r&&+t.currentTarget.value<=+r?(x(!0),e.onChangeMessage("ERROR")):(x(!1),h||e.onChangeMessage("SET")),j(t.currentTarget.value)}})]}),Object(b.jsx)("div",{className:i.a.setterControls,children:Object(b.jsx)(O,{type:"submit",title:"Set",isDisabled:m||h||!1})})]})})})}var g=n(4),m=n.n(g);function x(e){return Object(b.jsxs)("div",{className:m.a.counter,children:[Object(b.jsx)("div",{className:"".concat(m.a.counterOutput," ").concat(e.value===e.maxValue&&m.a.max),children:e.warningMessage?Object(b.jsx)("div",{className:"".concat(m.a.counterWarning," ").concat("Invalid input!!!"===e.warningMessage?m.a.error:""),children:e.warningMessage}):Object(b.jsx)("div",{children:e.value})}),Object(b.jsxs)("div",{className:m.a.counterControls,children:[Object(b.jsx)(O,{type:"button",title:"Increase",isDisabled:e.value===e.maxValue,onClick:e.onIncreaseValue}),Object(b.jsx)(O,{type:"button",title:"Reset",isDisabled:e.value===e.minValue,onClick:e.onResetValue})]})]})}n(14);function _(){var e=Object(a.useState)(7),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(0),s=Object(u.a)(c,2),o=s[0],i=s[1],l=Object(a.useState)(o),j=Object(u.a)(l,2),O=j[0],g=j[1],m=Object(a.useState)("DEFAULT"),_=Object(u.a)(m,2),v=_[0],h=_[1];Object(a.useEffect)((function(){var e=localStorage.getItem("currentValue");if(e){var t=JSON.parse(e);g(t)}}),[]),Object(a.useEffect)((function(){localStorage.setItem("currentValue",JSON.stringify(O))}),[O]);var f="";"ERROR"===v&&(f="Invalid input!!!"),"SET"===v&&(f="Enter values and press SET");return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(d,{onSetStartData:function(e){r(e.maxValue),i(e.minValue),g(e.minValue)},onChangeMessage:function(e){h(e)}}),Object(b.jsx)(x,{value:O,maxValue:n,minValue:o,warningMessage:f,onIncreaseValue:function(){g(O+1)},onResetValue:function(){g(o)}})]})}var v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(_,{})}),document.getElementById("root")),v()}],[[15,1,2]]]);
//# sourceMappingURL=main.80ba1b9f.chunk.js.map