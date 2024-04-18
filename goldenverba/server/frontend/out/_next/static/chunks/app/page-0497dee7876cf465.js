(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{87094:function(e,t,s){Promise.resolve().then(s.bind(s,12970))},12970:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return N}});var r=s(57437),l=s(2265),n=s(58177),i=s(30505),o=s(8603),a=s(14063),c=s(97223),d=e=>{let{Icon:t,iconSize:s,title:l,currentPage:n,setPage:i,setCurrentPage:o}=e;return(0,r.jsxs)("button",{className:"btn md:btn-sm lg:btn-md flex flex-grow items-center justify-center border-none hover:bg-button-hover-verba ".concat(n===i?"bg-primary-verba":"bg-button-verba text-text-alt-verba"),onClick:e=>{o(i)},children:[(0,r.jsx)(t,{size:s}),(0,r.jsx)("p",{className:"md:text-xs lg:text-sm sm:hidden md:flex",children:l})]})};async function x(){try{let e=await fetch("https://api.github.com/repos/weaviate/verba",{method:"GET"}),t=await e.json();if(t)return console.log("Stars "+t.stargazers_count),t.stargazers_count;return 0}catch(e){return console.error("Failed to perform search:",e),0}}let g=e=>e>=1e3?(e/1e3).toFixed(1).replace(/\.0$/,"")+"k":e.toString();var m=e=>{let{imageSrc:t,title:s,subtitle:m,version:u,currentPage:h,setCurrentPage:b}=e,[f,p]=(0,l.useState)("0");(0,l.useEffect)(()=>{(async()=>{try{let e=await x();if(e){let t=g(e);console.log(t),p(t)}}catch(e){console.error("Failed to fetch GitHub stars:",e)}})()},[]);let v=()=>{window.open("https://github.com/weaviate/verba","_blank","noopener,noreferrer")};return(0,r.jsxs)("div",{className:"flex lg:justify-between justify-start items-center mb-10",children:[(0,r.jsxs)("div",{className:"flex flex-row items-center gap-5",children:[(0,r.jsx)("img",{src:t,width:80,className:"flex shadow-xl rounded-lg"}),(0,r.jsxs)("div",{className:"flex flex-col lg:flex-row lg:items-end justify-center lg:gap-3",children:[(0,r.jsx)("p",{className:"sm:text-2xl md:text-4xl text-text-verba",children:s}),(0,r.jsx)("p",{className:"sm:text-sm text-base text-text-alt-verba font-light",children:m})]})]}),(0,r.jsxs)("div",{className:"flex flex-row justify-center items-center",children:[(0,r.jsx)("div",{className:"hidden sm:h-[3vh] lg:h-[5vh] bg-text-alt-verba w-px sm:mx-2 md:mx-4"}),(0,r.jsxs)("div",{className:"lg:flex hidden lg:flex-row items-center lg:gap-3 justify-between",children:[(0,r.jsx)("div",{className:"hidden sm:block sm:h-[3vh] lg:h-[5vh] bg-text-alt-verba w-px mx-1"}),(0,r.jsx)(d,{Icon:n.utr,iconSize:18,title:"Chat",currentPage:h,setCurrentPage:b,setPage:"CHAT"}),(0,r.jsx)(d,{Icon:n.emU,iconSize:18,title:"Documents",currentPage:h,setCurrentPage:b,setPage:"DOCUMENTS"}),(0,r.jsx)(d,{Icon:i.lLR,iconSize:18,title:"Status",currentPage:h,setCurrentPage:b,setPage:"STATUS"}),(0,r.jsx)("div",{className:"hidden sm:block sm:h-[3vh] lg:h-[5vh] bg-text-alt-verba w-px mx-1"}),(0,r.jsx)(d,{Icon:o.Lgw,iconSize:18,title:"Add Documents",currentPage:h,setCurrentPage:b,setPage:"ADD"}),(0,r.jsx)(d,{Icon:n.LTV,iconSize:18,title:"RAG",currentPage:h,setCurrentPage:b,setPage:"RAG"}),(0,r.jsx)(d,{Icon:n.zfW,iconSize:18,title:"Settings",currentPage:h,setCurrentPage:b,setPage:"SETTINGS"}),(0,r.jsx)("div",{className:"hidden sm:block sm:h-[3vh] lg:h-[5vh] bg-text-alt-verba w-px mx-1"}),(0,r.jsxs)("button",{className:"md:hidden btn md:btn-sm lg:btn-md lg:flex items-center justify-center border-none bg-secondary-verba hover:bg-button-hover-verba",onClick:v,children:[(0,r.jsx)(a.hJX,{size:18,className:""}),(0,r.jsx)("p",{className:"text-xs sm:hidden md:flex ",children:f})]}),(0,r.jsx)("p",{className:"hidden lg:flex text-xs text-text-alt-verba",children:u})]}),(0,r.jsx)("div",{className:"flex flex-row items-center sm:gap-1 lg:gap-5 justify-between",children:(0,r.jsx)("div",{className:"lg:hidden sm:flex md:ml-4 sm:mr-8",children:(0,r.jsx)("ul",{className:"menu sm:menu-horizontal bg-base-200 rounded-box",children:(0,r.jsx)("li",{children:(0,r.jsxs)("details",{children:[(0,r.jsx)("summary",{children:(0,r.jsx)(c.bqP,{size:20})}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{onClick:e=>{b("CHAT")},children:(0,r.jsx)("a",{children:"Chat"})}),(0,r.jsx)("li",{onClick:e=>{b("DOCUMENTS")},children:(0,r.jsx)("a",{children:"Documents"})}),(0,r.jsx)("li",{onClick:e=>{b("STATUS")},children:(0,r.jsx)("a",{children:"Status"})}),(0,r.jsx)("li",{onClick:e=>{b("ADD")},children:(0,r.jsx)("a",{children:"Add Documents"})}),(0,r.jsx)("li",{onClick:e=>{b("RAG")},children:(0,r.jsx)("a",{children:"RAG"})}),(0,r.jsx)("li",{onClick:e=>{b("SETTINGS")},children:(0,r.jsx)("a",{children:"Settings"})}),(0,r.jsx)("li",{onClick:v,children:(0,r.jsx)("a",{children:"GitHub"})}),(0,r.jsx)("li",{className:"items-center justify-center text-xs text-text-alt-verba mt-2",children:u})]})]})})})})})]})]})};let u={Customization:{title:"Customization",description:"Customize the layout of your Verba by changing the title, subtitle, logo, and colors of the app.",settings:{title:{text:"Verba",type:"text",description:"Title of the Page"},subtitle:{text:"The Golden RAGtriever",type:"text",description:"Subtitle of the Page"},image:{src:"https://github.com/weaviate/Verba/blob/main/frontend/public/favicon.png?raw=true",type:"image",description:"Logo of the Page"},primary_color:{color:"#FDFF91",type:"color",description:"Primary Color"},secondary_color:{color:"#90FFA8",type:"color",description:"Secondary Color"},warning_color:{color:"#FF8399",type:"color",description:"Accent Color"},bg_color:{color:"#FEF7F7",type:"color",description:"Background Color"},bg_alt_color:{color:"#FFFFFF",type:"color",description:"Alternative Background Color"},text_color:{color:"#161616",type:"color",description:"Text Color"},text_alt_color:{color:"#8E8E8E",type:"color",description:"Alternative Text Color"},button_color:{color:"#EFEFEF",type:"color",description:"Button Color"},button_hover_color:{color:"#DCDCDC",type:"color",description:"Button Hover Color"}}},Chat:{title:"Chat Settings",description:"Customize chat settings like caching generated answers in Weaviate or let Weaviate give you autocomplete suggestions.",settings:{caching:{checked:!0,type:"check",description:"Should Results be cached in Weaviate?"},suggestion:{checked:!0,type:"check",description:"Should Weaviate provide suggestions for autocompletion"}}}};var h=s(65125),b=e=>{let{title:t,TextFieldSetting:s,setting:l,settingsConfig:n,setSettingsConfig:i}=e;return(0,r.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,r.jsx)("div",{className:"flex items-center justify-center",children:(0,r.jsx)("p",{children:s.description})}),(0,r.jsx)("div",{className:"flex items-center justify-center",children:(0,r.jsx)("label",{className:"input input-bordered flex items-center gap-2 w-full bg-bg-verba",children:(0,r.jsx)("input",{type:"text",className:"grow",placeholder:t,value:n[l].settings[t].text,onChange:e=>{let s=e.target.value;i(e=>{let r=JSON.parse(JSON.stringify(e));return r[l].settings[t].text=s,r})}})})})]})},f=e=>{let{title:t,ImageFieldSetting:s,setting:l,settingsConfig:n,setSettingsConfig:i}=e;return(0,r.jsxs)("div",{className:"flex flex-col justify-center gap-1",children:[(0,r.jsx)("div",{className:"flex justify-center items-center",children:(0,r.jsx)("p",{children:s.description})}),(0,r.jsx)("div",{className:"flex justify-center items-center",children:(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"flex justify-center items-center mt-4",children:(0,r.jsx)("img",{src:n[l].settings[t].src,alt:"Logo",className:"max-w-xs max-h-32 rounded-xl"})}),(0,r.jsxs)("div",{className:"flex justify-center items-center mt-1",children:[(0,r.jsx)("button",{onClick:()=>{var e;return null===(e=document.getElementById("LogoImageInput"))||void 0===e?void 0:e.click()},className:"btn border-none text-xs bg-bg-verba text-text-alt-verba",children:"Add Logo"}),(0,r.jsx)("input",{id:"LogoImageInput",type:"file",accept:"image/*",onChange:e=>{if(e.target.files&&e.target.files[0]){let s=new FileReader;s.onload=e=>{i(s=>{var r;let n=JSON.parse(JSON.stringify(s));return n[l].settings[t].src=null===(r=e.target)||void 0===r?void 0:r.result,n})},s.readAsDataURL(e.target.files[0])}},className:"hidden"})]})]})})]})},p=s(73478),v=e=>{let{title:t,ColorSetting:s,setting:n,settingsConfig:i,setSettingsConfig:o}=e,a=e=>{o(s=>{let r=JSON.parse(JSON.stringify(s));return d(e),r[n].settings[t].color=e,r})},[c,d]=(0,l.useState)(s.color);return(0,r.jsxs)("div",{className:"flex flex-col justify-center gap-1",children:[(0,r.jsx)("div",{className:"flex justify-center items-center",children:(0,r.jsx)("p",{children:s.description})}),(0,r.jsx)("div",{className:"flex gap-2 justify-center items-center",children:(0,r.jsxs)("div",{className:"flex flex-col gap-1 h-[15vh]",children:[(0,r.jsx)("label",{className:"input bg-bg-verba input-sm input-bordered flex items-center gap-2 w-full",children:(0,r.jsx)("input",{type:"text",className:"grow",placeholder:t,value:c,onChange:e=>{d(e.target.value),a(e.target.value)}})}),(0,r.jsx)(p.gW,{color:c,onChange:e=>{a(e)}})]})})]})},j=e=>{let{Icon:t,iconSize:s,title:l,currentSetting:n,setSetting:i,setSettingString:o}=e;return(0,r.jsxs)("button",{className:"btn lg:btn-lg flex items-center justify-center border-none hover:bg-button-hover-verba ".concat(n===o?"bg-primary-verba":"bg-button-verba text-text-alt-verba"),onClick:e=>{i(o)},children:[(0,r.jsx)(t,{size:s}),(0,r.jsx)("p",{className:"sm:hidden md:flex md:text-base lg:text-lg",children:l})]})},y=e=>{let{settingsConfig:t,setSettingsConfig:s}=e,[i,o]=(0,l.useState)("Customization"),[c,d]=(0,l.useState)(JSON.parse(JSON.stringify(t))),x=(e,t)=>{if(""===i)return null;switch(t.type){case"text":return(0,r.jsx)(b,{title:e,setting:i,TextFieldSetting:t,settingsConfig:c,setSettingsConfig:d});case"image":return(0,r.jsx)(f,{title:e,setting:i,ImageFieldSetting:t,settingsConfig:c,setSettingsConfig:d});case"check":return"Checkbox";case"color":return(0,r.jsx)(v,{title:e,setting:i,ColorSetting:t,settingsConfig:c,setSettingsConfig:d});default:return null}};return(0,r.jsxs)("div",{className:"flex justify-between items-start gap-5",children:[(0,r.jsxs)("div",{className:"flex flex-col gap-5 w-1/4",children:[(0,r.jsxs)("div",{className:"flex flex-col justify-center items-center gap-5",children:[(0,r.jsx)("p",{className:"md:text-base lg:text-lg text-text-alt-verba",children:"Settings"}),(0,r.jsxs)("div",{className:"flex flex-col w-full bg-bg-alt-verba p-5 rounded-lg shadow-lg gap-2",children:[(0,r.jsx)(j,{Icon:a._TT,iconSize:20,title:"Customize Verba",currentSetting:i,setSetting:o,setSettingString:"Customization"}),(0,r.jsx)(j,{Icon:n.utr,iconSize:20,title:"Chat Settings",currentSetting:i,setSetting:o,setSettingString:"Chat"})]})]}),""!=i&&(0,r.jsxs)("div",{className:"sm:hidden md:flex flex-col justify-center items-center gap-5",children:[(0,r.jsx)("p",{className:" md:text-base lg:text-lg text-text-alt-verba",children:"Description"}),(0,r.jsx)("div",{className:"flex flex-col w-full bg-bg-alt-verba p-5 rounded-lg shadow-lg gap-2",children:(0,r.jsxs)("p",{className:"sm:text-xs md:text-sm lg:text-base",children:[" ",t[i]?t[i].description:""]})})]})]}),(0,r.jsxs)("div",{className:"flex flex-col justify-center items-center gap-5 w-3/4",children:[(0,r.jsx)("p",{className:"text-lg text-text-alt-verba",children:"Configuration"}),(0,r.jsxs)("div",{className:"flex flex-col w-full bg-bg-alt-verba p-10 rounded-lg shadow-lg h-[70vh] gap-2 overflow-y-scroll",children:[(0,r.jsx)("p",{className:"font-bold text-2xl mb-5",children:i}),(0,r.jsx)("div",{className:" flex-coll gap-4 grid grid-cols-3",children:i&&Object.entries(t[i].settings).map(e=>{let[t,s]=e;return x(t,s)})}),(0,r.jsxs)("div",{className:"flex justify-end gap-2 mt-3",children:[(0,r.jsxs)("button",{onClick:()=>{s(c)},className:"btn flex items-center justify-center border-none text-text-verba bg-secondary-verba hover:bg-bg-alt-verba",children:[(0,r.jsx)(a.FJM,{}),(0,r.jsx)("p",{className:"",children:"Apply"})]}),(0,r.jsxs)("button",{onClick:()=>{d(u),s(u)},className:"btn flex items-center justify-center border-none text-text-verba bg-warning-verba hover:bg-bg-alt-verba",children:[(0,r.jsx)(h.B4e,{}),(0,r.jsx)("p",{className:"",children:"Reset"})]})]})]})]})]})};function N(){let[e,t]=(0,l.useState)("CHAT"),[s,n]=(0,l.useState)(u);return(0,l.useEffect)(()=>{document.documentElement.style.setProperty("--primary-verba",s.Customization.settings.primary_color.color),document.documentElement.style.setProperty("--secondary-verba",s.Customization.settings.secondary_color.color),document.documentElement.style.setProperty("--warning-verba",s.Customization.settings.warning_color.color),document.documentElement.style.setProperty("--bg-verba",s.Customization.settings.bg_color.color),document.documentElement.style.setProperty("--bg-alt-verba",s.Customization.settings.bg_alt_color.color),document.documentElement.style.setProperty("--text-verba",s.Customization.settings.text_color.color),document.documentElement.style.setProperty("--text-alt-verba",s.Customization.settings.text_alt_color.color),document.documentElement.style.setProperty("--button-verba",s.Customization.settings.button_color.color),document.documentElement.style.setProperty("--button-hover-verba",s.Customization.settings.button_hover_color.color)},[s]),(0,r.jsxs)("main",{className:"min-h-screen p-5 bg-bg-verba text-text-verba","data-theme":"light",children:[(0,r.jsx)(m,{title:s.Customization.settings.title.text,subtitle:s.Customization.settings.subtitle.text,imageSrc:s.Customization.settings.image.src,version:"v1.0.0",currentPage:e,setCurrentPage:t}),"SETTINGS"===e&&(0,r.jsx)(y,{settingsConfig:s,setSettingsConfig:n}),(0,r.jsx)("footer",{className:"footer footer-center p-4 mt-8 bg-bg-verba text-text-alt-verba",children:(0,r.jsx)("aside",{children:(0,r.jsx)("p",{children:"Build with ♥ and Weaviate \xa9 2024"})})})]})}}},function(e){e.O(0,[420,582,33,190,400,982,921,971,23,744],function(){return e(e.s=87094)}),_N_E=e.O()}]);