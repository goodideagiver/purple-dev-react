"use strict";(self.webpackChunkpurple_dev_react=self.webpackChunkpurple_dev_react||[]).push([[613],{1445:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(8683),i=n(8152),r=n(5987),o="ImgSmoothLoad_loading__-pDbf",s="ImgSmoothLoad_loaded__Qg3TC",c=n(7313),l=n(6417),d=["animate","src","className","alt"],u=function(e){var t=e.animate,n=e.src,u=e.className,m=e.alt,_=(0,r.Z)(e,d),h=(0,c.useState)(!1===t),p=(0,i.Z)(h,2),x=p[0],v=p[1],f=t?x?s:o:"";return(0,l.jsx)("img",(0,a.Z)({src:n,onLoad:function(){v(!0)},className:"".concat(f," ").concat(u||""),alt:m},_))}},4089:function(e,t,n){n.d(t,{Z:function(){return o}});var a="Tooltip_tooltip__V3HjF",i="Tooltip_text__KfHWq",r=n(6417),o=function(e){var t=e.text,n=void 0===t?"default tooltip text":t,o=e.children,s=e.className;return(0,r.jsxs)("div",{className:"".concat(a," ").concat(s||""),children:[o,(0,r.jsx)("p",{className:i,children:n})]})}},3407:function(e,t,n){n.r(t),n.d(t,{default:function(){return Me}});var a="home_nextTo__EEPqu",i="home_sectionWidth__N0HT5",r="home_homeAnim__ehj5i",o="home_filler__nzH79",s=n(8683),c=n(8152),l=n(9598),d=n(4089),u="CardBtn_button__nSnOh",m="CardBtn_tooltip__anE1B",_=n(6417),h=function(e){var t=e.link,n=e.tooltip;return(0,_.jsx)(d.Z,{className:m,text:n,children:(0,_.jsx)(l.Z,{link:t,className:u,variant:"callToAction",children:"Check out"})})},p="projectCard_card__BU4D7",x="projectCard_cardWrapper__ya9AD",v="projectCard_subTitle__NqOP2",f="projectCard_title__oCAYt",j="projectCard_desc__6NCOt",b=function(e){return(0,_.jsx)("ul",{className:j,children:e.desc.map((function(e){return(0,_.jsx)("li",{children:e},e)}))})},g=function(e){var t=e.title,n=e.shortDesc,a=e.desc,i=e.link,r=e.color,o=e.delay,s=void 0===o?0:o,c=e.tooltip,l=void 0===c?"View repository":c,d={backgroundImage:"linear-gradient(130deg,transparent 60%, ".concat(r," 100%)")},u={animationDelay:s+"s"};return(0,_.jsx)("div",{style:u,className:x,children:(0,_.jsxs)("div",{className:p,style:d,children:[(0,_.jsx)("p",{className:v,children:n}),(0,_.jsx)("h3",{className:f,children:t}),(0,_.jsx)(b,{desc:a}),(0,_.jsx)(h,{link:i,tooltip:l})]})})},N=[{title:"Roadmapper.ts",shortDesc:"Build a roadmap for your learning journey",desc:["React","TypeScript","React Transition Group","Redux"],link:"https://goodideagiver.github.io/roadmapper-ts/",color:"#4e6be130",tooltip:"Visit website"},{title:"Fakeinsta",shortDesc:"Instagram copy",desc:["OOP","Custom Components","Async"],link:"https://github.com/goodideagiver/fakeinsta",color:"#a66fff30"},{title:"Polite email builder",shortDesc:"Web app",desc:["DOM manipulation","Vanilla JavaScript"],link:"https://goodideagiver.github.io/polite-email-builder/",color:"#FA640020",tooltip:"Visit website"}],y="projectCards_flex__kIzyN",w="projectCards_title__0MTq1",T="projectCards_more__Nfa92",k=n(7313),E=function(){return(0,_.jsxs)("div",{className:w,children:[(0,_.jsx)("h2",{children:"Selected projects"}),(0,_.jsxs)("p",{className:T,children:["Visit my ",(0,_.jsx)("a",{href:"https://github.com/goodideagiver",children:"GitHub"})," to see more"]})]})},C=function(e){return(0,_.jsx)(l.Z,{variant:"secondary",onClick:e.toggleAllCardsVisibility,children:e.toggleButtonText})},A=function(){var e=(0,k.useState)(3),t=(0,c.Z)(e,2),n=t[0],a=t[1],i=3===n,r=i?"Show more projects":"Show less projects",o=N.map((function(e,t){return t<n&&(0,k.createElement)(g,(0,s.Z)((0,s.Z)({delay:t>0?(t-3)/10:0},e),{},{key:e.title}))})),l=N.length>3;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("div",{className:y,children:[(0,_.jsx)(E,{}),o]}),l&&(0,_.jsx)(C,{toggleAllCardsVisibility:function(){a(i?1/0:3)},toggleButtonText:r})]})},Z=n(1445),I=n.p+"static/media/forest.b08b57d8fa70e81332dc.webp",P="welcome_welcome__4PxXF",F="welcome_main__bpTGk",S="welcome_programmer__PTJpw",V="welcome_image__guC-g",W="welcome_overlay__suOkr",D={devText:"PromoWelcome_devText__+NgNt",bigText:"PromoWelcome_bigText__gx9jj",info:"PromoWelcome_info__gLk+P",button:"PromoWelcome_button__C3D9q"},M=function(){return(0,_.jsxs)("div",{className:D.promo,children:[(0,_.jsxs)("p",{className:D.bigText,children:["Frontend ",(0,_.jsx)("span",{className:D.devText,children:"developer"})]}),(0,_.jsx)("p",{className:D.info,children:"This is my website, here you can learn some useful information about me. I am always trying to learn new things and I am always trying to improve my skills."}),(0,_.jsx)(l.Z,{route:"/contact",className:D.button,variant:"glow",children:"Contact me"})]})},q="WelcomeImages_imagesWrapper__Ptr1x",O="WelcomeImages_image__TvF9H",R=n.p+"static/media/builder.5d789c783bf1b97aa92a.webp",L=n.p+"static/media/fetcher.52b1dfb988da186e0593.webp",Q=n.p+"static/media/fetcher2.ecdf79bb0b1480feec43.webp",B=n.p+"static/media/adotpl.86b4dab3053981478922.webp",H=n.p+"static/media/adotpl2.6a22ffd9acc16c5b50a0.webp",G=n.p+"static/media/fakeinsta.9fd0b03d24b3b6a72c48.webp",J=n.p+"static/media/todo.5ec768806844306cc2cb.webp",X=n(3366),z=n(7462);var K=n(1721),U=n(10);function Y(e,t){var n=Object.create(null);return e&&k.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&(0,k.isValidElement)(e)?t(e):e}(e)})),n}function $(e,t,n){return null!=n[t]?n[t]:e.props[t]}function ee(e,t,n){var a=Y(e.children),i=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var a,i=Object.create(null),r=[];for(var o in e)o in t?r.length&&(i[o]=r,r=[]):r.push(o);var s={};for(var c in t){if(i[c])for(a=0;a<i[c].length;a++){var l=i[c][a];s[i[c][a]]=n(l)}s[c]=n(c)}for(a=0;a<r.length;a++)s[r[a]]=n(r[a]);return s}(t,a);return Object.keys(i).forEach((function(r){var o=i[r];if((0,k.isValidElement)(o)){var s=r in t,c=r in a,l=t[r],d=(0,k.isValidElement)(l)&&!l.props.in;!c||s&&!d?c||!s||d?c&&s&&(0,k.isValidElement)(l)&&(i[r]=(0,k.cloneElement)(o,{onExited:n.bind(null,o),in:l.props.in,exit:$(o,"exit",e),enter:$(o,"enter",e)})):i[r]=(0,k.cloneElement)(o,{in:!1}):i[r]=(0,k.cloneElement)(o,{onExited:n.bind(null,o),in:!0,exit:$(o,"exit",e),enter:$(o,"enter",e)})}})),i}var te=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},ne=function(e){function t(t,n){var a,i=(a=e.call(this,t,n)||this).handleExited.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a));return a.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},a}(0,K.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,a,i=t.children,r=t.handleExited;return{children:t.firstRender?(n=e,a=r,Y(n.children,(function(e){return(0,k.cloneElement)(e,{onExited:a.bind(null,e),in:!0,appear:$(e,"appear",n),enter:$(e,"enter",n),exit:$(e,"exit",n)})}))):ee(e,i,r),firstRender:!1}},n.handleExited=function(e,t){var n=Y(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=(0,z.Z)({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,a=(0,X.Z)(e,["component","childFactory"]),i=this.state.contextValue,r=te(this.state.children).map(n);return delete a.appear,delete a.enter,delete a.exit,null===t?k.createElement(U.Z.Provider,{value:i},r):k.createElement(U.Z.Provider,{value:i},k.createElement(t,a,r))},t}(k.Component);ne.propTypes={},ne.defaultProps={component:"div",childFactory:function(e){return e}};var ae=ne,ie=n(7050),re={enterActive:"PromoImageAnimation_enterActive__U2+dR",exitActive:"PromoImageAnimation_exitActive__fWrdE",enter:"PromoImageAnimation_enter__y+Pyb",exit:"PromoImageAnimation_exit__jXb-T"},oe=[H,J,R,L,Q,G,B],se=function(){var e=function(e,t,n){var a,i=(0,k.useState)(t),r=(0,c.Z)(i,2),o=r[0],s=r[1];try{a=[n.at(o),n.at(o-1)]}catch(d){var l=o!==n.length-1?o+1:0;a=[n[o],n[l]]}return(0,k.useEffect)((function(){var t=setInterval((function(){s((o+1)%n.length)}),e);return function(){return clearInterval(t)}}),[o,n.length,e]),{selectedImages:a,activeImageIndex:o}}(8e3,0,oe),t=e.selectedImages,n=e.activeImageIndex;return(0,_.jsxs)("div",{className:q,"aria-hidden":"true",children:[(0,_.jsx)("div",{className:O,children:(0,_.jsx)(ae,{children:(0,_.jsx)(ie.Z,{classNames:re,timeout:2e3,children:(0,_.jsx)(Z.Z,{animate:!1,src:t[0]})},n)})}),(0,_.jsx)("div",{className:O,children:(0,_.jsx)(ae,{children:(0,_.jsx)(ie.Z,{classNames:re,timeout:2e3,children:(0,_.jsx)(Z.Z,{animate:!1,src:t[1]})},n)})})]})},ce=function(e){var t=(0,k.useState)(window.localStorage.getItem("visited")),n=(0,c.Z)(t,1)[0];return(0,k.useEffect)((function(){window.localStorage.setItem("visited","1")}),[n]),(0,_.jsxs)("div",(0,s.Z)((0,s.Z)({className:P},e),{},{children:[(0,_.jsxs)("div",{className:F,children:[(0,_.jsx)(M,{}),(0,_.jsx)(se,{})]}),(0,_.jsxs)("div",{className:S,children:[(0,_.jsx)("div",{className:"".concat(S," ").concat(W)}),(0,_.jsx)(Z.Z,{className:V,src:I,alt:"","aria-hidden":"true"})]})]}))},le="promo_root__R4zch",de="promo_list__XTvji",ue="promo_cell__5nVlh",me="promo_number__ZWklb",_e="promo_desc__oITbp",he="wave_wave__N-wJ8",pe="wave_waveElement__6grVB",xe="wave_waveFirst__DHe4j",ve="wave_waveSecond__dPcxW",fe="wave_waveThird__G+G+N",je=[{name:"Interfaces",desc:"As user friendly as possible"},{name:"Websites",desc:"Easy to use and easy to look at"},{name:"Visuals",desc:"Clarity and transparency"}],be=function(){var e=je.map((function(e,t){var n=e.name,a=e.desc;e.number;return(0,_.jsxs)("li",{children:[(0,_.jsx)("p",{className:me,children:t+1}),(0,_.jsxs)("div",{className:ue,children:[(0,_.jsx)("h3",{children:n}),(0,_.jsx)("p",{className:_e,children:a})]})]},n)}));return(0,_.jsxs)("div",{className:"".concat(le," ").concat(he),children:[(0,_.jsx)("ul",{className:de,children:e}),(0,_.jsx)("div",{className:"".concat(pe," ").concat(xe)}),(0,_.jsx)("div",{className:"".concat(pe," ").concat(ve)}),(0,_.jsx)("div",{className:"".concat(pe," ").concat(fe)})]})},ge="AboutMeCTA_about-me__d8HD1",Ne="AboutMeCTA_image__dPNLN",ye="AboutMeCTA_text__pQ3vh",we="AboutMeCTA_title__DMkj6",Te="AboutMeCTA_button__yTSas",ke=n.p+"static/media/proProgrammer.707a149691d98923b85f.webp",Ee=function(e){return(0,_.jsxs)("div",{className:ge,children:[(0,_.jsx)("div",{className:Ne,children:(0,_.jsx)(Z.Z,{src:ke,alt:"Karol in long coat"})}),(0,_.jsxs)("div",{className:ye,children:[(0,_.jsx)("h2",{className:we,children:"More about me"}),(0,_.jsx)("p",{children:"Click the button below to read more."}),(0,_.jsx)(l.Z,{className:Te,variant:"callToAction",route:"/about",children:"About me"})]})]})},Ce=n(4972),Ae=[{quote:"Whatever you are, be a good one.",author:"Abraham Lincoln"},{quote:"Talk is cheap. Show me the code.",author:"Linus Torvalds"},{quote:"Let's see if it breaks...",author:"Me"},{quote:"You never fail until you stop trying.",author:"Albert Einstein "}],Ze=function(){return Ae[parseInt(Math.random()*Ae.length)]},Ie="FunnyQuote_funnyQuote__i40oK",Pe="FunnyQuote_blockQuote__R8DL-",Fe="FunnyQuote_quoteTextContainer__alY8B",Se="FunnyQuote_quote__cvLs5",Ve="FunnyQuote_icon__5Jywh",We="FunnyQuote_author__TMEjm",De=function(){var e=Ze(),t=e.quote,n=e.author;return(0,_.jsx)("div",{className:Ie,children:(0,_.jsx)("blockquote",{className:Pe,children:(0,_.jsxs)("div",{className:Fe,children:[(0,_.jsx)("div",{className:Ve,children:(0,_.jsx)(Ce.EbF,{})}),(0,_.jsxs)("div",{children:[(0,_.jsx)("p",{className:Se,children:t}),(0,_.jsxs)("p",{className:We,children:["- ",n]})]}),(0,_.jsx)("div",{className:Ve,children:(0,_.jsx)(Ce.OXV,{})})]})})})},Me=function(){return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("section",{className:"".concat(i," ").concat(r),children:(0,_.jsx)(ce,{})}),(0,_.jsx)(be,{}),(0,_.jsx)("section",{className:"".concat(a," ").concat(i),children:(0,_.jsx)(A,{})}),(0,_.jsxs)("section",{className:"".concat(a," ").concat(i),children:[(0,_.jsx)(De,{}),(0,_.jsx)("div",{className:o}),(0,_.jsx)(Ee,{})]})]})}}}]);