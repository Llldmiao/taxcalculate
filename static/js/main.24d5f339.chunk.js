(this.webpackJsonptaxcalculate=this.webpackJsonptaxcalculate||[]).push([[0],{52:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(26),c=n.n(r),l=n(13),u=n(32),s=n(59),j=n(45),o=(n(51),n(52),n(3));function d(e,t,n,a,i,r,c){return e*(t+n+a+i+r+c)/100*12}function b(e,t){var n=0,a=0,i=e-6e4-t-18e3-0;return i<=36e3?n=.03:i<=144e3?(n=.1,a=2520):i<=3e5?(n=.2,a=16920):i<=42e4?(n=.25,a=31920):i<=66e4?(n=.3,a=52920):i<=96e4?(n=.35,a=85920):(n=.45,a=181920),i*n-a}var h=function(){var e=Object(a.useState)({originSalary:24e3,month:16}),t=Object(u.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)({pension:8,medical:2,unemployee:.2,injury:0,maternity:0,housingFund:12}),c=Object(u.a)(r,2),h=c[0],O=c[1],y=h.pension,g=h.medical,x=h.unemployee,m=h.injury,f=h.maternity,v=h.housingFund,p=d(n.originSalary,y,g,x,m,f,v),S=n.originSalary*n.month,w=Object(a.useState)((function(){var e=S-b(S,p)-p,t=e/n.month;return{perYear:e,perMonth:t,bouns:t*(n.month-12)}})),C=Object(u.a)(w,2),N=C[0],k=C[1],M=function(e,t){isNaN(Number(e))||("salary"===t?(i((function(t){return{originSalary:Number(e),month:t.month}})),p=d(n.originSalary,y,g,x,m,f,v),console.log(n)):(i((function(t){return{originSalary:t.originSalary,month:Number(e)}})),p=d(n.originSalary,y,g,x,m,f,v),console.log(n)))},V=function(e,t){if(e=Number(e),!isNaN(e)){switch(t){case"pension":O(Object(l.a)(Object(l.a)({},h),{},{pension:e}));break;case"medical":O(Object(l.a)(Object(l.a)({},h),{},{medical:e}));break;case"unemployee":O(Object(l.a)(Object(l.a)({},h),{},{unemployee:e}));break;case"injury":O(Object(l.a)(Object(l.a)({},h),{},{injury:e}));break;case"maternity":O(Object(l.a)(Object(l.a)({},h),{},{maternity:e}));break;case"housingFund":O(Object(l.a)(Object(l.a)({},h),{},{housingFund:e}))}var a=h.pension,i=h.medical,r=h.unemployee,c=h.injury,u=h.maternity,s=h.housingFund;p=d(n.originSalary,a,i,r,c,u,s)}};return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{children:"\u7a0e\u524d\u6bcf\u6708\u5de5\u8d44"}),Object(o.jsx)(s.a,{id:"originSalary",value:n.originSalary,onBlur:function(){return window.scrollTo(0,0)},onChangeCapture:function(e){return M(e.target.value,"salary")},style:{width:150}}),Object(o.jsx)("label",{children:"\u6708\u6570"}),Object(o.jsx)(s.a,{id:"originSalary",defaultValue:n.month,onChange:function(e){return M(e.target.value,"month")},style:{width:150}}),Object(o.jsx)("hr",{})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{children:"\u517b\u8001\u4fdd\u9669"}),Object(o.jsx)(s.a,{id:"yanglao",defaultValue:y,onChange:function(e){return V(e.target.value,"pension")},style:{width:150}}),"%"]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{children:"\u533b\u7597\u4fdd\u9669"}),Object(o.jsx)(s.a,{id:"yiliao",defaultValue:g,onChange:function(e){return V(e.target.value,"medical")},style:{width:150}}),"%"]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{children:"\u5931\u4e1a\u4fdd\u9669"}),Object(o.jsx)(s.a,{id:"shiye",defaultValue:x,onChange:function(e){return V(e.target.value,"unemployee")},style:{width:150}}),"%"]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{children:"\u5de5\u4f24\u4fdd\u9669"}),Object(o.jsx)(s.a,{id:"gongshang",defaultValue:m,onChange:function(e){return V(e.target.value,"injury")},style:{width:150}}),"%"]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{children:"\u751f\u80b2\u4fdd\u9669"}),Object(o.jsx)(s.a,{id:"shengyu",defaultValue:f,onChange:function(e){return V(e.target.value,"maternity")},style:{width:150}}),"%"]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{children:"\u4f4f\u623f\u516c\u79ef\u91d1"}),Object(o.jsx)(s.a,{id:"gongjijin",defaultValue:v,onChange:function(e){return V(e.target.value,"housingFund")},style:{width:150}}),"%"]}),Object(o.jsx)("hr",{}),Object(o.jsx)(j.a,{type:"primary",id:"claculate",onClick:function(){console.log("111"),k((function(){var e=S-b(S,p)-p,t=e/n.month;return{perYear:e,perMonth:t,bouns:t*(n.month-12)}}))},children:"\u8ba1\u7b97"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{children:"\u7a0e\u540e\u5e74\u85aa"}),Object(o.jsx)(s.a,{id:"afterTaxSalary",value:Math.round(100*N.perYear)/100,style:{width:150}})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{children:"\u7a0e\u540e\u6708\u85aa"}),Object(o.jsx)(s.a,{id:"afterTaxSalary",value:Math.round(1e4*N.perMonth)/1e4,style:{width:150}})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{children:"\u5e74\u7ec8\u5956"}),Object(o.jsx)(s.a,{id:"afterTaxSalary",value:Math.round(1e4*N.bouns)/1e4,style:{width:150}})]})]})})};c.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.24d5f339.chunk.js.map