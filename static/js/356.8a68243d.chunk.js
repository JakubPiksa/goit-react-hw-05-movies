"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[356],{356:function(e,t,r){r.r(t),r.d(t,{default:function(){return f}});var n=r(861),a=r(439),s=r(757),i=r.n(s),c=r(791),o=r(243),l=r(87),u="home_home_list_container__ZgQ-U",h="home_home_list__dVfj7",m="home_home_list_item__79Oyq",p=r(184),f=function(){var e=(0,c.useState)([]),t=(0,a.Z)(e,2),r=t[0],s=t[1];return(0,c.useEffect)((function(){var e=function(){var e=(0,n.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("https://api.themoviedb.org/3/trending/movie/day",{params:{api_key:"610d75fe699fa5ab11363f277512029e"}});case 3:t=e.sent,s(t.data.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error while fetching trending movies:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,p.jsxs)("div",{className:u,children:[(0,p.jsx)("h1",{children:"Najpopularniejsze filmy"}),(0,p.jsx)("ul",{className:h,children:r.map((function(e){return(0,p.jsx)("li",{className:m,children:(0,p.jsxs)(l.rU,{to:"/movies/".concat(e.id),children:[(0,p.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(e.poster_path),alt:e.title}),(0,p.jsx)("p",{children:e.title})]})},e.id)}))})]})}}}]);
//# sourceMappingURL=356.8a68243d.chunk.js.map