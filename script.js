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
    let boxText = document.getElementsByClassName("boxText")
    let wins=[
        [0,1,2,7,-50,180],
        [3,4,5,4,-30,180],
        [6,7,8,4,-10,180],
        [0,3,6,-16,-30,90],
        [1,4,7,4,-30,90],
        [2,5,8,24,-30,90],
        [0,4,8,3,-31,224],
        [2,4,6,2,-28,135],
    ]
    wins.forEach(e =>
        {
            if((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText !== ""))
            {
                document.querySelector('.info').innerText =  boxText[e[0]].innerText +" "+"Won";
                gameFinished=true;
                document.querySelector(".imgBox").getElementsByTagName('img')[0].style.width = "200px"
                if (window.innerWidth < 950) {
                    document.querySelector(".line").style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
                    document.querySelector(".line").style.width = "53vw";
                  } else {
                    document.querySelector(".line").classList.add("disabled");
                  }
                gameover.play();
                let container = document.querySelectorAll('.container');
                container.forEach(div => {
                div.classList.add('disabled');
                });
            }
        })
                
}

// Game Logic
music.play();
music.volume=0.3;
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
                checkDraw();
                if(!gameFinished)
                {
                    document.getElementsByClassName("info")[0].innerText = "Turn for" +" "+ move;
                }  
            }
        })
    })
    // reset button
    reset.addEventListener('click', ()=>
    {
        let boxTexts = document.querySelectorAll(".boxText");
        Array.from(boxTexts).forEach(elem =>
            {
                elem.innerText=" ";
            });
            move = "X";   
            gameFinished = false;
                document.getElementsByClassName("info")[0].innerText = "Turn for" +" "+ move;  
                document.querySelector(".imgBox").getElementsByTagName('img')[0].style.width = "0px " 
                document.querySelector(".line").style.width = "0vw";
                let container = document.querySelectorAll('.container');
                container.forEach(div => {
                  div.classList.remove('disabled');
                });
    })
    // Draw
    const checkDraw = () => {
        let boxText = document.getElementsByClassName("boxText");
        let isDraw = Array.from(boxText).every(box => box.innerText !== "");
        if (isDraw && !gameFinished) {
          document.querySelector('.drawDialog').style.display = 'block';
        }
      }
    //   closing the dialog box
      document.getElementById('closeDialog').addEventListener('click', () => {
        document.querySelector('.drawDialog').style.display = 'none';
      });