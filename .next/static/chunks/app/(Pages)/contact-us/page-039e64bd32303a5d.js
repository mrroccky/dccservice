(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[188],{6496:(e,s,a)=>{Promise.resolve().then(a.bind(a,5607))},5607:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>g});var t=a(5155),l=a(2115),r=a(4408),i=a(5539),n=a(7340),d=a(3315);let c={_origin:"https://api.emailjs.com"},o=(e,s,a)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!s)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class m{constructor(e){this.status=e.status,this.text=e.responseText}}let u=(e,s,a={})=>new Promise((t,l)=>{let r=new XMLHttpRequest;r.addEventListener("load",({target:e})=>{let s=new m(e);200===s.status||"OK"===s.text?t(s):l(s)}),r.addEventListener("error",({target:e})=>{l(new m(e))}),r.open("POST",c._origin+e,!0),Object.keys(a).forEach(e=>{r.setRequestHeader(e,a[e])}),r.send(s)}),h={send:(e,s,a,t)=>{let l=t||c._userID;return o(l,e,s),u("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:l,service_id:e,template_id:s,template_params:a}),{"Content-type":"application/json"})}};function x(){let[e,s]=(0,l.useState)({fullName:"",email:"",phone:"",service:"",message:""}),[a,r]=(0,l.useState)(""),[i,n]=(0,l.useState)(!1),[d,c]=(0,l.useState)(!1),o=a=>{s({...e,[a.target.name]:a.target.value})},m=()=>{let{fullName:s,email:a,phone:t,service:l,message:i}=e;return s&&a&&t&&l&&i?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a)?(r(""),!0):(r("Please enter a valid email address."),!1):(r("All fields are required."),!1)};return(0,t.jsx)("div",{className:"w-full bg-white pt-6 pb-6",children:(0,t.jsxs)("div",{className:"max-w-xl mx-auto p-6 bg-white text-black shadow-lg",children:[(0,t.jsx)("h1",{className:"text-2xl font-bold mb-6 text-center text-black",children:"Contact Us"}),d&&(0,t.jsx)("div",{className:"mb-4 text-green-500 text-sm text-center",children:"Message sent successfully!"}),a&&(0,t.jsx)("div",{className:"mb-4 text-red-400 text-sm text-center",children:a}),(0,t.jsxs)("form",{onSubmit:a=>{a.preventDefault(),m()&&(n(!0),r(""),c(!1),h.send("service_8ppegmx","template_b3erdpl",e,"by5jQkEDBF6Snc8fv").then(()=>{c(!0),s({fullName:"",email:"",phone:"",service:"",message:""})}).catch(e=>{console.error("Error sending email: ",e),r("Failed to send the message. Please try again later.")}).finally(()=>{n(!1)}))},className:"space-y-4",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"fullName",className:"block text-sm font-medium mb-1",children:"Full Name"}),(0,t.jsx)("input",{type:"text",name:"fullName",id:"fullName",value:e.fullName,onChange:o,className:"w-full rounded-md p-2 bg-gray-100 text-black",placeholder:"Enter your full name",required:!0})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium mb-1",children:"Email"}),(0,t.jsx)("input",{type:"email",name:"email",id:"email",value:e.email,onChange:o,className:"w-full rounded-md p-2 bg-gray-100 text-black",placeholder:"Enter your email",required:!0})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"phone",className:"block text-sm font-medium mb-1",children:"Phone No"}),(0,t.jsx)("input",{type:"text",name:"phone",id:"phone",value:e.phone,onChange:o,className:"w-full rounded-md p-2 bg-gray-100 text-black",placeholder:"Enter your phone number",required:!0})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"service",className:"block text-sm font-medium mb-1",children:"Services"}),(0,t.jsxs)("select",{name:"service",id:"service",value:e.service,onChange:o,className:"w-full rounded-md p-2 bg-gray-100 text-black",required:!0,children:[(0,t.jsx)("option",{value:"",disabled:!0,children:"-- Select One --"}),(0,t.jsx)("option",{value:"Maid",children:"Maid"}),(0,t.jsx)("option",{value:"Cook",children:"Cook"}),(0,t.jsx)("option",{value:"Baby Sitter",children:"Baby Sitter"}),(0,t.jsx)("option",{value:"Japa Maid",children:"Japa Maid"}),(0,t.jsx)("option",{value:"Driver",children:"Driver"}),(0,t.jsx)("option",{value:"Patient Care",children:"Patient Care"}),(0,t.jsx)("option",{value:"Elderly Care",children:"Elderly Care"}),(0,t.jsx)("option",{value:"Office Boy",children:"Office Boy"}),(0,t.jsx)("option",{value:"House Keeping",children:"House Keeping"}),(0,t.jsx)("option",{value:"Security Guard",children:"Security Guard"}),(0,t.jsx)("option",{value:"Home Nurse",children:"Home Nurse"})]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"message",className:"block text-sm font-medium mb-1",children:"Message"}),(0,t.jsx)("textarea",{name:"message",id:"message",value:e.message,onChange:o,className:"w-full rounded-md p-2 bg-gray-100 text-black",placeholder:"Write your message",rows:"4",required:!0})]}),(0,t.jsx)("div",{className:"text-center",children:(0,t.jsx)("button",{type:"submit",className:"w-full ".concat(i?"bg-gray-400":"bg-green-600"," hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md shadow-lg transition"),disabled:i,children:i?"Sending...":"Submit"})})]})]})})}var p=a(7697);function g(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.A,{}),(0,t.jsx)(d.A,{}),(0,t.jsx)(x,{}),(0,t.jsx)(n.A,{}),(0,t.jsx)(r.A,{}),(0,t.jsx)(p.A,{})]})}a(8493)},7340:(e,s,a)=>{"use strict";a.d(s,{A:()=>l});var t=a(5155);a(2115);let l=()=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"bg-white flex flex-col justify-center items-center font-sans",children:(0,t.jsx)("h1",{className:"text-center font-bold text-2xl mt-5 mb-5 text-black",children:"CONTACT DCC SERVICES"})}),(0,t.jsxs)("div",{className:"flex flex-col md:flex-row justify-center items-center p-4 space-y-4 md:space-y-0 md:space-x-6 bg-white",children:[(0,t.jsx)("div",{className:"flex-1 w-full max-w-xl bg-white p-1 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105",children:(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsxs)("p",{className:"text-gray-700 text-center",children:[(0,t.jsx)("span",{className:"font-bold text-lg block",children:"Reach To Us"}),"For any inquiries, please contact us using the details provided below."]}),(0,t.jsxs)("p",{className:"text-gray-700 text-center",children:[(0,t.jsx)("span",{className:"font-medium",children:"Phone:"})," +91 9307667930"]}),(0,t.jsxs)("p",{className:"text-gray-700 text-center",children:[(0,t.jsx)("span",{className:"font-medium",children:"Phone:"})," +91 9325859861"]}),(0,t.jsxs)("p",{className:"text-gray-700 text-center",children:[(0,t.jsx)("span",{className:"font-medium",children:"Email:"})," dccservicesnagpur@gmail.com"]}),(0,t.jsxs)("p",{className:"text-gray-700 text-center",children:[(0,t.jsx)("span",{className:"font-medium",children:"Address:"})," Plot Number 48, Subhash Nagar Rd, opposite BusStand, Naik Layout, Parsodi, Trimurtee Nagar, Nagpur, Maharashtra 440022"]})]})}),(0,t.jsx)("div",{className:"flex-1 w-full max-w-xl bg-white p-1 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105",children:(0,t.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d18328.356432313856!2d79.04068854382723!3d21.120024036819032!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c124c21e7a99%3A0x6164102382e1fc18!2sDCC%20SERVICES!5e0!3m2!1sen!2sin!4v1732002899795!5m2!1sen!2sin",width:"100%",height:"250",className:"border-0 rounded-xl",allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"Google Map"})})]})]})},3315:(e,s,a)=>{"use strict";a.d(s,{A:()=>r});var t=a(5155),l=a(2115);let r=()=>{let e=["/sliderimages/slider1.png","/sliderimages/slider2.png","/sliderimages/slider3.png","/sliderimages/slider4.png"],[s,a]=(0,l.useState)(0);return(0,l.useEffect)(()=>{let s=setInterval(()=>{a(s=>(s+1)%e.length)},3e3);return()=>clearInterval(s)},[]),(0,t.jsx)("div",{className:"relative w-full bg-white  overflow-hidden",children:(0,t.jsx)("div",{className:"flex transition-transform duration-1000 ease-in-out",style:{transform:"translateX(-".concat(100*s,"%)")},children:e.map((e,s)=>(0,t.jsx)("img",{src:e,alt:"Image ".concat(s+1),className:"w-full h-full object-cover flex-shrink-0"},s))})})}}},e=>{var s=s=>e(e.s=s);e.O(0,[711,884,954,441,517,358],()=>s(6496)),_N_E=e.O()}]);