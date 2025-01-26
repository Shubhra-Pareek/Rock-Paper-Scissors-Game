let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#userScore");
const compScorepara = document.querySelector("#compScore");

const genCompChoice = ()=>{
    const options = ["Rock","Paper","Scissors"];
    const randomidx = Math.floor(Math.random()*3);
    return options[randomidx];
}

const drawGame = ()=>{
    console.log("game was draw.");
    msg.innerText = "Game was Draw, Play Again"
    msg.style.backgroundColor = "yellow";
    msg.style.color = "black";
}

const showWinner= (userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;
        console.log("You Win");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorepara.innerText = compScore;
        console.log("You Loss");
        msg.innerText = `You Lost! ${compChoice} beats Your ${userChoice}`
        msg.style.backgroundColor = "red";
    }
    
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
//Generate computer choice
const compChoice = genCompChoice();
console.log("compChoice = ", compChoice);

if(userChoice === compChoice) {
    //draw game
    drawGame();
}
else{
    let userWin = true;
    if(userChoice === "Rock") {
        userWin = compChoice === "paper" ? false : true;
    }else if(userChoice === "Paper") {
        userWin = compChoice === "Scissors" ? false : true;
    }else{
        userWin = compChoice === "Rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
}
}

choices.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

