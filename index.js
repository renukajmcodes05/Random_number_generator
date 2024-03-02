//use math functions

const bt=document.getElementById("bt");
const lb=document.getElementById("lb");

let random;

bt.onclick=function(){
    random=Math.floor(Math.random()*10)+1;
    lb.textContent=random;
    console.log("hoi");
}