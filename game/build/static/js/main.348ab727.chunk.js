(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n.p+"static/media/snape.cd2eeeee.png"},21:function(e,t,n){e.exports=n.p+"static/media/cauldron.e495b408.png"},22:function(e,t,n){e.exports=n.p+"static/media/lacewing.8ba5bdb9.png"},23:function(e,t,n){e.exports=n.p+"static/media/boomslang.2ee5c9f7.png"},24:function(e,t,n){e.exports=n.p+"static/media/bicorn.1eeb3418.png"},25:function(e,t,n){e.exports=n.p+"static/media/dragon.498f13f9.png"},26:function(e,t,n){e.exports=n.p+"static/media/beetle.be7d0563.png"},27:function(e,t,n){e.exports=n.p+"static/media/newt.bb324efa.png"},47:function(e,t,n){e.exports=n.p+"static/media/crinkle.e41d1af7.mp3"},48:function(e,t,n){e.exports=n.p+"static/media/drip.3cd64737.wav"},49:function(e,t,n){e.exports=n.p+"static/media/drop.67c4c069.wav"},50:function(e,t,n){e.exports=n.p+"static/media/dust.78f6a085.wav"},51:function(e,t,n){e.exports=n.p+"static/media/seeds.8da90b05.wav"},52:function(e,t,n){e.exports=n.p+"static/media/sizzle.37ec5ff6.mp3"},53:function(e,t,n){e.exports=n.p+"static/media/bubbling.bdd8f5f2.wav"},56:function(e,t,n){e.exports=n.p+"static/media/themeSong.1ff1daad.mp3"},57:function(e,t,n){e.exports=n(94)},93:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(44),o=n.n(s),c=n(2),l=n(3),i=n(6),u=n(4),m=n(7),d=n(5),p=n(98),h=n(95),f=n(97),g=n(8),b=function(e){return 0===e.i?r.a.createElement("p",{className:"ingredient"+e.class+(e.i+1),style:{fontSize:"1.2em"}},"First add ",e.ingredient):r.a.createElement("p",{className:"ingredient"+e.class+(e.i+1),style:{fontSize:"1.2em"}},"Then add ",e.ingredient)},y=n(13),w=n.n(y),E=[{name:"Felix Felicis",recipe:["a lacewing fly","beetle eyes","a drop of dragon blood","boomslang skin","beetle eyes","boomslang skin"],insult:"A cauldron full of liquid luck still wouldn't be enough to help you pass your potions final."},{name:"Draught of Living Death",recipe:["powdered bicorn horn","an eye of newt","boomslang skin","beetle eyes","an eye of newt"],insult:"Work faster or I'll be forced to feed a drop of this to your owl."},{name:"Polyjuice",recipe:["boomslang skin","a lacewing fly","powdered bicorn horn","an eye of newt","a drop of dragon blood","powdered bicorn horn"],insult:"Being anyone else is surely better than being you."},{name:"Veritaserum",recipe:["beetle eyes","powdered bicorn horn","an eye of newt","beetle eyes","a drop of dragon blood"],insult:"Maybe we'll test this one on you and see who really put troll bogeys on my shoes."},{name:"Amortentia",recipe:["boomslang skin","a lacewing fly","beetle eyes","a lacewing fly","powdered bicorn horn","beetle eyes"],insult:"Brew this one right and you might actually get someone to tolerate you."},{name:"Pepperup",recipe:["beetle eyes","powdered bicorn horn","a lacewing fly","an eye of newt","a drop of dragon blood"],insult:"I'm sick of seeing your face in my class, maybe this potion will help."},{name:"Confusion",recipe:["powdered bicorn horn","a lacewing fly","a drop of dragon blood","beetle eyes","an eye of newt"],insult:"Careful with this one, you can't afford to be more confused."},{name:"Invisibility",recipe:["an eye of newt","a lacewing fly","powdered bicorn horn","boomslang skin","a drop of dragon blood"],insult:"Rub some of this on your face so I don't have to look at it anymore"},{name:"Ageing",recipe:["a lacewing fly","a drop of dragon blood","an eye of newt","beetle eyes","powdered bicorn horn"],insult:"I can already tell you won't age gracefully."},{name:"Babbling Beverage",recipe:["a drop of dragon blood","beetle eyes","powdered bicorn horn","a drop of dragon blood","an eye of newt"],insult:"Do not test this potion, you spout enough nonsense already."},{name:"Calming Draught",recipe:["boomslang skin","an eye of newt","beetle eyes","boomslang skin","an eye of newt"],insult:"Dumbledore still refuses to let me add this to our student's pumpkin juice."},{name:"Dragon Tonic",recipe:["an eye of newt","powdered bicorn horn","beetle eyes","a drop of dragon blood","an eye of newt","powdered bicorn horn","a lacewing fly"],insult:"Maybe we'll let you give this to the dragon yourself and maybe you won't come back."},{name:"Rat Tonic",recipe:["a drop of dragon blood","a lacewing fly","beetle eyes","powdered bicorn horn","an eye of newt"],insult:"This works on other vermin, you for example."},{name:"Cure for Boils",recipe:["powdered bicorn horn","a drop of dragon blood","an eye of newt","a lacewing fly","powdered bicorn horn"],insult:"There will be no silly wand waving or foolish incantations in this class!"}],v=n(20),N=n.n(v),O=n(47),j=n.n(O),k=n(48),x=n.n(k),S=n(49),C=n.n(S),P=n(50),D=n.n(P),R=n(51),I=n.n(R),T=n(52),A=n.n(T),L=n(53),B=n.n(L),U=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).soundSwitch=function(){switch(n.props.currentSound){case"crinkle":return j.a;case"drip":return x.a;case"drop":return C.a;case"dust":return D.a;case"seeds":return I.a;case"sizzle":return A.a;case"bubbling":return B.a;default:return null}},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("audio",{ref:"audio_tag",src:this.soundSwitch(),autoPlay:!0,onEnded:function(){return e.props.resetSound()}}))}}]),t}(a.Component),G=Object(d.b)(function(e){return{currentSound:e.currentSound}},function(e){return{resetSound:function(){return e({type:"RESET_SOUND"})}}})(U),M=n(21),z=n.n(M),F=n(22),W=n.n(F),_=n(23),H=n.n(_),q=n(24),Y=n.n(q),V=n(25),J=n.n(V),K=n(26),Q=n.n(K),X=n(27),Z=n.n(X),$=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).random=function(e){return Math.floor(Math.random()*e)},n.newPotion=function(){var e=E[n.random(E.length)];return{name:e.name,recipe:e.recipe,insult:e.insult}},n.recordScore=function(){w.a.post("/scores/record",{username:n.props.username,points:n.props.score}).then(function(e){n.props.history.push("/gameover")}).catch(function(e){console.log(e)})},n.toggleClass=function(){"first"===n.state.class?n.setState(Object(g.a)({},n.state,{class:"second"})):"second"===n.state.class&&n.setState(Object(g.a)({},n.state,{class:"first"}))},n.check=function(e,t){if(e.length!==t.length)return!1;for(var n=e.length;n--;)if(e[n]!==t[n])return!1;return!0},n.brew=function(){var e=n.check(n.props.recipe,n.props.userPotion);if(!0===e){n.props.correct(),n.toggleClass();var t=n.newPotion();n.props.new(t)}else if(!1===e)n.recordScore();else{var a=n.newPotion();n.props.new(a)}},n.state={username:n.props.username,class:"first"},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.username?this.props.newGame():this.props.history.push("/")}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"d-flex flex-column mt-3"},r.a.createElement("div",{className:"snapesInstructions d-flex justify-content-between"},r.a.createElement("div",{className:"d-flex flex-row no-wrap ml-1"},r.a.createElement("img",{src:N.a,alt:"Severus Snape",style:{width:200,height:200}}),r.a.createElement("h3",{className:"align-self-center"},this.props.insult)),r.a.createElement("div",{className:"mt-5"},r.a.createElement("h2",{className:"score"},"Score:"),r.a.createElement("h2",{className:"score text-center"},this.props.score))),r.a.createElement("div",{id:"recipeAndIngredients",className:"d-flex justify-content-between"},r.a.createElement("div",{className:"recipe"},r.a.createElement("h4",{className:"text-center"},this.props.name),this.props.recipe.map(function(t,n){return r.a.createElement(b,{class:e.state.class,key:n,i:n,ingredient:t})})),r.a.createElement("div",{className:"d-flex flex-wrap",style:{width:400,height:470}},r.a.createElement("div",{className:"ml-5 mr-3 gameIngredient"},r.a.createElement("img",{className:"images",onClick:function(){return e.props.add("a drop of dragon blood","drip")},src:J.a,alt:"dragon blood",style:{width:150,height:150}})),r.a.createElement("div",{className:"mx-3 gameIngredient"},r.a.createElement("img",{className:"images",onClick:function(){return e.props.add("a lacewing fly","crinkle")},src:W.a,alt:"lacewing fly",style:{width:150,height:150}})),r.a.createElement("div",{className:"ml-5 mr-3  gameIngredient"},r.a.createElement("img",{className:"images",onClick:function(){return e.props.add("powdered bicorn horn","dust")},src:Y.a,alt:"bicorn horn",style:{width:150,height:150}})),r.a.createElement("div",{className:"mx-3 gameIngredient"},r.a.createElement("img",{className:"images",onClick:function(){return e.props.add("beetle eyes","seeds")},src:Q.a,alt:"beetle",style:{width:150,height:150}})),r.a.createElement("div",{className:"ml-5 mr-3  gameIngredient"},r.a.createElement("img",{className:"images",onClick:function(){return e.props.add("an eye of newt","drop")},src:Z.a,alt:"newt",style:{width:150,height:150}})),r.a.createElement("div",{className:"mx-3 gameIngredient"},r.a.createElement("img",{className:"images",onClick:function(){return e.props.add("boomslang skin","sizzle")},src:H.a,alt:"boomslang",style:{width:150,height:150}}))),r.a.createElement("img",{className:"images align-self-center",onClick:function(){return e.brew()},src:z.a,alt:"cauldron",style:{width:200,height:200}})),r.a.createElement(G,null))}}]),t}(a.Component),ee=Object(d.b)(function(e){return{name:e.name,recipe:e.recipe,insult:e.insult,username:e.username,score:e.score,userPotion:e.userPotion}},function(e){return{add:function(t,n){return e({type:"ADD",ingredient:t,currentSound:n})},correct:function(){return e({type:"CORRECT"})},newGame:function(){return e({type:"NEW_GAME"})},new:function(t){return e({type:"NEW",potion:t,currentSound:"bubbling"})}}})($),te=n(28),ne=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(e){e.preventDefault(),w.a.post("/users/logout").then(function(e){n.props.logout(),n.props.history.push("/")}).catch(function(e){console.log(e)})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"mt-5 mb-1"},r.a.createElement(te.a,{id:"dungeon",onClick:function(t){return e.handleClick(t)},icon:"dungeon",size:"3x",alt:"Logout",title:"Logout"}))}}]),t}(a.Component),ae=Object(d.b)(null,function(e){return{logout:function(){return e({type:"LOG_OUT"})}}})(Object(f.a)(ne)),re=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"header d-flex justify-content-around mx-5 mt-3"},r.a.createElement("img",{src:N.a,alt:"Severus Snape",style:{width:100,height:100}}),r.a.createElement("h1",{className:"mt-4 title"},"Remedial Potions"),r.a.createElement(ae,null))}}]),t}(a.Component),se=Object(d.b)(null,function(e){return{logout:function(){return e({type:"LOG_OUT"})}}})(re),oe=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleSubmitRegister=function(e){e.preventDefault(),w.a.post("/users/register",{username:n.state.username,password:n.state.password}).then(function(t){n.handleSubmitLogin(e)}).catch(function(e){console.log(e)})},n.handleChangeUser=function(e){n.setState(Object(g.a)({},n.state,{username:e.target.value}))},n.handleChangePass=function(e){n.setState(Object(g.a)({},n.state,{password:e.target.value}))},n.state={username:"",password:"",redirect:!1},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"handleSubmitLogin",value:function(e){var t=this;e.preventDefault(),w.a.post("/users/login",{username:this.state.username,password:this.state.password}).then(function(e){t.props.login(t.state.username),t.props.history.push("/rules")}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(se,null),r.a.createElement("div",{className:"mt-4"},r.a.createElement("div",{className:"d-flex flex-row align-content-between"},r.a.createElement("div",{className:"intro"},r.a.createElement("h3",null,"Professor Snape thinks you're bad enough at potions that hes willing to teach you one on one!"),r.a.createElement("p",null,"Well, actually he's not willing at all. He's doing this as a favor for Dumbledore."),r.a.createElement("p",null,"Your task is to brew up as many perfect potions as you can while doing your best to not let Snape...er...",r.a.createElement("i",null,"Professor")," Snape distract you with his insults."),r.a.createElement("p",null,"Professor Snape does not tolerate imperfection, one misstep and it's back to your common room!")),r.a.createElement("div",{className:"forms d-flex flex-column"},r.a.createElement("div",{className:"login"},r.a.createElement("div",{className:"m-auto"},r.a.createElement("h4",{className:"text-center"},"RETURNING USER:"),r.a.createElement("form",{className:"d-flex flex-row",onSubmit:function(t){return e.handleSubmitLogin(t)}},r.a.createElement("label",{className:"mx-1",htmlFor:"username"},"Username:"),r.a.createElement("input",{className:"rounded",style:{},type:"text",id:"username",name:"username",required:!0,onChange:function(t){return e.handleChangeUser(t)},value:this.state.username}),r.a.createElement("label",{className:"mx-1",htmlFor:"password"},"Password:"),r.a.createElement("input",{className:"rounded",type:"password",id:"password",name:"password",required:!0,onChange:function(t){return e.handleChangePass(t)},value:this.state.password}),r.a.createElement("input",{className:"rounded ml-1",type:"submit",value:"Login"})))),r.a.createElement("div",{className:"register align-self-center mt-3"},r.a.createElement("h4",{className:"text-center"},"NEW USER REGISTRATION:"),r.a.createElement("form",{className:"d-flex flex-column",onSubmit:function(t){return e.handleSubmitRegister(t)}},r.a.createElement("label",{className:"mx-1",htmlFor:"newUsername"},"Username:"),r.a.createElement("input",{className:"rounded",type:"text",id:"newUsername",name:"username",required:!0,onChange:function(t){return e.handleChangeUser(t)},value:this.state.username}),r.a.createElement("label",{className:"mx-1 mt-3",htmlFor:"newPassword"},"Password:"),r.a.createElement("input",{className:"rounded",type:"password",id:"newPassword",name:"password",required:!0,onChange:function(t){return e.handleChangePass(t)},value:this.state.password}),r.a.createElement("input",{className:"rounded align-self-center mt-2",type:"submit",value:"Register"})))))))}}]),t}(a.Component),ce=Object(d.b)(function(e){return{username:e.username}},function(e){return{login:function(t){return e({type:"LOGIN",username:t})}}})(Object(f.a)(oe)),le=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.username||this.props.history.push("/")}},{key:"handleClick",value:function(){this.props.history.push("/game")}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(se,null),r.a.createElement("div",{className:"d-flex flex-row justify-content-between mx-5 mt-4"},r.a.createElement("div",null,r.a.createElement("h4",null,"Rules:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Follow Snape's instructions exactly!"),r.a.createElement("li",null,"Work quickly before he erases the board."),r.a.createElement("li",null,"Try not to get distracted by his insults.")),r.a.createElement("img",{onClick:function(){return e.handleClick()},className:"images mt-5 ml-5 mb-2",src:z.a,alt:"cauldron",style:{width:200,height:200}}),r.a.createElement("h2",null,"Lets Brew Some Potions!")),r.a.createElement("div",null,r.a.createElement("h3",{className:"text-center"},"Ingredients"),r.a.createElement("div",{className:"d-flex flex-wrap",style:{width:400,height:400}},r.a.createElement("div",{className:"m-2"},r.a.createElement("p",{className:"text-center"},"Dragon Blood"),r.a.createElement("img",{className:"images",src:J.a,alt:"dragon blood",style:{width:100,height:100}})),r.a.createElement("div",{className:"m-2"},r.a.createElement("p",{className:"text-center"},"Lacewing Fly"),r.a.createElement("img",{className:"images",src:W.a,alt:"lacewing fly",style:{width:100,height:100}})),r.a.createElement("div",{className:"m-2"},r.a.createElement("p",{className:"text-center"},"Bicorn Horn"),r.a.createElement("img",{className:"images",src:Y.a,alt:"bicorn horn",style:{width:100,height:100}})),r.a.createElement("div",{className:"m-2"},r.a.createElement("p",{className:"text-center"},"Beetle Eyes"),r.a.createElement("img",{className:"images",src:Q.a,alt:"beetle",style:{width:100,height:100}})),r.a.createElement("div",{className:"m-2"},r.a.createElement("p",{className:"text-center"},"Eye of Newt"),r.a.createElement("img",{className:"images",src:Z.a,alt:"newt",style:{width:100,height:100}})),r.a.createElement("div",{className:"m-2"},r.a.createElement("p",{className:"text-center"},"Boomslang Skin"),r.a.createElement("img",{className:"images",src:H.a,alt:"boomslang",style:{width:100,height:100}}))))))}}]),t}(a.Component),ie=Object(d.b)(function(e){return{username:e.username}},null)(le),ue=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).scoreRanking=function(){var e=n.props.score;return e<50?"Neville Longbottom":e>=50&&e<90?"Draco Malfoy":e>=90&&e<120?"Horace Slughorn":e>=120&&e<150?"Hermione Granger":e>=150?"the Half Blood Prince":void 0},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.username||this.props.history.push("/")}},{key:"handleClick",value:function(e){this.props.history.push(e)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(se,null),r.a.createElement("h2",{className:"mt-5"},"Professor Snape knew you couldn't do it, ",this.props.username,"!"),r.a.createElement("h3",{className:"gameOver"},"Your Score: ",this.props.score),r.a.createElement("h4",{className:"gameOver mb-5"},"Your skills are at the level of ",this.scoreRanking()),r.a.createElement("div",{className:"d-flex justify-content-around mt-5"},r.a.createElement("h4",{className:"newPage",onClick:function(){return e.handleClick("/highscores")}},"View All Time High Scores"),r.a.createElement("h4",{className:"newPage",onClick:function(){return e.handleClick("/userscores")}},"View Your Best Scores"),r.a.createElement("h4",{className:"newPage",onClick:function(){return e.handleClick("/game")}},"Play Again")))}}]),t}(a.Component),me=Object(d.b)(function(e){return{username:e.username,score:e.score}},null)(ue),de=n(17),pe=n.n(de),he=n(31),fe=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={highScores:[]},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.username?this.getScores():this.props.history.push("/")}},{key:"getScores",value:function(){var e=Object(he.a)(pe.a.mark(function e(){var t;return pe.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("/scores/highscores");case 2:t=e.sent,console.log(t.data),this.setState(Object(g.a)({},this.state,{highScores:t.data}));case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"handleClick",value:function(e){this.props.history.push(e)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"mt-5"},r.a.createElement(se,null),this.state.highScores.map(function(e,t){return 0===t?r.a.createElement("div",{key:t,className:"m-5"},r.a.createElement("h3",null,e.username," has the high score of ",e.points)):r.a.createElement("div",{key:t,className:"d-flex flex-row"},r.a.createElement("h4",null,e.username),r.a.createElement("p",null,"scored ",e.points," for their house"))}),r.a.createElement("div",{className:"d-flex justify-content-around mt-5"},r.a.createElement("h4",{className:"newPage",onClick:function(){return e.handleClick("/userscores")}},"View Your Best Scores"),r.a.createElement("h4",{className:"newPage",onClick:function(){return e.handleClick("/game")}},"Play Again")))}}]),t}(a.Component),ge=Object(d.b)(function(e){return{username:e.username}},null)(fe),be=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={highScores:[]},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.username?this.getScores():this.props.history.push("/")}},{key:"getScores",value:function(){var e=Object(he.a)(pe.a.mark(function e(){var t;return pe.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("/scores/user/".concat(this.props.username));case 2:t=e.sent,console.log(t.data),this.setState(Object(g.a)({},this.state,{highScores:t.data}));case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"handleClick",value:function(e){this.props.history.push(e)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"mt-5"},r.a.createElement(se,null),this.state.highScores.map(function(e,t){return 0===t?r.a.createElement("div",{key:t,className:"best mt-5"},r.a.createElement("h4",null,e.username,","),r.a.createElement("h5",null,"Your best score is ",e.points)):r.a.createElement("div",{key:t},r.a.createElement("p",null,"you scored ",e.points," points for your house"))}),r.a.createElement("div",{className:"d-flex justify-content-around mt-5"},r.a.createElement("h4",{className:"newPage",onClick:function(){return e.handleClick("/highscores")}},"View All Time High Scores"),r.a.createElement("h4",{className:"newPage",onClick:function(){return e.handleClick("/game")}},"Play Again")))}}]),t}(a.Component),ye=Object(d.b)(function(e){return{username:e.username}},null)(be),we=n(14),Ee=n(56),ve=n.n(Ee),Ne=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={play:!1},n.audio=new Audio(ve.a),n.audio.addEventListener("ended",function(){this.currentTime=0,this.play()},!1),n.togglePlay=n.togglePlay.bind(Object(we.a)(Object(we.a)(n))),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"togglePlay",value:function(){var e=this.state.play;this.setState({play:!e}),e?this.audio.pause():this.audio.play()}},{key:"render",value:function(){return r.a.createElement("div",{className:"align-self-start"},r.a.createElement(te.a,{id:"music",onClick:this.togglePlay,icon:this.state.play?"pause":"music",size:"2x",alt:"theme",title:"theme"}))}}]),t}(a.Component),Oe=(n(93),n(18)),je=n(32);Oe.b.add(je.a,je.b,je.c);var ke=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p.a,null,r.a.createElement(h.a,{exact:!0,path:"/",component:ce}),r.a.createElement(h.a,{path:"/rules",component:ie}),r.a.createElement(h.a,{path:"/game",component:ee}),r.a.createElement(h.a,{path:"/gameover",component:me}),r.a.createElement(h.a,{path:"/userscores",component:ye}),r.a.createElement(h.a,{path:"/highscores",component:ge}),r.a.createElement(h.a,{path:"/logout",component:ae})),r.a.createElement("div",{className:"footer"},r.a.createElement(Ne,null),r.a.createElement("p",{className:"text-center"},"Copyright 2019 by WitchScript")))}}]),t}(a.Component),xe=Object(f.a)(Object(d.b)(function(e){return{name:e.name,recipe:e.recipe,username:e.username,score:e.score,userPotion:e.userPotion}},null)(ke)),Se={name:"Cure For Boils",recipe:["powdered bicorn horn","a drop of dragon blood","an eye of newt"],insult:"There will be no silly wand waving or foolish incantations in this class!",username:"",score:0,userPotion:[],currentSound:""},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.ingredient,r=t.username,s=t.potion,o=t.currentSound;return"ADD"===n?Object(g.a)({},e,{currentSound:o,userPotion:e.userPotion.concat(a)}):"CORRECT"===n?Object(g.a)({},e,{score:e.score+10,userPotion:[]}):"NEW_GAME"===n?Object(g.a)({},e,{score:0,userPotion:[],currentSound:""}):"LOGIN"===n?Object(g.a)({},e,{username:r}):"NEW"===n?Object(g.a)({},e,{name:s.name,recipe:s.recipe,insult:s.insult,userPotion:[],currentSound:o}):"LOG_OUT"===n?Object(g.a)({},e,{username:""}):"RESET_SOUND"===n?Object(g.a)({},e,{currentSound:""}):e},Pe=n(19),De=n(96),Re=Object(Pe.b)(Ce);o.a.render(r.a.createElement(d.a,{store:Re},r.a.createElement(De.a,null,r.a.createElement(xe,null))),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.348ab727.chunk.js.map