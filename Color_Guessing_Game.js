function getRandomInt(mi,ma) {
    return Math.floor(Math.random() * (ma - mi + 1)) + mi;
}
function new_game(){
	gameOver=false;
	var tryAgain=document.getElementsByClassName("tryAgain")[0];
	tryAgain.textContent="Try Again";
	tryAgain.classList.add("d-none");
	var temp=document.getElementsByClassName("colorButtons");
	var removeans=document.getElementsByClassName("ans");
	if(removeans.length>0){
		removeans[0].classList.remove("ans");
	}
	if(mode===true){
		var ans=getRandomInt(0,5);
	}
	else{
		var ans=getRandomInt(0,2);
	}
	for(var i=0;i<temp.length;i++){
		var r=getRandomInt(0,255);
		var g=getRandomInt(0,255);
		var b=getRandomInt(0,255);
		temp[i].classList.remove("hide");
		if(ans===i){
			document.getElementById("rr").textContent=r;
			document.getElementById("gg").textContent=g;
			document.getElementById("bb").textContent=b;
		}
		var t="rgb("+r.toString()+","+g.toString()+","+b.toString()+")";
		temp[i].style.backgroundColor=t;
		if(i===ans){
			temp[i].classList.add("ans");
		}
		if(mode===false){
			if(i>2){
				temp[i].classList.add("hide");
			}
		}
	}
}
function dispans(col){
	var temp=document.getElementsByClassName("colorButtons");
	var t=col;
	for(var i=0;i<temp.length;i++){
		temp[i].style.backgroundColor=t;
		temp[i].classList.remove("hide");
	}
	if(mode==false){
		var temp=document.getElementsByClassName("second");
	for(var i=0;i<temp.length;i++){
		temp[i].classList.add("hide");
	}
	}

}
function check(){
	if(gameOver===true){
		return ;
	}
	var temp=document.getElementsByClassName("tryAgain")[0];
	if(this===document.getElementsByClassName("ans")[0]){
		temp.textContent="Game Over";
		temp.classList.remove("d-none");
		dispans(this.style.backgroundColor);
		gameOver=true;
		

	}
	else{
		this.classList.add("hide");
		temp.classList.remove("d-none");
	}
}
var mode=true;
var gameOver=false;
var newGame=document.getElementsByClassName("newGame")[0];
newGame.addEventListener("click", new_game);
var easy=document.getElementsByClassName("easy")[0];
var hard=document.getElementsByClassName("hard")[0];
new_game();
easy.addEventListener("click" ,function(){
	easy.classList.add("selected");
	easy.classList.remove("unselected");
	hard.classList.remove("selected");
	hard.classList.add("unselected");
	mode=false;
	new_game();
	var temp=document.getElementsByClassName("second");
	for(var i=0;i<temp.length;i++){
		temp[i].classList.add("hide");
	}
});
hard.addEventListener("click" ,function(){
	hard.classList.add("selected");
	hard.classList.remove("unselected");
	easy.classList.remove("selected");
	easy.classList.add("unselected");
	mode=true;
	new_game();
	var temp=document.getElementsByClassName("second");
	for(var i=0;i<temp.length;i++){
		temp[i].classList.remove("hide");
	}
});
var one=document.getElementsByClassName("one")[0];
var two=document.getElementsByClassName("two")[0];
var three=document.getElementsByClassName("three")[0];
var four=document.getElementsByClassName("four")[0];
var five=document.getElementsByClassName("five")[0];
var six=document.getElementsByClassName("six")[0];
one.addEventListener("click",check);
two.addEventListener("click",check);
three.addEventListener("click",check);
four.addEventListener("click",check);
five.addEventListener("click",check);
six.addEventListener("click",check);