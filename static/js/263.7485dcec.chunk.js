"use strict";(self.webpackChunkpurple_dev_react=self.webpackChunkpurple_dev_react||[]).push([[263],{1445:function(e,n,a){a.d(n,{Z:function(){return m}});var t=a(8683),r=a(8152),i=a(5987),s="ImgSmoothLoad_loading__MQcd4",c="ImgSmoothLoad_loaded__QO+3e",l=a(7313),o=a(6417),d=["animate","src","className","alt"],m=function(e){var n=e.animate,a=e.src,m=e.className,_=e.alt,u=(0,i.Z)(e,d),h=(0,l.useState)(!1===n),x=(0,r.Z)(h,2),p=x[0],v=x[1],f=n?p?c:s:"";return(0,o.jsx)("img",(0,t.Z)({src:a,onLoad:function(){v(!0)},className:"".concat(f," ").concat(m||""),alt:_},u))}},302:function(e,n,a){a.d(n,{h:function(){return i}});var t={padding:"MainPageContainer_padding__Oddaw",maxWidth:"MainPageContainer_maxWidth__h6MGi",sectionAppear:"MainPageContainer_sectionAppear__LRF+D",appear:"MainPageContainer_appear__grqKu"},r=a(6417),i=function(e){var n=e.children;return(0,r.jsx)("div",{className:[t.maxWidth,t.sectionAppear].join(" "),children:n})}},4089:function(e,n,a){a.d(n,{Z:function(){return s}});var t="Tooltip_tooltip__baXv4",r="Tooltip_text__3SkUp",i=a(6417),s=function(e){var n=e.text,a=void 0===n?"default tooltip text":n,s=e.children,c=e.className;return(0,i.jsxs)("div",{className:"".concat(t," ").concat(c||""),children:[s,(0,i.jsx)("p",{className:r,children:a})]})}},4522:function(e,n,a){a.r(n),a.d(n,{default:function(){return Y}});var t={picture:"about_picture__DnTqT",header:"about_header__fbov0",grid:"about_grid__pB1Uk",cell:"about_cell__FMkm5",technologies:"about_technologies__LKftP",cardInnerPadding:"about_cardInnerPadding__nqaav",skills:"about_skills__1gsLH",learning:"about_learning__i96yT",developer:"about_developer__N8kTQ"},r=a(7313),i=function(e){return e>1?"s":""},s=function(e){var n=Math.floor((new Date-e)/1e3),a=Math.floor(n/31536e3);return a>1?a+" year"+i(a):(a=Math.floor(n/2592e3))>1?a+" month"+i(a):(a=Math.floor(n/86400))>1?a+" day"+i(a):(a=Math.floor(n/3600))>1?a+" hour"+i(a):(a=Math.floor(n/60))>1?a+" minute"+i(a):Math.floor(n)+" second"+i(a)},c=[{name:"HTML + CSS",date:new Date(2021,9,10)},{name:"JavaScript",date:new Date(2022,0,7)},{name:"React",date:new Date(2022,3,6)},{name:"TypeScript",date:new Date(2022,5,13)},{name:"Next.js",date:"TBD"}],l="roadmap_root__233zc",o="roadmap_item__62uIG",d="roadmap_name__eTl3u",m="roadmap_date__8q-Ja",_=a(6417),u=function(e){var n=e.className;return(0,_.jsxs)("div",{className:"".concat(n," ").concat(l),children:[(0,_.jsx)("h3",{children:"Writing bad code since:"}),(0,_.jsx)("ul",{children:c.map((function(e){return(0,_.jsxs)("li",{className:o,children:[(0,_.jsx)("p",{className:d,children:e.name}),(0,_.jsx)("p",{className:m,children:"TBD"!==e.date?s(e.date):"TBD"})]},e.name)}))})]})},h=a(8152),x=a(9598),p=a(1445),v=a(1168),f=a(8683),j="backdrop_backdrop__JQ54E",g=function(e){return(0,_.jsx)("div",{onClick:function(n){n.target.className===j&&e.modalCloseHandler()},className:j})},N=a(7050),b={enter:"Backdrop_enter__Ehosi",enterActive:"Backdrop_enterActive__XZJnk",exit:"Backdrop_exit__eJAlu",exitActive:"Backdrop_exitActive__4NgpU"};function C(e){var n=e.visible,a=e.modalCloseHandler;return(0,_.jsx)(N.Z,{in:n,mountOnEnter:!0,unmountOnExit:!0,timeout:300,classNames:(0,f.Z)({},b),children:(0,_.jsx)(g,{modalCloseHandler:a})})}var y="modalContent_content__nwG9a",k="modalContent_header__dDZcO",w="modalContent_children__NXNI6",M="modalContent_close__abSC9",S=a(8648),P=a(1067),Z=function(e){var n="".concat(y," ").concat(e.className?e.className:""," acrylic");return(0,P.N)(),(0,_.jsxs)("div",{className:n,children:[(0,_.jsxs)("header",{className:k,children:[(0,_.jsx)("h2",{children:e.title}),(0,_.jsx)(x.Z,{variant:"danger",onClick:e.modalCloseHandler,className:M,children:(0,_.jsx)(S.nfZ,{})})]}),(0,_.jsx)("main",{className:w,children:e.children})]})},H={enter:"ModalContent_enter__0wxFb",enterActive:"ModalContent_enterActive__gWX7V",exit:"ModalContent_exit__35bCb",exitActive:"ModalContent_exitActive__IeV5w"};function T(e){var n=e.visible,a=e.modalCloseHandler,t=e.title,r=e.children;return(0,_.jsx)(N.Z,{in:n,mountOnEnter:!0,unmountOnExit:!0,timeout:300,classNames:(0,f.Z)({},H),children:(0,_.jsx)(Z,{modalCloseHandler:a,title:t,children:r})})}var D=function(e){var n=e.visible,a=e.modalCloseHandler,t=e.title,r=e.children;return v.createPortal((0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(C,{visible:n,modalCloseHandler:a}),(0,_.jsx)(T,{visible:n,children:r,title:t,modalCloseHandler:a})]}),document.getElementById("overlay-root"))},I="EmploymentHistory_history__o0x3n",A="EmploymentHistory_man-pointing__E5l6i",E=function(e){var n=e.className,a=(0,r.useState)(!1),t=(0,h.Z)(a,2),i=t[0],s=t[1];return(0,_.jsxs)("div",{className:"".concat(I," ").concat(n),children:[(0,_.jsx)("h3",{children:"Past career"}),(0,_.jsx)(x.Z,{onClick:function(){return s(!0)},children:"See employment history"}),(0,_.jsx)(D,{visible:i,modalCloseHandler:function(){return s(!1)},title:"You can be the first company to hire me",children:(0,_.jsx)(p.Z,{className:A,alt:"man pointing finger",src:"https://upload.wikimedia.org/wikipedia/commons/f/f3/Uncle_Sam_(pointing_finger).jpg"})})]})},B=a.p+"static/media/proProgrammer.d7a7445f16950f1ea3e5.webp",L="Waves_waves__ZPmMq",K={card:"Header_card__43-o8"},O=function(e){var n=e.styles;return(0,_.jsx)("header",{className:"".concat(n.header," ").concat(L),children:(0,_.jsxs)("div",{className:"".concat(K.card," acrylic"),children:[(0,_.jsx)(p.Z,{alt:"Karol face portrait with cat in the bottom",className:n.picture,src:B}),(0,_.jsxs)("div",{className:K.info,children:[(0,_.jsx)("h2",{children:"Karol"}),(0,_.jsx)("p",{className:n.developer,children:"Frontend Developer"}),(0,_.jsxs)("p",{className:n.learning,children:[s(new Date(2021,9,10))," of learning frontend"," "]})]})]})})},J=a(1915),W=a.n(J),R=function(e){var n=e.enabled,a=["JavaScript","React","Redux","Parcel","Git","Sass","PS","NPM","VS Code","axios","HTML","CSS"],t=(0,r.useRef)(null);return(0,r.useEffect)((function(){if(n){var e=new(W())(t.current,a,{maxSpeed:"slow",initSpeed:"slow",keep:!1,containerClass:"tag-width",radius:"150",direction:Math.floor(720*Math.random()-360)});return function(){e.destroy()}}}),[n]),n?(0,_.jsx)("div",{className:"tag-container",ref:t}):(0,_.jsx)("ul",{className:"list-style",children:a.map((function(e){return(0,_.jsx)("li",{children:e},e)}))})},q="KnownTechnologies_button__AOzBQ",F="KnownTechnologies_next__i7c1i",G=a(4089),Q=function(e){var n=e.styles,a=(0,r.useState)(!0),t=(0,h.Z)(a,2),i=t[0],s=t[1];return(0,_.jsxs)("div",{className:n.cell,children:[(0,_.jsxs)("div",{className:F,children:[(0,_.jsx)("h3",{children:"Known Technologies"}),(0,_.jsx)(G.Z,{text:"Toggle animation",children:(0,_.jsx)("button",{onClick:function(){return s((function(e){return!e}))},className:q,children:"Toggle"})})]}),(0,_.jsx)("div",{className:"".concat(n.technologies," ").concat(n.cardInnerPadding),children:(0,_.jsx)(R,{enabled:i})})]})},U=function(e){var n=e.styles;return(0,_.jsxs)("div",{className:n.cell,children:[(0,_.jsx)("h3",{children:"About me"}),(0,_.jsx)("p",{className:n.cardInnerPadding,children:"Hello, my name is Karol."}),(0,_.jsx)("p",{className:n.cardInnerPadding,children:"In the past I used to create 2D animation and design 2D graphics, the skills developped while doing that helped me a lot in learning web programming."}),(0,_.jsxs)("p",{className:n.cardInnerPadding,children:["I'm trying to commit daily to my"," ",(0,_.jsx)("a",{href:"https://github.com/goodideagiver",children:"GitHub"})," in order to receive the best results."]})]})},X=["JavaScript","CSS","HTML","RWD","Photoshop","English","Photography"],V=function(e){var n=e.styles;return(0,_.jsxs)("div",{className:n.cell,children:[(0,_.jsx)("h3",{children:"Skills"}),(0,_.jsx)("ul",{className:"".concat(n.skills," ").concat(n.cardInnerPadding),children:X.map((function(e){return(0,_.jsx)("li",{children:e},e)}))})]})},z=a(302),Y=function(){return(0,_.jsxs)(z.h,{children:[(0,_.jsx)(O,{styles:t}),(0,_.jsxs)("main",{className:"".concat(t.grid),children:[(0,_.jsx)(V,{styles:t}),(0,_.jsx)(U,{styles:t}),(0,_.jsx)(Q,{styles:t}),(0,_.jsx)(u,{className:t.cell}),(0,_.jsx)(E,{className:t.cell})]})]})}}}]);