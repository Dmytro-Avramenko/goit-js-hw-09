const t={body:document.querySelector("body"),startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")};let e=null;t.startBtn.addEventListener("click",(()=>{e=setInterval((()=>{t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.startBtn.disabled=!0,console.log("раз на секунду змінює колір фону",t.startBtn)})),t.stopBtn.addEventListener("click",(()=>{clearInterval(e),t.startBtn.disabled=!1}));
//# sourceMappingURL=01-color-switcher.8e211229.js.map