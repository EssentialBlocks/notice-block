!function(){var t,e={770:function(t,e,n){"use strict";var o={};n.r(o),n.d(o,{typoPrefix_text:function(){return u},typoPrefix_title:function(){return b}});var a=window.wp.i18n,r=(window.wp.blocks,window.wp.blockEditor),c=window.wp.element,i=window.wp.data,l=n(184),s=n.n(l),p=window.wp.components,b="title",u="text",d="margin",f="padding",m="wrp_",y="wrp_";function C(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?C(Object(n),!0).forEach((function(e){v(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var w=window.EBNoticeControls,k=w.generateDimensionsAttributes,h=w.generateTypographyAttributes,_=w.generateBackgroundAttributes,R=w.generateBorderShadowAttributes,E=g(g(g(g(g({resOption:{type:"string",default:"Desktop"},blockId:{type:"string"},blockRoot:{type:"string",default:"essential_block"},blockMeta:{type:"object"},dismissible:{type:"boolean",default:!1},noticeType:{type:"string",default:"default"},titleFontSize:{type:"number"},textFontSize:{type:"number"},title:{type:"string",source:"text",selector:".eb-notice-title",default:"Save 20%"},text:{type:"string",source:"text",selector:".eb-notice-text",default:"Free shipping on all orders"},backgroundColor:{type:"string"},titleColor:{type:"string"},textColor:{type:"string"},noticeId:{type:"string"},showAfterDismiss:{type:"boolean",default:!1}},h(Object.values(o))),k(d)),k(f,{top:65,bottom:65,right:60,left:60,isLinked:!1})),R(y,{})),_(m,{defaultFillColor:"#3074ff",defaultBgGradient:"linear-gradient(45deg,#7967ff,#c277f2)"})),O=[{label:(0,a.__)("Default","essential-blocks"),value:"default"},{label:(0,a.__)("Success","essential-blocks"),value:"success"},{label:(0,a.__)("Info","essential-blocks"),value:"info"},{label:(0,a.__)("Warning","essential-blocks"),value:"warning"},{label:(0,a.__)("Danger","essential-blocks"),value:"danger"}];function S(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}(0,a.__)("None","essential-blocks"),(0,a.__)("Lowercase","essential-blocks"),(0,a.__)("Capitalize","essential-blocks"),(0,a.__)("Uppercase","essential-blocks"),(0,a.__)("Lighter","essential-blocks"),(0,a.__)("Normal","essential-blocks"),(0,a.__)("Bold","essential-blocks"),(0,a.__)("Bolder","essential-blocks"),(0,a.__)("Initial","essential-blocks"),(0,a.__)("Overline","essential-blocks"),(0,a.__)("Line Through","essential-blocks"),(0,a.__)("Underline","essential-blocks"),(0,a.__)("Underline Oveline","essential-blocks");var x=window.EBNoticeControls,P=x.ResponsiveDimensionsControl,N=x.TypographyDropdown,T=x.BorderShadowControl,L=x.ColorControl,j=x.BackgroundControl,M=x.AdvancedControls,D="edit-site"===eb_conditional_localize.editor_type?"core/edit-site":"core/edit-post",B=function(t){var e=t.attributes,n=t.setAttributes,o=e.resOption,l=e.dismissible,s=e.noticeType,C=e.titleColor,g=e.textColor,v=e.showAfterDismiss;(0,c.useEffect)((function(){n({resOption:(0,i.select)(D).__experimentalGetPreviewDeviceType()})}),[]);var w={setAttributes:n,resOption:o,attributes:e,objAttributes:E};return React.createElement(r.InspectorControls,{key:"controls"},React.createElement("div",{className:"eb-panel-control"},React.createElement(p.TabPanel,{className:"eb-parent-tab-panel",activeClass:"active-tab",tabs:[{name:"general",title:"General",className:"eb-tab general"},{name:"styles",title:"Style",className:"eb-tab styles"},{name:"advance",title:"Advanced",className:"eb-tab advance"}]},(function(t){return React.createElement("div",{className:"eb-tab-controls"+t.name},"general"===t.name&&React.createElement(React.Fragment,null,React.createElement(p.PanelBody,{title:(0,a.__)("Notice Settings","essential-blocks")},React.createElement(p.ToggleControl,{label:(0,a.__)("Dismissible","essential-blocks"),checked:l,onChange:function(){return n({dismissible:!l})}}),React.createElement(p.ToggleControl,{label:(0,a.__)("Show After Dismiss","essential-blocks"),checked:v,onChange:function(){return n({showAfterDismiss:!v})}}),React.createElement(p.SelectControl,{label:(0,a.__)("Type","essential-blocks"),value:s,options:O,onChange:function(t){return function(t){var e,o,a,r,c;switch(t){case"success":n((S(e={noticeType:t},"".concat(m,"backgroundColor"),"#4caf50"),S(e,"titleColor","#ffffff"),S(e,"textColor","#ffffff"),e));break;case"info":n((S(o={noticeType:t},"".concat(m,"backgroundColor"),"#d3d3d3"),S(o,"titleColor","#000000"),S(o,"textColor","#000000"),o));break;case"danger":n((S(a={noticeType:t},"".concat(m,"backgroundColor"),"#f44336"),S(a,"titleColor","#ffffff"),S(a,"textColor","#ffffff"),a));break;case"warning":n((S(r={noticeType:t},"".concat(m,"backgroundColor"),"#ffeb3b"),S(r,"titleColor","#000000"),S(r,"textColor","#000000"),r));break;case"default":n((S(c={noticeType:t},"".concat(m,"backgroundColor"),"#2196f3"),S(c,"titleColor","#ffffff"),S(c,"textColor","#ffffff"),c))}}(t)}}))),"styles"===t.name&&React.createElement(React.Fragment,null,React.createElement(p.PanelBody,{title:(0,a.__)("Title","essential-blocks")},React.createElement(N,{baseLabel:"Typography",typographyPrefixConstant:b,resRequiredProps:w}),React.createElement(L,{label:(0,a.__)("Color","essential-blocks"),color:C,onChange:function(t){return n({titleColor:t})}})),React.createElement(p.PanelBody,{title:(0,a.__)("text","essential-blocks")},React.createElement(N,{baseLabel:"Typography",typographyPrefixConstant:u,resRequiredProps:w}),React.createElement(L,{label:(0,a.__)("Color","essential-blocks"),color:g,onChange:function(t){return n({textColor:t})}}))),"advance"===t.name&&React.createElement(React.Fragment,null,React.createElement(p.PanelBody,{title:(0,a.__)("Margin & Padding")},React.createElement(P,{resRequiredProps:w,controlName:d,baseLabel:"Margin"}),React.createElement(P,{resRequiredProps:w,controlName:f,baseLabel:"Padding"})),React.createElement(p.PanelBody,{title:(0,a.__)("Background","essential-blocks"),initialOpen:!1},React.createElement(j,{controlName:m,resRequiredProps:w})),React.createElement(p.PanelBody,{title:(0,a.__)("Border & Shadow"),initialOpen:!1},React.createElement(T,{controlName:y,resRequiredProps:w})),React.createElement(M,{attributes:e,setAttributes:n})))}))))},A=window.EBNoticeControls,Z=A.softMinifyCssStrings,F=A.generateTypographyStyles,I=A.generateDimensionsControlStyles,z=A.generateBackgroundControlStyles,G=A.generateBorderShadowStyles,q=A.duplicateBlockIdFix,H="edit-site"===eb_conditional_localize.editor_type?"core/edit-site":"core/edit-post",J=JSON.parse('{"apiVersion":2,"name":"notice-block/notice","title":"Notice","category":"widgets","description":"Put Spotlight On News, Announcements & Let The Visitors Find It Easily","textdomain":"notice-block","supports":{"align":["wide","full"]},"editorScript":"file:./dist/index.js"}');function U(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function V(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var K=[{attributes:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?U(Object(n),!0).forEach((function(e){V(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},E),supports:{align:["wide","full"]},save:function(t){var e=t.attributes,n=e.blockId,o=e.showAfterDismiss,a=e.title,c=e.text;return React.createElement("div",r.useBlockProps.save(),React.createElement("div",{className:"eb-notice-wrapper ".concat(n),"data-id":n,"data-show-again":o},React.createElement("div",{className:"eb-notice-title-wrapper"},React.createElement(r.RichText.Content,{tagName:"div",className:"eb-notice-title",value:a})),React.createElement("span",{className:"eb-notice-dismiss",style:{cursor:"pointer"}}),React.createElement("div",null,React.createElement(r.RichText.Content,{tagName:"div",className:"eb-notice-text",value:c}))))}}],W=K;(0,EBNoticeControls.ebConditionalRegisterBlockType)(J,{icon:function(){return React.createElement("svg",{width:"256",height:"359",viewBox:"0 0 256 359",xmlns:"http://www.w3.org/2000/svg"},React.createElement("defs",null,React.createElement("linearGradient",{x1:"50%",y1:"-.962%",x2:"50%",y2:"102.035%",id:"linearGradient-1"},React.createElement("stop",{stopColor:"#1A6DFF",offset:"0%"}),React.createElement("stop",{stopColor:"#C822FF",offset:"100%"}))),React.createElement("g",{id:"Page-1",fill:"none",fillRule:"evenodd"},React.createElement("g",{id:"eb-notice",fill:"url(#linearGradient-1)",fillRule:"nonzero"},React.createElement("path",{d:"M128,0 C111.09568,0 97.28,13.815678 97.28,30.72 L97.28,40.96 L15.36,40.96 C6.9377536,40.96 0,47.8977536 0,56.32 L0,343.04 C0,351.462246 6.9377536,358.4 15.36,358.4 L240.64,358.4 C249.062246,358.4 256,351.462246 256,343.04 L256,56.32 C256,47.8977536 249.062246,40.96 240.64,40.96 L158.72,40.96 L158.72,30.72 C158.72,13.815678 144.90432,0 128,0 Z M128,10.24 C139.36832,10.24 148.48,19.351682 148.48,30.72 L148.48,66.56 C148.48,69.4529536 146.252954,71.68 143.36,71.68 L112.64,71.68 C109.747046,71.68 107.52,69.4529536 107.52,66.56 L107.52,30.72 C107.52,19.351682 116.63168,10.24 128,10.24 Z M128,25.6 C125.172302,25.6 122.88,27.8923021 122.88,30.72 C122.88,33.5476979 125.172302,35.84 128,35.84 C130.827698,35.84 133.12,33.5476979 133.12,30.72 C133.12,27.8923021 130.827698,25.6 128,25.6 Z M15.36,51.2 L97.28,51.2 L97.28,61.44 L92.16,61.44 C80.9096499,61.44 71.68,70.6696499 71.68,81.92 L71.68,87.04 L72.72,87.04 C75.0565325,95.7765786 82.7207987,102.4 92.16,102.4 L163.84,102.4 C173.279201,102.4 180.943468,95.7765786 183.28,87.04 L184.32,87.04 L184.32,81.92 C184.32,70.6696499 175.09035,61.44 163.84,61.44 L158.72,61.44 L158.72,51.2 L240.64,51.2 C243.532954,51.2 245.76,53.4270464 245.76,56.32 L245.76,343.04 C245.76,345.932954 243.532954,348.16 240.64,348.16 L15.36,348.16 C12.4670464,348.16 10.24,345.932954 10.24,343.04 L10.24,56.32 C10.24,53.4270464 12.4670464,51.2 15.36,51.2 Z M35.84,71.68 C33.0123021,71.68 30.72,73.9723021 30.72,76.8 C30.72,79.6276979 33.0123021,81.92 35.84,81.92 C38.6676979,81.92 40.96,79.6276979 40.96,76.8 C40.96,73.9723021 38.6676979,71.68 35.84,71.68 Z M92.16,71.68 L98.24,71.68 C100.376924,77.6054835 106.01919,81.92 112.64,81.92 L143.36,81.92 C149.98081,81.92 155.623076,77.6054835 157.76,71.68 L163.84,71.68 C169.55733,71.68 174.08,76.2026701 174.08,81.92 C174.08,87.6373299 169.55733,92.16 163.84,92.16 L92.16,92.16 C86.4426701,92.16 81.92,87.6373299 81.92,81.92 C81.92,76.2026701 86.4426701,71.68 92.16,71.68 Z M35.84,92.16 C33.0123021,92.16 30.72,94.4523021 30.72,97.28 C30.72,100.107698 33.0123021,102.4 35.84,102.4 C38.6676979,102.4 40.96,100.107698 40.96,97.28 C40.96,94.4523021 38.6676979,92.16 35.84,92.16 Z M35.84,112.64 C33.0123021,112.64 30.72,114.932302 30.72,117.76 C30.72,120.587698 33.0123021,122.88 35.84,122.88 C38.6676979,122.88 40.96,120.587698 40.96,117.76 C40.96,114.932302 38.6676979,112.64 35.84,112.64 Z M35.84,133.12 C33.0123021,133.12 30.72,135.412302 30.72,138.24 C30.72,141.067698 33.0123021,143.36 35.84,143.36 C38.6676979,143.36 40.96,141.067698 40.96,138.24 C40.96,135.412302 38.6676979,133.12 35.84,133.12 Z M35.84,153.6 C33.0123021,153.6 30.72,155.892302 30.72,158.72 C30.72,161.547698 33.0123021,163.84 35.84,163.84 C38.6676979,163.84 40.96,161.547698 40.96,158.72 C40.96,155.892302 38.6676979,153.6 35.84,153.6 Z M117.76,153.6 L121.180001,242.349998 L134.819999,242.349998 L138.24,153.6 L117.76,153.6 Z M35.84,174.08 C33.0123021,174.08 30.72,176.372302 30.72,179.2 C30.72,182.027698 33.0123021,184.32 35.84,184.32 C38.6676979,184.32 40.96,182.027698 40.96,179.2 C40.96,176.372302 38.6676979,174.08 35.84,174.08 Z M35.84,194.56 C33.0123021,194.56 30.72,196.852302 30.72,199.68 C30.72,202.507698 33.0123021,204.8 35.84,204.8 C38.6676979,204.8 40.96,202.507698 40.96,199.68 C40.96,196.852302 38.6676979,194.56 35.84,194.56 Z M35.84,215.04 C33.0123021,215.04 30.72,217.332302 30.72,220.16 C30.72,222.987698 33.0123021,225.28 35.84,225.28 C38.6676979,225.28 40.96,222.987698 40.96,220.16 C40.96,217.332302 38.6676979,215.04 35.84,215.04 Z M35.84,235.52 C33.0123021,235.52 30.72,237.812302 30.72,240.64 C30.72,243.467698 33.0123021,245.76 35.84,245.76 C38.6676979,245.76 40.96,243.467698 40.96,240.64 C40.96,237.812302 38.6676979,235.52 35.84,235.52 Z M35.84,256 C33.0123021,256 30.72,258.292302 30.72,261.12 C30.72,263.947698 33.0123021,266.24 35.84,266.24 C38.6676979,266.24 40.96,263.947698 40.96,261.12 C40.96,258.292302 38.6676979,256 35.84,256 Z M128,256.860001 C122.344604,256.860001 117.76,261.444605 117.76,267.100001 C117.76,272.755397 122.344604,277.340001 128,277.340001 C133.655396,277.340001 138.24,272.755397 138.24,267.100001 C138.24,261.444605 133.655396,256.860001 128,256.860001 Z M35.84,276.48 C33.0123021,276.48 30.72,278.772302 30.72,281.6 C30.72,284.427698 33.0123021,286.72 35.84,286.72 C38.6676979,286.72 40.96,284.427698 40.96,281.6 C40.96,278.772302 38.6676979,276.48 35.84,276.48 Z M35.84,296.96 C33.0123021,296.96 30.72,299.252302 30.72,302.08 C30.72,304.907698 33.0123021,307.2 35.84,307.2 C38.6676979,307.2 40.96,304.907698 40.96,302.08 C40.96,299.252302 38.6676979,296.96 35.84,296.96 Z M35.84,317.44 C33.0123021,317.44 30.72,319.732302 30.72,322.56 C30.72,325.387698 33.0123021,327.68 35.84,327.68 C38.6676979,327.68 40.96,325.387698 40.96,322.56 C40.96,319.732302 38.6676979,317.44 35.84,317.44 Z",id:"Shape"}))))},attributes:E,keywords:[(0,a.__)("EB notice","essential-blocks"),(0,a.__)("notice","essential-blocks"),(0,a.__)("alert ","essential-blocks")],edit:function(t){var e=t.attributes,n=t.setAttributes,o=t.className,a=t.clientId,l=t.isSelected,p=e.blockId,C=e.blockMeta,g=e.resOption,v=e.dismissible,w=e.title,k=e.text,h=e.titleColor,_=e.textColor,R=e.classHook;(0,c.useEffect)((function(){n({resOption:(0,i.select)(H).__experimentalGetPreviewDeviceType()})}),[]),(0,c.useEffect)((function(){q({BLOCK_PREFIX:"eb-notice",blockId:p,setAttributes:n,select:i.select,clientId:a})}),[]);var E=(0,r.useBlockProps)({className:s()(o,"eb-guten-block-main-parent-wrapper")}),O=F({attributes:e,prefixConstant:b,defaultFontSize:32}),S=O.typoStylesDesktop,x=O.typoStylesTab,P=O.typoStylesMobile,N=F({attributes:e,prefixConstant:u,defaultFontSize:18}),T=N.typoStylesDesktop,L=N.typoStylesTab,j=N.typoStylesMobile,M=I({controlName:d,styleFor:"margin",attributes:e}),D=M.dimensionStylesDesktop,A=M.dimensionStylesTab,J=M.dimensionStylesMobile,U=I({controlName:f,styleFor:"padding",attributes:e}),V=U.dimensionStylesDesktop,K=U.dimensionStylesTab,W=U.dimensionStylesMobile,X=z({attributes:e,controlName:m}),Q=X.backgroundStylesDesktop,Y=X.hoverBackgroundStylesDesktop,$=X.backgroundStylesTab,tt=X.hoverBackgroundStylesTab,et=X.backgroundStylesMobile,nt=X.hoverBackgroundStylesMobile,ot=X.overlayStylesDesktop,at=X.hoverOverlayStylesDesktop,rt=X.overlayStylesTab,ct=X.hoverOverlayStylesTab,it=X.overlayStylesMobile,lt=X.hoverOverlayStylesMobile,st=X.bgTransitionStyle,pt=X.ovlTransitionStyle,bt=G({controlName:y,attributes:e}),ut=bt.styesDesktop,dt=bt.styesTab,ft=bt.styesMobile,mt=bt.stylesHoverDesktop,yt=bt.stylesHoverTab,Ct=bt.stylesHoverMobile,gt=bt.transitionStyle,vt="\n\n\t.eb-notice-wrapper.".concat(p," > * {\n\t\tposition: relative;\n\t}\t\n\n\t.eb-notice-wrapper.").concat(p,"{\n\t\t").concat(D,"\n\t\t").concat(V,"\n\t\t").concat(Q,"\n\t\t").concat(ut,"\n\t\ttransition:").concat(st,", ").concat(gt,";\n\t\toverflow: hidden;\n\t\tposition: relative;\n\t\t\n\t}\n\t\n\t.eb-notice-wrapper.").concat(p,":hover{\n\t\t").concat(Y,"\n\t\t").concat(mt,"\n\t}\n\t\n\t.eb-notice-wrapper.").concat(p,":before{\n\t\t").concat(ot,"\n\t\ttransition:").concat(pt,";\n\t}\n\n\t.eb-notice-wrapper.").concat(p,":hover:before{\n\t\t").concat(at,"\n\t}\n\n\t"),wt="\n\t.eb-notice-wrapper.".concat(p,"{\n\t\t").concat(A,"\n\t\t").concat(K,"\n\t\t").concat($,"\n\t\t").concat(dt,"\t\t\n\t}\n\n\t.eb-notice-wrapper.").concat(p,":hover{\n\t\t").concat(tt,"\n\t\t").concat(yt,"\n\t}\n\n\t.eb-notice-wrapper.").concat(p,":before{\n\t\t").concat(rt,"\n\t}\n\n\t.eb-notice-wrapper.").concat(p,":hover:before{\n\t\t").concat(ct,"\n\t}\n\n\t"),kt="\n\t.eb-notice-wrapper.".concat(p,"{\n\t\t").concat(J,"\n\t\t").concat(W,"\n\t\t").concat(et,"\n\t\t").concat(ft,"\n\t}\n\n\t.eb-notice-wrapper.").concat(p,":hover{\n\t\t").concat(nt,"\n\t\t").concat(Ct,"\n\t}\n\n\t.eb-notice-wrapper.").concat(p,":before{\n\t\t").concat(it,"\n\t}\n\n\t.eb-notice-wrapper.").concat(p,":hover:before{\n\t\t").concat(lt,"\n\t}\n\t"),ht="\n\t.eb-notice-wrapper.".concat(p," .eb-notice-title-wrapper{\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t}\t\n\t"),_t="\n\t.eb-notice-wrapper.".concat(p," .eb-notice-title{\n\t\t").concat(S,"\t\t\n\t\tcolor: ").concat(h||"#fff",";\n\t}\n\t"),Rt="\n\t.eb-notice-wrapper.".concat(p," .eb-notice-title{\n\t\t").concat(x,"\n\t}\n\t"),Et="\n\t.eb-notice-wrapper.".concat(p," .eb-notice-title{\n\t\t").concat(P,"\n\t}\n\t"),Ot="\n\t.eb-notice-wrapper.".concat(p," .eb-notice-text{\n\t\t").concat(T,"\n\t\tcolor: ").concat(_||"#edf1f7",";\n\t}\n\t"),St="\n\t.eb-notice-wrapper.".concat(p," .eb-notice-text{\n\t\t").concat(L,"\n\t}\n\t"),xt="\n\t.eb-notice-wrapper.".concat(p," .eb-notice-text{\n\t\t").concat(j,"\n\t}\n\t"),Pt="\n\t.eb-notice-wrapper.".concat(p," .eb-notice-dismiss{\n\t\tcolor: ").concat(_||"#edf1f7",";\n\t\tdisplay: ").concat(v?"flex":"none",";\n\n\t\ttop: 0px;\n\t\tright: 0px;\n\t\twidth: 24px;\n\t\theight: 24px;\n\t\tposition: absolute;\n\t\tjustify-content: center;\n\t}\n\n\t.eb-notice-wrapper.").concat(p,' .eb-notice-dismiss:after{\n\t\tcontent: "\\00d7";\n\t}\n\n\t.entry-content\n\t> *:not(.alignwide):not(.alignfull):not(.alignleft):not(.alignright):not(.wp-block-separator):not(.woocommerce) {\n\t\tmargin-left: auto;\n\t\tmargin-right: auto;\n\t}\n\n\t'),Nt=Z("\n\t\t".concat(vt,"\n\t\t").concat(ht,"\n\t\t").concat(Pt,"\n\t\t").concat(_t,"\n\t\t").concat(Ot,"\n\t")),Tt=Z("\n\t\t".concat(wt,"\n\t\t").concat(Rt,"\n\t\t").concat(St,"\n\t")),Lt=Z("\n\t\t".concat(kt,"\n\t\t").concat(Et,"\n\t\t").concat(xt,"\n\t"));return(0,c.useEffect)((function(){var t={desktop:Nt,tab:Tt,mobile:Lt};JSON.stringify(C)!=JSON.stringify(t)&&n({blockMeta:t})}),[e]),React.createElement(React.Fragment,null,l&&React.createElement(B,t),React.createElement("div",E,React.createElement("style",null,"\n\t\t\t\t".concat(Nt,"\n\n\t\t\t\t/* mimmikcssStart */\n\n\t\t\t\t").concat("Tablet"===g?Tt:" ","\n\t\t\t\t").concat("Mobile"===g?Tt+Lt:" ","\n\n\t\t\t\t/* mimmikcssEnd */\n\n\t\t\t\t@media all and (max-width: 1024px) {\t\n\n\t\t\t\t\t/* tabcssStart */\t\t\t\n\t\t\t\t\t").concat(Z(Tt),"\n\t\t\t\t\t/* tabcssEnd */\t\t\t\n\t\t\t\t\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t@media all and (max-width: 767px) {\n\t\t\t\t\t\n\t\t\t\t\t/* mobcssStart */\t\t\t\n\t\t\t\t\t").concat(Z(Lt),"\n\t\t\t\t\t/* mobcssEnd */\t\t\t\n\t\t\t\t\n\t\t\t\t}\n\t\t\t\t")),React.createElement("div",{className:"eb-parent-wrapper eb-parent-".concat(p," ").concat(R)},React.createElement("div",{className:"eb-notice-wrapper ".concat(p),"data-id":p},React.createElement("div",{className:"eb-notice-title-wrapper"},React.createElement(r.RichText,{className:"eb-notice-title",value:w,onChange:function(t){return n({title:t})},placeholder:"Add Title..."})),React.createElement("span",{className:"eb-notice-dismiss"}),React.createElement("div",null,React.createElement(r.RichText,{className:"eb-notice-text",value:k,onChange:function(t){return n({text:t})},placeholder:"Add Text..."}))))))},save:function(t){var e=t.attributes,n=e.blockId,o=e.showAfterDismiss,a=e.title,c=e.text,i=e.classHook;return React.createElement("div",r.useBlockProps.save(),React.createElement("div",{className:"eb-parent-wrapper eb-parent-".concat(n," ").concat(i)},React.createElement("div",{className:"eb-notice-wrapper ".concat(n),"data-id":n,"data-show-again":o},React.createElement("div",{className:"eb-notice-title-wrapper"},React.createElement(r.RichText.Content,{tagName:"div",className:"eb-notice-title",value:a})),React.createElement("span",{className:"eb-notice-dismiss",style:{cursor:"pointer"}}),React.createElement("div",null,React.createElement(r.RichText.Content,{tagName:"div",className:"eb-notice-text",value:c})))))},example:{attributes:{noticeType:"default"}},deprecated:W})},184:function(t,e){var n;!function(){"use strict";var o={}.hasOwnProperty;function a(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var r=typeof n;if("string"===r||"number"===r)t.push(n);else if(Array.isArray(n)){if(n.length){var c=a.apply(null,n);c&&t.push(c)}}else if("object"===r)if(n.toString===Object.prototype.toString)for(var i in n)o.call(n,i)&&n[i]&&t.push(i);else t.push(n.toString())}}return t.join(" ")}t.exports?(a.default=a,t.exports=a):void 0===(n=function(){return a}.apply(e,[]))||(t.exports=n)}()}},n={};function o(t){var a=n[t];if(void 0!==a)return a.exports;var r=n[t]={exports:{}};return e[t](r,r.exports,o),r.exports}o.m=e,t=[],o.O=function(e,n,a,r){if(!n){var c=1/0;for(p=0;p<t.length;p++){n=t[p][0],a=t[p][1],r=t[p][2];for(var i=!0,l=0;l<n.length;l++)(!1&r||c>=r)&&Object.keys(o.O).every((function(t){return o.O[t](n[l])}))?n.splice(l--,1):(i=!1,r<c&&(c=r));if(i){t.splice(p--,1);var s=a();void 0!==s&&(e=s)}}return e}r=r||0;for(var p=t.length;p>0&&t[p-1][2]>r;p--)t[p]=t[p-1];t[p]=[n,a,r]},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,{a:e}),e},o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},function(){var t={117:0,848:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var a,r,c=n[0],i=n[1],l=n[2],s=0;if(c.some((function(e){return 0!==t[e]}))){for(a in i)o.o(i,a)&&(o.m[a]=i[a]);if(l)var p=l(o)}for(e&&e(n);s<c.length;s++)r=c[s],o.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return o.O(p)},n=self.webpackChunknotice=self.webpackChunknotice||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var a=o.O(void 0,[848],(function(){return o(770)}));a=o.O(a)}();