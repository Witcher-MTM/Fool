import tmp from './Suits.js';
const Lenght_of_arm = 6;
var first_player_cards = document.getElementsByClassName("first_player_cards");
var second_player_cards = document.getElementsByClassName("second_player_cards");
const first_player_arm = document.getElementById('first_player_arm');
const second_player_arm = document.getElementById('second_player_arm');
var isMouseDown = false;
var zindexchange = 0;



window.onload = () =>{
    initFirstPlayer();
}   
function initFirstPlayer(){
    for(var i=0;i<Lenght_of_arm;i++){
        var card = document.createElement('div');
        card.className = 'first_player_cards';
        card.style = "margin-left:"+i*50+"px";
        first_player_arm.appendChild(card);
        card.onmouseup = (e) =>{
            isMouseDown = false;
            e.target.style.zIndex = zindexchange++;
            console.log(e);
        }
        card.onmousedown = (e) =>{
            isMouseDown = true; 
           document.onmousemove = (mouse)=>{
            Move(e.target,mouse);
           }
        }   
    }
}
function Add(){
    var card = document.createElement('div');
    card.className = 'first_player_cards';

    first_player_arm.appendChild(card);
}
function Move(e,mouse){ 
    if(isMouseDown){
        console.log(e);
        e.style = "margin-top:0px; z-index:" + zindexchange ;
        e.style.left = (mouse.pageX - e.offsetWidth / 2) + "px";
        e.style.top = (mouse.pageY - e.offsetHeight / 2) + "px";
    }
}
