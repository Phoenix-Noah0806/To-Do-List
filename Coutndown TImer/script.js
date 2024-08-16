var countdown = new Date("Aug 15, 2024 00:00:00").getTime();

var x = setInterval(function() {
    var now = new Date().getTime();
    var time = countdown - now;

    var days = Math.floor(time / (1000 * 60 * 60 * 24));
    var hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((time % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
},1000)
if(time<0){
    clearInterval(x);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
}














// var countdown=new Date("Oct 16, 2021 00:00:00").getTime();
// console.log(curtime)
// var x=setInterval(function(){
//     var now= new Date().getTime();
//     var time=countdown-now;

//     var days=Math.floor(time/(1000*60*60*24))
//     var hours=Math.floor((time % (1000  *60*60*24))/(1000 *60 *60));
//     var minutes=Math.floor((time %(1000 * 60    *60))/(1000*60));
//     var seconds=Math.floor((time %(1000     *60))/1000)
//     document.getElementById("days").innerHTML=days;
//     document.getElementById("hours").innerHTML=hours;
//     document.getElementById("minutes").innerHTML=minutes;
//     document.getElementById("seconds").innerHTML=seconds;

// },1000)

