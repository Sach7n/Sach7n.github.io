(this.webpackJsonptest3=this.webpackJsonptest3||[]).push([[0],{12:function(n,e,t){n.exports=t.p+"static/media/ResumeF.19f37c4a.pdf"},30:function(n,e,t){n.exports=t.p+"static/media/ic2.1721068e.png"},32:function(n,e,t){n.exports=t.p+"static/media/2.b00bbd61.PNG"},33:function(n,e,t){n.exports=t.p+"static/media/3.e62dec0c.png"},34:function(n,e,t){n.exports=t.p+"static/media/4.3e8b1047.png"},36:function(n,e,t){n.exports=t(58)},41:function(n,e,t){},42:function(n,e,t){},58:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(8),i=t.n(o),l=(t(41),t(13)),s=(t(42),t(1)),c=t(9),m=t(10),d=t(15),p=t(14),f=t(2);function u(){var n=Object(s.a)(["\n  font-size: 1rem;\n  border: 0.02rem solid;\n  border-color: var(--Font3);\n  color: var(--Font3);\n  background-color:var(--MainBackground);\n  border-radius: 0.3rem;\n  cursor: pointer;\n  padding: 0.2rem 1rem;\n  transition: all 0.5s ease-in-out;\n  &:hover {\n    background: var(--LightBackground);\n  }\n  a{\n    color: var(--Font3)!important;\n    text-decoration:none;   \n  }\n  \n"]);return u=function(){return n},n}var g=f.a.button(u());function h(){var n=Object(s.a)(['\n\n\n.landing-page {\n    position: absolute;\n    top:50%;\n    left:28%;\n    transform: translate(-20%,-50%);\n    transition: opacity 3s;\n    animation: fadeIn ease-in-out 1.3s;\n}\n.landing-page .p-h {\n    color: var(--Font3) !important;\n    font-size: 1.5rem;\n}\n.landing-page .p-h1 {\n    color: var(--Font1) !important;\n    font-family: "Courier", !important;\n    font-size: 5rem;\n}\n.landing-page .p-h2 {\n    color: var(--Font2) !important;\n    font-family: "Courier", !important;\n    font-size: 2.5rem;\n}\n.landing-page .p-h3 {\n    color: var(--Font2) !important;\n    font-family: "Courier", !important;\n    font-size: 2.5rem;\n}\n@media only screen and (max-width: 768px) {\n    /* For mobile phones: */\n    .landing-page {\n        left:25%;\n        top:40%;\n    }\n    .landing-page .p-h, .landing-page .p-h3\n    {\n        font-size:calc(2em - 1rem);\n    }\n    .landing-page .p-h1 \n    {\n        font-size:calc(3.30em - 1rem);\n    }\n    .landing-page .p-h2\n    {\n        font-size:calc(2.9em - 1rem);\n    }\n}\n\n@keyframes fadeIn{\n    0%{\n\t\topacity: 0;\n\t\ttransform: translate3d(-20%, -58%, 0);\n    }\n    25%{\n\t\topacity: 0;\n\t\ttransform: translate3d(-20%, -54%, 0);\n    }\n    50%{\n\t\topacity: 0;\n\t\ttransform: translate3d(-20%, -53%, 0);\n    }\n    75%{\n\t\topacity: 0;\n\t\ttransform: translate3d(-20%, -53%, 0);\n\t}\n    80%{\n\t\topacity: 0.3;\n\t\ttransform: translate3d(-20%, -52%, 0);\n\t}\n    90%{\n\t\topacity: 0.6;\n\t\ttransform: translate3d(-20%, -51%, 0);\n\t}\n\t100%{\n\t\topacity: 1;\n\t\ttransform: translate3d(-20%,-50%, 0);\n}\n']);return h=function(){return n},n}var v=function(n){Object(d.a)(t,n);var e=Object(p.a)(t);function t(){return Object(c.a)(this,t),e.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(b,null,r.a.createElement("div",{id:"home",style:{height:"100vh"}},r.a.createElement("section",{className:"main-div"},r.a.createElement("div",{className:"landing-page"},r.a.createElement("p",{className:"p-h"},"Hi, My name is"),r.a.createElement("h1",{className:"p-h1"},"Sachin Macwan,"),r.a.createElement("h2",{className:"p-h2"}," I am a Software Developer"),r.a.createElement("p",{className:"p-h3"},"I love building softwares with beautiful interface"),r.a.createElement(g,null,r.a.createElement("a",{href:"mailto:s.macwan794@gmail.com"},"Contact Me "))),r.a.createElement("div",null))))}}]),t}(a.Component),b=f.a.div(h()),E=t(3);function x(){var n=Object(s.a)(["\n.toggle_button_div {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  height: 24px;\n  width: 30px;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  box-sizing: border-box;\n  animation: all fade-toggle 0.5s;\n}\n\n.toggle-button:focus {\n  outline: none;\n}\n\n.toggle_button_div div{\n  width: 30px;\n  height: 2px;\n  background: var(--Font3);\n  transition:all 0.4s ease-in; \n}\n\n.toggle_button_div.close div{\n  transition:all 0.4s ease-out;\n\n}\n.toggle_button_div.close .toggle_button_line1 {\n  transform: translate(0px,0px) rotate(-225deg) translate(5px,-4px);\n  \n}\n.toggle_button_div.close .toggle_button_line2{\ndisplay: none;\n}\n.toggle_button_div.close .toggle_button_line3 {\n  transform: translate(0px,0px) rotate(225deg) translate(5px,4px);   \n}\n@keyframes fade-toggle {\n\t0%{\n    opacity: 0;\n    transform: translate3d(0, -70%, 0);\n\t}\n\t100% {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n\t}\n}\n}\n"]);return x=function(){return n},n}var w=function(n){var e="toggle_button_div";return n.show&&(e="toggle_button_div close"),r.a.createElement(y,null,r.a.createElement("button",{className:e,onClick:n.click},r.a.createElement("div",{className:"toggle_button_line1"}),r.a.createElement("div",{className:"toggle_button_line2"}),r.a.createElement("div",{className:"toggle_button_line3"})))},y=f.a.div(x()),L=t(12),k=t.n(L),_=t(30),C=t.n(_);function N(){var n=Object(s.a)(["\n.toolbar{\n  position:fixed;\n  top:0;\n  left:0;\n  width:100%;\n  background:var(--MainBackground);\n  height: 55px;\n  z-index:3;  \n}\n\n.toolbar__navigation{\n  display:flex;\n  height:100%;\n  align-items:center;\n  padding: 0 1rem;  \n}\n\n.toolbar__logo{\n  margin-left: 0;\n  cursor:pointer;\n}\n\n.spacer{\n  flex:1;\n}\n\n.toolbar_navigation-items ul{\n  list-style:none;\n  margin:0;\n  padding:0;\n  display:flex;\n}\n\n.toolbar_navigation-items li{\n  padding:0 0.8rem;\n  margin-left: 1.7rem;\n  opacity: 0;\n  animation: fadeDown 0.5s ease-in-out both;\n}\n\n.toolbar_navigation-items a{\n  color:var(--Font1);\n  text-decoration:none;\n  cursor: pointer;\n}\n\n.toolbar_navigation-items a:hover,\n.toolbar_navigation-items a:active\n{\n  color:var(--Font3);\n}\n.toolbar__toggle-button{\n  z-index:3;  \n}\n\n@media (max-width: 768px){\n  .toolbar_navigation-items{\n    display:none;\n  }\n}\n\n@media (min-width:769px){\n  .toolbar__toggle-button{\n    display:none;\n  }\n  \n\n.toolbar_navigation-items li:nth-child(2) {\n\tanimation-delay: 0.1s;\n}\n.toolbar_navigation-items li:nth-child(3) {\n\tanimation-delay: 0.2s;\n}\n.toolbar_navigation-items li:nth-child(4) {\n\tanimation-delay: 0.3s;\n}\n.toolbar_navigation-items li:nth-child(5) {\n\tanimation-delay: 0.4s;\n}\n\n@keyframes fadeDown {\n\t0% {\n\t\topacity: 0;\n\t\ttransform: translate3d(0, -70%, 0);\n\t}\n\t100% {\n\t\topacity: 1;\n\t\ttransform: translate3d(0, 0, 0);\n  }\n}\n"]);return N=function(){return n},n}var M=function(n){return r.a.createElement(Z,null,r.a.createElement("header",{className:"toolbar"},r.a.createElement("nav",{className:"toolbar__navigation"},r.a.createElement("div",{className:"toolbar__logo"},r.a.createElement(E.Link,{activeClass:"active",to:"home",spy:!0,smooth:!0,offset:-70,duration:500},r.a.createElement("img",{src:C.a,width:55,height:55,alt:""}))),r.a.createElement("div",{className:"spacer"}),r.a.createElement("div",{className:"toolbar_navigation-items"},r.a.createElement("ul",{className:"toolbar-ul"},r.a.createElement("li",null,r.a.createElement(E.Link,{activeClass:"active",to:"about",spy:!0,smooth:!0,offset:-70,duration:500},"About")),r.a.createElement("li",null,r.a.createElement(E.Link,{activeClass:"active",to:"work",spy:!0,smooth:!0,offset:-70,duration:500},"Work")),r.a.createElement("li",null,r.a.createElement(E.Link,{activeClass:"active",to:"experience",spy:!0,smooth:!0,offset:-70,duration:500},"Experience")),r.a.createElement("li",null,r.a.createElement(E.Link,{activeClass:"active",to:"contact",spy:!0,smooth:!0,offset:-70,duration:500},"Contact")),r.a.createElement("li",null,r.a.createElement("a",{href:k.a,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(g,null,"Resume"))))),r.a.createElement("div",{className:"toolbar__toggle-button"},r.a.createElement(w,{show:n.show,click:n.drawerClickHandler})))))},Z=f.a.div(N());function j(){var n=Object(s.a)(["\n.close{\n  max-width: 22px;\n  position:absolute;\n  margin-left:82%;\n  margin-top:8%;\n  cursor:pointer;\n  color: var(--Font3) !important;\n}\n.close-btn{\n  border-radius: 0.3rem;\n  border: 0.1rem solid;\n  font-size: 22px;\n  font-weight:bold;\n}\n.side-drawer {\n    height: 100%;\n    background: var(--LightBackground);\n    box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);\n    position: fixed;\n    top: 0;\n    right: 0;\n    width: 70%;\n    max-width: 400px;\n    z-index: 4;\n    transform: translateX(100%);\n    transition: transform 0.3s ease-out;\n  }\n\n  .side-drawer ul{\n    height:100%;\n    list-style:none;\n    display:flex;\n    flex-direction:column;\n    justify-content:center;    \n  }\n\n  .side-drawer li{\n    margin: 1rem 0;\n  }\n  \n  .side-drawer a{\n    color: var(--Font2);\n  }\n\n  .side-drawer a:hover,\n  .side-drawer a:active{\n    color:var(--Font3);\n    text-decoration:none !important;\n  }\n  .side-drawer.open {\n    transform: translateX(0);\n  }\n\n  @media (min-width:769px){\n    .side-drawer{\n      display:none;\n    }\n  }\n  "]);return j=function(){return n},n}var S=function(n){var e="side-drawer";return n.show&&(e="side-drawer open"),r.a.createElement(F,null,r.a.createElement("nav",{className:e},r.a.createElement("div",{className:"close"},r.a.createElement(g,{className:"close-btn",onClick:n.click},"X")),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(E.Link,{onClick:n.click,activeClass:"active",to:"about",spy:!0,smooth:!0,offset:-70,duration:500},"About")),r.a.createElement("li",null,r.a.createElement(E.Link,{onClick:n.click,activeClass:"active",to:"work",spy:!0,smooth:!0,offset:-70,duration:500},"Work")),r.a.createElement("li",null,r.a.createElement(E.Link,{onClick:n.click,activeClass:"active",to:"experience",spy:!0,smooth:!0,offset:-70,duration:500},"Experience")),r.a.createElement("li",null,r.a.createElement(E.Link,{onClick:n.click,activeClass:"active",to:"contact",spy:!0,smooth:!0,offset:-70,duration:500},"Contact")),r.a.createElement("li",null,r.a.createElement("a",{href:k.a,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(g,null,"Resume"))))))},F=f.a.div(j());function H(){var n=Object(s.a)(["\n.backdrop{\n    position:fixed;\n    height:100%;\n    width:100%;\n    top:0;\n    left:0;\n    background: transperant;\n    z-index:3;\n}\n"]);return H=function(){return n},n}var I=function(n){return r.a.createElement(z,null,r.a.createElement("div",{className:"backdrop",onClick:n.click}))},z=f.a.div(H());function O(){var n,e=Object(a.useState)(!1),t=Object(l.a)(e,2),o=t[0],i=t[1],s=function(){return i(!o)};return o&&(n=r.a.createElement(I,{click:function(){i(!1)}})),r.a.createElement("div",{style:{height:"100%"}},r.a.createElement(M,{show:o,drawerClickHandler:s}),r.a.createElement(S,{show:o,click:s}),n)}function B(){var n=Object(s.a)(["\n\n.main-sec{\n    border-color:red;\n    position:relative;\n    margin-left:30%;\n    transform: translate(-20%);\n}\n.main-sec p{\nmargin-top:5%;\n}\n.techs{\n    color:var(--Font1);\n}\n@media only screen and (max-width: 768px) {\n    /* For mobile phones: */\n    .main-sec{\n    margin-left:25%;   \n    }\n    .main-sec p{\n    margin-top:10%;\n    }\n}\n"]);return B=function(){return n},n}var A=function(){return r.a.createElement("div",{className:"my-5",style:{height:"100vh"},id:"about"},r.a.createElement(P,null,r.a.createElement("section",{className:"main-sec"},r.a.createElement("h3",{className:"text-title"},"About me"),r.a.createElement("p",null,"Hello, I am Sachin. I am a Software Developer based in Melbourne, Victoria, Australia. I just finished my Professional year program and internship and now learning new segments of Software engineering mainly focused on web development. As a software engineer, I enjoy learning better ways to create seamles user experiences with clean and effcient code. Here are some of the techonologies I am working with recently.",r.a.createElement("p",{className:"techs"},"Reactjs || Bootstrap 4 || Styled-Components || HTML || CSS"),"  "))))},P=f.a.div(B());function T(){var n=Object(s.a)(['\n.main-work{\n  margin:60% 0 10px 0;  \n  height: 100vh;  \n  }\n.container{\n    background-color: var(--MainBackground) !important;\n    display: grid;\n    width: 100%;\n    \n    //Using auto-fill and auto-fit\n    grid-template-rows: repeat(2, minmax(150px, min-content));\n    grid-template-columns: repeat(auto-fill,100px);\n    grid-template-columns: repeat(auto-fit,100px);\n    grid-template-columns: repeat(auto-fit,minmax(200px, 1fr));\n    grid-auto-rows: 150px;\n}\n.item{\n      padding: 50px;\n      background-color: var(--MainBackground) !important;\n    }\n    \n  .card {\n    background-color:var(--LightBackground) !important;\n    color: var(--Font2) !important;\n    font-family: "Courier", !important;\n    -webkit-box-shadow: 0 10px 6px -6px var(--Font3);\n    -moz-box-shadow: 0 10px 6px -6px var(--Font1);\n    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);\n  }\n\n  .card-title {\n    text-align:center;\n    color: var(--Font1)!important;\n  }\n  @media only screen and (max-width: 768px) {\n    /* For mobile phones: */\n    .item{\n      padding:5px;\n    }\n    .main-work{\n      margin:80% 0 0 0;  \n      height: 100vh;  \n      }\n      .container{\n        margin-top:10%;  \n      }\n}\n  \n']);return T=function(){return n},n}var X=function(){return r.a.createElement(D,null,r.a.createElement("div",{id:"experience",style:{height:"100vh"},className:"main-work"},r.a.createElement("h3",{className:"text-title"},"Experience"),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"item item-1"},r.a.createElement("div",{className:"card h-100"},r.a.createElement("div",{className:"card-title"},"Cultural Infusion"),r.a.createElement("div",{className:"card-body"},"Developed a web application for the internal use of the organization. Used PHP for the back end, HTML5/CSS3/JavaScript/JQuery for the front end and SQL Server DB. Used SQL Server Integration Service(SSIS) for data integration and migration. Created end-user testing module and provided user training."),r.a.createElement("div",{className:"card-footer"},"HTML CSS JavaScrpt PHP MSBI(SSIS)"))),r.a.createElement("div",{className:"item item-2"},r.a.createElement("div",{className:"card h-100"},r.a.createElement("div",{className:"card-title"},"Dream PTE pvt ltd"),r.a.createElement("div",{className:"card-body"},"Redesigned the existing Javascript web application using Reactjs and styled components. Improved the speed and user experience of the web application. Prepared the documentation and provided the user training."),r.a.createElement("div",{className:"card-footer"},"ReactJS HTML CSS Styled-Components"))))))},D=f.a.div(T());function R(){var n=Object(s.a)(["\n.main-div{\n    height:100%;\n}\n.main-sec{\n    position:relative;\n    margin-left:30%;\n    transform: translate(-20%);\n}\n.scroll-btn{\n    max-width: 22px;\n    position:absolute;\n    margin-left:50%;\n    margin-top:20%;\n    cursor:pointer;\n}\n.scroll-btn i:hover{ \n    transform: scale(1.2);\n    transition: all 0.3s ease;\n}\n.main-sec p{\n    margin-top:5%;\n}\n.social{\n    display:none;\n}\n.footer{\n    position:relative;\n    left:0;\n    top:62%;\n    height:10%;\n    width: 100%;\n    color:var(--Font1);\n    text-align: center;\n    z-index:0;\n}\n.bc{\n    color:var(--Font2);\n}\n@media only screen and (max-width: 768px) {\n    /* For mobile phones: */\n    .main-div{\n    margin-top:50%;\n    }\n    .main-sec{\n    margin-top:40%;\n    margin-left:25%;\n    }\n    .main-sec p{\n    margin-top:10%;\n    }\n    .social{\n        display:flex;\n        position:relative;\n        top:25%;\n        left:0;\n        text-align:center;\n        width:100%;\n        background:var(--MainBackground);\n    }\n    .social ul{\n        align-items:center;\n        display:flex;\n        padding: 0 1rem;\n        list-style:none;\n        margin-left:22%;\n    }\n    .social li{\n        padding:0 0.5rem;\n        transform: scale(1.3);\n        margin-left: 1.5rem;\n    }\n    .social li a{\n        color: var(--Font2);\n    }\n    \n    .social li:hover {\n        background-color:transparent;\n        color: var(--Font3);\n      }\n      .footer{\n        top:55%;\n        margin-left:50%;\n        transform:translate(-50%);\n      }\n}\n"]);return R=function(){return n},n}function V(){E.animateScroll.scrollToTop()}var J=function(){return r.a.createElement(q,null,r.a.createElement("div",{id:"contact",className:"main-div",style:{height:"100vh"}},r.a.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}),r.a.createElement("section",{className:"main-sec mt-5"},r.a.createElement("h3",{className:"text-title"},"Contact me "),r.a.createElement("p",null,"I am open to all opportunities. My inbox is always open if you have any questions of just want to say hi, I will try to get back to you"),r.a.createElement(g,null,r.a.createElement("a",{href:"mailto:s.macwan794@gmail.com"},"Say Hello"))),r.a.createElement("div",{className:"scroll-btn"},r.a.createElement("i",{class:"fa fa-arrow-up",onClick:V})),r.a.createElement("div",{className:"social"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"mailto:s.macwan794@gmail.com",class:"envelope"},r.a.createElement("i",{class:"fa fa-envelope"}))),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",href:"https://www.linkedin.com/in/sachin-macwan-727352163/",class:"linkedin",rel:"noopener noreferrer"},r.a.createElement("i",{class:"fa fa-linkedin"}))),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",href:"https://github.com/Sach7n",class:"github",rel:"noopener noreferrer"},r.a.createElement("i",{class:"fa fa-github"})))))))},q=f.a.div(R());function W(){var n=Object(s.a)(["\nbody.a {margin:2;height:2000px;}\n\n.icon-bar {\n  position: fixed;\n  top: 50%;\n  transform: translateY(-50%);\n  animation: fade-in linear 2s;\n}\n\n.icon-bar a {\n  display: block;\n  text-align: center;\n  padding: 16px;\n  transition: all 0.3s ease;\n  color:var(--Font1);\n  font-size: 20px;\n}\n\n.icon-bar a:hover {\n  background-color:transparent;\n  color: var(--Font3);;\n  transform: scale(1.1); \n}\n.content {\n  margin-left: 75px;\n  font-size: 30px;\n}\n\n.text1 p{writing-mode: ertical-lr;\n  \n  @keyframes fade-in{\n  0%{\n\t\topacity: 0;\n\t\ttransform: translate3d(0,-41%, 0);\n  }\n  25%{\n\t\topacity: 0;\n\t\ttransform: translate3d(0,-42%, 0);\n  }\n  50%{\n\t\topacity: 0;\n\t\ttransform: translate3d(0,-43%, 0);\n  }\n  70%{\n\t\topacity: 0;\n\t\ttransform: translate3d(0,-43%, 0);\n  }\n  85%{\n\t\topacity: 0.4;\n\t\ttransform: translate3d(0,-47%, 0);\n  }\n  90%{\n\t\topacity: 0.6;\n\t\ttransform: translate3d(0,-48%, 0);\n  }\n  95%{\n\t\topacity: 0.8;\n\t\ttransform: translate3d(0,-49%, 0);\n\t}\n\t100%{\n\t\topacity: 1;\n\t\ttransform: translate3d(0,-50%,0);\n  }\n}   \n"]);return W=function(){return n},n}var Q=function(n){return r.a.createElement(U,null,r.a.createElement("div",{id:"a",className:"d-none d-lg-block"},r.a.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}),r.a.createElement("div",{class:"icon-bar"},r.a.createElement("a",{href:"mailto:s.macwan794@gmail.com",class:"envelope"},r.a.createElement("i",{class:"fa fa-envelope"})),r.a.createElement("a",{target:"_blank",href:"https://www.linkedin.com/in/sachin-macwan-727352163/",class:"linkedin"},r.a.createElement("i",{class:"fa fa-linkedin"})),r.a.createElement("a",{target:"_blank",href:"https://github.com/Sach7n",class:"github"},r.a.createElement("i",{class:"fa fa-github"})))))},U=f.a.div(W()),G=t(31),Y=t.n(G),$=(t(55),t(4)),K=t(32),nn=t.n(K),en=t(33),tn=t.n(en),an=t(34),rn=t.n(an);function on(){var n=Object(s.a)(["\n.main-div{\n  height:100vh;\n  margin:5px 0 10px 0;\n}\n\n.main-sec {\n  margin-left: 10%;\n}\n\n.project_pro_1,\n.project_pro_2 {\n  margin: 4%;\n  padding: 2%;\n  height: 100%;\n  width: 80%;\n  display: flex;\n}\n\n.image,\n.image_r {\n  padding: 0px;\n  margin: 2%;\n  height: 300px;\n  width: 500px;\n  max-width: 500px;\n  background-color:var(--MainBackground);\n}\n\n.image_r {\n  transform: translateX(-13%);\n}\n\n.image img,\n.image_r img {\n  margin: 0;\n  padding: 0;\n  max-height: 300px;\n  max-width: 500px;\n}\n\n.info_class,\n.info_class_r {\n  margin: 40px 0 0 0;\n  padding: 1%;\n  display: flex;\n  flex-direction: column;\n}\n\n.title {\n  font-size: x-large;\n  text-align: right;\n  transform: translateX(-10%);\n}\n\n.title_r {\n  font-size: x-large;\n  text-align: left;\n}\n\n.desc {\n  transform: translateX(-10%);\n  z-index: 2;\n  padding: 2.5%;\n  border-radius: 8px;\n  background-color: var(--LightBackground);\n  box-shadow:7px 7px 14px rgba(0,0,0,0.1);\n}\n\n.desc_r {\n  z-index: 2;\n  padding: 2.5%;\n  border-radius: 8px;\n  background-color: var(--LightBackground);\n  box-shadow:-7px -7px 14px rgba(0,0,0,0.1);\n}\n\n.techs {\n  text-align: right;\n  transform: translateX(-10%);\n}\n.techs p{\n  margin: 0;\n  padding: 0;\n}\n.icons {\n  text-align: right;\n  transform: translateX(-10%);\n}\n.a_active i:hover{\n  transform: scale(1.2);\n  transition: all 0.5s ease;\n}\n\n.a_not_active {\n  pointer-events: none;\n  cursor: default;\n  text-decoration: none;\n  color: black;\n}\n\n@media only screen and (max-width: 769px) {\n  .main-sec {\n      margin: 1%;\n      overflow: hidden;\n      \n  }\n  .project_pro_1,\n  .project_pro_2 {\n      margin: 3% 0 1% 0;\n      padding: 1%;\n      height: 100%;\n      width: 98%;\n      display: flex;\n  }\n  .image,\n  .image_r {\n      display: none;\n  }\n  .title,\n  .title_r {\n      transform: translateX(0);\n      text-align: center;\n      font-size: large;\n  }\n  .desc,\n  .desc_r {\n      margin-top:0;\n      transform: translateX(0%);\n      z-index: 2;\n      padding: 4%;\n      border-radius: 8px;\n      background-color: brown;\n  }\n  .icons,.icons_r {\n      text-align: right;\n      transform: translateX(-5%);\n\n  }\n  .techs{\n      text-align: left;\n      transform: translateX(0%);\n  }\n}\n"]);return on=function(){return n},n}var ln=function(){return Object(a.useEffect)((function(){Y.a.init({offset:300,delay:0,duration:500})}),[]),r.a.createElement(sn,null,r.a.createElement("div",{id:"work",className:"main-div"},r.a.createElement("h3",{className:"text-title"},"Work"),r.a.createElement("div",{className:"App"},r.a.createElement("section",{className:"main-sec"},r.a.createElement($.a.article,{className:"project_pro_1",whileHover:{y:-2},transition:{type:"tween"},"data-aos":"fade-left","data-aos-offset":"200","data-aos-once":"true","data-aos-easing":"ease-in-sine"},r.a.createElement("div",{className:"info_class_r"},r.a.createElement("h3",{className:"title_r"},"Travel India"),r.a.createElement("p",{className:"desc_r"},"A simple web app to decide where to go on a trip. It gives information about different places to visit. The app is developed using Reactjs and tailwind CSS for designing. The state is managed using hooks. The photos are fetched using pixaby API."),r.a.createElement("p",{className:"techs_r"},"Reactjs (Context API), Tailwind CSS, Pixaby API"),r.a.createElement("div",{className:"icons_r"},r.a.createElement("a",{className:"a_active",href:"https://travind.netlify.app/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{class:"fas fa-external-link-square-alt"})))),r.a.createElement($.a.div,{className:"image_r",whileHover:{zIndex:3}},r.a.createElement("a",{className:"a_active",href:"https://travind.netlify.app/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement($.a.img,{src:tn.a,alt:"abc",whileHover:{scale:1.02},transition:{type:"tween"}})))),r.a.createElement($.a.article,{className:"project_pro_2","data-aos":"fade-left",whileHover:{y:-1},transition:{duration:.1},"data-aos-once":"true"},r.a.createElement($.a.div,{className:"image",whileHover:{zIndex:3}},r.a.createElement("a",{className:"a_active",href:"https://react-ecomm1.netlify.app/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement($.a.img,{src:nn.a,alt:"abc",whileHover:{scale:1.02},transition:{type:"tween"}}))),r.a.createElement("div",{className:"info_class"},r.a.createElement("h3",{className:"title"},"E Commerce store"),r.a.createElement("p",{className:"desc"},"A Basic E Commerce website with the functionalities like details of product, modal showing the basic info and the state (whether in cart or not ) and add to cart button and the component showing all the items added to in cart."),r.a.createElement("p",{className:"techs"},"Reactjs (Context API), Hooks"),r.a.createElement("div",{className:"icons"},r.a.createElement("a",{className:"a_active",href:"https://react-ecomm1.netlify.app/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{class:"fas fa-external-link-square-alt"}))))),r.a.createElement($.a.article,{className:"project_pro_1","data-aos":"fade-right","data-aos-offset":"200",whileHover:{y:-1},transition:{duration:.3},"data-aos-once":"true","data-aos-easing":"ease-in-sine"},r.a.createElement("div",{className:"info_class_r"},r.a.createElement("h3",{className:"title_r"},"Squiggle App"),r.a.createElement("p",{className:"desc_r"},"A single page web app which displays the name of the teams initially. By selecting any team the score for all the matches is displayed. If the team is not selected, the score for all the AFL matches is displayed."),r.a.createElement("p",{className:"techs_r"},"Reactjs (Context API), Bootstrap 4, Styled components"),r.a.createElement("div",{className:"icons_r"},r.a.createElement("a",{className:"a_active",href:"https://github.com/Sach7n/AFL-Scorecard",target:"_blank",rel:"noreferrer"},r.a.createElement("i",{class:"fas fa-external-link-square-alt"})))),r.a.createElement($.a.div,{className:"image_r",whileHover:{zIndex:3}},r.a.createElement($.a.img,{src:rn.a,alt:"abc",whileHover:{scale:1.05},transition:{duration:.3}})))))))},sn=f.a.div(on()),cn=t(22),mn=t.n(cn),dn=t(35);function pn(){var n=Object(s.a)(["\n.my-logo{\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    padding:30px 30px;\n}\n    \n#logo path:nth-child(1){\n  stroke-dasharray: 10px;\n  stroke-dashoffset: 200px;\n  animation: line-animation ease forwards 1s;\n}\n\n#logo path:nth-child(2){\n  stroke-dasharray: 10px;\n  stroke-dashoffset: 84px;\n  animation: letter-animation ease forwards 2s;\n}\n@keyframes line-animation{\n  from {\n      stroke-dasharray: 5px;\n      stroke-dashoffset: 100%;\n  }\n  to{\n      stroke-dashoffset: 0;\n  }\n}\n@keyframes letter-animation{\n  0%{\n    stroke-dasharray: 50px;\n    stroke-dashoffset: 100%;\n    opacity:0;\n}\n25%{\n    stroke-dashoffset: 0;\n    opacity:0;\n}\n50%{\n  stroke-dashoffset: 0;\n  opacity:0;\n}\n100%{\n  stroke-dashoffset: 1;\n  opacity:1;\n}\n}\n\n\n"]);return pn=function(){return n},n}var fn=function(n){return function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(n){var e;return Object(c.a)(this,a),(e=t.call(this,n)).state={loading:!0},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var n=Object(dn.a)(mn.a.mark((function n(){var e=this;return mn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:try{setTimeout((function(){e.setState({loading:!1})}),1700)}catch(t){console.log(t),this.setState({loading:!1})}case 1:case"end":return n.stop()}}),n,this)})));return function(){return n.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.loading?r.a.createElement(un,null,r.a.createElement("div",{className:"my-logo"},r.a.createElement("svg",{id:"logo",width:"150",height:"150",viewBox:"0 0 287 278",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M284.5 139C284.5 214.312 221.448 275.5 143.5 275.5C65.5522 275.5 2.5 214.312 2.5 139C2.5 63.6876 65.5522 2.5 143.5 2.5C221.448 2.5 284.5 63.6876 284.5 139Z",stroke:"#046D08","stroke-width":"8"}),r.a.createElement("path",{d:"M114.272 214.44L113.838 216.392L113.847 216.394L114.272 214.44ZM92.096 206.664L90.1076 206.449L89.9618 207.795L91.1577 208.43L92.096 206.664ZM95.84 172.104L96.891 170.402L94.1932 168.736L93.8516 171.889L95.84 172.104ZM117.44 181.896L116.836 183.802L116.836 183.802L117.44 181.896ZM156.032 182.184L156.957 183.957L156.987 183.942L157.016 183.925L156.032 182.184ZM158.048 163.176L156.915 164.824L156.951 164.849L156.988 164.872L158.048 163.176ZM140.48 155.4L139.785 157.275L139.798 157.28L139.81 157.284L140.48 155.4ZM132.704 152.52L132.007 154.394L132.009 154.395L132.704 152.52ZM112.544 143.88L111.573 145.628L111.598 145.642L111.623 145.656L112.544 143.88ZM108.8 73.32L109.991 74.9266L109.996 74.9233L108.8 73.32ZM197.792 69L199.767 69.3153L200.03 67.67L198.459 67.1144L197.792 69ZM192.32 103.272L191.309 104.997L193.834 106.478L194.295 103.587L192.32 103.272ZM173.312 95.496L172.728 97.4087L172.759 97.4182L172.79 97.4267L173.312 95.496ZM138.464 95.496L137.5 93.7436L137.481 93.7541L137.462 93.7651L138.464 95.496ZM137.6 113.352L136.54 115.048L136.54 115.048L137.6 113.352ZM153.152 119.976L153.841 118.098L153.82 118.091L153.799 118.084L153.152 119.976ZM163.232 123.72L163.982 121.866L163.975 121.863L163.232 123.72ZM197.504 147.048L195.832 148.145L195.84 148.158L195.848 148.17L197.504 147.048ZM186.56 205.512L185.419 203.87L185.419 203.87L186.56 205.512ZM141.632 215.32C132.361 215.32 123.384 214.374 114.697 212.486L113.847 216.394C122.824 218.346 132.087 219.32 141.632 219.32V215.32ZM114.706 212.488C106.196 210.597 98.983 208.058 93.0343 204.898L91.1577 208.43C97.497 211.798 105.068 214.443 113.838 216.392L114.706 212.488ZM94.0844 206.879L97.8284 172.319L93.8516 171.889L90.1076 206.449L94.0844 206.879ZM94.789 173.806C101.467 177.93 108.819 181.261 116.836 183.802L118.044 179.99C110.317 177.539 103.269 174.342 96.891 170.402L94.789 173.806ZM116.836 183.802C124.866 186.349 132.463 187.64 139.616 187.64V183.64C132.945 183.64 125.758 182.435 118.044 179.99L116.836 183.802ZM139.616 187.64C146.37 187.64 152.181 186.449 156.957 183.957L155.107 180.411C151.051 182.527 145.918 183.64 139.616 183.64V187.64ZM157.016 183.925C161.983 181.118 164.656 176.941 164.656 171.528H160.656C160.656 175.331 158.913 178.258 155.048 180.443L157.016 183.925ZM164.656 171.528C164.656 167.196 162.77 163.769 159.108 161.48L156.988 164.872C159.47 166.423 160.656 168.564 160.656 171.528H164.656ZM159.181 161.528C155.869 159.251 149.785 156.586 141.15 153.516L139.81 157.284C148.455 160.358 154.083 162.877 156.915 164.824L159.181 161.528ZM141.175 153.525L133.399 150.645L132.009 154.395L139.785 157.275L141.175 153.525ZM133.401 150.646C125.188 147.589 118.55 144.741 113.465 142.104L111.623 145.656C116.906 148.395 123.708 151.307 132.007 154.394L133.401 150.646ZM113.515 142.132C108.63 139.417 104.133 135.311 100.045 129.737L96.8192 132.103C101.179 138.049 106.09 142.583 111.573 145.628L113.515 142.132ZM100.045 129.737C96.1416 124.415 94.096 117.285 94.096 108.168H90.096C90.096 117.867 92.2744 125.905 96.8192 132.103L100.045 129.737ZM94.096 108.168C94.096 93.7663 99.4097 82.7715 109.991 74.9266L107.609 71.7134C95.9183 80.3805 90.096 92.6177 90.096 108.168H94.096ZM109.996 74.9233C120.893 66.7965 135.127 62.648 152.864 62.648V58.648C134.505 58.648 119.363 62.9475 107.604 71.7167L109.996 74.9233ZM152.864 62.648C166.809 62.648 181.559 65.3803 197.125 70.8856L198.459 67.1144C182.537 61.4837 167.335 58.648 152.864 58.648V62.648ZM195.817 68.6847L190.345 102.957L194.295 103.587L199.767 69.3153L195.817 68.6847ZM193.331 101.547C187.59 98.1812 181.086 95.5253 173.834 93.5653L172.79 97.4267C179.746 99.3067 185.914 101.835 191.309 104.997L193.331 101.547ZM173.896 93.5833C166.827 91.4233 160.101 90.328 153.728 90.328V94.328C159.643 94.328 165.973 95.3447 172.728 97.4087L173.896 93.5833ZM153.728 90.328C147.195 90.328 141.738 91.4128 137.5 93.7436L139.428 97.2484C142.87 95.3552 147.589 94.328 153.728 94.328V90.328ZM137.462 93.7651C133.231 96.2147 130.992 99.9273 130.992 104.712H134.992C134.992 101.433 136.401 99.0012 139.466 97.2268L137.462 93.7651ZM130.992 104.712C130.992 109.192 132.842 112.737 136.54 115.048L138.66 111.656C136.214 110.127 134.992 107.912 134.992 104.712H130.992ZM136.54 115.048C139.819 117.097 145.188 119.365 152.505 121.868L153.799 118.084C146.524 115.595 141.525 113.447 138.66 111.656L136.54 115.048ZM152.463 121.854C158.24 123.972 161.564 125.207 162.489 125.577L163.975 121.863C162.98 121.465 159.584 120.204 153.841 118.098L152.463 121.854ZM162.482 125.574C170.493 128.817 177.126 131.947 182.4 134.96L184.384 131.488C178.906 128.357 172.099 125.151 163.982 121.866L162.482 125.574ZM182.4 134.96C187.455 137.849 191.941 142.216 195.832 148.145L199.176 145.951C195.003 139.592 190.081 134.743 184.384 131.488L182.4 134.96ZM195.848 148.17C199.596 153.702 201.552 160.958 201.552 170.088H205.552C205.552 160.402 203.476 152.298 199.16 145.926L195.848 148.17ZM201.552 170.088C201.552 185.284 196.126 196.429 185.419 203.87L187.701 207.154C199.65 198.851 205.552 186.38 205.552 170.088H201.552ZM185.419 203.87C174.525 211.44 159.988 215.32 141.632 215.32V219.32C160.524 219.32 175.939 215.328 187.701 207.154L185.419 203.87Z",fill:"#2EE92B"})))):r.a.createElement(n,this.props)}}]),a}(a.Component)},un=f.a.div(pn()),gn=fn((function(){var n=r.a.useState("light"),e=Object(l.a)(n,2),t=e[0],a=e[1],o=function(n){var e="dark"===n?i:s;Object.keys(e).map((function(n){var t=e[n];document.documentElement.style.setProperty(n,t)}))},i={"--MainBackground":"#FFE8D6","--LightBackground":"#fff1e8","--Font1":"#d73f29","--Font2":"#F05237","--Font3":"#EF1F12"},s={"--MainBackground":"#1A2F38","--LightBackground":"#274654","--Font1":"#ddfcc8","--Font2":"#A6DA81","--Font3":"#7ef331"};return r.a.createElement("div",{className:"app",style:{height:"100%"}},r.a.createElement(g,{className:"t-btn",onClick:function(){var n="light"===t?"dark":"light";a(n),o(n)}}),r.a.createElement(O,null),r.a.createElement(Q,null),r.a.createElement(v,null),r.a.createElement(A,null),r.a.createElement(ln,null),r.a.createElement(X,null),r.a.createElement(J,null))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(57);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(gn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.9ee784e7.chunk.js.map