(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{202:function(e,t,n){},204:function(e,t,n){},205:function(e,t,n){},207:function(e,t,n){},357:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(66),c=n.n(o),s=(n(202),n(26)),i=n.n(s),l=n(51),u=n(23),d=n(31),h=n(24),f=n(25),p=(n(204),n(205),n(358)),m=n(362),v=n(363),b=n(186),j=n(187),g=n(78),w=n(192),O=n(190),x=n(3),y=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={collapsed:!0},e.handleClick=function(){e.setState({collapsed:!e.state.collapsed})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.event,t=this.state.collapsed;return Object(x.jsxs)("div",{className:"event",children:[Object(x.jsx)("h2",{className:"summary",children:e.summary}),Object(x.jsx)("p",{className:"start-date",children:e.start.dateTime}),Object(x.jsx)("p",{className:"end-date",children:e.end.dateTime}),Object(x.jsx)("p",{className:"location",children:e.location}),Object(x.jsx)(O.a,{variant:"outline-info",className:"".concat(t?"show":"hide","-details-btn"),onClick:this.handleClick,children:t?"Show Details":"Hide Details"}),!t&&Object(x.jsxs)("div",{className:"extra-details",children:[Object(x.jsx)("h2",{className:"details-header",children:"About event:"}),Object(x.jsx)("a",{href:e.htmlLink,className:"details-link",rel:"noreferrer",target:"_blank",children:"See details on Google Calendar"}),Object(x.jsx)("p",{className:"event-description",children:e.description})]})]})}}]),n}(r.Component),k=y,S=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(x.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(x.jsx)("li",{children:Object(x.jsx)(k,{event:e})},e.id)}))})}}]),n}(r.Component),T=S,N=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).getStyle=function(){return{color:r.color}},r.color=null,r}return Object(d.a)(n,[{key:"render",value:function(){return Object(x.jsx)("div",{className:"Alert",children:Object(x.jsx)("p",{style:this.getStyle(),className:"error-text",children:this.props.text})})}}]),n}(r.Component),C=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).getStyle=function(){return{color:r.color,position:"relative",bottom:"20px",right:"60px"}},r.color="blue",r}return n}(N),E=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).getStyle=function(){return{color:r.color,position:"absolute",bottom:"-115px"}},r.color="red",r}return n}(N),W=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).color="orange",r}return n}(N),Z=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={query:"",suggestions:[],showSuggestions:void 0},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var r=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==r.length)return e.setState({query:n,suggestions:r,infoText:"",showSuggestions:!1});e.setState({query:n,infoText:"We can not find the city you are looking for. Please try another city."})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1,infoText:""}),e.props.updateEvents(t)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(x.jsxs)("div",{className:"CitySearch",children:[Object(x.jsx)(C,{text:this.state.infoText}),Object(x.jsx)("h4",{className:"SelectCity",children:"Select for  a City"}),Object(x.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(x.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(x.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(x.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(x.jsx)("b",{children:"See all cities"})})]})]})}}]),n}(r.Component),L=Z,A=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(x.jsxs)("div",{className:"NumberOfEvents",children:[Object(x.jsx)(E,{text:this.props.errorText}),Object(x.jsx)("p",{children:"Number of events"}),Object(x.jsx)("input",{type:"number",className:"newNumber",value:this.props.numberOfEvents,onChange:function(t){return e.props.updateNumberOfEvents(t)}})]})}}]),n}(r.Component),I=A;n(207);var q=function(e){return e.showWelcomeScreen?Object(x.jsxs)("div",{className:"WelcomeScreen",children:[Object(x.jsx)("h1",{children:"Welcome to the Meet app"}),Object(x.jsx)("h4",{children:"Log in to see upcoming events around the world for full-stack developers"}),Object(x.jsx)("div",{className:"button_cont",align:"center",children:Object(x.jsxs)("div",{class:"google-btn",children:[Object(x.jsx)("div",{class:"google-icon-wrapper",children:Object(x.jsx)("img",{class:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"Google sign-in"})}),Object(x.jsx)("button",{onClick:function(){e.getAccessToken()},rel:"nofollow noopener",class:"btn-text",children:Object(x.jsx)("b",{children:"Sign in with google"})})]})}),Object(x.jsx)("a",{href:"https://FotisGogos.github.io/meet/privacy.html",rel:"nofollow noopener",children:"Privacy policy"})]}):null},J=n(17),D=n(365),M=n(181),R=n(95),U=function(e){var t=e.events,n=Object(r.useState)([]),a=Object(J.a)(n,2),o=a[0],c=a[1];Object(r.useEffect)((function(){c((function(){return s()}))}),[t]);var s=function(){return["React","JavaScript","Node","jQuery","AngularJS"].map((function(e){var n=t.filter((function(t){return t.summary.split(" ").includes(e)})).length;return{name:e,value:n}}))},i=["#00a1fe","#00c46c","#ffc928","#f56464"];return Object(x.jsx)(p.a,{height:400,children:Object(x.jsx)(D.a,{width:400,height:400,children:Object(x.jsx)(M.a,{data:o,cx:200,cy:200,labelLine:!1,outerRadius:80,label:function(e){var t=e.name,n=e.percent;return"".concat(t," ").concat((100*n).toFixed(0),"%")},children:o.map((function(e,t){return Object(x.jsx)(R.a,{fill:i[t]},"cell-".concat(t))}))})})})},B=n(191),F=JSON.parse(JSON.stringify([{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}])),_=n(121),G=n.n(_),P=n(77),z=n.n(P),H=function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://qrgw0n6hx1.execute-api.eu-central-1.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return r=e.sent,(a=r.access_token)&&localStorage.setItem("access_token",a),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},K=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,r,a,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(z.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return z.a.done(),e.abrupt("return",F);case 4:if(navigator.onLine){e.next=9;break}return t=localStorage.getItem("lastEvents"),z.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 9:return e.next=11,X();case 11:if(!(n=e.sent)){e.next=21;break}return V(),r=" https://qrgw0n6hx1.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/"+n,e.next=17,G.a.get(r);case 17:return(a=e.sent).data&&(o=Q(a.data.events),localStorage.setItem("lastEvents",JSON.stringify(a.data)),localStorage.setItem("locations",JSON.stringify(o))),z.a.done(),e.abrupt("return",a.data.events);case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),X=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,r,a,o,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,H(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return r=new URLSearchParams(window.location.search),e.next=13,r.get("code");case 13:if(a=e.sent){e.next=20;break}return e.next=17,G.a.get("https://qrgw0n6hx1.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,c=o.data.authUrl,e.abrupt("return",window.location.href=c);case 20:return e.abrupt("return",a&&Y(a));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Q=function(e){var t=e.map((function(e){return e.location}));return Object(B.a)(new Set(t))},$=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={events:[],locations:[],showWelcomeScreen:void 0,numberOfEvents:32,currentLocation:"all",errorText:"",warningText:""},e.updateEvents=function(t,n){K(n).then((function(n){var r=("all"===t?n:n.filter((function(e){return e.location===t}))).slice(0,e.state.numberOfEvents);e.mounted&&e.setState({events:r,currentLocation:t})}))},e.updateNumberOfEvents=function(t){var n=t.target.value;n>32?e.setState({numberOfEvents:32,errorText:"Please select a number from 1 to 32"}):e.setState({numberOfEvents:n,errorText:""});var r=e.state.currentLocation;e.updateEvents(r,t)},e.getData=function(){var t=e.state,n=t.locations,r=t.events;return n.map((function(e){var t=r.filter((function(t){return t.location===e})).length;return{city:e.split(", ").shift(),number:t}}))},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,r,a,o=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.mounted=!0,t=localStorage.getItem("access_token"),e.next=4,H(t);case 4:if(!e.sent.error){e.next=8;break}e.t0=!1,e.next=9;break;case 8:e.t0=!0;case 9:n=e.t0,r=new URLSearchParams(window.location.search),a=r.get("code"),this.setState({showWelcomeScreen:!(a||n)}),(a||n)&&this.mounted&&K().then((function(e){o.mounted&&o.setState({events:e,locations:Q(e)})}));case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return void 0===this.state.showWelcomeScreen?Object(x.jsx)("div",{className:"App"}):Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)("div",{children:navigator.onLine?Object(x.jsx)(W,{text:" "}):Object(x.jsx)(W,{text:"You are offline!"})}),Object(x.jsx)(L,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(x.jsxs)("div",{className:"data-vis-wrapper",children:[Object(x.jsx)(U,{events:this.state.events}),Object(x.jsx)(p.a,{height:400,children:Object(x.jsxs)(m.a,{margin:{top:20,right:20,bottom:20,left:20},children:[Object(x.jsx)(v.a,{strokeDasharray:"3 3"}),Object(x.jsx)(b.a,{type:"category",dataKey:"city",name:"city"}),Object(x.jsx)(j.a,{type:"number",dataKey:"number",name:"events"}),Object(x.jsx)(g.a,{cursor:{strokeDasharray:"3 3"}}),Object(x.jsx)(w.a,{data:this.getData(),fill:"#8884d8"})]})})]}),Object(x.jsx)(T,{events:this.state.events}),Object(x.jsx)(I,{numberOfEvents:this.state.numberOfEvents,updateNumberOfEvents:this.updateNumberOfEvents,errorText:this.state.errorText}),Object(x.jsx)(q,{showWelcomeScreen:this.state.showWelcomeScreen,getAccessToken:function(){X()}})]})}}]),n}(r.Component),ee=$,te=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ne(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var re=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,366)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),o(e),c(e)}))};n(188).config("48f0c6b01391435988e8badbff761355").install(),c.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(ee,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");te?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ne(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):ne(t,e)}))}}(),re()}},[[357,1,2]]]);
//# sourceMappingURL=main.37aa2607.chunk.js.map