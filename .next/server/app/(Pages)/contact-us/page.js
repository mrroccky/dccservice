(()=>{var e={};e.id=188,e.ids=[188],e.modules={6401:e=>{"use strict";e.exports=require("next-seo")},846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},9551:e=>{"use strict";e.exports=require("url")},1942:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>l.a,__next_app__:()=>m,pages:()=>c,routeModule:()=>u,tree:()=>o});var r=t(260),a=t(8203),i=t(5155),l=t.n(i),n=t(7292),d={};for(let e in n)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>n[e]);t.d(s,d);let o=["",{children:["(Pages)",{children:["contact-us",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,3765)),"D:\\dccservicesnagpur\\dccserviceswebsite\\src\\app\\(Pages)\\contact-us\\page.jsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,9139))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,2804)),"D:\\dccservicesnagpur\\dccserviceswebsite\\src\\app\\layout.js"],loading:[()=>Promise.resolve().then(t.bind(t,4972)),"D:\\dccservicesnagpur\\dccserviceswebsite\\src\\app\\loading.jsx"],"not-found":[()=>Promise.resolve().then(t.bind(t,6868)),"D:\\dccservicesnagpur\\dccserviceswebsite\\src\\app\\not-found.jsx"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,9139))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\dccservicesnagpur\\dccserviceswebsite\\src\\app\\(Pages)\\contact-us\\page.jsx"],m={require:t,loadChunk:()=>Promise.resolve()},u=new r.AppPageRouteModule({definition:{kind:a.RouteKind.APP_PAGE,page:"/(Pages)/contact-us/page",pathname:"/contact-us",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:o}})},2920:(e,s,t)=>{Promise.resolve().then(t.bind(t,3765))},3592:(e,s,t)=>{Promise.resolve().then(t.bind(t,2605))},2605:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>g});var r=t(5512),a=t(8009),i=t(5654),l=t(5432),n=t(8522),d=t(9387);let o={_origin:"https://api.emailjs.com"},c=(e,s,t)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!s)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!t)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class m{constructor(e){this.status=e.status,this.text=e.responseText}}let u=(e,s,t={})=>new Promise((r,a)=>{let i=new XMLHttpRequest;i.addEventListener("load",({target:e})=>{let s=new m(e);200===s.status||"OK"===s.text?r(s):a(s)}),i.addEventListener("error",({target:e})=>{a(new m(e))}),i.open("POST",o._origin+e,!0),Object.keys(t).forEach(e=>{i.setRequestHeader(e,t[e])}),i.send(s)}),p={send:(e,s,t,r)=>{let a=r||o._userID;return c(a,e,s),u("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:a,service_id:e,template_id:s,template_params:t}),{"Content-type":"application/json"})}};function x(){let[e,s]=(0,a.useState)({fullName:"",email:"",phone:"",service:"",message:""}),[t,i]=(0,a.useState)(""),[l,n]=(0,a.useState)(!1),[d,o]=(0,a.useState)(!1),c=t=>{s({...e,[t.target.name]:t.target.value})},m=()=>{let{fullName:s,email:t,phone:r,service:a,message:l}=e;return s&&t&&r&&a&&l?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)?(i(""),!0):(i("Please enter a valid email address."),!1):(i("All fields are required."),!1)};return(0,r.jsx)("div",{className:"w-full bg-white pt-6 pb-6",children:(0,r.jsxs)("div",{className:"max-w-xl mx-auto p-6 bg-white text-black shadow-lg",children:[(0,r.jsx)("h1",{className:"text-2xl font-bold mb-6 text-center text-black",children:"Contact Us"}),d&&(0,r.jsx)("div",{className:"mb-4 text-green-500 text-sm text-center",children:"Message sent successfully!"}),t&&(0,r.jsx)("div",{className:"mb-4 text-red-400 text-sm text-center",children:t}),(0,r.jsxs)("form",{onSubmit:t=>{t.preventDefault(),m()&&(n(!0),i(""),o(!1),p.send("service_8ppegmx","template_b3erdpl",e,"by5jQkEDBF6Snc8fv").then(()=>{o(!0),s({fullName:"",email:"",phone:"",service:"",message:""})}).catch(e=>{console.error("Error sending email: ",e),i("Failed to send the message. Please try again later.")}).finally(()=>{n(!1)}))},className:"space-y-4",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"fullName",className:"block text-sm font-medium mb-1",children:"Full Name"}),(0,r.jsx)("input",{type:"text",name:"fullName",id:"fullName",value:e.fullName,onChange:c,className:"w-full rounded-md p-2 bg-gray-100 text-black",placeholder:"Enter your full name",required:!0})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium mb-1",children:"Email"}),(0,r.jsx)("input",{type:"email",name:"email",id:"email",value:e.email,onChange:c,className:"w-full rounded-md p-2 bg-gray-100 text-black",placeholder:"Enter your email",required:!0})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"phone",className:"block text-sm font-medium mb-1",children:"Phone No"}),(0,r.jsx)("input",{type:"text",name:"phone",id:"phone",value:e.phone,onChange:c,className:"w-full rounded-md p-2 bg-gray-100 text-black",placeholder:"Enter your phone number",required:!0})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"service",className:"block text-sm font-medium mb-1",children:"Services"}),(0,r.jsxs)("select",{name:"service",id:"service",value:e.service,onChange:c,className:"w-full rounded-md p-2 bg-gray-100 text-black",required:!0,children:[(0,r.jsx)("option",{value:"",disabled:!0,children:"-- Select One --"}),(0,r.jsx)("option",{value:"Maid",children:"Maid"}),(0,r.jsx)("option",{value:"Cook",children:"Cook"}),(0,r.jsx)("option",{value:"Baby Sitter",children:"Baby Sitter"}),(0,r.jsx)("option",{value:"Japa Maid",children:"Japa Maid"}),(0,r.jsx)("option",{value:"Driver",children:"Driver"}),(0,r.jsx)("option",{value:"Patient Care",children:"Patient Care"}),(0,r.jsx)("option",{value:"Elderly Care",children:"Elderly Care"}),(0,r.jsx)("option",{value:"Office Boy",children:"Office Boy"}),(0,r.jsx)("option",{value:"House Keeping",children:"House Keeping"}),(0,r.jsx)("option",{value:"Security Guard",children:"Security Guard"}),(0,r.jsx)("option",{value:"Home Nurse",children:"Home Nurse"})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"message",className:"block text-sm font-medium mb-1",children:"Message"}),(0,r.jsx)("textarea",{name:"message",id:"message",value:e.message,onChange:c,className:"w-full rounded-md p-2 bg-gray-100 text-black",placeholder:"Write your message",rows:"4",required:!0})]}),(0,r.jsx)("div",{className:"text-center",children:(0,r.jsx)("button",{type:"submit",className:`w-full ${l?"bg-gray-400":"bg-green-600"} hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md shadow-lg transition`,disabled:l,children:l?"Sending...":"Submit"})})]})]})})}var h=t(8653);function g(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.A,{}),(0,r.jsx)(d.A,{}),(0,r.jsx)(x,{}),(0,r.jsx)(n.A,{}),(0,r.jsx)(i.A,{}),(0,r.jsx)(h.A,{})]})}t(6401)},8522:(e,s,t)=>{"use strict";t.d(s,{A:()=>a});var r=t(5512);t(8009);let a=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"bg-white flex flex-col justify-center items-center font-sans",children:(0,r.jsx)("h1",{className:"text-center font-bold text-2xl mt-5 mb-5 text-black",children:"CONTACT DCC SERVICES"})}),(0,r.jsxs)("div",{className:"flex flex-col md:flex-row justify-center items-center p-4 space-y-4 md:space-y-0 md:space-x-6 bg-white",children:[(0,r.jsx)("div",{className:"flex-1 w-full max-w-xl bg-white p-1 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105",children:(0,r.jsxs)("div",{className:"space-y-4",children:[(0,r.jsxs)("p",{className:"text-gray-700 text-center",children:[(0,r.jsx)("span",{className:"font-bold text-lg block",children:"Reach To Us"}),"For any inquiries, please contact us using the details provided below."]}),(0,r.jsxs)("p",{className:"text-gray-700 text-center",children:[(0,r.jsx)("span",{className:"font-medium",children:"Phone:"})," +91 9307667930"]}),(0,r.jsxs)("p",{className:"text-gray-700 text-center",children:[(0,r.jsx)("span",{className:"font-medium",children:"Phone:"})," +91 9325859861"]}),(0,r.jsxs)("p",{className:"text-gray-700 text-center",children:[(0,r.jsx)("span",{className:"font-medium",children:"Email:"})," dccservicesnagpur@gmail.com"]}),(0,r.jsxs)("p",{className:"text-gray-700 text-center",children:[(0,r.jsx)("span",{className:"font-medium",children:"Address:"})," Plot Number 48, Subhash Nagar Rd, opposite BusStand, Naik Layout, Parsodi, Trimurtee Nagar, Nagpur, Maharashtra 440022"]})]})}),(0,r.jsx)("div",{className:"flex-1 w-full max-w-xl bg-white p-1 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105",children:(0,r.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d18328.356432313856!2d79.04068854382723!3d21.120024036819032!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c124c21e7a99%3A0x6164102382e1fc18!2sDCC%20SERVICES!5e0!3m2!1sen!2sin!4v1732002899795!5m2!1sen!2sin",width:"100%",height:"250",className:"border-0 rounded-xl",allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"Google Map"})})]})]})},9387:(e,s,t)=>{"use strict";t.d(s,{A:()=>i});var r=t(5512),a=t(8009);let i=()=>{let e=["/sliderimages/slider1.png","/sliderimages/slider2.png","/sliderimages/slider3.png","/sliderimages/slider4.png"],[s,t]=(0,a.useState)(0);return(0,a.useEffect)(()=>{let s=setInterval(()=>{t(s=>(s+1)%e.length)},3e3);return()=>clearInterval(s)},[]),(0,r.jsx)("div",{className:"relative w-full bg-white  overflow-hidden",children:(0,r.jsx)("div",{className:"flex transition-transform duration-1000 ease-in-out",style:{transform:`translateX(-${100*s}%)`},children:e.map((e,s)=>(0,r.jsx)("img",{src:e,alt:`Image ${s+1}`,className:"w-full h-full object-cover flex-shrink-0"},s))})})}},3765:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>r});let r=(0,t(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"D:\\\\dccservicesnagpur\\\\dccserviceswebsite\\\\src\\\\app\\\\(Pages)\\\\contact-us\\\\page.jsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\dccservicesnagpur\\dccserviceswebsite\\src\\app\\(Pages)\\contact-us\\page.jsx","default")}};var s=require("../../../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),r=s.X(0,[989,924,560,440],()=>t(1942));module.exports=r})();