(this["webpackJsonpsocial-media"]=this["webpackJsonpsocial-media"]||[]).push([[0],{25:function(e,t,n){e.exports=n(38)},30:function(e,t,n){},31:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},32:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(23),s=n.n(o),u=(n(30),n(8)),r=n(13),l=n(14),c=n(17),m=n(15),d=(n(31),n(32),Object(a.createContext)()),p=function(e){var t=Object(a.useContext)(d),n=Object(a.useContext)(d).DeletePostHandler,o=Object(a.useContext)(d).DeleteCommentHandler,s="";return 1==e.userId&&(s=i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("strong",null,"Comments")),i.a.createElement("button",{onClick:function(){console.log(e.id),n(e.id)}},"Delete Post"))),i.a.createElement("div",null,t.sample,e.comments.map((function(t){return i.a.createElement("div",null,t.title,1==t.userId?i.a.createElement("button",{onClick:function(){return o(e.id,t.id)}},"Delete Comment"):"")})),s)},v=n(16),b=function(e){var t=Object(a.useState)(""),n=Object(v.a)(t,2),o=n[0],s=n[1],u=Object(a.useContext)(d).AddCommentHandler;return i.a.createElement("div",null,e.comments,i.a.createElement("div",null,i.a.createElement("strong",null,"Comments")),i.a.createElement("div",null,i.a.createElement("input",{name:"comment",placeholder:"Add a new comment",onChange:function(e){return s(e.target.value)}})),i.a.createElement("button",{onClick:function(){u(e.id,o)}}," Add Comment"))},f=function(e){return i.a.createElement("div",null,i.a.createElement("h4",null,e.title),i.a.createElement("p",null,e.body),i.a.createElement(p,{comments:e.comments,DeletePostHandler:e.DeletePostHandler,id:e.id,userId:e.userId,DeleteCommentHandler:e.DeleteCommentHandler}),i.a.createElement(b,{AddCommentHandler:e.AddCommentHandler,id:e.id}))},h=function(e){var t=Object(a.useState)(""),n=Object(v.a)(t,2),o=n[0],s=n[1],u=Object(a.useContext)(d).AddPostHandler;return i.a.createElement("div",null,i.a.createElement("span",null,i.a.createElement("input",{type:"text",onChange:function(e){return s(e.target.value)},value:o})),i.a.createElement("button",{onClick:u},"POST"))},E=n(6),P=n(7),q=n(1),C=function(e){var t=Object(a.useContext)(d).previousPosts;return i.a.createElement("div",null,t.map((function(e){return i.a.createElement("div",null,i.a.createElement(P.b,{to:"/posts/"+e.id},"Post"),i.a.createElement(q.a,{path:"/posts/"+e.id},i.a.createElement(f,{title:e.title,body:e.body,comments:e.comments,id:e.id,userId:e.userId})))})))},O=function(e){Object(c.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={sample:"hello world",previousPosts:[{userId:1,id:Object(E.uuid)(),title:"sunt aut facere repellat provident occaecati excepturi optio reprehenderit",body:"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",comments:[{id:Object(E.uuid)(),title:"comment 1",userId:1},{id:Object(E.uuid)(),title:"second comment",userId:1}]},{userId:2,id:2,title:"qui est esse",body:"est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",comments:[]},{userId:3,id:3,title:"ea molestias quasi exercitationem repellat qui ipsa sit aut",body:"et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",comments:[]},{userId:4,id:4,title:"eum et est occaecati",body:"ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",comments:[]},{userId:5,id:5,title:"nesciunt quas odio",body:"repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",comments:[]}]},e.AddPostHandler=function(){var t=Object(u.a)(e.state.previousPosts);t.push({userId:1,id:1,title:"this.state.value",body:"",comments:[]}),e.setState({previousPosts:t})},e.AddCommentHandler=function(t,n){var a=Object(u.a)(e.state.previousPosts);a=a.map((function(e){return e.id==t&&e.comments.push({id:Object(E.uuid)(),title:n,userId:1}),e})),e.setState({previousPosts:a})},e.DeletePostHandler=function(t){var n=e.state.previousPosts.filter((function(e){return e.id!==t}));e.setState({previousPosts:n})},e.DeleteCommentHandler=function(t,n){console.log(t,n);var a=Object(u.a)(e.state.previousPosts);a=a.map((function(e){return t==e.id&&(e.comments=e.comments.filter((function(e){return n!==e.id}))),e})),e.setState({previousPosts:a})},e}return Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(P.b,{to:"/"},"Home |"),i.a.createElement(P.b,{to:"/posts"},"Post |"),i.a.createElement(P.b,{to:"/addPost"},"Create Post"),i.a.createElement(q.a,{path:"/",exact:!0},i.a.createElement("h2",null,"Home Page"),i.a.createElement("p",null,"lorem ipsum...")),i.a.createElement(q.a,{path:"/addpost"},i.a.createElement(h,{AddPostHandler:this.AddPostHandler})),i.a.createElement(q.a,{path:"/posts"},i.a.createElement(C,null)))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j=function(e){Object(c.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).AddPostHandler=function(){var t=Object(u.a)(e.state.previousPosts);t.push({userId:1,id:1,title:"this.state.value",body:"",comments:[]}),e.setState({previousPosts:t})},e.DeletePostHandler=function(t){var n=e.state.previousPosts.filter((function(e){return e.id!==t}));e.setState({previousPosts:n})},e.AddCommentHandler=function(t,n){var a=Object(u.a)(e.state.previousPosts);a=a.map((function(e){return e.id==t&&e.comments.push({id:Object(E.uuid)(),title:n,userId:1}),e})),e.setState({previousPosts:a})},e.DeleteCommentHandler=function(t,n){console.log(t,n);var a=Object(u.a)(e.state.previousPosts);a=a.map((function(e){return t==e.id&&(e.comments=e.comments.filter((function(e){return n!==e.id}))),e})),e.setState({previousPosts:a})},e.state={AddPostHandler:e.AddPostHandler,DeletePostHandler:e.DeletePostHandler,AddCommentHandler:e.AddCommentHandler,DeleteCommentHandler:e.DeleteCommentHandler,sample:"hello world",changeSampleValue:e.changeSampleValue,previousPosts:[{userId:1,id:Object(E.uuid)(),title:"sunt aut facere repellat provident occaecati excepturi optio reprehenderit",body:"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",comments:[{id:Object(E.uuid)(),title:"comment 1",userId:1},{id:Object(E.uuid)(),title:"second comment",userId:1}]},{userId:2,id:2,title:"qui est esse",body:"est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",comments:[]},{userId:3,id:3,title:"ea molestias quasi exercitationem repellat qui ipsa sit aut",body:"et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",comments:[]},{userId:4,id:4,title:"eum et est occaecati",body:"ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",comments:[]},{userId:5,id:5,title:"nesciunt quas odio",body:"repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",comments:[]}]},e.changeSampleValue=function(){e.setState({sample:"world hello"})},e}return Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement(d.Provider,{value:this.state},this.props.children)}}]),n}(i.a.Component);s.a.render(i.a.createElement(j,null,i.a.createElement(i.a.StrictMode,null,i.a.createElement(P.a,null,i.a.createElement(O,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.d7523f99.chunk.js.map