(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/logo.0c089234.svg"},23:function(e,t,a){e.exports=a(57)},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(13),i=a.n(r),s=(a(28),a(2)),l=a(14),o=a(15),u=a(16),d=a(21),h=a(17),p=a(22),m=(a(29),a(18)),f=a.n(m),k=(a(30),function(e){var t=e.label,a=e.checked,n=e.disabled,r=e.value,i=e.onChange;return c.a.createElement("label",{className:"checkbox"},c.a.createElement("input",{className:"visually-hidden checkbox__input",type:"checkbox",value:r,checked:a,disabled:n,onChange:function(){i(r)}}),c.a.createElement("span",{className:"checkbox__box"}),t)}),g=(a(31),function(e){var t=e.color,a=void 0===t?"#2196F3":t;return c.a.createElement("svg",{className:"loader",width:"57",height:"57",viewBox:"0 0 57 57",xmlns:"http://www.w3.org/2000/svg",stroke:a},c.a.createElement("g",{fill:"none",fillRule:"evenodd"},c.a.createElement("g",{transform:"translate(1 1)",strokeWidth:"2"},c.a.createElement("circle",{cx:"5",cy:"50",r:"5"},c.a.createElement("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",values:"50;5;50;50",calcMode:"linear",repeatCount:"indefinite"}),c.a.createElement("animate",{attributeName:"cx",begin:"0s",dur:"2.2s",values:"5;27;49;5",calcMode:"linear",repeatCount:"indefinite"})),c.a.createElement("circle",{cx:"27",cy:"5",r:"5"},c.a.createElement("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",from:"5",to:"5",values:"5;50;50;5",calcMode:"linear",repeatCount:"indefinite"}),c.a.createElement("animate",{attributeName:"cx",begin:"0s",dur:"2.2s",from:"27",to:"27",values:"27;49;5;27",calcMode:"linear",repeatCount:"indefinite"})),c.a.createElement("circle",{cx:"49",cy:"50",r:"5"},c.a.createElement("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",values:"50;50;5;50",calcMode:"linear",repeatCount:"indefinite"}),c.a.createElement("animate",{attributeName:"cx",from:"49",to:"49",begin:"0s",dur:"2.2s",values:"49;5;27;49",calcMode:"linear",repeatCount:"indefinite"})))))}),v=(a(32),function(e){var t=e.label,a=e.checked,n=e.disabled,r=e.value,i=e.name,s=e.onChange;return c.a.createElement("label",{className:"switch-button text-uppercase font-weight-600"},c.a.createElement("input",{className:"visually-hidden switch-button__input",type:"radio",name:i,value:r,checked:a,disabled:n,onChange:function(){s(r)}}),c.a.createElement("div",{className:"switch-button__button"},t))}),E=a(20),b=(a(33),function(e){return e.length?1===e.length?"1 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0430":e.length>1&&e.length<5?"".concat(e.length," \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438"):"".concat(e.length," \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a"):"\u0411\u0435\u0437 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a"}),y=function(e){return e.length?e.join(", "):"\u2013"},T=function(e){var t=e/60,a=Math.floor(t),n=60*(t-a),c=Math.round(n);return"".concat(a,"\u0447 ").concat(c,"\u043c")},w=function(e,t){var a=new Date(e).toTimeString().split(" ")[0].split(":").splice(0,2).join(":"),n=new Date(e+t).toTimeString().split(" ")[0].split(":").splice(0,2).join(":");return"".concat(a," \u2013 ").concat(n)},N=function(e,t){return e.filter((function(e){return e.segments.every((function(e){return e.stops.length===t}))}))},S=function(e){var t=e.price,a=e.carrier,n=e.segments,r=Object(E.a)(n,2),i=r[0],s=r[1];return c.a.createElement("div",{className:"ticket card"},c.a.createElement("div",{className:"ticket__header"},c.a.createElement("p",{className:"ticket__price color-blue font-weight-600"},t.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")," \u0420"),c.a.createElement("img",{src:"http://pics.avs.io/99/36/".concat(a,"@2x.png"),loading:"lazy",width:"110","aria-hidden":"true",alt:""})),c.a.createElement("table",{className:"ticket__table"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{className:"text-uppercase color-gray"},i.destination," - ",i.origin),c.a.createElement("th",{className:"text-uppercase color-gray"},"\u0412 \u043f\u0443\u0442\u0438"),c.a.createElement("th",{className:"text-uppercase color-gray"},b(i.stops)))),c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",{className:"font-weight-600"},w(Date.parse(i.date),60*i.duration*1e3)),c.a.createElement("td",{className:"font-weight-600"},T(i.duration)),c.a.createElement("td",{className:"font-weight-600"},y(i.stops))))),c.a.createElement("table",{className:"ticket__table"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{className:"text-uppercase color-gray"},s.origin," - ",s.destination),c.a.createElement("th",{className:"text-uppercase color-gray"},"\u0412 \u043f\u0443\u0442\u0438"),c.a.createElement("th",{className:"text-uppercase color-gray"},b(s.stops)))),c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",{className:"font-weight-600"},w(Date.parse(s.date),60*s.duration*1e3)),c.a.createElement("td",{className:"font-weight-600"},T(s.duration)),c.a.createElement("td",{className:"font-weight-600"},y(s.stops))))))},F=(a(34),function(e){var t=e.text,a=e.buttonText,n=e.onClick;return c.a.createElement("div",{className:"tickets-message-template card"},c.a.createElement("p",{className:"tickets-message-template__text"},t),c.a.createElement("button",{className:"tickets-message-template__button text-uppercase font-weight-600",type:"button",onClick:function(){n()}},a))}),x=function(e){var t=e.checkboxes,a=e.onChangeStops,n=function(e){a(e)};return c.a.createElement(_,{title:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a"},t.map((function(e){var t=e.label,a=e.checked,r=e.value,i=e.disabled;return c.a.createElement(k,{key:r,value:r,label:t,checked:a,disabled:i,onChange:n})})))},_=(a(35),function(e){var t=e.title,a=e.children;return c.a.createElement("fieldset",{className:"filter-wrapper"},c.a.createElement("legend",{className:"filter-wrapper__legend text-uppercase font-weight-600"},t),a)}),O=(a(36),function(e){var t=e.switchButtons,a=e.onChangeType,n=function(e){a(e)};return c.a.createElement(C,{a11yLegend:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a"},c.a.createElement("div",{className:"switch-ticket-types"},t.map((function(e){var t=e.label,a=e.checked,r=e.value,i=e.name,s=e.disabled;return c.a.createElement(v,{key:r,name:i,value:r,label:t,checked:a,disabled:s,onChange:n})}))))}),C=function(e){var t=e.a11yLegend,a=e.children;return c.a.createElement("fieldset",{className:"switch-wrapper"},c.a.createElement("legend",{className:"visually-hidden"},t),a)},j=(a(37),function(e){return function(e){var t=e.tickets,a=e.isLoading,n=e.isError,r=e.allTicketsLength,i=e.onClearFilters,s=e.onRepeatSearch;return a?c.a.createElement("div",{className:"tickets-list tickets-list--loading card"},c.a.createElement(g,null)):t.length?n?c.a.createElement(F,{text:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u0438\u0441\u043a",buttonText:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c \u043f\u043e\u0438\u0441\u043a",onClick:function(){s()}}):c.a.createElement("ul",{className:"tickets-list"},t.slice(0,5).map((function(e,t){var a=e.price,n=e.carrier,r=e.segments;return c.a.createElement("li",{className:"tickets-list__item",key:"".concat(t,"-").concat(n)},c.a.createElement(S,{price:a,carrier:n,segments:r}))}))):c.a.createElement(F,{text:"\u041c\u044b \u043d\u0430\u0448\u043b\u0438 ".concat(r," \u0440\u0435\u0439\u0441\u043e\u0432, \u043d\u043e \u043d\u0438 \u043e\u0434\u0438\u043d \u043d\u0435 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u043c \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u043c."),buttonText:"\u0420\u0430\u0441\u0441\u043b\u0430\u0431\u0438\u0442\u044c \u0444\u0438\u043b\u044c\u0442\u0440\u044b",onClick:function(){i()}})}(e)}),L=a(3),B=a.n(L),I=a(19);a.n(I)()(B.a,{retries:3});var D,M;!function(e){e.All="all",e.Empty="withoutStops",e.One="1stop",e.Two="2stops",e.Three="3stops"}(D||(D={})),function(e){e.Cheap="cheap",e.Fast="fast"}(M||(M={}));var W=[{label:"\u0412\u0441\u0435",value:D.All,checked:!0},{label:"\u0411\u0435\u0437 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a",value:D.Empty,checked:!0},{label:"1 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0430",value:D.One,checked:!0},{label:"2 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438",value:D.Two,checked:!0},{label:"3 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438",value:D.Three,checked:!0}],A=[{label:"\u0421\u0430\u043c\u044b\u0439 \u0434\u0435\u0448\u0435\u0432\u044b\u0439",value:M.Cheap,name:"type",checked:!0},{label:"\u0421\u0430\u043c\u044b\u0439 \u0431\u044b\u0441\u0442\u0440\u044b\u0439",value:M.Fast,name:"type",checked:!1}];function P(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function R(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?P(a,!0).forEach((function(t){Object(l.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):P(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var J=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).setStopFilters=function(e){if(e===D.All){var t=a.state.stopFilters.every((function(e){return e.checked})),n=a.state.stopFilters.map((function(e){return R({},e,{checked:!t})}));a.setState((function(){return{stopFilters:n}}),(function(){return a.updateTicketsByStopsFilter(a.state.stopFilters)}))}else{var c=a.state.stopFilters.map((function(t){return R({},t,{checked:t.value===e?!t.checked:t.checked})}));a.setState((function(){return{stopFilters:c}}),(function(){return a.updateTicketsByStopsFilter(a.state.stopFilters)})),a.selectDeselectAllStopsFilters(c)}},a.setTypeFilters=function(e){var t=a.state.typeFilters.map((function(t){return R({},t,{checked:t.value===e})}));a.setState((function(){return{typeFilters:t}}),(function(){return a.updateTicketsByTypesFilter(a.state.typeFilters)}))},a.repeatLastSearch=function(){a.setState({isTicketsError:!1,isTicketsLoading:!0}),a.getTicketsWithSearchId(a.state.searchId)},a.clearFilters=function(){a.setState((function(e){return{stopFilters:W,filteredTickets:e.tickets}}))},a.state={searchId:"",isTicketsLoading:!1,isTicketsError:!1,stopFilters:W,typeFilters:A,tickets:[],filteredTickets:[]},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getTicketsWithoutSearchId()}},{key:"getTicketsWithoutSearchId",value:function(){var e=this;this.setState({isTicketsLoading:!0}),B.a.get("https://front-test.beta.aviasales.ru/search").then((function(e){return e.data})).then((function(t){var a=t.searchId;e.setState({searchId:a}),e.getTicketsWithSearchId(a)})).catch((function(t){e.setTicketsLoadError(t)}))}},{key:"getTicketsWithSearchId",value:function(e){var t=this;(function(e){return B.a.get("https://front-test.beta.aviasales.ru/tickets?searchId=".concat(e)).then((function(e){return e.data}))})(e).then((function(a){var n=a.tickets;a.stop?t.setState((function(e){return{tickets:[].concat(Object(s.a)(e.tickets),Object(s.a)(n)),isTicketsLoading:!1}}),(function(){return t.updateTicketsByStopsFilter(t.state.stopFilters)})):(t.setState((function(){return{tickets:[].concat(Object(s.a)(t.state.tickets),Object(s.a)(n))}})),t.getTicketsWithSearchId(e))})).catch((function(e){t.setTicketsLoadError(e)}))}},{key:"setTicketsLoadError",value:function(e){console.error(e),this.setState({isTicketsError:!0,isTicketsLoading:!1})}},{key:"selectDeselectAllStopsFilters",value:function(e){var t=e.findIndex((function(e){return e.value===D.All})),a=e.every((function(e,a){return e.checked&&t!==a}));e[t].checked=a,this.setState({stopFilters:e})}},{key:"updateTicketsByStopsFilter",value:function(e){var t=this,a=[];e.forEach((function(e){var n=e.checked,c=e.value;n&&(a=c===D.All?t.state.tickets:[].concat(Object(s.a)(a),Object(s.a)(t.handleChangeStop(c))))})),this.setState((function(){return{filteredTickets:a}}),(function(){return t.updateTicketsByTypesFilter(t.state.typeFilters)}))}},{key:"updateTicketsByTypesFilter",value:function(e){var t=this;e.forEach((function(e){var a=e.checked,n=e.value;a&&t.handleChangeType(n)}))}},{key:"handleChangeStop",value:function(e){switch(e){case D.Empty:return N(this.state.tickets,0);case D.One:return N(this.state.tickets,1);case D.Two:return N(this.state.tickets,2);case D.Three:return N(this.state.tickets,3);default:return[]}}},{key:"handleChangeType",value:function(e){switch(e){case M.Cheap:var t=this.state.filteredTickets.sort((function(e,t){return e.price-t.price}));this.setState((function(){return{filteredTickets:t}}));break;case M.Fast:var a=function(e){return e.sort((function(e,t){return e.segments.reduce((function(e,t){return e+t.duration}),0)-t.segments.reduce((function(e,t){return e+t.duration}),0)}))}(this.state.filteredTickets);this.setState((function(){return{filteredTickets:a}}))}}},{key:"render",value:function(){return c.a.createElement("main",{className:"app"},c.a.createElement("div",{className:"app__header"},c.a.createElement("img",{src:f.a,alt:"Logo of Aviasales"})),c.a.createElement("div",{className:"app__content"},c.a.createElement("aside",{className:"app__aside card"},c.a.createElement(x,{checkboxes:this.state.stopFilters,onChangeStops:this.setStopFilters})),c.a.createElement("section",{className:"app__section"},c.a.createElement(O,{switchButtons:this.state.typeFilters,onChangeType:this.setTypeFilters}),c.a.createElement(j,{allTicketsLength:this.state.tickets.length,isLoading:this.state.isTicketsLoading,isError:this.state.isTicketsError,tickets:this.state.filteredTickets,onClearFilters:this.clearFilters,onRepeatSearch:this.repeatLastSearch}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.c0ab14d7.chunk.js.map