const midiv=document.getElementById("div1")
const midiv2=document.getElementById("div2")

function cambiar(){
    midiv.setAttribute("style","transform: perspective(900px) rotatey(180deg);")
    midiv2.setAttribute("style","transform: perspective(900px) rotatey(360deg);")}

function cambiar2(){
    midiv2.setAttribute("style","transform:  perspective(900px) rotatey(180deg);")
    midiv.setAttribute("style","transform: perspective(900px) rotatey(360deg);")}