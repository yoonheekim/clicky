(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,image:"https://raw.githubusercontent.com/yoonheekim/clicky/master/public/images/1.jpg",clicked:!1},{id:2,image:"https://raw.githubusercontent.com/yoonheekim/clicky/master/public/images/2.jpg",clicked:!1},{id:3,image:"https://raw.githubusercontent.com/yoonheekim/clicky/master/public/images/3.jpg",clicked:!1},{id:4,image:"https://raw.githubusercontent.com/yoonheekim/clicky/master/public/images/4.jpg",clicked:!1},{id:5,image:"https://raw.githubusercontent.com/yoonheekim/clicky/master/public/images/5.jpg",clicked:!1},{id:6,image:"https://raw.githubusercontent.com/yoonheekim/clicky/master/public/images/6.jpg",clicked:!1},{id:7,image:"https://raw.githubusercontent.com/yoonheekim/clicky/master/public/images/7.jpg",clicked:!1},{id:8,image:"https://raw.githubusercontent.com/yoonheekim/clicky/master/public/images/8.jpg",clicked:!1},{id:9,image:"https://raw.githubusercontent.com/yoonheekim/clicky/master/public/images/9.jpg",clicked:!1},{id:10,image:"https://raw.githubusercontent.com/yoonheekim/clicky/master/public/images/10.jpg",clicked:!1},{id:11,image:"https://raw.githubusercontent.com/yoonheekim/clicky/master/public/images/11.jpg",clicked:!1},{id:12,image:"https://raw.githubusercontent.com/yoonheekim/clicky/master/public/images/12.jpg",clicked:!1}]},,,,,,,,function(e,t,a){e.exports=a(19)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(0),i=a.n(c),n=a(3),r=a.n(n),s=(a(15),a(4)),m=a(5),o=a(7),l=a(6),u=a(8);a(16);var g=function(e){return i.a.createElement("div",{className:"container "},i.a.createElement("div",{className:"row "},e.children))},d=a(1);a(17);var p=function(e){return i.a.createElement("div",{className:"col-md-3"},i.a.createElement("div",{className:"card grow",onClick:function(){return e.clickedCard(e.id)}},i.a.createElement("img",{src:e.image,className:"card-img",alt:e.id})))};a(18);var h=function(e){return i.a.createElement("nav",{className:"navbar navbar-dark bg-primary"},i.a.createElement("a",{className:"navbar-brand",href:"/"},i.a.createElement("i",{className:"fas fa-mouse-pointer mr-3"}),"Clicky Game"),i.a.createElement("li",{className:"navbar nav-item"},i.a.createElement("h2",{className:"text-white"},e.message)),i.a.createElement("li",{className:"navbar nav-item"},i.a.createElement("h5",{className:"text-white"},"Score: ",e.score," | Top Score: ",e.topScore)))},k=function(e){function t(){var e,a;Object(s.a)(this,t);for(var c=arguments.length,i=new Array(c),n=0;n<c;n++)i[n]=arguments[n];return(a=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).state={message:"Click an image to begin!",images:d,unclickedImages:d,score:0,topScore:0},a.clickedCard=function(e){a.state.unclickedImages.find(function(t){return t.id===e})?a.setState({score:a.state.score+1,unclickedImages:a.state.images.filter(function(t){return t.id!==e}),message:"You guessed correctly!"}):a.setState({message:"You guessed incorrectly!",unclickedImages:a.state.images,score:0,topScore:a.state.score>a.state.topScore?a.state.score:a.state.topScore})},a.shuffleArray=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),c=e[t];e[t]=e[a],e[a]=c}return e},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"App"},i.a.createElement("header",null,i.a.createElement(h,{message:this.state.message,score:this.state.score,topScore:this.state.topScore})),i.a.createElement("div",{className:"jumbotron jumbotron-fluid"},i.a.createElement("div",{className:"container"},i.a.createElement("h1",{className:"display-4"},"Puppy Clicky Game!"),i.a.createElement("p",{className:"lead"},"Click on an image to earn points, but don't click on any more than once!"))),i.a.createElement(g,null,this.shuffleArray(this.state.images).map(function(t){return i.a.createElement(p,{clickedCard:e.clickedCard,image:t.image,id:t.id})})),i.a.createElement("footer",{className:"bg-primary text-white p-4 mt-5"},i.a.createElement("div",{className:"container "},i.a.createElement("div",{className:"bottom"},"Puppy Clicky Game! by ",i.a.createElement("span",{className:"badge badge-warning"},"Yoonhee")))))}}]),t}(c.Component);r.a.render(i.a.createElement(k,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.7e288a5b.chunk.js.map