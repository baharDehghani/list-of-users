(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a.p+"static/media/woman-avatar-dark.d004c01f.png"},24:function(e,t,a){},26:function(e,t,a){},31:function(e,t,a){e.exports=a(46)},36:function(e,t,a){},37:function(e,t,a){},42:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(18),s=a.n(r),c=(a(36),a(2)),i=a(3),u=a(5),o=a(4),m=a(6),d=(a(37),a(15)),E=a(12),p=(a(24),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(o.a)(t).call(this,e))).state={scrollDown:!0},a.onScroll=a.onScroll.bind(Object(d.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("scroll",function(){var t=window.scrollY<5;t!==e.state.scrollDown&&e.onScroll(t)})}},{key:"onScroll",value:function(e){this.setState({scrollDown:e})}},{key:"render",value:function(){var e="";return this.state.scrollDown?e-="down":e+="down",l.a.createElement("header",{className:e},l.a.createElement("div",{className:"wrap"},l.a.createElement("div",null,l.a.createElement("label",{for:"search"},l.a.createElement("i",{class:"fas fa-search"})),l.a.createElement("input",{id:"search",type:"text",placeholder:"search"})),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(E.b,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(E.b,{to:"/addUser"},"Add user")))))}}]),t}(l.a.Component)),f=(a(42),a(13)),h=a(16),b=a.n(h),v=(a(26),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(o.a)(t).call(this))).state={data:null},e.deleteUser(),e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){localStorage.getItem("users")&&this.setState({data:JSON.parse(localStorage.getItem("users"))})}},{key:"componentDidMount",value:function(){localStorage.getItem("users")?console.log("local storage"):this.setStorage()}},{key:"setStorage",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){localStorage.setItem("users",JSON.stringify(t)),e.setState({data:JSON.parse(localStorage.getItem("users"))})})}},{key:"componentWillUpdate",value:function(e,t){localStorage.setItem("users",JSON.stringify(t.data))}},{key:"deleteUser",value:function(e){if(null!=this.state.data){var t=Object(f.a)(this.state.data).filter(function(t){return t.id!=e});this.setState({data:t})}}},{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"list"},l.a.createElement("div",{className:"wrap"},this.state.data?this.state.data.map(function(t){return l.a.createElement("div",{className:"userBox",key:t.id},l.a.createElement("figure",null,l.a.createElement("img",{src:b.a}),l.a.createElement("figcaption",null,l.a.createElement("div",{className:"userInfo"},l.a.createElement("p",null,t.name),l.a.createElement("p",null,t.username),l.a.createElement("p",null,t.email),l.a.createElement("p",null,t.website)))),l.a.createElement("div",{className:"btns"},l.a.createElement("span",{className:"seeMore"},l.a.createElement(E.b,{to:"/detail/".concat(t.id)},l.a.createElement("i",{class:"fas fa-external-link-alt"})," More")),l.a.createElement("span",{value:t.id,className:"delete",onClick:function(a){return window.confirm("Are you sure you want to delete this user?")&&e.deleteUser(t.id)}},l.a.createElement("i",{class:"fas fa-user-times"}),"delete")))}):l.a.createElement("h3",null,"loading..."))))}}]),t}(n.Component)),y=a(7),w=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(o.a)(t).call(this))).renderRedirect=function(){if(e.state.redirect)return l.a.createElement(y.a,{to:"/"})},e.state={user:null,list:JSON.parse(localStorage.getItem("users")),redirectState:!1},e.deleteUser(),e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;console.log(e);var t=this.state.list.find(function(t){return t.id==e});this.setState({user:t}),console.log(this.state.user)}},{key:"deleteUser",value:function(e){Object(f.a)(this.state.list);var t=this.state.list.filter(function(t){return t.id!=e});this.setState({list:t,redirectState:!0})}},{key:"componentWillUpdate",value:function(e,t){localStorage.setItem("users",JSON.stringify(t.list))}},{key:"render",value:function(){var e=this,t=(this.props.location.state||"/").from,a=this.state.redirectState;return l.a.createElement("main",null,l.a.createElement("div",{className:"wrap"},this.state.user?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"summery"},l.a.createElement("figure",null,l.a.createElement("img",{src:b.a})),l.a.createElement("div",{className:"suumery-info"},l.a.createElement("h1",null,this.state.user.name),l.a.createElement("p",null,this.state.user.username," "),l.a.createElement("p",null,l.a.createElement("i",{class:"far fa-envelope"})," ",this.state.user.email),l.a.createElement("p",null,l.a.createElement("i",{class:"fas fa-phone-alt"})," ",this.state.user.phone),l.a.createElement("span",{onClick:function(t){return window.confirm("Are you sure you want to delete this user?")&&e.deleteUser(e.state.user.id)}},l.a.createElement("span",null,"delete user"))),a&&l.a.createElement(y.a,{to:t})),l.a.createElement("div",{className:"details"},l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"id"),l.a.createElement("td",null,this.state.user.id)),l.a.createElement("tr",null,l.a.createElement("td",null,"street"),l.a.createElement("td",null,this.state.user.address.street)),l.a.createElement("tr",null,l.a.createElement("td",null,"suite"),l.a.createElement("td",null,this.state.user.address.suite)),l.a.createElement("tr",null,l.a.createElement("td",null,"city"),l.a.createElement("td",null,this.state.user.address.city)),l.a.createElement("tr",null,l.a.createElement("td",null,"zip code"),l.a.createElement("td",null,this.state.user.address.zipcode)),l.a.createElement("tr",null,l.a.createElement("td",null,"website"),l.a.createElement("td",null,this.state.user.website)),l.a.createElement("tr",null,l.a.createElement("td",null,"company Name"),l.a.createElement("td",null,this.state.user.company.name)),l.a.createElement("tr",null,l.a.createElement("td",null,"company catchPhrase"),l.a.createElement("td",null,this.state.user.company.catchPhrase)),l.a.createElement("tr",null,l.a.createElement("td",null,"company business"),l.a.createElement("td",null,this.state.user.company.bs)))))):l.a.createElement("h3",null,"not found")))}}]),t}(n.Component),O=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"footer"},l.a.createElement("div",{class:"wrap"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"about us")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"contact")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"HiroKet"))),l.a.createElement("p",null,"powered by HiroKet"))))}}]),t}(n.Component),g=a(30),j=a.n(g),S=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(j.a,null,l.a.createElement("title",null,"User List"),l.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}))}}]),t}(l.a.Component),N=a(21),k=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(o.a)(t).call(this))).state={newUser:"",newlist:JSON.parse(localStorage.getItem("users")),redirectState:!1},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"addUser",value:function(e){e.preventDefault();var t=Object(f.a)(this.state.newlist),a={id:10+Math.floor(100*Math.random()),name:this.refs.uName.value,username:this.refs.uUsername.value,email:this.refs.uEmail.value,website:this.refs.uWebsite.value,phone:this.refs.uPhone.value,address:{street:this.refs.uStreet.value,suite:this.refs.uSuite.value,city:this.refs.uCity.value,zipcode:this.refs.uZipcode.value},company:{name:this.refs.cName.value,catchPhrase:this.refs.cPhrase.value,bs:this.refs.cBusiness.value}};t.push(a),this.setState({newUser:"",newlist:t,redirectState:!0}),console.log(t),alert("registration completed ")}},{key:"componentWillUpdate",value:function(e,t){localStorage.setItem("users",JSON.stringify(t.newlist))}},{key:"render",value:function(){var e,t=this,a=(this.props.location.state||"/").from,n=this.state.redirectState;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"wrap"},l.a.createElement("div",{className:"form"},l.a.createElement("h1",null,"register new user"),l.a.createElement("p",null,"Please provide all required details to register new user"),l.a.createElement("form",{className:"form-content",onSubmit:function(e){t.addUser(e)}},l.a.createElement("h3",{className:"title"},"personal info:"),l.a.createElement("div",{className:"row"},l.a.createElement("span",null,l.a.createElement("input",{id:"name",ref:"uName",required:!0}),l.a.createElement("label",{for:"name"},"Name *")),l.a.createElement("span",null,l.a.createElement("input",{id:"username",ref:"uUsername",required:!0}),l.a.createElement("label",{for:"username"},"username *"))),l.a.createElement("h3",{className:"title"},"contact info:"),l.a.createElement("div",{className:"row"},l.a.createElement("span",null,l.a.createElement("input",(e={ref:"email",type:"email"},Object(N.a)(e,"ref","uEmail"),Object(N.a)(e,"required",!0),e)),l.a.createElement("label",{for:"email"},"email *")),l.a.createElement("span",null,l.a.createElement("input",{id:"website",ref:"uWebsite"}),l.a.createElement("label",{for:"website"},"website ")),l.a.createElement("span",null,l.a.createElement("input",{id:"phone",type:"tel",ref:"uPhone",required:!0}),l.a.createElement("label",{for:"phone"},"phone *"))),l.a.createElement("h3",{className:"title"},"address :"),l.a.createElement("div",{className:"row"},l.a.createElement("span",null,l.a.createElement("input",{id:"street",ref:"uStreet"}),l.a.createElement("label",{for:"street"},"street ")),l.a.createElement("span",null,l.a.createElement("input",{id:"suite",ref:"uSuite"}),l.a.createElement("label",{for:"suite"},"suite ")),l.a.createElement("span",null,l.a.createElement("input",{id:"city",ref:"uCity"}),l.a.createElement("label",{for:"city"},"city ")),l.a.createElement("span",null,l.a.createElement("input",{id:"zipcode",ref:"uZipcode"}),l.a.createElement("label",{for:"zipcode"},"zipcode "))),l.a.createElement("h3",{className:"title"},"company info:"),l.a.createElement("div",{className:"row"},l.a.createElement("span",null,l.a.createElement("input",{id:"company-name",ref:"cName",required:!0}),l.a.createElement("label",{for:"company-name"},"company name *")),l.a.createElement("span",null,l.a.createElement("input",{id:"company-phrase",ref:"cPhrase"}),l.a.createElement("label",{for:"company-phrase"},"company phrase ")),l.a.createElement("span",null,l.a.createElement("input",{id:"company-bs",ref:"cBusiness"}),l.a.createElement("label",{for:"company-bs"},"company-business "))),l.a.createElement("div",{className:"row buttons"},l.a.createElement("input",{type:"submit"}),l.a.createElement("input",{type:"reset"}))),n&&l.a.createElement(y.a,{to:a}))))}}]),t}(l.a.Component),U=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(S,null),l.a.createElement(E.a,null,l.a.createElement(p,null),l.a.createElement(y.b,{exact:!0,path:"/",component:v}),l.a.createElement(y.b,{path:"/detail/:id",component:w}),l.a.createElement(y.b,{path:"/addUser",component:k})),l.a.createElement(O,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.22ecdbc7.chunk.js.map