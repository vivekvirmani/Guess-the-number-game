(()=>{
    const input = document.querySelector("#inputVal");
const submitBtn = document.querySelector("#submitBtn");
const startGameBtn = document.querySelector("#startGame");
const resultMsg = document.querySelector("#resultMsg");
const userGuessPara = document.querySelector("#userGuess")
const form = document.querySelector("form");

let randomNumber = Math.floor(Math.random()*100 + 1)

 let userNumber;
 let userGuess = []

 startGameBtn.disabled = true;


form.addEventListener("submit",(e)=>{
     e.preventDefault()
     userNumber = parseInt(input.value)
     if(randomNumber > userNumber){
        startGameBtn.disabled = true;
        resultMsg.innerText = "Too Low!!";
     } else if(randomNumber < userNumber){
        startGameBtn.disabled = true;
        resultMsg.innerText = "Too High!!"
     }else{
        startGameBtn.disabled = false;
        submitBtn.disabled = true;
        userGuess=[]
        resultMsg.innerText = "Congratulations You Guess right!!"
     }
    
        userGuess.push(userNumber)
        userGuessPara.innerText = "Your Guesses:  " + userGuess.join(", ")
        input.value = ""
    
        startGameBtn.addEventListener("click",()=>{
          userGuessPara.innerText = ""
          resultMsg.innerText = ""
          startGameBtn.disabled = true
          submitBtn.disabled = false
          randomNumber = Math.floor(Math.random()*100 + 1)
        })
})
})()
