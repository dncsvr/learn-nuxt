const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./BpVBTmHv.js","./CcdKhu3i.js","./O79Wc66J.js","./DOJnJRmM.js","./C-v3KzvZ.js"])))=>i.map(i=>d[i]);
import{u as f}from"./CJTFrb7Q.js";import{v,a2 as g,f as d,G as l,g as h,x as _,E as r}from"./CcdKhu3i.js";import{h as p,u as y}from"./DOJnJRmM.js";import{q as C,w as c,e as w,s as P,j as $,u as N}from"./O79Wc66J.js";import{u as j}from"./dIY8HDVG.js";import{_ as E}from"./D8HtjN4Y.js";const T=async e=>{const{content:t}=v().public;typeof(e==null?void 0:e.params)!="function"&&(e=C(e));const a=e.params(),s=t.experimental.stripQueryParameters?c(`/navigation/${`${p(a)}.${t.integrity}`}/${w(a)}.json`):c(`/navigation/${p(a)}.${t.integrity}.json`);if(P())return(await g(()=>import("./BpVBTmHv.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:$(a),previewToken:y().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},x=d({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=l(e),a=h(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&j("dd-navigation").value){const{navigation:n}=N();return{navigation:n}}const{data:s}=await f(`content-navigation-${p(a.value)}`,()=>T(a.value));return{navigation:s}},render(e){const t=_(),{navigation:a}=e,s=o=>r(E,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),m=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):m(a)}}),S=x;export{S as default};
