
 function btn(res)  { 
    document.getElementById("result").value += res 
} 
           
 function solve() { 
    let x = document.getElementById("result").value 
    let y = eval(x) 
    document.getElementById("result").value = y 
} 
           
 function clr() { 
    document.getElementById("result").value = "" 
} 
