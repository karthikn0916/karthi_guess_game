var guessnumber = document.getElementById("guessnumber")
var result = document.getElementById("result")
var score = document.getElementById("score")
var randomNumber = Math.floor(Math.random()*10) + 1
var totalScore =10
console.log(randomNumber)
console.log(result)
console.log(guessnumber)
console.log(score)
function check(){
    var enteredNumber = guessnumber.value
    console.log(enteredNumber)
if(randomNumber==enteredNumber){
    console.log("Right")
    result.textContent = "Right"
    alert("You Won")

}
// else if(enteredNumber == !Number){
//     alert("Please Guess Numbers")
// }
 else if((enteredNumber >= 11) || (enteredNumber == !Number)) {
    alert("Guess number Between 0 - 10")
}

else{
    totalScore = totalScore-1
    console.log("wrong")
    score.textContent = "your score :"+totalScore
    alert("Better Luck Next Time")
    console.log("score.textContent")
    result.textContent = "your wrong...try again"

}
}
