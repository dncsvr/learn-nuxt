import{u as _}from"./R_BbV0Tv.js";import{o as t,b as o,a as m,d as p,u as r}from"./CAmniYOv.js";const s=()=>_("sampleGlobal",()=>!1),u={__name:"ComponentThatEmitsGlobally",setup(n){const e=s();function a(){e.value=!e.value}return(c,l)=>(t(),o("button",{onClick:a}," Click to emit globally "))}},i={key:0},b={key:1},h={__name:"global-emit",setup(n){const e=s();return(a,c)=>{const l=u;return t(),o("div",null,[m(l),p(" 👉 "),r(e)?(t(),o("span",i,"✅")):(t(),o("span",b,"❌"))])}}};export{h as default};