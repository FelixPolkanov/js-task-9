!function(){var t,e=document.querySelector("[data-start]"),o=document.querySelector("[data-stop]"),n=document.querySelector("body");function r(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}e.addEventListener("click",(function(){e.setAttribute("disabled",!0),t=setInterval((function(){n.style.backgroundColor=r(),console.log("backgroundColor: ",r())}),1e3)})),o.addEventListener("click",(function(){clearInterval(t),e.removeAttribute("disabled"),console.log("off")}))}();
//# sourceMappingURL=01-color-switcher.5887a0de.js.map