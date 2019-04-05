(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),l=a.n(c),o=(a(15),a(6)),i=a(1),s=a(2),u=a(4),m=a(3),h=a(5),d=function(e){var t=e.players.reduce(function(e,t){return e+t.score},0),a=e.players.length;return r.a.createElement("table",{className:"stats"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Players:"),r.a.createElement("td",null,a)),r.a.createElement("tr",null,r.a.createElement("td",null,"Total Points:"),r.a.createElement("td",null,t))))},p=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={isRunning:!1,totalTime:0},a.tick=function(){a.state.isRunning&&a.setState({totalTime:a.state.totalTime+1})},a.handleStart=function(){a.setState({isRunning:!a.state.isRunning})},a.handleReset=function(){a.setState({totalTime:0,isRunning:!1})},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.clockId=setInterval(this.tick,100)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"render",value:function(){return r.a.createElement("div",{className:"stopwatch"},r.a.createElement("h2",null,"Stopwatch"),r.a.createElement("span",{className:"stopwatch-time"},this.state.totalTime),r.a.createElement("button",{onClick:this.handleStart},this.state.isRunning?"Stop":"Start"),r.a.createElement("button",{onClick:this.handleReset},"Reset"))}}]),t}(n.Component),f=function(e){var t=e.title,a=e.players;return r.a.createElement("header",null,r.a.createElement(d,{players:a}),r.a.createElement("h1",null,t),r.a.createElement(p,null))},y=[{name:"Andrei",score:0,id:0},{name:"Mihai",score:0,id:1},{name:"Laura",score:0,id:2},{name:"Octav",score:0,id:3}],v=function(e){var t=e.changeScore,a=e.id,n=e.score;return r.a.createElement("div",{className:"counter"},r.a.createElement("button",{className:"counter-action decrement",onClick:function(){return t(a,-1)}}," - "),r.a.createElement("span",{className:"counter-score"},n),r.a.createElement("button",{className:"counter-action increment",onClick:function(){return t(a,1)}}," + "))},b=function(e){return r.a.createElement("svg",{viewBox:"0 0 44 35",className:e.isHighScore?"is-high-score":null},r.a.createElement("path",{d:"M26.7616 10.6207L21.8192 0L16.9973 10.5603C15.3699 14.1207 10.9096 15.2672 7.77534 12.9741L0 7.24138L6.56986 28.8448H37.0685L43.5781 7.72414L35.7425 13.0948C32.6685 15.2672 28.3288 14.0603 26.7616 10.6207Z",transform:"translate(0 0.301727)"}),r.a.createElement("rect",{width:"30.4986",height:"3.07759",transform:"translate(6.56987 31.5603)"}))},g=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.removePlayer,a=e.isHighScore,n=e.name,c=e.score,l=e.changeScore,o=e.id;return console.log(n+" rendered"),r.a.createElement("div",{className:"player"},r.a.createElement("span",{className:"player-name"},r.a.createElement("button",{className:"remove-player",onClick:function(){return t(o)}},"\u2716"),r.a.createElement(b,{isHighScore:a}),n),r.a.createElement(v,{score:c,changeScore:l,id:o}))}}]),t}(r.a.PureComponent),E=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={value:""},a.handleChange=function(e){a.setState({value:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.state.value&&(a.props.addPlayer(a.state.value),a.setState({value:""}))},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",placeholder:"Add a new player",value:this.state.value,onChange:this.handleChange}),r.a.createElement("input",{type:"submit",value:"Add Player"}))}}]),t}(n.Component),S=(a(16),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={players:y},a.getHighScore=function(){var e=a.state.players.map(function(e){return e.score}),t=Math.max.apply(Math,Object(o.a)(e));return t||null},a.handleChangeScore=function(e,t){a.setState(function(a){return{players:a.players.map(function(a){return a.id!==e?a:Object.assign(a,{score:a.score+t})})}})},a.handleRemovePlayer=function(e){a.setState(function(t){return{players:t.players.filter(function(t){return t.id!==e})}})},a.handleAddPlayer=function(e){a.setState(function(t){return{players:[].concat(Object(o.a)(t.players),[{name:e,id:1+Math.max.apply(Math,Object(o.a)(a.state.players.map(function(e){return e.id}))),score:0}])}})},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.getHighScore();return r.a.createElement("div",{className:"scoreboard"},r.a.createElement(f,{title:"Scoreboard",players:this.state.players}),this.state.players.map(function(a){return r.a.createElement(g,{name:a.name,id:a.id,key:a.id.toString(),removePlayer:e.handleRemovePlayer,changeScore:e.handleChangeScore,score:a.score,isHighScore:t===a.score})}),r.a.createElement(E,{addPlayer:this.handleAddPlayer}))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.7e99fa7e.chunk.js.map