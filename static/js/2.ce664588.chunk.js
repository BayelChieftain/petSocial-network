(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{75:function(e,t,a){e.exports={discrpBlock:"ProfileInfo_discrpBlock__3kWsN",statusStyle:"ProfileInfo_statusStyle__uF7lG",statusText:"ProfileInfo_statusText__1Ls0o",mainPhoto:"ProfileInfo_mainPhoto__2Nt-t",mainLoadPhoto:"ProfileInfo_mainLoadPhoto__vPNx_",inputPhoto:"ProfileInfo_inputPhoto__2UShk",contact:"ProfileInfo_contact__2-Jbm",contactLink:"ProfileInfo_contactLink__2PAlS"}},81:function(e,t,a){e.exports={PostBlock:"MyPosts_PostBlock__jEtAp",posts:"MyPosts_posts__2LCOc"}},83:function(e,t,a){e.exports={item:"Post_item__353Ya"}},85:function(e,t,a){"use strict";a.r(t);var n=a(10),l=a(11),o=a(16),r=a(14),c=a(15),s=a(1),i=a.n(s),u=a(7),m=a(75),p=a.n(m),f=a(26),d=function(e){var t=Object(s.useState)(!1),a=Object(u.a)(t,2),n=a[0],l=a[1],o=Object(s.useState)(e.status),r=Object(u.a)(o,2),c=r[0],m=r[1];Object(s.useEffect)(function(){m(e.status)},[e.status]);return i.a.createElement("div",{className:p.a.f},!n&&i.a.createElement("div",{className:p.a.statusStyle},i.a.createElement("h4",null,"Status:"),"  ",i.a.createElement("div",{className:p.a.statusText,onDoubleClick:function(){l(!0)}},e.status||"\u041e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442")),n&&i.a.createElement("div",null,i.a.createElement("input",{onChange:function(e){m(e.currentTarget.value)},autoFocus:!0,onBlur:function(){l(!1),e.updateStatus(c)},value:c})))},E=a(36),v=a.n(E),b=a(38),h=function(e){var t=Object(b.a)(),a=t.register,n=t.handleSubmit;return i.a.createElement("form",{onSubmit:n(function(t){e.saveProfile(t),console.log(t),e.setEditMode()})},i.a.createElement("div",null,i.a.createElement("b",null,"Full name")," ",i.a.createElement("div",null,i.a.createElement("input",Object.assign({},a("fullName",{required:!0,maxLength:40}),{placeholder:"Name"})))),i.a.createElement("div",null,i.a.createElement("b",null," Looking for a job: ")," ",i.a.createElement("div",null," ",i.a.createElement("input",Object.assign({},a("lookingForAJob"),{type:"checkbox"}))," ")),i.a.createElement("div",null,i.a.createElement("b",null," Looking for a job Description: ")," ",i.a.createElement("div",null," ",i.a.createElement("input",a("LookingForAJobDescription"))," ")),i.a.createElement("div",null,i.a.createElement("b",null," About me ")," ",i.a.createElement("div",null," ",i.a.createElement("textarea",a("aboutMe"))," ")),i.a.createElement("div",null,i.a.createElement("input",{type:"submit"})),i.a.createElement("div",null,i.a.createElement("b",null,"Contacts"),":  ",Object.keys(e.profile.contacts).map(function(e){return i.a.createElement("div",{className:p.a.contact},i.a.createElement("b",null,e,":")," ",i.a.createElement("div",null," ",i.a.createElement("input",Object.assign({},a("contacts."+e),{placeholder:e}))," "))})))},P=a(35),g=a(17),O=function(e){var t=e.profile,a=e.isOwner,n=e.setEditMode;return i.a.createElement("div",null,a&&i.a.createElement("div",null,i.a.createElement("button",{onClick:n},"EDIT")),i.a.createElement("div",null,i.a.createElement("b",null,"Full name")," ",t.fullName),i.a.createElement("div",null,i.a.createElement("b",null," Looking for a job: ")," ",t.lookingForAJob?"yes":"no"),i.a.createElement("div",null,i.a.createElement("b",null," Looking for a job Description: "),t.lookingForAJobDescription),i.a.createElement("div",null,i.a.createElement("b",null," About me ")," ",t.aboutMe),i.a.createElement("div",null,i.a.createElement("b",null," Contacts "),Object.keys(t.contacts).map(function(e){return i.a.createElement(_,{key:e,contactTitle:e,contactValue:t.contacts[e]})})))},_=function(e){var t=e.contactTitle,a=e.contactValue;return i.a.createElement("div",{className:p.a.contact},i.a.createElement("b",null,t),":",i.a.createElement("a",{className:p.a.contactLink,href:a||"---"},a||"---"))},j=Object(g.b)(null,{saveProfile:P.f})(function(e){var t=Object(s.useState)(!1),a=Object(u.a)(t,2),n=a[0],l=a[1];if(!e.profile)return i.a.createElement(f.a,null);return i.a.createElement("div",null,i.a.createElement("div",{className:p.a.discrpBlock},i.a.createElement("img",{className:p.a.mainPhoto,src:e.profile.photos.large||v.a}),e.isOwner&&i.a.createElement("div",{className:p.a.mainLoadPhoto},i.a.createElement("h4",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0444\u043e\u0442\u043e \u043f\u0440\u043e\u0444\u0438\u043b\u044f"),i.a.createElement("div",null," ",e.isOwner&&i.a.createElement("input",{className:p.a.inputPhoto,type:"file",onChange:function(t){t.target.files.length&&e.savePhoto(t.target.files[0])}}))),n?i.a.createElement(h,{saveProfile:e.saveProfile,profile:e.profile,setEditMode:function(){return l(!1)}}):i.a.createElement(O,{profile:e.profile,setEditMode:function(){return l(!0)},isOwner:e.isOwner}),i.a.createElement(d,{updateStatus:e.updateStatus,status:e.status})))}),k=a(81),N=a.n(k),S=a(83),w=a.n(S),y=function(e){return i.a.createElement("div",null,i.a.createElement("div",{className:w.a.item},e.Message))},x=i.a.memo(function(e){var t=e.postData.map(function(e){return i.a.createElement(y,{Message:e.message})}),a=i.a.createRef();return i.a.createElement("div",{className:N.a.PostBlock},i.a.createElement("h2",null,"My post"),i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("textarea",{onChange:function(){var t=a.current.value;e.updateNewPostText(t)},ref:a,value:e.newPostText})),i.a.createElement("div",null,i.a.createElement("button",{onClick:function(){e.addPost()}},"Add post"))),i.a.createElement("div",{className:N.a.posts},t))}),L=Object(g.b)(function(e){return{postData:e.profilePages.postData,newPostText:e.profilePages.newPostText}},function(e){return{updateNewPostText:function(t){var a=Object(P.g)(t);e(a)},addPost:function(){e(Object(P.a)())}}})(x),I=function(e){return i.a.createElement("div",null,i.a.createElement(j,{profile:e.profile,isOwner:e.isOwner,status:e.status,updateStatus:e.updateStatus,savePhoto:e.savePhoto}),i.a.createElement(L,{store:e.store}))},M=a(0),T=a(21);function D(e){return function(t){var a={params:Object(M.p)()};return i.a.createElement(e,Object.assign({},t,{match:a}))}}a.d(t,"withRouter",function(){return D});var C=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(l.a)(t,[{key:"refresh",value:function(){var e=this.props.match.params.userId;e||(e=29025),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refresh()}},{key:"componentDidUpdate",value:function(e,t){this.props.match.params.userId!=this.props.match.params.userId&&this.refresh()}},{key:"render",value:function(){return i.a.createElement(I,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),t}(i.a.Component);t.default=Object(T.c)(Object(g.b)(function(e){return{profile:e.profilePages.profile,status:e.profilePages.status}},{getUserProfile:P.d,getStatus:P.c,updateStatus:P.h,savePhoto:P.e}),D)(C)}}]);
//# sourceMappingURL=2.ce664588.chunk.js.map