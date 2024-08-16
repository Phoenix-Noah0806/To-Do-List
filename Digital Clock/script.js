let hrs=document.getElementById("hrs");
let min=document.getElementById("min");
let sec=document.getElementById("sec");
setInterval(()=>{
    let curTime=new Date();
    hrs.innerHTML=(curTime.getHours()<10?"0":"")+ curTime.getHours();
    min.innerHTML=(curTime.getMinutes()<10?"0":"")+ curTime.getMinutes();
    sec.innerHTML=(curTime.getSeconds()<10?"0":"")+ curTime.getSeconds();
},1000)
