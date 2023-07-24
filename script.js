console.log("Welcome to Tic Tac Toe");
let music = new Audio("music.mp3");
let turn = new Audio("ting.mp3");
let gameover= new Audio("gameover.mp3");
let move = "X";
let gameFinished = false;
// function to change the turn
const changeTurn = ()=>
{
    return move === "X"?"O":"X"
}

// function to check for a Win
const checkWin=()=>
{
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [],
        [],
        [],
        [],
        [],
    ]
}

// Game Logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>
    {
        let boxText = element.querySelector(".boxText");
        element.addEventListener('click',()=>
        {
            if(boxText.innerText === "")
            {
                boxText.innerText=move;
                move = changeTurn();
                turn.play();
                checkWin();
                if(!gameFinished)
                {
                    document.getElementsByClassName("info")[0].innerText = "Turn for" +" "+ move;
                }  
            }
        })
    })