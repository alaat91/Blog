(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(t,e,n){},21:function(t,e,n){t.exports=n(70)},26:function(t,e,n){},28:function(t,e,n){},30:function(t,e,n){},32:function(t,e,n){},34:function(t,e,n){},36:function(t,e,n){},38:function(t,e,n){},45:function(t,e,n){},47:function(t,e,n){},49:function(t,e,n){},51:function(t,e,n){},53:function(t,e,n){},56:function(t,e,n){},58:function(t,e,n){},60:function(t,e,n){},62:function(t,e,n){},64:function(t,e,n){},66:function(t,e,n){},68:function(t,e,n){},70:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(12),i=n.n(r),l=n(74),s=(n(26),n(4)),c=n(5),u=n(7),d=n(6),m=n(8),h=n(75),p=n(40),g=n(73),f=n(76),v=(n(28),function(t){return o.a.createElement(a.Fragment,null,o.a.createElement("header",{className:"main-header"},t.header),t.mobileNav,o.a.createElement("main",{className:"content"},t.children))}),b=(n(30),function(t){return i.a.createPortal(o.a.createElement("div",{className:["backdrop",t.open?"open":""].join(" "),onClick:t.onClick}),document.getElementById("backdrop-root"))}),E=(n(32),function(t){return o.a.createElement("div",{className:"toolbar"},t.children)}),y=n(72),w=(n(34),function(t){return o.a.createElement("button",{className:"mobile-toggle",onClick:t.onOpen},o.a.createElement("span",{className:"mobile-toggle__bar"}),o.a.createElement("span",{className:"mobile-toggle__bar"}),o.a.createElement("span",{className:"mobile-toggle__bar"}))}),P=(n(36),function(t){return o.a.createElement("h1",{className:"logo"},"MessageNode")}),S=n(17),j=(n(38),[{id:"feed",text:"Feed",link:"/",auth:!0},{id:"login",text:"Login",link:"/",auth:!1},{id:"signup",text:"Signup",link:"/signup",auth:!1}]),O=function(t){return[].concat(Object(S.a)(j.filter(function(e){return e.auth===t.isAuth}).map(function(e){return o.a.createElement("li",{key:e.id,className:["navigation-item",t.mobile?"mobile":""].join(" ")},o.a.createElement(y.a,{to:e.link,exact:!0,onClick:t.onChoose},e.text))})),[t.isAuth&&o.a.createElement("li",{className:"navigation-item",key:"logout"},o.a.createElement("button",{onClick:t.onLogout},"Logout"))])},C=(n(45),function(t){return o.a.createElement("nav",{className:"main-nav"},o.a.createElement(w,{onOpen:t.onOpenMobileNav}),o.a.createElement("div",{className:"main-nav__logo"},o.a.createElement(y.a,{to:"/"},o.a.createElement(P,null))),o.a.createElement("div",{className:"spacer"}),o.a.createElement("ul",{className:"main-nav__items"},o.a.createElement(O,{isAuth:t.isAuth,onLogout:t.onLogout})))}),k=(n(47),function(t){return o.a.createElement("nav",{className:["mobile-nav",t.open?"open":""].join(" ")},o.a.createElement("ul",{className:["mobile-nav__items",t.mobile?"mobile":""].join(" ")},o.a.createElement(O,{mobile:!0,onChoose:t.onChooseItem,isAuth:t.isAuth,onLogout:t.onLogout})))}),F=n(44),N=(n(49),function(t){return t.link?o.a.createElement(F.a,{className:["button","button--".concat(t.design),"button--".concat(t.mode)].join(" "),to:t.link},t.children):o.a.createElement("button",{className:["button","button--".concat(t.design),"button--".concat(t.mode)].join(" "),onClick:t.onClick,disabled:t.disabled||t.loading,type:t.type},t.loading?"Loading...":t.children)}),H=(n(51),function(t){return i.a.createPortal(o.a.createElement("div",{className:"modal"},o.a.createElement("header",{className:"modal__header"},o.a.createElement("h1",null,t.title)),o.a.createElement("div",{className:"modal__content"},t.children),o.a.createElement("div",{className:"modal__actions"},o.a.createElement(N,{design:"danger",mode:"flat",onClick:t.onCancelModal},"Cancel"),o.a.createElement(N,{mode:"raised",onClick:t.onAcceptModal,disabled:!t.acceptEnabled,loading:t.isLoading},"Accept"))),document.getElementById("modal-root"))}),I=function(t){return o.a.createElement(a.Fragment,null,t.error&&o.a.createElement(b,{onClick:t.onHandle}),t.error&&o.a.createElement(H,{title:"An Error Occurred",onCancelModal:t.onHandle,onAcceptModal:t.onHandle,acceptEnabled:!0},o.a.createElement("p",null,t.error.message)))},A=n(2),_=(n(53),function(t){return o.a.createElement("article",{className:"post"},o.a.createElement("header",{className:"post__header"},o.a.createElement("h3",{className:"post__meta"},"Posted by ",t.author.name," on ",t.date),o.a.createElement("h1",{className:"post__title"},t.title)),o.a.createElement("div",{className:"post__actions"},o.a.createElement(N,{mode:"flat",link:t.id},"View"),o.a.createElement(N,{mode:"flat",onClick:t.onStartEdit},"Edit"),o.a.createElement(N,{mode:"flat",design:"danger",onClick:t.onDelete},"Delete")))}),L=n(10),B=(n(19),function(t){return o.a.createElement("div",{className:"input"},t.label&&o.a.createElement("label",{htmlFor:t.id},t.label),"input"===t.control&&o.a.createElement("input",{className:[t.valid?"valid":"invalid",t.touched?"touched":"untouched"].join(" "),type:t.type,id:t.id,required:t.required,value:t.value,placeholder:t.placeholder,onChange:function(e){return t.onChange(t.id,e.target.value,e.target.files)},onBlur:t.onBlur}),"textarea"===t.control&&o.a.createElement("textarea",{className:[t.valid?"valid":"invalid",t.touched?"touched":"untouched"].join(" "),id:t.id,rows:t.rows,required:t.required,value:t.value,onChange:function(e){return t.onChange(t.id,e.target.value)},onBlur:t.onBlur}))}),U=function(t){return o.a.createElement("div",{className:"input"},o.a.createElement("label",{htmlFor:t.id},t.label),o.a.createElement("input",{className:[t.valid?"valid":"invalid",t.touched?"touched":"untouched"].join(" "),type:"file",id:t.id,onChange:function(e){return t.onChange(t.id,e.target.value,e.target.files)},onBlur:t.onBlur}))},x=(n(56),function(t){return o.a.createElement("div",{className:"image",style:{backgroundImage:"url('".concat(t.imageUrl,"')"),backgroundSize:t.contain?"contain":"cover",backgroundPosition:t.left?"left":"center"}})}),D=function(t){return""!==t.trim()},M=function(t){return function(e){var n=!0;return t.min&&(n=n&&e.trim().length>=t.min),t.max&&(n=n&&e.trim().length<=t.max),n}},T=function(t){return/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(t)},q=function(t){var e=new FileReader,n=new Promise(function(t,n){e.onload=function(e){return t(e.target.result)},e.onerror=function(t){return n(t)}});return e.readAsDataURL(t),n};function z(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return V(t,e);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?V(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var a=0,o=function(){};return{s:o,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return i=t.done,t},e:function(t){l=!0,r=t},f:function(){try{i||null==n.return||n.return()}finally{if(l)throw r}}}}function V(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=Array(e);n<e;n++)a[n]=t[n];return a}var J={title:{value:"",valid:!1,touched:!1,validators:[D,M({min:5})]},image:{value:"",valid:!1,touched:!1,validators:[D]},content:{value:"",valid:!1,touched:!1,validators:[D,M({min:5})]}},R=function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(o)))).state={postForm:J,formIsValid:!1,imagePreview:null},n.postInputChangeHandler=function(t,e,a){a&&q(a[0]).then(function(t){n.setState({imagePreview:t})}).catch(function(t){n.setState({imagePreview:null})}),n.setState(function(n){var o,r=!0,i=z(n.postForm[t].validators);try{for(i.s();!(o=i.n()).done;){var l=o.value;r=r&&l(e)}}catch(d){i.e(d)}finally{i.f()}var s=Object(A.a)({},n.postForm,Object(L.a)({},t,Object(A.a)({},n.postForm[t],{valid:r,value:a?a[0]:e}))),c=!0;for(var u in s)c=c&&s[u].valid;return{postForm:s,formIsValid:c}})},n.inputBlurHandler=function(t){n.setState(function(e){return{postForm:Object(A.a)({},e.postForm,Object(L.a)({},t,Object(A.a)({},e.postForm[t],{touched:!0})))}})},n.cancelPostChangeHandler=function(){n.setState({postForm:J,formIsValid:!1}),n.props.onCancelEdit()},n.acceptPostChangeHandler=function(){var t={title:n.state.postForm.title.value,image:n.state.postForm.image.value,content:n.state.postForm.content.value};n.props.onFinishEdit(t),n.setState({postForm:J,formIsValid:!1,imagePreview:null})},n}return Object(m.a)(e,t),Object(c.a)(e,[{key:"componentDidUpdate",value:function(t,e){if(this.props.editing&&t.editing!==this.props.editing&&t.selectedPost!==this.props.selectedPost){var n={title:Object(A.a)({},e.postForm.title,{value:this.props.selectedPost.title,valid:!0}),image:Object(A.a)({},e.postForm.image,{value:this.props.selectedPost.imagePath,valid:!0}),content:Object(A.a)({},e.postForm.content,{value:this.props.selectedPost.content,valid:!0})};this.setState({postForm:n,formIsValid:!0})}}},{key:"render",value:function(){return this.props.editing?o.a.createElement(a.Fragment,null,o.a.createElement(b,{onClick:this.cancelPostChangeHandler}),o.a.createElement(H,{title:"New Post",acceptEnabled:this.state.formIsValid,onCancelModal:this.cancelPostChangeHandler,onAcceptModal:this.acceptPostChangeHandler,isLoading:this.props.loading},o.a.createElement("form",null,o.a.createElement(B,{id:"title",label:"Title",control:"input",onChange:this.postInputChangeHandler,onBlur:this.inputBlurHandler.bind(this,"title"),valid:this.state.postForm.title.valid,touched:this.state.postForm.title.touched,value:this.state.postForm.title.value}),o.a.createElement(U,{id:"image",label:"Image",control:"input",onChange:this.postInputChangeHandler,onBlur:this.inputBlurHandler.bind(this,"image"),valid:this.state.postForm.image.valid,touched:this.state.postForm.image.touched}),o.a.createElement("div",{className:"new-post__preview-image"},!this.state.imagePreview&&o.a.createElement("p",null,"Please choose an image."),this.state.imagePreview&&o.a.createElement(x,{imageUrl:this.state.imagePreview,contain:!0,left:!0})),o.a.createElement(B,{id:"content",label:"Content",control:"textarea",rows:"5",onChange:this.postInputChangeHandler,onBlur:this.inputBlurHandler.bind(this,"content"),valid:this.state.postForm.content.valid,touched:this.state.postForm.content.touched,value:this.state.postForm.content.value})))):null}}]),e}(a.Component),$=(n(58),function(t){return o.a.createElement("div",{className:"paginator"},t.children,o.a.createElement("div",{className:"paginator__controls"},t.currentPage>1&&o.a.createElement("button",{className:"paginator__control",onClick:t.onPrevious},"Previous"),t.currentPage<t.lastPage&&o.a.createElement("button",{className:"paginator__control",onClick:t.onNext},"Next")))}),Y=(n(60),function(t){return o.a.createElement("div",{className:"loader"},o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null))}),G=(n(62),function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(o)))).state={isEditing:!1,posts:[],totalPosts:0,editPost:null,status:"",postPage:1,postsLoading:!0,editLoading:!1},n.loadPosts=function(t){t&&n.setState({postsLoading:!0,posts:[]});var e=n.state.postPage;"next"===t&&(e++,n.setState({postPage:e})),"previous"===t&&(e--,n.setState({postPage:e}));var a={query:"\n      {\n        getPosts (page: ".concat(e,") {\n          posts {\n            _id\n            title\n            content\n            imageUrl\n            creator {\n              name\n            }\n            createdAt\n          }\n          totalPosts\n        }\n      }\n      ")};fetch("http://localhost:8080/graphql",{method:"POST",headers:{authorization:"Bearer "+n.props.token,"Content-Type":"application/json"},body:JSON.stringify(a)}).then(function(t){return t.json()}).then(function(t){if(t.errors)throw new Error("User creation failed!");console.log(t),n.setState({posts:t.data.getPosts.posts.map(function(t){return Object(A.a)({},t,{imagePath:t.imageUrl})}),totalPosts:t.data.getPosts.totalPosts,postsLoading:!1})}).catch(n.catchError)},n.statusUpdateHandler=function(t){t.preventDefault();var e={query:'\n      mutation {\n        updateUserStatus(status: "'.concat(n.state.status,'")  {\n          status\n        }\n      }\n      ')};fetch("http://localhost:8080/graphql",{method:"POST",headers:{authorization:"Bearer "+n.props.token,"Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(t){return t.json()}).then(function(t){if(t.errors)throw new Error("Updating user status failed!");console.log(t)}).catch(n.catchError)},n.newPostHandler=function(){n.setState({isEditing:!0})},n.startEditPostHandler=function(t){n.setState(function(e){return{isEditing:!0,editPost:Object(A.a)({},e.posts.find(function(e){return e._id===t}))}})},n.cancelEditHandler=function(){n.setState({isEditing:!1,editPost:null})},n.finishEditHandler=function(t){n.setState({editLoading:!0});var e=new FormData;e.append("image",t.image),n.state.editPost&&e.append("oldPath",n.state.editPost.imagePath),fetch("http://localhost:8080/post-image",{headers:{authorization:"Bearer "+n.props.token},method:"PUT",body:e}).then(function(t){return t.json()}).then(function(e){var a=e.filePath;console.log(e);var o={query:'\n          mutation {\n            createPost(postInput: { title: "'.concat(t.title,'", content: "').concat(t.content,'", imageUrl: "').concat(a,'"}) {\n              _id\n              title\n              content\n              imageUrl\n              creator {\n                name\n              }\n              createdAt\n            }\n          }\n          ')};return n.state.editPost&&(o={query:'\n              mutation {\n                updatePost(id: "'.concat(n.state.editPost._id,'", postInput: { title: "').concat(t.title,'", content: "').concat(t.content,'", imageUrl: "').concat(a,'"}) {\n                  _id\n                  title\n                  content\n                  imageUrl\n                  creator {\n                    name\n                  }\n                  createdAt\n                }\n              }\n              ')}),fetch("http://localhost:8080/graphql",{headers:{authorization:"Bearer "+n.props.token,"Content-Type":"application/json"},method:"POST",body:JSON.stringify(o)})}).then(function(t){return t.json()}).then(function(t){if(t.errors&&422===t.errors[0].status)throw new Error("Validation failed. Make sure the email is not used yet!");if(t.errors)throw new Error("Post creation failed!");var e="createPost";n.state.editPost&&(e="updatePost"),console.log("EditingMode:",e);var a={_id:t.data[e]._id,title:t.data[e].title,content:t.data[e].content,creator:t.data[e].creator.name,createdAt:t.data[e].createdAt,imageUrl:t.data[e].imageUrl};n.setState(function(t){var e=Object(S.a)(t.posts),n=t.totalPosts;t.editPost?e[t.posts.findIndex(function(e){return e._id===t.editPost._id})]=a:(n++,t.posts.length>=2&&e.pop(),e.unshift(a));return{posts:e,isEditing:!1,editPost:null,editLoading:!1,totalPosts:n}}),n.setState(function(t){return{isEditing:!1,editPost:null,editLoading:!1}})}).catch(function(t){console.log("ERROR:",t),n.setState({isEditing:!1,editPost:null,editLoading:!1,error:t})})},n.statusInputChangeHandler=function(t,e){n.setState({status:e})},n.deletePostHandler=function(t){n.setState({postsLoading:!0});var e={query:'\n        mutation {\n          deletePost(id: "'.concat(t,'")\n        }\n        ')};fetch("http://localhost:8080/graphql",{headers:{authorization:"Bearer "+n.props.token,"Content-Type":"application/json"},method:"POST",body:JSON.stringify(e)}).then(function(t){return t.json()}).then(function(t){if(t.errors)throw new Error("Post deletion failed!");n.loadPosts()}).catch(function(t){console.log(t),n.setState({postsLoading:!1})})},n.errorHandler=function(){n.setState({error:null})},n.catchError=function(t){n.setState({error:t})},n}return Object(m.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){var t=this;fetch("http://localhost:8080/graphql",{headers:{authorization:"Bearer "+this.props.token,"Content-Type":"application/json"},method:"POST",body:JSON.stringify({query:"\n      {\n        getUserStatus  {\n          status\n        }\n      }\n      "})}).then(function(t){return t.json()}).then(function(e){if(e.errors)throw new Error("Fetching user status failed!");t.setState({status:e.data.getUserStatus.status})}).catch(this.catchError),this.loadPosts()}},{key:"render",value:function(){var t=this;return o.a.createElement(a.Fragment,null,o.a.createElement(I,{error:this.state.error,onHandle:this.errorHandler}),o.a.createElement(R,{editing:this.state.isEditing,selectedPost:this.state.editPost,loading:this.state.editLoading,onCancelEdit:this.cancelEditHandler,onFinishEdit:this.finishEditHandler}),o.a.createElement("section",{className:"feed__status"},o.a.createElement("form",{onSubmit:this.statusUpdateHandler},o.a.createElement(B,{type:"text",placeholder:"Your status",control:"input",onChange:this.statusInputChangeHandler,value:this.state.status}),o.a.createElement(N,{mode:"flat",type:"submit"},"Update"))),o.a.createElement("section",{className:"feed__control"},o.a.createElement(N,{mode:"raised",design:"accent",onClick:this.newPostHandler},"New Post")),o.a.createElement("section",{className:"feed"},this.state.postsLoading&&o.a.createElement("div",{style:{textAlign:"center",marginTop:"2rem"}},o.a.createElement(Y,null)),this.state.posts.length<=0&&!this.state.postsLoading?o.a.createElement("p",{style:{textAlign:"center"}},"No posts found."):null,!this.state.postsLoading&&o.a.createElement($,{onPrevious:this.loadPosts.bind(this,"previous"),onNext:this.loadPosts.bind(this,"next"),lastPage:Math.ceil(this.state.totalPosts/2),currentPage:this.state.postPage},this.state.posts.map(function(e){return o.a.createElement(_,{key:e._id,id:e._id,author:e.creator,date:new Date(e.createdAt).toLocaleDateString("en-US"),title:e.title,image:e.imageUrl,content:e.content,onStartEdit:t.startEditPostHandler.bind(t,e._id),onDelete:t.deletePostHandler.bind(t,e._id)})}))))}}]),e}(a.Component)),K=(n(64),function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(o)))).state={title:"",author:"",date:"",image:"",content:""},n}return Object(m.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){var t=this,e=this.props.match.params.postId;console.log("postId react: ",e);var n={query:'\n      {\n        viewPost(id: "'.concat(e,'") {\n            title\n            creator {\n              name\n                }\n            imageUrl\n            content\n            createdAt\n        }\n      }\n    ')};fetch("http://localhost:8080/graphql",{headers:{authorization:"Bearer "+this.props.token,"Content-Type":"application/json"},method:"POST",body:JSON.stringify(n)}).then(function(t){return t.json()}).then(function(e){if(e.errors)throw new Error("Fetching post failed!");console.log("singlePostData:",e),t.setState({title:e.data.viewPost.title,author:e.data.viewPost.creator.name,image:"http://localhost:8080/"+e.data.viewPost.imageUrl,date:new Date(e.data.viewPost.createdAt).toLocaleDateString("en-US"),content:e.data.viewPost.content})}).catch(function(t){console.log(t)})}},{key:"render",value:function(){return o.a.createElement("section",{className:"single-post"},o.a.createElement("h1",null,this.state.title),o.a.createElement("h2",null,"Created by ",this.state.author," on ",this.state.date),o.a.createElement("div",{className:"single-post__image"},o.a.createElement(x,{contain:!0,imageUrl:this.state.image})),o.a.createElement("p",null,this.state.content))}}]),e}(a.Component)),Q=(n(66),function(t){return o.a.createElement("section",{className:"auth-form"},t.children)});function W(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return X(t,e);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?X(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var a=0,o=function(){};return{s:o,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return i=t.done,t},e:function(t){l=!0,r=t},f:function(){try{i||null==n.return||n.return()}finally{if(l)throw r}}}}function X(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=Array(e);n<e;n++)a[n]=t[n];return a}var Z=function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(o)))).state={loginForm:{email:{value:"",valid:!1,touched:!1,validators:[D,T]},password:{value:"",valid:!1,touched:!1,validators:[D,M({min:5})]},formIsValid:!1}},n.inputChangeHandler=function(t,e){n.setState(function(n){var a,o=!0,r=W(n.loginForm[t].validators);try{for(r.s();!(a=r.n()).done;){var i=a.value;o=o&&i(e)}}catch(u){r.e(u)}finally{r.f()}var l=Object(A.a)({},n.loginForm,Object(L.a)({},t,Object(A.a)({},n.loginForm[t],{valid:o,value:e}))),s=!0;for(var c in l)s=s&&l[c].valid;return{loginForm:l,formIsValid:s}})},n.inputBlurHandler=function(t){n.setState(function(e){return{loginForm:Object(A.a)({},e.loginForm,Object(L.a)({},t,Object(A.a)({},e.loginForm[t],{touched:!0})))}})},n}return Object(m.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this;return o.a.createElement(Q,null,o.a.createElement("form",{onSubmit:function(e){return t.props.onLogin(e,{email:t.state.loginForm.email.value,password:t.state.loginForm.password.value})}},o.a.createElement(B,{id:"email",label:"Your E-Mail",type:"email",control:"input",onChange:this.inputChangeHandler,onBlur:this.inputBlurHandler.bind(this,"email"),value:this.state.loginForm.email.value,valid:this.state.loginForm.email.valid,touched:this.state.loginForm.email.touched}),o.a.createElement(B,{id:"password",label:"Password",type:"password",control:"input",onChange:this.inputChangeHandler,onBlur:this.inputBlurHandler.bind(this,"password"),value:this.state.loginForm.password.value,valid:this.state.loginForm.password.valid,touched:this.state.loginForm.password.touched}),o.a.createElement(N,{design:"raised",type:"submit",loading:this.props.loading},"Login")))}}]),e}(a.Component);function tt(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return et(t,e);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?et(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var a=0,o=function(){};return{s:o,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return i=t.done,t},e:function(t){l=!0,r=t},f:function(){try{i||null==n.return||n.return()}finally{if(l)throw r}}}}function et(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=Array(e);n<e;n++)a[n]=t[n];return a}var nt=function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(o)))).state={signupForm:{email:{value:"",valid:!1,touched:!1,validators:[D,T]},password:{value:"",valid:!1,touched:!1,validators:[D,M({min:5})]},name:{value:"",valid:!1,touched:!1,validators:[D]},formIsValid:!1}},n.inputChangeHandler=function(t,e){n.setState(function(n){var a,o=!0,r=tt(n.signupForm[t].validators);try{for(r.s();!(a=r.n()).done;){var i=a.value;o=o&&i(e)}}catch(u){r.e(u)}finally{r.f()}var l=Object(A.a)({},n.signupForm,Object(L.a)({},t,Object(A.a)({},n.signupForm[t],{valid:o,value:e}))),s=!0;for(var c in l)s=s&&l[c].valid;return{signupForm:l,formIsValid:s}})},n.inputBlurHandler=function(t){n.setState(function(e){return{signupForm:Object(A.a)({},e.signupForm,Object(L.a)({},t,Object(A.a)({},e.signupForm[t],{touched:!0})))}})},n}return Object(m.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this;return o.a.createElement(Q,null,o.a.createElement("form",{onSubmit:function(e){return t.props.onSignup(e,t.state)}},o.a.createElement(B,{id:"email",label:"Your E-Mail",type:"email",control:"input",onChange:this.inputChangeHandler,onBlur:this.inputBlurHandler.bind(this,"email"),value:this.state.signupForm.email.value,valid:this.state.signupForm.email.valid,touched:this.state.signupForm.email.touched}),o.a.createElement(B,{id:"name",label:"Your Name",type:"text",control:"input",onChange:this.inputChangeHandler,onBlur:this.inputBlurHandler.bind(this,"name"),value:this.state.signupForm.name.value,valid:this.state.signupForm.name.valid,touched:this.state.signupForm.name.touched}),o.a.createElement(B,{id:"password",label:"Password",type:"password",control:"input",onChange:this.inputChangeHandler,onBlur:this.inputBlurHandler.bind(this,"password"),value:this.state.signupForm.password.value,valid:this.state.signupForm.password.valid,touched:this.state.signupForm.password.touched}),o.a.createElement(N,{design:"raised",type:"submit",loading:this.props.loading},"Signup")))}}]),e}(a.Component),at=(n(68),function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(o)))).state={showBackdrop:!1,showMobileNav:!1,isAuth:!1,token:null,userId:null,authLoading:!1,error:null},n.mobileNavHandler=function(t){n.setState({showMobileNav:t,showBackdrop:t})},n.backdropClickHandler=function(){n.setState({showBackdrop:!1,showMobileNav:!1,error:null})},n.logoutHandler=function(){n.setState({isAuth:!1,token:null}),localStorage.removeItem("token"),localStorage.removeItem("expiryDate"),localStorage.removeItem("userId")},n.loginHandler=function(t,e){t.preventDefault(),n.setState({authLoading:!0});var a={query:'\n       {\n          login(email: "'.concat(e.email,'", password: "').concat(e.password,'") {\n          token\n          userId\n        }\n      }\n    ')};fetch("http://localhost:8080/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then(function(t){return t.json()}).then(function(t){if(console.log(t),t.errors&&422===t.errors[0].status)throw new Error("Validation failed. Make sure the email is not used yet!");if(t.errors)throw new Error("User creation failed!");n.setState({isAuth:!0,token:t.data.login.token,authLoading:!1,userId:t.data.login.userId}),localStorage.setItem("token",t.data.login.token),localStorage.setItem("userId",t.data.login.userId);var e=new Date((new Date).getTime()+36e5);localStorage.setItem("expiryDate",e.toISOString()),n.setAutoLogout(36e5)}).catch(function(t){console.log(t),n.setState({isAuth:!1,authLoading:!1,error:t})})},n.signupHandler=function(t,e){t.preventDefault(),n.setState({authLoading:!0});var a={query:'\n      mutation {\n        createUser(userInput: {email: "'.concat(e.signupForm.email.value,'", name: "').concat(e.signupForm.name.value,'", password: "').concat(e.signupForm.password.value,'"}) {\n          _id\n          email\n        }\n      }\n      ')};fetch("http://localhost:8080/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then(function(t){return t.json()}).then(function(t){if(t.errors&&422===t.errors[0].status)throw new Error("Validation failed. Make sure the email is not used yet!");if(t.errors)throw new Error("User creation failed!");console.log(t),n.setState({isAuth:!1,authLoading:!1}),n.props.history.replace("/")}).catch(function(t){console.log(t),n.setState({isAuth:!1,authLoading:!1,error:t})})},n.setAutoLogout=function(t){setTimeout(function(){n.logoutHandler()},t)},n.errorHandler=function(){n.setState({error:null})},n}return Object(m.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("token"),e=localStorage.getItem("expiryDate");if(t&&e)if(new Date(e)<=new Date)this.logoutHandler();else{var n=localStorage.getItem("userId"),a=new Date(e).getTime()-(new Date).getTime();this.setState({isAuth:!0,token:t,userId:n}),this.setAutoLogout(a)}}},{key:"render",value:function(){var t=this,e=o.a.createElement(h.a,null,o.a.createElement(p.a,{path:"/",exact:!0,render:function(e){return o.a.createElement(Z,Object.assign({},e,{onLogin:t.loginHandler,loading:t.state.authLoading}))}}),o.a.createElement(p.a,{path:"/signup",exact:!0,render:function(e){return o.a.createElement(nt,Object.assign({},e,{onSignup:t.signupHandler,loading:t.state.authLoading}))}}),o.a.createElement(g.a,{to:"/"}));return this.state.isAuth&&(e=o.a.createElement(h.a,null,o.a.createElement(p.a,{path:"/",exact:!0,render:function(e){return o.a.createElement(G,{userId:t.state.userId,token:t.state.token})}}),o.a.createElement(p.a,{path:"/:postId",render:function(e){return o.a.createElement(K,Object.assign({},e,{userId:t.state.userId,token:t.state.token}))}}),o.a.createElement(g.a,{to:"/"}))),o.a.createElement(a.Fragment,null,this.state.showBackdrop&&o.a.createElement(b,{onClick:this.backdropClickHandler}),o.a.createElement(I,{error:this.state.error,onHandle:this.errorHandler}),o.a.createElement(v,{header:o.a.createElement(E,null,o.a.createElement(C,{onOpenMobileNav:this.mobileNavHandler.bind(this,!0),onLogout:this.logoutHandler,isAuth:this.state.isAuth})),mobileNav:o.a.createElement(k,{open:this.state.showMobileNav,mobile:!0,onChooseItem:this.mobileNavHandler.bind(this,!1),onLogout:this.logoutHandler,isAuth:this.state.isAuth})}),e)}}]),e}(a.Component)),ot=Object(f.a)(at);i.a.render(o.a.createElement(l.a,null,o.a.createElement(ot,null)),document.getElementById("root"))}},[[21,2,1]]]);
//# sourceMappingURL=main.bbbfd113.chunk.js.map