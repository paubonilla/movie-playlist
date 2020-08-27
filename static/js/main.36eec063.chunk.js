(this["webpackJsonpmovie-playlist"]=this["webpackJsonpmovie-playlist"]||[]).push([[0],{27:function(e,n,t){e.exports=t(41)},32:function(e,n,t){},33:function(e,n,t){},34:function(e,n,t){},41:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(23),c=t.n(i),o=(t(32),t(33),t(34),t(9)),l=t(17),d=t(8),s=function(e,n){switch(n.type){case"ADD_MOVIE_TO_WATCHLIST":return Object(d.a)(Object(d.a)({},e),{},{watchList:[n.payload].concat(Object(l.a)(e.watchList))});case"REMOVE_MOVIE_FROM_WATCHLIST":return Object(d.a)(Object(d.a)({},e),{},{watchList:e.watchList.filter((function(e){return e.id!==n.payload}))});case"ADD_MOVIE_TO_WATCHED":return Object(d.a)(Object(d.a)({},e),{},{watchList:e.watchList.filter((function(e){return e.id!==n.payload.id})),watched:[n.payload].concat(Object(l.a)(e.watched))});case"MOVE_TO_WATCHLIST":return Object(d.a)(Object(d.a)({},e),{},{watched:e.watched.filter((function(e){return e.id!==n.payload.id})),watchList:[n.payload].concat(Object(l.a)(e.watchList))});case"REMOVE_FROM_WATCHED":return Object(d.a)(Object(d.a)({},e),{},{watched:e.watched.filter((function(e){return e.id!==n.payload}))});default:return e}},m={watchList:localStorage.getItem("watchList")?JSON.parse(localStorage.getItem("watchList")):[],watched:localStorage.getItem("watched")?JSON.parse(localStorage.getItem("watched")):[]},u=Object(a.createContext)(m),p=function(e){var n=Object(a.useReducer)(s,m),t=Object(o.a)(n,2),i=t[0],c=t[1];Object(a.useEffect)((function(){localStorage.setItem("watchList",JSON.stringify(i.watchList)),localStorage.setItem("watched",JSON.stringify(i.watched))}),[i]);return r.a.createElement(u.Provider,{value:{watchList:i.watchList,watched:i.watched,addMovieToWatchList:function(e){c({type:"ADD_MOVIE_TO_WATCHLIST",payload:e})},removeMovieFromWatchList:function(e){c({type:"REMOVE_MOVIE_FROM_WATCHLIST",payload:e})},addMovieToWatched:function(e){c({type:"ADD_MOVIE_TO_WATCHED",payload:e})},moveToWacthList:function(e){c({type:"MOVE_TO_WATCHLIST",payload:e})},removeFromWatched:function(e){c({type:"REMOVE_FROM_WATCHED",payload:e})}}},e.children)},h=t(1),f=t(2);function v(){var e=Object(h.a)(["\n  font-size: 10px;\n  margin: 0;\n"]);return v=function(){return e},e}function g(){var e=Object(h.a)(["\n  padding: 10px 15px;\n  background-color: #31475D;\n  color: #fff;\n  border-radius: 5px;\n  text-transform: uppercase;\n  font-weight: 700;\n  display: inline-block;\n  border: none;\n  font-size: 1rem;\n  transition: all 0.3s ease;\n  line-height: 1.1;\n  @media (max-width: 320px) {\n    width: 100%;\n  }\n\n  &:hover {\n    background-color: #b2ebf2;\n    opacity: 1;\n    cursor: pointer;\n  }\n\n  &:disabled {\n    pointer-events: none;\n    opacity: 0.5;\n  }\n"]);return g=function(){return e},e}function b(){var e=Object(h.a)(["\n  padding-right: 0;\n  padding-left: 0;\n"]);return b=function(){return e},e}function E(){var e=Object(h.a)(["\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n"]);return E=function(){return e},e}function x(){var e=Object(h.a)(["\n  width: 100%;\n"]);return x=function(){return e},e}function w(){var e=Object(h.a)(["\n  padding: 3rem;\n  @media (max-width: 320px) {\n    padding: 2rem;\n  }\n  /* background: radial-gradient(#30475D, #1C1C2E); */\n"]);return w=function(){return e},e}var O=f.a.div(w()),y=f.a.div(x()),j=f.a.div(E()),N=(Object(f.a)(j)(b()),f.a.button(g())),C=(Object(f.a)(N)(v()),t(3));function _(){var e=Object(h.a)(["\n  padding: 0;\n  margin: 0;\n  margin-top: 20px;\n  li {\n    list-style: none;\n  }\n"]);return _=function(){return e},e}function L(){var e=Object(h.a)(["\n  input {\n    margin: 0;\n    width: 250%;\n    @media (max-width: 768px) {\n      width: 97%;\n    }\n    @media (max-width: 480px) {\n      width: 93%;\n    }\n    @media (max-width: 375px) {\n      width: 91%;\n    }\n    background-color: #31475D;\n    padding: 10px;\n    border-radius: 5px;\n    border: none;\n    color: var(--white);\n    font-size: 1.25rem;\n    &:focus {\n      outline: none;\n    }\n  }\n"]);return L=function(){return e},e}function k(){var e=Object(h.a)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 10px 0;\n  @media (max-width: 768px) {\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n  }\n"]);return k=function(){return e},e}function T(){var e=Object(h.a)(["\n  border-radius: 8px;\n  background-color: rgba(0, 0, 0, 0.7);\n  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.7);\n"]);return T=function(){return e},e}var M=f.a.div(T()),W=f.a.div(k()),S=f.a.div(L()),I=f.a.div(_());function D(){var e=Object(h.a)(["\n  button {\n    margin-right: 10px;\n    @media (max-width: 320px) {\n      margin-right: 0;\n    }\n  }\n"]);return D=function(){return e},e}function A(){var e=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  .title {\n    font-size: 1.25rem;\n    color: var(--primary);\n    font-weight: 600;\n    margin: 0;\n  }\n  .release-date {\n    font-size: 1.25rem;\n    font-weight: 300;\n    color: var(--primary);\n    margin: 0;\n  }\n"]);return A=function(){return e},e}function V(){var e=Object(h.a)(["\n  img {\n    width: 80%;\n    @media (max-width: 320px) {\n      width: 100%;\n    }\n    height: 100%;\n    border-radius: 10px;\n    margin-right: 15px;\n    display: block;\n  }\n  .filler-poster {\n    width: 172px;\n    @media (max-width: 320px) {\n      width: 100%;\n      height: 330px;\n    }\n    height: 230px;\n    background-color: #dbdada;\n    border-radius: 10px;\n    margin-right: 15px;\n    display: block;\n    color: transparent;\n  }\n"]);return V=function(){return e},e}function F(){var e=Object(h.a)(["\n  display: flex;\n  margin-bottom: 20px;\n  @media (max-width: 320px) {\n    display: flex;\n    flex-direction: column;\n  }\n"]);return F=function(){return e},e}var H=f.a.div(F()),z=f.a.div(V()),R=f.a.div(A()),J=f.a.div(D()),P=function(e){var n=e.movie,t=Object(a.useContext)(u),i=t.addMovieToWatchList,c=t.addMovieToWatched,o=t.watchList,l=t.watched,d=o.find((function(e){return e.id===n.id})),s=l.find((function(e){return e.id===n.id})),m=!!d||!!s,p=!!s;return r.a.createElement(H,{className:"result-card"},r.a.createElement(z,null,n.poster_path?r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w200".concat(n.poster_path),alt:"".concat(n.title," Poster")}):r.a.createElement("div",{className:"filler-poster"})),r.a.createElement(R,null,r.a.createElement("div",{className:"header"},r.a.createElement("h3",{className:"title"},n.title),r.a.createElement("h4",{className:"release-date"},n.release_date?n.release_date.substring(0,4):"--")),r.a.createElement(J,null,r.a.createElement(N,{className:"btn",disabled:m,onClick:function(){return i(n)}},"Add to Watchlist"),r.a.createElement(N,{className:"btn",disabled:p,onClick:function(){return c(n)}},"Add to Watched"))))},q=t(12),B=[{title:"Home",to:"/home",aCName:"active",cName:"nav-links"},{title:"Watchlist",to:"/watchlist",aCName:"active",cName:"nav-links"},{title:"Watched",to:"/watched",aCName:"active",cName:"nav-links"}];function U(){var e=Object(h.a)(["\n  display: flex;\n  align-items: center;\n  padding: 0.5rem;\n\n  .menu-icon {\n    display: none;\n  }\n\n  .nav-menu {\n    padding: 0;\n    margin: 0;\n    text-align: center;\n    list-style: none;\n    display: grid;\n    grid-template-columns: repeat(3, auto);\n    grid-gap: 15px;\n    @media (max-width: 768px) {\n      grid-gap: 35px;\n    }\n    @media (max-width: 375px) {\n      grid-gap: 10px;\n    }\n    @media (max-width: 320px) {\n      grid-gap: 17px;\n    }\n  }\n  \n  .nav-links {\n    color: #ECECEC;\n    font-size: 1.25rem;\n    @media (max-width: 320px) {\n      font-size: 16px;\n    }\n    text-decoration: none;\n    transition: all 0.3s ease;\n    &:hover {\n      opacity: 0.7;\n    }\n  }\n"]);return U=function(){return e},e}var X=f.a.nav(U());function G(){var e=Object(a.useState)(!1),n=Object(o.a)(e,2),t=n[0],i=n[1];return r.a.createElement(X,null,r.a.createElement("div",{className:"menu-icon",onClick:function(){i({clicked:!t})}},r.a.createElement("i",{className:t?"fas fa-times":"fas fa-bars"})),r.a.createElement("ul",{className:t?"nav-menu active":"nav-menu"},B.map((function(e,n){return r.a.createElement("li",{key:n},r.a.createElement(q.b,{activeClassName:e.aCName,to:e.to,className:e.cName},e.title))}))))}var K=function(){var e=Object(a.useState)(""),n=Object(o.a)(e,2),t=n[0],i=n[1],c=Object(a.useState)([]),l=Object(o.a)(c,2),d=l[0],s=l[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(M,null,r.a.createElement(j,null,r.a.createElement(W,null,r.a.createElement(S,null,r.a.createElement("input",{type:"text",placeholder:"Search for a movie",value:t,onChange:function(e){e.preventDefault(),i(e.target.value),fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat("683901bcffa7e1e0093d17ab4aaa5a35","&language=en-US&page=1&include_adult=true&query=").concat(e.target.value)).then((function(e){return e.json()})).then((function(e){e.errors?s([]):s(e.results)}))}})),r.a.createElement(G,null)))),d.length>0&&r.a.createElement(I,null,d.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(P,{movie:e}))}))))},Q=function(e){var n=e.movie,t=e.type,i=Object(a.useContext)(u),c=i.removeMovieFromWatchList,o=i.addMovieToWatched,l=i.moveToWacthList,d=i.removeFromWatched;return r.a.createElement("div",{className:"inner-card-controls"},"watchList"===t&&r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"ctrl-btn",onClick:function(){return o(n)}},r.a.createElement("i",{className:"fa-fw far fa-eye"})),r.a.createElement("button",{className:"ctrl-btn",onClick:function(){return c(n.id)}},r.a.createElement("i",{className:"fa-fw fa fa-times"}))),"watched"===t&&r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"ctrl-btn",onClick:function(){return l(n)}},r.a.createElement("i",{className:"fa-fw far fa-eye-slash"})),r.a.createElement("button",{className:"ctrl-btn",onClick:function(){return d(n.id)}},r.a.createElement("i",{className:"fa-fw fa fa-times"}))))};function Y(){var e=Object(h.a)(["\n  width: 100%;\n  border-radius: 10px;\n  overflow: hidden;\n  position: relative;\n  border: 0;\n  display: block;\n  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.7);\n  img {\n    width: 100%;\n    display: block;\n    border-radius: 10px;\n  }\n  &:hover .overlay {\n    border: 3px solid #4DD3C2;\n    border-radius: 10px;\n  }\n  .overlay {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border: 2px solid transparent;\n    transition: all 0.3s ease;\n  }\n  .inner-card-controls {\n    display: inline;\n    background-color: red;\n    position: absolute;\n    bottom: 20px;\n    left: 50%;\n    transform: translateX(-50%);\n    background: rgba(0, 0, 0, 0.8);\n    border-radius: 5px;\n    padding: 3px;\n    opacity: 0;\n    transition: all 0.3s ease;\n  }\n  &:hover .inner-card-controls {\n    opacity: 1;\n  }\n"]);return Y=function(){return e},e}var Z=f.a.div(Y()),$=function(e){var n=e.movie,t=e.type;return r.a.createElement(Z,null,r.a.createElement("div",{className:"overlay"}),n.poster_path?r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w200".concat(n.poster_path),alt:"".concat(n.title," Poster")}):r.a.createElement("div",{className:"filler-poster"}),r.a.createElement(Q,{movie:n,type:t}))};function ee(){var e=Object(h.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  @media (max-width: 480px) {\n    grid-template-columns: repeat(1, 1fr);\n  }\n  grid-gap: 30px;\n  @media (min-width: 992px) {\n    grid-template-columns: repeat(5, 1fr);\n  }\n"]);return ee=function(){return e},e}function ne(){var e=Object(h.a)(["\n  padding: 30px 0;\n  .header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: 30px;\n  }\n  .heading {\n    margin: 0;\n    @media (max-width: 320px) {\n      font-size: 25px;\n    }\n  }\n  .no-movies {\n    color: #c4c4c4;\n    font-size: 3rem;\n    text-align: center;\n  }\n"]);return ne=function(){return e},e}var te=f.a.div(ne()),ae=f.a.div(ee()),re=function(){var e=Object(a.useContext)(u).watchList;return r.a.createElement(te,null,r.a.createElement(j,null,r.a.createElement("div",{className:"header"},r.a.createElement("h1",{className:"heading"},"My Watchlist"),r.a.createElement("span",{className:"count-pill"},e.length," ",0===e.length?"Movie":"Movies")),e.length>0?r.a.createElement(ae,{className:"movie-grid"},e.map((function(e){return r.a.createElement($,{movie:e,type:"watchList"})}))):r.a.createElement("h2",{className:"no-movies"},"No movies in your list")))},ie=function(){var e=Object(a.useContext)(u).watched;return r.a.createElement(te,null,r.a.createElement(j,null,r.a.createElement("div",{className:"header"},r.a.createElement("h1",{className:"heading"},"Watched movies"),r.a.createElement("span",{className:"count-pill"},e.length," ",0===e.length?"Movie":"Movies")),e.length>0?r.a.createElement(ae,null,e.map((function(e){return r.a.createElement($,{movie:e,type:"watched"})}))):r.a.createElement("h2",{className:"no-movies"},"No movies in your list")))},ce=function(){return r.a.createElement("div",null,r.a.createElement(te,null,r.a.createElement(j,null,r.a.createElement("div",{className:"header"},r.a.createElement("h1",{className:"heading"})))))};var oe=function(){return r.a.createElement(p,null,r.a.createElement(O,null,r.a.createElement(y,null,r.a.createElement(K,null)),r.a.createElement(C.c,null,r.a.createElement(C.a,{path:"/home",exact:!0,component:ce}),r.a.createElement(C.a,{path:"/watchlist",component:re}),r.a.createElement(C.a,{path:"/watched",component:ie}))))};c.a.render(r.a.createElement(q.a,null,r.a.createElement(oe,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.36eec063.chunk.js.map