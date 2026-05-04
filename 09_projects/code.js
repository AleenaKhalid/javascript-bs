const clock = document.getElementById('clock');

//control js events continuously run till the script is open

setInterval(function (){
    let date = new Date()
//console.log(date.toLocaleTimeString());
clock.innerHTML = date.toLocaleTimeString();
}, 1000);                      //1000 milisec

