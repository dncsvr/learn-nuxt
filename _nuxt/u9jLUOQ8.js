const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DMPDcBsW.js","./CAmniYOv.js","./entry.CwQNdSve.css","./ClNKs9eB.js","./CABMYhun.js","./C-v3KzvZ.js"])))=>i.map(i=>d[i]);
import{u as f}from"./D9vwEVqK.js";import{j as v,aQ as g,f as d,au as l,g as h,ar as _,at as r}from"./CAmniYOv.js";import{h as p,u as y}from"./CABMYhun.js";import{q as C,w as c,e as w,s as P,j as $,u as N}from"./ClNKs9eB.js";import{u as j}from"./R_BbV0Tv.js";import{_ as T}from"./CoxO3MW8.js";const D=async e=>{const{content:t}=v().public;typeof(e==null?void 0:e.params)!="function"&&(e=C(e));const a=e.params(),s=t.experimental.stripQueryParameters?c(`/navigation/${`${p(a)}.${t.integrity}`}/${w(a)}.json`):c(`/navigation/${p(a)}.${t.integrity}.json`);if(P())return(await g(()=>import("./DMPDcBsW.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:$(a),previewToken:y().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},E=d({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=l(e),a=h(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&j("dd-navigation").value){const{navigation:n}=N();return{navigation:n}}const{data:s}=await f(`content-navigation-${p(a.value)}`,()=>D(a.value));return{navigation:s}},render(e){const t=_(),{navigation:a}=e,s=o=>r(T,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),m=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):m(a)}}),S=E;export{S as default};