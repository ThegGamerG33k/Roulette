"use strict";

let sock;

function keyWasPressed(ev){
    if( ev.key === "Enter")
        spin();
}

function gotSpin(event){
    let data = event.data;
    let obj = JSON.parse(data);
    console.log(obj);
    childAdd(obj);
}

function main(){
    sock = new WebSocket("ws://"+document.location.host+"/sock");
    sock.addEventListener("open", ()=>{ 
        console.log("SOCK IS OPEN");
    });
    sock.addEventListener("message", gotSpin);

}

main();