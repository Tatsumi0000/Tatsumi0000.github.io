(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/9aa":function(e,t,n){var r=n("NykK"),a=n("ExA7");e.exports=function(e){return"symbol"==typeof e||a(e)&&"[object Symbol]"==r(e)}},AP2z:function(e,t,n){var r=n("nmnc"),a=Object.prototype,o=a.hasOwnProperty,c=a.toString,l=r?r.toStringTag:void 0;e.exports=function(e){var t=o.call(e,l),n=e[l];try{e[l]=void 0;var r=!0}catch(i){}var a=c.call(e);return r&&(t?e[l]=n:delete e[l]),a}},ExA7:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},GoyQ:function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},HLqC:function(e,t,n){var r=n("R5Y4"),a=n("mv/X"),o=n("ZCgT");e.exports=function(e){return function(t,n,c){return c&&"number"!=typeof c&&a(t,n,c)&&(n=c=void 0),t=o(t),void 0===n?(n=t,t=0):n=o(n),c=void 0===c?t<n?1:-1:o(c),r(t,n,c,e)}}},KfNM:function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},Kz5y:function(e,t,n){var r=n("WFqU"),a="object"==typeof self&&self&&self.Object===Object&&self,o=r||a||Function("return this")();e.exports=o},MMmD:function(e,t,n){var r=n("lSCD"),a=n("shjB");e.exports=function(e){return null!=e&&a(e.length)&&!r(e)}},NykK:function(e,t,n){var r=n("nmnc"),a=n("AP2z"),o=n("KfNM"),c=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":c&&c in Object(e)?a(e):o(e)}},R5Y4:function(e,t){var n=Math.ceil,r=Math.max;e.exports=function(e,t,a,o){for(var c=-1,l=r(n((t-e)/(a||1)),0),i=Array(l);l--;)i[o?l:++c]=e,e+=a;return i}},WFqU:function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n("yLpj"))},WjpJ:function(e,t,n){var r=n("HLqC")();e.exports=r},ZCgT:function(e,t,n){var r=n("tLB3");e.exports=function(e){return e?(e=r(e))===1/0||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}},lSCD:function(e,t,n){var r=n("NykK"),a=n("GoyQ");e.exports=function(e){if(!a(e))return!1;var t=r(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}},ljhN:function(e,t){e.exports=function(e,t){return e===t||e!=e&&t!=t}},"mv/X":function(e,t,n){var r=n("ljhN"),a=n("MMmD"),o=n("wJg7"),c=n("GoyQ");e.exports=function(e,t,n){if(!c(n))return!1;var l=typeof t;return!!("number"==l?a(n)&&o(t,n.length):"string"==l&&t in n)&&r(n[t],e)}},nmnc:function(e,t,n){var r=n("Kz5y").Symbol;e.exports=r},shjB:function(e,t){e.exports=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}},tLB3:function(e,t,n){var r=n("GoyQ"),a=n("/9aa"),o=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,i=/^0o[0-7]+$/i,u=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(a(e))return NaN;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=l.test(e);return n||i.test(e)?u(e.slice(2),n?2:8):c.test(e)?NaN:+e}},wJg7:function(e,t){var n=/^(?:0|[1-9]\d*)$/;e.exports=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&n.test(e))&&e>-1&&e%1==0&&e<t}},zvhb:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return d}));var r=n("q1tI"),a=n.n(r),o=n("Wbzz"),c=n("WjpJ"),l=n.n(c),i=n("IP2g"),u=n("7O5W"),s=n("wHSu");u.a.autoAddCss=!1,u.c.add(s.a,s.c,s.b,s.d);var f=function(e){var t=e.pageContext,n=t.previousPagePath,r=t.nextPagePath,c=t.humanPageNumber,u=t.numberOfPages,f=l()(1,u+1);return a.a.createElement("div",{className:"flex flex-col items-center my-12"},a.a.createElement("div",{className:"flex text-gray-700"},1!==c?a.a.createElement(o.Link,{to:"/",className:"h-12 w-12 mr-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer"},a.a.createElement(i.a,{icon:s.a})):a.a.createElement("div",{className:"h-12 w-12 mr-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer"},a.a.createElement(i.a,{icon:s.a})),n?a.a.createElement(o.Link,{to:n,className:"h-12 w-12 mr-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer"},a.a.createElement(i.a,{icon:s.c})):a.a.createElement("div",{className:"h-12 w-12 mr-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer"},a.a.createElement(i.a,{icon:s.c})),a.a.createElement("div",{className:"relative inline-flex"},a.a.createElement("svg",{className:"w-2 h-2 absolute top-1 right-0 m-4 pointer-events-none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 412 232"},a.a.createElement("path",{d:"M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z",fill:"#648299","fill-rule":"nonzero"})),a.a.createElement("select",{className:"h-10 border border-gray-300 rounded-full flex self-auto text-gray-600 pl-5 pr-10 mt-1 bg-white hover:border-gray-400 focus:outline-none appearance-none"},f.map((function(e){return e===c?a.a.createElement("option",{selected:!0,className:"w-12 flex justify-center text-center items-center cursor-pointer rounded-full"},e):a.a.createElement("option",{onClick:function(){var t;1===(t=e)?Object(o.navigate)("/"):Object(o.navigate)("/"+t)},className:"w-12 flex justify-center items-center cursor-pointer rounded-full"},e)})))),r?a.a.createElement(o.Link,{to:r,className:"h-12 w-12 ml-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer"},a.a.createElement(i.a,{icon:s.d})):a.a.createElement("div",{className:"h-12 w-12 ml-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer"},a.a.createElement(i.a,{icon:s.d})),c!==u?a.a.createElement(o.Link,{to:"/"+u,className:"h-12 w-12 ml-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer"},a.a.createElement(i.a,{icon:s.b})):a.a.createElement("div",{className:"h-12 w-12 ml-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer"},a.a.createElement(i.a,{icon:s.b}))))},m=n("9Dj+"),p=n("H8eV"),d=(t.default=function(e){var t,n=e.data,r=e.location,c=e.pageContext,l=(null===(t=n.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",i=n.allMarkdownRemark.nodes;return 0===i.length?a.a.createElement(m.a,{location:r,title:l},a.a.createElement(p.a,{title:"TOP"}),a.a.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):a.a.createElement(m.a,{location:r,title:l},a.a.createElement(p.a,{title:"TOP"}),a.a.createElement("ol",{style:{listStyle:"none"}},i.map((function(e){var t=e.frontmatter.title||e.fields.slug;return a.a.createElement("li",{key:e.fields.slug},a.a.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},a.a.createElement("header",null,a.a.createElement("h2",null,a.a.createElement(o.Link,{to:e.fields.slug,itemProp:"url"},a.a.createElement("span",{itemProp:"headline"},t))),a.a.createElement("small",null,e.frontmatter.date),e.frontmatter.tags.map((function(e){return a.a.createElement("div",{className:"ml-4 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 rounded-full bg-white text-gray-700 border"},e)}))),a.a.createElement("section",null,a.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))),a.a.createElement(f,{pageContext:c}))},"2030628178")}}]);
//# sourceMappingURL=component---src-templates-index-tsx-999bf535fd27b815a8f6.js.map