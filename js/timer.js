function showTime(){
    const date =new Date();
    return date.getHours()+"Hrs: "+ date.getMinutes()+ "Mins: "+date.getSeconds()+" Secs ";

}

function showSessionExpire(){
    console.log("Activity-B : Your Session expired at "+showTime());
}

console.log("Activity-A : Triggerring Activity -B at"+showTime());
setTimeout(showSessionExpire,5000);
console.log("Activity-A :Tiggered Activity-B at "+showTime());