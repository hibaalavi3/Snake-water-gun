const randomselect=()=>{
    let us=["S", "W", "G"]
    let randomn=Math.floor(Math.random()*us.length)
    return us[randomn]
}
let random=randomselect();


function check(){
    var player=document.getElementById("game").value;
    var re=document.getElementById("result")
    if(player=="S"||player=="W"||player=="G"){
    if(player==random){
        re.innerText="It's a draw!"
    }
    else if(player=="S"&&random=="G" || player=="W"&& random=="S" || player=="G"&& random=="W"){
        re.innerText="You win!"
    }
    else{
        re.innerText="You lose!"
    }
    document.getElementById("choice").innerText=`player's choice ${player} vs computer's choice ${random}`
}
    else{
        document.getElementById("choice").innerText="Choose between S, W and G only"
    }
}
function reset(){
    let btns=document.querySelectorAll("#result,#choice,#gm")
    btns.forEach(bt=>{
        bt.innerText=""
    })
}
document.getElementById("res").onclick=()=>reset()
