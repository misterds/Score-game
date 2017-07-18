var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var resetButton = document.getElementById("reset");
var numberInput =document.querySelector("input");
// var paragraph = document.querySelector("p");
var winingScoreDisplay = document.querySelector("p span");
var gameOver = false;
var winerSKore = 5;
var p1Score = 0;
var p2Score = 0;
// var p1Score = 0;
// var p2Score = 0;



// verificame
p1Button.addEventListener("click", function() {
    if (!gameOver) {/*checking   if the game is not over */
        p1Score++;/*incresing  the  number  on the score */
        if (p1Score === winerSKore) {/*checking  if the numberscore  is equal the number setup is true end  the game*/
        	p1Display.classList.add("winner");/* the winre number  wil chage color an will stoped */
            gameOver = true;
        }
    }
    p1Display.textContent = p1Score;/*the score  number will show onthe  screen */

});

p2Button.addEventListener("click", function(){
	if(!gameOver){
		p2Score++;
		if(p2Score === winerSKore){
			p2Display.classList.add("winner");
			gameOver=true;
		}
	}
	p2Display.textContent = p2Score;
});

// rest buuton to reset  the score
resetButton.addEventListener("click",function(){
reset();/*function createe on above  he is reseting  the score  and the number till it will play */
});

/*Function tu reset  the  numbers*/
 function reset(){
   p1Score=0;
   p2Score =0;
  p1Display.textContent = 0;/*willdisplau the text 0*/
  p2Display.textContent = 0;
  p1Display.classList.remove("winner");/* removing  the class  that is coloting in to  the green */
  p2Display.classList.remove("winner");
  gameOver=false;/*will show the game is starintg  from the begining */
 }

// addininf  the input  number
numberInput.addEventListener("change", function(){/*"chamhe "- >  sho to chamge the  input  number  when is seleted */
winingScoreDisplay.textContent= this.value;/*taking the value  from the input filed*/
winerSKore=Number(this.value);/*convert to string  */
reset();
});
