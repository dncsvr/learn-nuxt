import{n as s,b as i,t as n,u as l,o as a}from"./5KDAil0K.js";const o=s("piniaStore",{state:()=>({titles:[]}),actions:{setTitles(e){this.titles=e}}}),u={__name:"pinia",setup(e){const t=o();return t.titles.length===0&&t.setTitles(["title1","title2","title3"]),(r,c)=>(a(),i("div",null,"Titles: "+n(l(t).titles),1))}};export{u as default};