!function(){var t={body:document.querySelector("body"),startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")};function n(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}t.startBtn.addEventListener("click",(function(){o.start()})),t.stopBtn.addEventListener("click",(function(){o.stop()}));var o={intervalId:null,isActive:!1,start:function(){if(!this.isActive){Date.now();this.isActive=!0,this.intervalId=setInterval((function(){var t=n();console.log("раз на секунду змінює колір фону",t)}),1e3)}},stop:function(){clearInterval(this.intervalId),this.isActive=!1}}}();
//# sourceMappingURL=01-color-switcher.a140ac6a.js.map
