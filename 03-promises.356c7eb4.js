!function(){var n=document.querySelector("form");n.addEventListener("submit",(function(a){a.preventDefault(),function(n){for(var a=n.delay,c=n.step,u=n.amount,i=0;i<u;i+=1)e(i+1,a+c*i).then((function(n){var t=n.position,e=n.delay;o+=1,console.log("".concat(t,"/").concat(u,": ВЫПОЛНЕН №_").concat(o," с задержкой ").concat(e," ms"))})).catch((function(n){var o=n.position,e=n.delay;t+=1,console.log("".concat(o,"/").concat(u,": ОТКЛОНЕН №_").concat(t," с задержкой ").concat(e," ms"))}))}((c=n.elements,u=c.delay,i=c.step,r=c.amount,{delay:Number(u.value),step:Number(i.value),amount:Number(r.value)}));var c,u,i,r}));var o=0,t=0;function e(n,o){var t=Math.random()>.3;return new Promise((function(e,a){setTimeout((function(){t?e({position:n,delay:o}):a({position:n,delay:o})}),o)}))}}();
//# sourceMappingURL=03-promises.356c7eb4.js.map