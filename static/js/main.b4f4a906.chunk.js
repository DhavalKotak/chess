(this.webpackJsonpchess=this.webpackJsonpchess||[]).push([[0],{101:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),c=n(55),o=n.n(c),a=(n(37),n(12)),s=n(1),u=function(e){return e.number%2===0?Object(s.jsx)("div",{className:"tile black-tiles",children:e.image&&Object(s.jsx)("div",{style:{backgroundImage:"url(".concat(e.image,")")},className:"piece ".concat(e.color)})}):Object(s.jsx)("div",{className:"tile white-tiles",children:e.image&&Object(s.jsx)("div",{style:{backgroundImage:"url(".concat(e.image,")")},className:"piece ".concat(e.color)})})},f=n(56),l=Object(f.io)("https://react-chess-backend.herokuapp.com/");l.on("updateBoard",(function(e){return e}));for(var p=n(22),h=new function e(){var t=this;Object(p.a)(this,e),this.isAnyPieceBetween=function(e,t,n,i,r,c){if("rook"===i||"queen"===i){if(r>e)for(var o=function(e){if(n.find((function(n){return n.x===e&&n.y===t})))return{v:!0}},a=r-1;a>e;a--){var s=o(a);if("object"===typeof s)return s.v}else if(r<e)for(var u=function(e){if(n.find((function(n){return n.x===e&&n.y===t})))return{v:!0}},f=r+1;f<e;f++){var l=u(f);if("object"===typeof l)return l.v}if(c>t)for(var p=function(t){if(n.find((function(n){return n.y===t&&n.x===e})))return{v:!0}},h=c-1;h>t;h--){var d=p(h);if("object"===typeof d)return d.v}else if(c<t)for(var g=function(t){if(n.find((function(n){return n.y===t&&n.x===e})))return{v:!0}},b=c+1;b<t;b++){var v=g(b);if("object"===typeof v)return v.v}}else if("bishop"===i||"queen"===i)if(r>e&&c>t)for(var j=function(e,t){if(n.find((function(n){return n.x===e&&n.y===t})))return m=t,y=e,{v:!0};e--,t--,y=e,m=t},y=r-1,m=c-1;y>e&&m>t;){var O=j(y,m);if("object"===typeof O)return O.v}else if(r<e&&c>t)for(var x=function(e,t){if(n.find((function(n){return n.x===e&&n.y===t})))return k=t,w=e,{v:!0};e++,t--,w=e,k=t},w=r+1,k=c-1;w<e&&k>t;){var S=x(w,k);if("object"===typeof S)return S.v}else if(r>e&&c<t)for(var q=function(e,t){if(n.find((function(n){return n.x===e&&n.y===t})))return P=t,M=e,{v:!0};e--,t++,M=e,P=t},M=r-1,P=c+1;M>e&&P<t;){var I=q(M,P);if("object"===typeof I)return I.v}else for(var W=function(e,t){if(n.find((function(n){return n.x===e&&n.y===t})))return N=t,L=e,{v:!0};e++,t++,L=e,N=t},L=r+1,N=c+1;L<e&&N<t;){var B=W(L,N);if("object"===typeof B)return B.v}return!1},this.isSquareOccupied=function(e,t,n){return!!n.find((function(n){return n.x===e&&n.y===t}))},this.isEnPassant=function(e,t,n,i,r,c,o){if("pawn"===r){var a="w"===c?1:-1;if((n-e===-1||n-e===1)&&i-t===a)if(o.find((function(e){return e.x===n&&e.y===i-a&&e.enPassant})))return!0}return!1},this.isOpponent=function(e,t,n,i){return!!n.find((function(n){return n.x===e&&n.y===t&&n.color!==i}))},this.validMove=function(e,n,i,r,c,o,a){if("pawn"===c){var s="w"===o?1:-1;if(e===i&&n===("w"===o?1:6)&&r-n===2*s){if(!t.isSquareOccupied(i,r,a)&&!t.isSquareOccupied(i,r-s,a))return!0}else if(e===i&&r-n===s){if(!t.isSquareOccupied(i,r,a))return!0}else if(i-e===1&&r-n===s){if(t.isOpponent(i,r,a,o))return!0}else if(i-e===-1&&r-n===s&&t.isOpponent(i,r,a,o))return!0}else if("bishop"===c){if(Math.abs(e-i)===Math.abs(n-r)&&!t.isAnyPieceBetween(i,r,a,c,e,n)){if(!t.isSquareOccupied(i,r,a))return!0;if(t.isOpponent(i,r,a,o))return!0}}else if("rook"===c){if((e!==i&&n===r||e===i&&n!==r)&&!t.isAnyPieceBetween(i,r,a,c,e,n)){if(!t.isSquareOccupied(i,r,a))return!0;if(t.isOpponent(i,r,a,o))return!0}}else if("knight"===c){if(e-i===2||e-i===-2){if(n-r===1||n-r===-1){if(!t.isSquareOccupied(i,r,a))return!0;if(t.isOpponent(i,r,a,o))return!0}}else if((n-r===2||n-r===-2)&&(e-i===1||e-i===-1)){if(!t.isSquareOccupied(i,r,a))return!0;if(t.isOpponent(i,r,a,o))return!0}}else if("queen"===c){if(Math.abs(i-e)===Math.abs(r-n)){if(!t.isAnyPieceBetween(i,r,a,c,e,n)){if(!t.isSquareOccupied(i,r,a))return!0;if(t.isOpponent(i,r,a,o))return!0}}else if((e!==i&&n===r||e===i&&n!==r)&&!t.isAnyPieceBetween(i,r,a,c,e,n)){if(!t.isSquareOccupied(i,r,a))return!0;if(t.isOpponent(i,r,a,o))return!0}}else if("king"===c){if(e-i===1||i-e===1){if(!t.isSquareOccupied(i,r,a))return!0;if(t.isOpponent(i,r,a,o))return!0}if(n-r===1||r-n===1){if(!t.isSquareOccupied(i,r,a))return!0;if(t.isOpponent(i,r,a,o))return!0}}return!1}},d=["a","b","c","d","e","f","g","h"],g=["1","2","3","4","5","6","7","8"],b=[],v=0;v<2;v++){var j=0===v?"w":"b",y=0===v?0:7;b.push({image:"img/".concat(j,"-king.png"),x:4,y:y,type:"king",color:j}),b.push({image:"img/".concat(j,"-queen.png"),x:3,y:y,type:"queen",color:j}),b.push({image:"img/".concat(j,"-bishop.png"),x:5,y:y,type:"bishop",color:j}),b.push({image:"img/".concat(j,"-bishop.png"),x:2,y:y,type:"bishop",color:j}),b.push({image:"img/".concat(j,"-knight.png"),x:6,y:y,type:"knight",color:j}),b.push({image:"img/".concat(j,"-knight.png"),x:1,y:y,type:"knight",color:j}),b.push({image:"img/".concat(j,"-rook.png"),x:7,y:y,type:"rook",color:j}),b.push({image:"img/".concat(j,"-rook.png"),x:0,y:y,type:"rook",color:j})}for(var m=0;m<9;m++)b.push({image:"img/b-pawn.png",x:m,y:6,type:"pawn",color:"b"});for(var O=0;O<9;O++)b.push({image:"img/w-pawn.png",x:O,y:1,type:"pawn",color:"w"});var x=function(){l.on("updateBoard",(function(e){k(e)}));for(var e=Object(i.useState)(null),t=Object(a.a)(e,2),n=t[0],r=t[1],c=Object(i.useState)(0),o=Object(a.a)(c,2),f=o[0],p=o[1],v=Object(i.useState)(0),j=Object(a.a)(v,2),y=j[0],m=j[1],O=Object(i.useState)(b),x=Object(a.a)(O,2),w=x[0],k=x[1],S=Object(i.useState)("w"),q=Object(a.a)(S,2),M=q[0],P=q[1],I=Object(i.useRef)(null),W=function(e){var t=I.current;if(n&&t){var i=Math.floor((e.clientX-t.offsetLeft)/(t.clientWidth/8)),c=Math.abs(Math.ceil((e.clientY-t.offsetTop-t.clientWidth)/(t.clientWidth/8))),o=w.find((function(e){return e.x===f&&e.y===y}));if(o){var a=h.validMove(f,y,i,c,o.type,o.color,w),s=h.isEnPassant(f,y,i,c,o.type,o.color,w),u="w"===o.color?1:-1;if(s&&o.color===M){var p=w.reduce((function(e,t){return t.x===f&&t.y===y?(t.enPassant=!1,t.x=i,t.y=c,e.push(t)):t.x===i&&t.y===c-u||("pawn"===t.type&&(t.enPassant=!1),e.push(t)),e}),[]);k(p),P("w"===M?"b":"w");var d=window.sessionStorage.getItem("gameId");l.emit("move",d,p)}else if(a&&o.color===M){var g=w.reduce((function(e,t){return t.y===y&&t.x===f?(2===Math.abs(y-c)&&"pawn"===t.type?t.enPassant=!0:t.enPassant=!1,t.x=i,t.y=c,"pawn"!==t.type||0!==t.y&&7!==t.y||(t.type="queen",t.image="img/".concat(t.color,"-queen.png")),e.push(t)):t.x===i&&t.y===c||("pawn"===t.type&&(t.enPassant=!1),e.push(t)),e}),[]);k(g),P("w"===M?"b":"w");var b=window.sessionStorage.getItem("gameId");l.emit("move",b,g)}else n.style.position="relative",n.style.removeProperty("top"),n.style.removeProperty("left")}r(null)}},L=[],N=function(e){for(var t=function(t){var n=t+e+2,i=void 0,r="";w.forEach((function(n){n.x===t&&n.y===e&&(i=n.image,r=n.color)})),L.push(Object(s.jsx)(u,{number:n,image:i,color:r},d[t]+g[e]))},n=0;n<d.length;n++)t(n)},B=g.length-1;B>=0;B--)N(B);return Object(s.jsx)("div",{className:"board",onMouseDown:function(e){return function(e){var t=I.current;if(e.target.classList.contains("piece")&&t&&e.target.classList.contains("".concat(M))){p(Math.floor((e.clientX-t.offsetLeft)/(t.clientWidth/8))),m(Math.abs(Math.ceil((e.clientY-t.offsetTop-t.clientWidth)/(t.clientWidth/8))));var n=e.clientX-e.target.clientWidth/2,i=e.clientY-e.target.clientHeight/2;e.target.style.position="absolute",e.target.style.top="".concat(i,"px"),e.target.style.left="".concat(n,"px")}else W(e);r(e.target)}(e)},onMouseMove:function(e){return function(e){var t=I.current;if(n&&n.classList.contains("piece")&&t&&e.target.classList.contains("".concat(M))){var i=t.offsetLeft,r=t.offsetTop,c=t.clientWidth+t.offsetLeft-t.clientWidth/8,o=t.clientHeight+t.offsetTop-t.clientHeight/8,a=e.clientX-e.target.clientWidth/2,s=e.clientY-e.target.clientHeight/2;n.style.position="absolute",n.style.left="".concat(a<i?i:a>c?c:a,"px"),n.style.top="".concat(s<r?r:s>o?o:s,"px")}}(e)},onMouseUp:function(e){return W(e)},ref:I,children:L})},w=n(24),k=n(2),S=n(57),q=n(16),M=n(61),P=n(60),I=n(58),W=n(35),L=function(e){Object(M.a)(n,e);var t=Object(P.a)(n);function n(){var e;return Object(p.a)(this,n),(e=t.call(this)).create=function(){l.emit("createRoom",""),l.on("generateId",(function(t){e.setState({gameId:t})}))},e.join=function(){var t=function(e){return window.sessionStorage.setItem("gameId",e),l.emit("join",e),e}(e.id.current.value);e.setState({gameId:t})},e.state={gameId:""},e.join=e.join.bind(Object(q.a)(e)),e.create=e.create.bind(Object(q.a)(e)),e.id=r.a.createRef(null),e}return Object(S.a)(n,[{key:"render",value:function(){return Object(s.jsx)(r.a.Fragment,{children:Object(s.jsxs)(I.a,{className:"text-center",children:[Object(s.jsx)("h1",{children:"Welcome to Chess"}),Object(s.jsx)("h2",{children:Object(s.jsx)(W.a,{variant:"success",className:"w-100",onClick:this.create,children:"Create Room"})}),Object(s.jsx)("div",{children:this.state.gameId}),Object(s.jsx)(w.b,{to:this.state.gameId?"/game":"/",children:Object(s.jsx)("h2",{children:Object(s.jsx)(W.a,{variant:"primary",className:"w-100",onClick:this.join,children:"Join Room"})})}),Object(s.jsx)("input",{type:"text",className:"w-100",ref:this.id})]})})}}]),n}(i.Component);var N=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(w.a,{basename:window.location.pathname||"",children:Object(s.jsxs)(k.c,{children:[Object(s.jsx)(k.a,{exact:!0,path:"/",component:L}),Object(s.jsx)(k.a,{path:"/game",component:x})]})})})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,102)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),i(e),r(e),c(e),o(e)}))};o.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(N,{})}),document.getElementById("root")),B()},37:function(e,t,n){}},[[101,1,2]]]);
//# sourceMappingURL=main.b4f4a906.chunk.js.map