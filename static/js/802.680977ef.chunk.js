"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[802],{802:function(e,t,i){i.r(t),i.d(t,{default:function(){return p}});var r=i(861),a=i(439),n=i(757),s=i.n(n),o=i(791),c=i(243),l=i(689),v=i(87),m={movie_details_container:"movieDetails_movie_details_container__VOqOH",movie_overview:"movieDetails_movie_overview__IzElp",goBack_button:"movieDetails_goBack_button__KpXWi"},u=i(184),p=function(){var e=(0,l.UO)().movieId,t=(0,o.useState)(null),i=(0,a.Z)(t,2),n=i[0],p=i[1];if((0,o.useEffect)((function(){var t=function(){var t=(0,r.Z)(s().mark((function t(){var i;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("https://api.themoviedb.org/3/movie/".concat(e),{params:{api_key:"610d75fe699fa5ab11363f277512029e"}});case 3:i=t.sent,p(i.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error("Error while fetching movie details:",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),!n)return(0,u.jsx)("div",{children:"Loading..."});var _="https://image.tmdb.org/t/p/w500".concat(n.poster_path);return(0,u.jsxs)("div",{className:m.movie_details_container,children:[(0,u.jsx)("button",{className:m.goBack_button,children:(0,u.jsx)(v.rU,{to:"/movies",children:"Go Back"})}),(0,u.jsx)("h1",{className:m.movie_title,children:n.title}),(0,u.jsx)("p",{className:m.movie_overview,children:n.overview}),n.poster_path?(0,u.jsx)("img",{src:_,alt:n.title}):(0,u.jsx)("div",{children:"No poster available"}),(0,u.jsxs)("p",{children:["Release Date: ",n.release_date]}),(0,u.jsxs)("p",{children:["Rating: ",n.vote_average]}),(0,u.jsxs)("p",{children:["Genres: ",n.genres.map((function(e){return e.name})).join(", ")]}),(0,u.jsxs)("p",{children:["Runtime: ",n.runtime," minutes"]}),(0,u.jsx)(v.rU,{to:"/movies/".concat(e,"/cast"),children:"View Cast"}),(0,u.jsx)(v.rU,{to:"/movies/".concat(e,"/reviews"),children:"View Reviews"})]})}}}]);
//# sourceMappingURL=802.680977ef.chunk.js.map