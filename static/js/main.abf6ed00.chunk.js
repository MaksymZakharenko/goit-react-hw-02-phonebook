(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,function(t,e,n){t.exports={form:"ContactForm_form__1UOz-",title:"ContactForm_title__1JcVu",btn:"ContactForm_btn__2eWwC"}},,,,,,function(t,e,n){t.exports={block:"Filter_block__1zyFw",title:"Filter_title__3ce6n",input:"Filter_input__3mqBU"}},function(t,e,n){t.exports={title:"Contacts_title__3srIt",titleContact:"Contacts_titleContact__2K_sm",block:"Contacts_block__2vzvG"}},,function(t,e,n){t.exports={btn:"ContactListItem_btn__1AIui",textContent:"ContactListItem_textContent__WWwYd"}},,function(t,e,n){t.exports={ul:"ContactList_ul__25Ccx"}},,,,,,,,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),i=n(12),r=n.n(i),s=n(14),l=n(3),o=n(4),u=n(5),m=n(7),b=n(6),h=n(23),d=n(2),j=n.n(d),f=n(0),O=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={id:Object(h.a)(),name:"",number:""},t.handleChange=function(e){t.setState(Object(l.a)({},e.target.name,e.target.value))},t.onSubmit=function(e){e.preventDefault(),t.props.handleSubmit(t.state),t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("form",{className:j.a.form,onSubmit:this.onSubmit,children:[Object(f.jsx)("span",{className:j.a.title,children:"Name"}),Object(f.jsx)("input",{onChange:this.handleChange,value:this.state.name,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(f.jsx)("span",{className:j.a.title,children:"Number"}),Object(f.jsx)("input",{name:"number",type:"tel",onChange:this.handleChange,value:this.state.number,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(f.jsx)("button",{className:j.a.btn,type:"submit",children:"Add contact"})]})})}}]),n}(a.Component),x=n(8),p=n.n(x),_=function(t){var e=t.handleChange,n=t.filter;return Object(f.jsxs)("div",{className:p.a.block,children:[Object(f.jsx)("label",{className:p.a.title,htmlFor:"filter",children:"Find contacts by name:"}),Object(f.jsx)("input",{id:"filter",name:"filter",type:"text",className:p.a.input,onChange:e,value:n})]})},C=n(11),v=n.n(C),g=function(t){var e=t.item,n=t.handleDelete,a=e.name,c=e.number;return Object(f.jsx)("li",{children:Object(f.jsxs)("div",{className:v.a.textContent,children:[Object(f.jsxs)("span",{children:[a,": ",c]}),Object(f.jsx)("button",{className:v.a.btn,onClick:n,children:"X"})]})})},N=n(13),k=n.n(N),y=function(t){var e=t.items,n=t.handleDelete;return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("ul",{className:k.a.ul,children:e.map((function(t){return Object(f.jsx)(g,{item:t,handleDelete:function(){return n(t.id)}},t.id)}))})})},S=n(9),w=n.n(S),F=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={items:[],filter:""},t.handleDelete=function(e){t.setState((function(t){return{items:t.items.filter((function(t){return t.id!==e}))}}))},t.handleChange=function(e){t.setState(Object(l.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){if(e)if(t.state.items.some((function(t){return t.name===e.name})))alert("\u041a\u043e\u043d\u0442\u0430\u043a\u0442: "+e.name+" \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 ");else{var n={id:Object(h.a)(),name:e.name,number:e.number};t.setState((function(t){return{items:[n].concat(Object(s.a)(t.items))}}))}else alert("\u041f\u043e\u043b\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c!")},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.items,n=t.filter,a=n.toLowerCase().trim(),c=e.filter((function(t){return t.name.toLowerCase().includes(a)}));return Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("h1",{className:w.a.title,children:"Phonebook"}),Object(f.jsx)(O,{handleSubmit:this.handleSubmit}),Object(f.jsx)("h2",{className:w.a.titleContact,children:"Contacts"}),Object(f.jsxs)("div",{className:w.a.block,children:[Object(f.jsx)(_,{filter:n,handleChange:this.handleChange}),Object(f.jsx)(y,{items:c,handleDelete:this.handleDelete})]})]})}}]),n}(a.Component),A=function(){return Object(f.jsx)("div",{className:"block",children:Object(f.jsx)(F,{})})};n(21);r.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(A,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.abf6ed00.chunk.js.map