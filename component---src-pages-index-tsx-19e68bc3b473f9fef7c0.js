(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{QeBL:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return s}));var n=a("q1tI"),l=a.n(n),r=a("Wbzz"),i=a("9Dj+"),o=a("H8eV");t.default=function(e){var t,a=e.data,n=e.location,s=(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",c=a.allMarkdownRemark.nodes;return 0===c.length?l.a.createElement(i.a,{location:n,title:s},l.a.createElement(o.a,{title:"TOP"}),l.a.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):l.a.createElement(i.a,{location:n,title:s},l.a.createElement(o.a,{title:"TOP"}),l.a.createElement("ol",{style:{listStyle:"none"}},c.map((function(e){var t=e.frontmatter.title||e.fields.slug;return l.a.createElement("li",{key:e.fields.slug},l.a.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},l.a.createElement("h2",null,l.a.createElement(r.Link,{to:e.fields.slug,itemProp:"url"},l.a.createElement("span",{itemProp:"headline"},t))),l.a.createElement("small",null,e.frontmatter.date),e.frontmatter.tags.map((function(e){return l.a.createElement("div",{className:"ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-white text-gray-700 border"},e)})),l.a.createElement("section",null,l.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))))};var s="862560315"}}]);
//# sourceMappingURL=component---src-pages-index-tsx-19e68bc3b473f9fef7c0.js.map