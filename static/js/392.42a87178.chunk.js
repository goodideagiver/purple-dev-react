/*! For license information please see 392.42a87178.chunk.js.LICENSE.txt */
(self.webpackChunkpurple_dev_react=self.webpackChunkpurple_dev_react||[]).push([[392],{1445:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var a=n(8683),i=n(8152),r=n(5987),o="ImgSmoothLoad_loading__MQcd4",s="ImgSmoothLoad_loaded__QO+3e",c=n(7313),l=n(6417),d=["animate","src","className","alt"],u=function(e){var t=e.animate,n=e.src,u=e.className,m=e.alt,h=(0,r.Z)(e,d),f=(0,c.useState)(!1===t),p=(0,i.Z)(f,2),_=p[0],v=p[1],x=t?_?s:o:"";return(0,l.jsx)("img",(0,a.Z)({src:n,onLoad:function(){v(!0)},className:"".concat(x," ").concat(u||""),alt:m},h))}},302:function(e,t,n){"use strict";n.d(t,{h:function(){return r}});var a={padding:"MainPageContainer_padding__Oddaw",maxWidth:"MainPageContainer_maxWidth__h6MGi",sectionAppear:"MainPageContainer_sectionAppear__LRF+D",appear:"MainPageContainer_appear__grqKu"},i=n(6417),r=function(e){var t=e.children;return(0,i.jsx)("div",{className:[a.maxWidth,a.sectionAppear].join(" "),children:t})}},4089:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var a="Tooltip_tooltip__baXv4",i="Tooltip_text__3SkUp",r=n(6417),o=function(e){var t=e.text,n=void 0===t?"default tooltip text":t,o=e.children,s=e.className;return(0,r.jsxs)("div",{className:"".concat(a," ").concat(s||""),children:[o,(0,r.jsx)("p",{className:i,children:n})]})}},6269:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return A}});var a={picture:"about_picture__DnTqT",header:"about_header__fbov0",grid:"about_grid__pB1Uk",cell:"about_cell__FMkm5",technologies:"about_technologies__LKftP",cardInnerPadding:"about_cardInnerPadding__nqaav",skills:"about_skills__1gsLH",learning:"about_learning__i96yT",developer:"about_developer__N8kTQ"},i=n(7313),r=function(e){return e>1?"s":""},o=function(e){var t=Math.floor((new Date-e)/1e3),n=Math.floor(t/31536e3);return n>1?n+" year"+r(n):(n=Math.floor(t/2592e3))>1?n+" month"+r(n):(n=Math.floor(t/86400))>1?n+" day"+r(n):(n=Math.floor(t/3600))>1?n+" hour"+r(n):(n=Math.floor(t/60))>1?n+" minute"+r(n):Math.floor(t)+" second"+r(n)},s=[{name:"HTML + CSS",date:new Date(2021,9,10)},{name:"JavaScript",date:new Date(2022,0,7)},{name:"React",date:new Date(2022,3,6)},{name:"TypeScript",date:new Date(2022,5,13)},{name:"Next.js",date:"TBD"}],c="roadmap_root__233zc",l="roadmap_item__62uIG",d="roadmap_name__eTl3u",u="roadmap_date__8q-Ja",m=n(6417),h=function(e){var t=e.className;return(0,m.jsxs)("div",{className:"".concat(t," ").concat(c),children:[(0,m.jsx)("h3",{children:"Writing bad code since:"}),(0,m.jsx)("ul",{children:s.map((function(e){return(0,m.jsxs)("li",{className:l,children:[(0,m.jsx)("p",{className:d,children:e.name}),(0,m.jsx)("p",{className:u,children:"TBD"!==e.date?o(e.date):"TBD"})]},e.name)}))})]})},f=n(8152),p=n(9598),_=n(1445),v=n(9890),x="EmploymentHistory_history__o0x3n",g="EmploymentHistory_man-pointing__E5l6i",y="EmploymentHistory_link__jcp+R",j=n(8303),b=function(e){var t=e.className,n=(0,i.useState)(!1),a=(0,f.Z)(n,2),r=a[0],o=a[1];return(0,m.jsxs)("div",{className:"".concat(x," ").concat(t),children:[(0,m.jsx)("h3",{children:"Past career"}),(0,m.jsx)(p.Z,{onClick:function(){return o(!0)},children:"See employment history"}),(0,m.jsxs)(v.Z,{visible:r,modalCloseHandler:function(){return o(!1)},title:"You can be the first company to hire me",children:[(0,m.jsx)(_.Z,{className:g,alt:"man pointing finger",src:"https://upload.wikimedia.org/wikipedia/commons/f/f3/Uncle_Sam_(pointing_finger).jpg"}),(0,m.jsx)(j.rU,{className:y,to:"/contact",children:"Contact me"})]})]})},M=n.p+"static/media/proProgrammer.d7a7445f16950f1ea3e5.webp",N="Waves_waves__ZPmMq",w={card:"Header_card__43-o8"},C=function(e){var t=e.styles;return(0,m.jsx)("header",{className:"".concat(t.header," ").concat(N),children:(0,m.jsxs)("div",{className:"".concat(w.card," acrylic"),children:[(0,m.jsx)(_.Z,{alt:"Karol face portrait with cat in the bottom",className:t.picture,src:M}),(0,m.jsxs)("div",{className:w.info,children:[(0,m.jsx)("h2",{children:"Karol"}),(0,m.jsx)("p",{className:t.developer,children:"Frontend Developer"}),(0,m.jsxs)("p",{className:t.learning,children:[o(new Date(2021,9,10))," of learning frontend"," "]})]})]})})},k=n(1915),S=n.n(k),T=function(e){var t=e.enabled,n=["axios","CSS","Git","HTML","JavaScript","NPM","Parcel","PS","React","Redux","SCSS","SQL","TypeScript","VS Code","Jest","React Transition Group","React testing library"],a=(0,i.useRef)(null);return(0,i.useEffect)((function(){if(t){var e=new(S())(a.current,n,{maxSpeed:"slow",initSpeed:"slow",keep:!1,containerClass:"tag-width",radius:"150",direction:Math.floor(720*Math.random()-360)});return function(){e.destroy()}}}),[t]),t?(0,m.jsx)("div",{className:"tag-container",ref:a}):(0,m.jsx)("ul",{className:"list-style",children:n.map((function(e){return(0,m.jsx)("li",{children:e},e)}))})},P="KnownTechnologies_button__AOzBQ",O="KnownTechnologies_next__i7c1i",I=n(4089),E=function(e){var t=e.styles,n=(0,i.useState)(!0),a=(0,f.Z)(n,2),r=a[0],o=a[1];return(0,m.jsxs)("div",{className:t.cell,children:[(0,m.jsxs)("div",{className:O,children:[(0,m.jsx)("h3",{children:"Known Technologies"}),(0,m.jsx)(I.Z,{text:"Toggle animation",children:(0,m.jsx)("button",{onClick:function(){return o((function(e){return!e}))},className:P,children:"Toggle"})})]}),(0,m.jsx)("div",{className:"".concat(t.technologies," ").concat(t.cardInnerPadding),children:(0,m.jsx)(T,{enabled:r})})]})},D=function(e){var t=e.styles;return(0,m.jsxs)("div",{className:t.cell,children:[(0,m.jsx)("h3",{children:"About me"}),(0,m.jsx)("p",{className:t.cardInnerPadding,children:"Hello, my name is Karol."}),(0,m.jsx)("p",{className:t.cardInnerPadding,children:"In the past I used to create 2D animation and design 2D graphics, the skills developped while doing that helped me a lot in learning web programming."}),(0,m.jsxs)("p",{className:t.cardInnerPadding,children:["I'm trying to commit daily to my"," ",(0,m.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/goodideagiver",children:"GitHub"})," ","in order: ; to receive the best results."]})]})},Z=["JavaScript","CSS","HTML","RWD","React","Photoshop","English","Photography"],H=function(e){var t=e.styles;return(0,m.jsxs)("div",{className:t.cell,children:[(0,m.jsx)("h3",{children:"Skills"}),(0,m.jsx)("ul",{className:"".concat(t.skills," ").concat(t.cardInnerPadding),children:Z.map((function(e){return(0,m.jsx)("li",{children:e},e)}))})]})},z=n(302),A=function(){return(0,m.jsxs)(z.h,{children:[(0,m.jsx)(C,{styles:a}),(0,m.jsxs)("main",{className:"".concat(a.grid),children:[(0,m.jsx)(H,{styles:a}),(0,m.jsx)(D,{styles:a}),(0,m.jsx)(E,{styles:a}),(0,m.jsx)(h,{className:a.cell}),(0,m.jsx)(b,{className:a.cell})]})]})}},9890:function(e,t,n){"use strict";n.d(t,{Z:function(){return j}});var a=n(1168),i=n(8683),r="backdrop_backdrop__JQ54E",o=n(6417),s=function(e){return(0,o.jsx)("div",{onClick:function(t){t.target.className===r&&e.modalCloseHandler()},className:r})},c=n(7050),l={enter:"Backdrop_enter__Ehosi",enterActive:"Backdrop_enterActive__XZJnk",exit:"Backdrop_exit__eJAlu",exitActive:"Backdrop_exitActive__4NgpU"};function d(e){var t=e.visible,n=e.modalCloseHandler;return(0,o.jsx)(c.Z,{in:t,mountOnEnter:!0,unmountOnExit:!0,timeout:300,classNames:(0,i.Z)({},l),children:(0,o.jsx)(s,{modalCloseHandler:n})})}var u=n(9598),m="modalContent_content__nwG9a",h="modalContent_header__dDZcO",f="modalContent_children__NXNI6",p="modalContent_close__abSC9",_=n(8648),v=n(1067),x=function(e){var t="".concat(m," ").concat(e.className?e.className:""," acrylic");return(0,v.N)(),(0,o.jsxs)("div",{className:t,children:[(0,o.jsxs)("header",{className:h,children:[(0,o.jsx)("h2",{children:e.title}),(0,o.jsx)(u.Z,{variant:"danger",onClick:e.modalCloseHandler,className:p,children:(0,o.jsx)(_.nfZ,{})})]}),(0,o.jsx)("main",{className:f,children:e.children})]})},g={enter:"ModalContent_enter__0wxFb",enterActive:"ModalContent_enterActive__gWX7V",exit:"ModalContent_exit__35bCb",exitActive:"ModalContent_exitActive__IeV5w"};function y(e){var t=e.visible,n=e.modalCloseHandler,a=e.title,r=e.children;return(0,o.jsx)(c.Z,{in:t,mountOnEnter:!0,unmountOnExit:!0,timeout:300,classNames:(0,i.Z)({},g),children:(0,o.jsx)(x,{modalCloseHandler:n,title:a,children:r})})}var j=function(e){var t=e.visible,n=e.modalCloseHandler,i=e.title,r=e.children;return a.createPortal((0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(d,{visible:t,modalCloseHandler:n}),(0,o.jsx)(y,{visible:t,children:r,title:i,modalCloseHandler:n})]}),document.getElementById("overlay-root"))}},1915:function(e){e.exports=function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function n(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.body,a=arguments.length>1?arguments[1]:void 0,i=arguments.length>2?arguments[2]:void 0;e(this,t);var r=this;if(!n||1!==n.nodeType)return new Error("Incorrect element type");r.$container=n,r.texts=a||[],r.config=o(o({},t._defaultConfig),i||{}),r.radius=r.config.radius,r.depth=2*r.radius,r.size=1.5*r.radius,r.maxSpeed=t._getMaxSpeed(r.config.maxSpeed),r.initSpeed=t._getInitSpeed(r.config.initSpeed),r.direction=r.config.direction,r.keep=r.config.keep,r.paused=!1,r._createElment(),r._init(),t.list.push({el:r.$el,container:n,instance:r})}return n(t,[{key:"_createElment",value:function(){var e=this,t=document.createElement("div");t.className=e.config.containerClass,e.config.useContainerInlineStyles&&(t.style.position="relative",t.style.width="".concat(2*e.radius,"px"),t.style.height="".concat(2*e.radius,"px")),e.items=[],e.texts.forEach((function(n,a){var i=e._createTextItem(n,a);t.appendChild(i.el),e.items.push(i)})),e.$container.appendChild(t),e.$el=t}},{key:"_createTextItem",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=this,a=document.createElement("span");if(a.className=n.config.itemClass,n.config.useItemInlineStyles){a.style.willChange="transform, opacity, filter",a.style.position="absolute",a.style.top="50%",a.style.left="50%",a.style.zIndex=t+1,a.style.filter="alpha(opacity=0)",a.style.opacity=0;var i="50% 50%";a.style.WebkitTransformOrigin=i,a.style.MozTransformOrigin=i,a.style.OTransformOrigin=i,a.style.transformOrigin=i;var r="translate3d(-50%, -50%, 0) scale(1)";a.style.WebkitTransform=r,a.style.MozTransform=r,a.style.OTransform=r,a.style.transform=r}return a.innerText=e,o({el:a},n._computePosition(t))}},{key:"_computePosition",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this,a=n.texts.length;t&&(e=Math.floor(Math.random()*(a+1)));var i=Math.acos((2*e+1)/a-1),r=Math.sqrt((a+1)*Math.PI)*i;return{x:n.size*Math.cos(r)*Math.sin(i)/2,y:n.size*Math.sin(r)*Math.sin(i)/2,z:n.size*Math.cos(i)/2}}},{key:"_requestInterval",value:function(e,t){var n=(function(){return window.requestAnimationFrame}||function(e,t){window.setTimeout(e,1e3/60)})(),a=(new Date).getTime(),i={};function r(){i.value=n(r),(new Date).getTime()-a>=t&&(e.call(),a=(new Date).getTime())}return i.value=n(r),i}},{key:"_init",value:function(){var e=this;e.active=!1,e.mouseX0=e.initSpeed*Math.sin(e.direction*(Math.PI/180)),e.mouseY0=-e.initSpeed*Math.cos(e.direction*(Math.PI/180)),e.mouseX=e.mouseX0,e.mouseY=e.mouseY0,t._on(e.$el,"mouseover",(function(){e.active=!0})),t._on(e.$el,"mouseout",(function(){e.active=!1})),t._on(e.keep?window:e.$el,"mousemove",(function(t){t=t||window.event;var n=e.$el.getBoundingClientRect();e.mouseX=(t.clientX-(n.left+n.width/2))/5,e.mouseY=(t.clientY-(n.top+n.height/2))/5})),e._next(),e.interval=e._requestInterval((function(){e._next.call(e)}),10)}},{key:"_next",value:function(){var e=this;if(!e.paused){e.keep||e.active||(e.mouseX=Math.abs(e.mouseX-e.mouseX0)<1?e.mouseX0:(e.mouseX+e.mouseX0)/2,e.mouseY=Math.abs(e.mouseY-e.mouseY0)<1?e.mouseY0:(e.mouseY+e.mouseY0)/2);var t=-Math.min(Math.max(-e.mouseY,-e.size),e.size)/e.radius*e.maxSpeed,n=Math.min(Math.max(-e.mouseX,-e.size),e.size)/e.radius*e.maxSpeed;if(!(Math.abs(t)<=.01&&Math.abs(n)<=.01)){var a=Math.PI/180,i=[Math.sin(t*a),Math.cos(t*a),Math.sin(n*a),Math.cos(n*a)];e.items.forEach((function(t){var n=t.x,a=t.y*i[1]+t.z*-i[0],r=t.y*i[0]+t.z*i[1],o=n*i[3]+r*i[2],s=a,c=r*i[3]-n*i[2],l=2*e.depth/(2*e.depth+c);t.x=o,t.y=s,t.z=c,t.scale=l.toFixed(3);var d=l*l-.25;d=(d>1?1:d).toFixed(3);var u=t.el,m=(t.x-u.offsetWidth/2).toFixed(2),h=(t.y-u.offsetHeight/2).toFixed(2),f="translate3d(".concat(m,"px, ").concat(h,"px, 0) scale(").concat(t.scale,")");u.style.WebkitTransform=f,u.style.MozTransform=f,u.style.OTransform=f,u.style.transform=f,u.style.filter="alpha(opacity=".concat(100*d,")"),u.style.opacity=d}))}}}},{key:"update",value:function(e){var t=this;t.texts=e||[],t.texts.forEach((function(e,n){var a=t.items[n];a||(i(a=t._createTextItem(e,n),t._computePosition(n,!0)),t.$el.appendChild(a.el),t.items.push(a)),a.el.innerText=e}));var n=t.texts.length,a=t.items.length;n<a&&t.items.splice(n,a-n).forEach((function(e){t.$el.removeChild(e.el)}))}},{key:"destroy",value:function(){var e=this;e.interval=null;var n=t.list.findIndex((function(t){return t.el===e.$el}));-1!==n&&t.list.splice(n,1),e.$container&&e.$el&&e.$container.removeChild(e.$el)}},{key:"pause",value:function(){this.paused=!0}},{key:"resume",value:function(){this.paused=!1}}],[{key:"_on",value:function(e,t,n,a){e.addEventListener?e.addEventListener(t,n,a):e.attachEvent?e.attachEvent("on".concat(t),n):e["on".concat(t)]=n}}]),t}();return s.list=[],s._defaultConfig={radius:100,maxSpeed:"normal",initSpeed:"normal",direction:135,keep:!0,useContainerInlineStyles:!0,useItemInlineStyles:!0,containerClass:"tagcloud",itemClass:"tagcloud--item"},s._getMaxSpeed=function(e){return{slow:.5,normal:1,fast:2}[e]||1},s._getInitSpeed=function(e){return{slow:16,normal:32,fast:80}[e]||32},function(e,t,n){"string"===typeof e&&(e=document.querySelectorAll(e)),e.forEach||(e=[e]);var a=[];return e.forEach((function(e){e&&a.push(new s(e,t,n))})),a.length<=1?a[0]:a}}()}}]);