const t={body:document.querySelector("body"),startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")};function e(){t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}t.startBtn.addEventListener("click",(()=>{o.start()})),t.stopBtn.addEventListener("click",(()=>{o.stop()}));const o={intervalId:null,isActive:!1,start(){if(this.isActive)return;Date.now();this.isActive=!0,this.intervalId=setInterval((()=>{const t=e();console.log("раз на секунду змінює колір фону",t)}),1e3)},stop(){clearInterval(this.intervalId),this.isActive=!1}};
//# sourceMappingURL=01-color-switcher.1ed83cfb.js.map