//Number of dice in the pool
let nbrBlue = document.getElementById("blue");
let resBlue = document.getElementById("blueNbr");
nbrBlue.addEventListener('change',function(event){
	resBlue.innerHTML=event.target.value;
});
let nbrGreen = document.getElementById("green");
let resGreen = document.getElementById("greenNbr");
nbrGreen.addEventListener('change',function(event){
	resGreen.innerHTML=event.target.value;
});
let nbrYellow = document.getElementById("yellow");
let resYellow = document.getElementById("yellowNbr");
nbrYellow.addEventListener('change',function(event){
	resYellow.innerHTML=event.target.value;
});
let nbrBlack = document.getElementById("black");
let resBlack = document.getElementById("blackNbr");
nbrBlack.addEventListener('change',function(event){
	resBlack.innerHTML=event.target.value;
});
let nbrPurple = document.getElementById("purple");
let resPurple = document.getElementById("purpleNbr");
nbrPurple.addEventListener('change',function(event){
	resPurple.innerHTML=event.target.value;
});
let nbrRed = document.getElementById("red");
let resRed = document.getElementById("redNbr");
nbrRed.addEventListener('change',function(event){
	resRed.innerHTML=event.target.value;
});
let nbrWhite = document.getElementById("white");
let resWhite = document.getElementById("whiteNbr");
nbrWhite.addEventListener('change',function(event){
	resWhite.innerHTML=event.target.value;
});nbrWhite.addEventListener('keydown',function(Event){
	Event.preventDefault();});
let button = document.getElementById("button");
let result = document.getElementById("resultat");
let textResult = '';
button.addEventListener('click',function(Event){
	Event.preventDefault();
	//Define die face
	let tdbleu=[[0,0,0,0],[0,0,0,0],[0,1,0,0],[1,1,0,0],[2,0,0,0],[1,0,0,0]];
	let tdnoir=[[0,0,0,0],[0,0,0,0],[0,-1,0,0],[0,-1,0,0],[-1,0,0,0],[-1,0,0,0]];
	let tdvert=[[0,0,0,0],[0,1,0,0],[0,1,0,0],[0,2,0,0],[1,0,0,0],[1,0,0,0],[1,1,0,0],[2,0,0,0]];
	let tdviolet=[[0,0,0,0],[0,-1,0,0],[0,-2,0,0],[-1,0,0,0],[-1,0,0,0],[-1,0,0,0],[-2,0,0,0],[-1,-1,0,0]];
	let tdjaune=[[0,0,0,0],[0,1,0,0],[0,1,0,0],[0,2,0,0],[0,2,0,0],[1,0,0,0],[1,1,0,0],[1,1,0,0],[1,1,0,0],[2,0,0,0],[2,0,0,0],[0,1,1,0]];
	let tdrouge=[[0,0,0,0],[0,-1,0,0],[0,-1,0,0],[0,-2,0,0],[0,-2,0,0],[-1,0,0,0],[-1,0,0,0],[-1,-1,0,0],[-1,-1,0,0],[-2,0,0,0],[-2,0,0,0],[0,-1,0,1]];
	let tdblanc=[[1,0],[1,0],[1,0],[1,0],[1,0],[1,0],[2,0],[0,1],[0,1],[0,2],[0,2],[0,2]];
	let resultate=[0,0,0,0];
//Function
	function jet(nbrDice,faceNumber,table){
	    let resultPartial=[0,0,0,0];
	    let jets=0;
    if (nbrDice!=0){
	    for (i = 0 ; i < nbrDice; i++){
	        jets = Math.floor(Math.random() * faceNumber) + 1;
	        for (j = 0 ; j < 4 ; j++){
	            resultPartial[j] += table[jets-1][j];}}}
	    return resultPartial;
	}
	function WhiteJet(nbrDice,faceNumber,table){
	    let resultPartial=[0,0,0,0];
	    let jets=0;
    if (nbrDice!=0){
	    for (i = 0 ; i < nbrDice; i++){
	        jets = Math.floor(Math.random() * faceNumber) + 1;
	        for (j = 0 ; j < 2 ; j++){
	            resultPartial[j] += table[jets-1][j];}}}
	    return resultPartial;
	}
//Main loop
	let rb = jet(nbrBlue.value,6,tdbleu);
	let rn = jet(nbrBlack.value,6,tdnoir);
	let rve = jet(nbrGreen.value,8,tdvert);
	let rvi = jet(nbrPurple.value,8,tdviolet);
	let rj = jet(nbrYellow.value,12,tdjaune);
	let rr = jet(nbrRed.value,12,tdrouge);
	let rw = WhiteJet(nbrWhite.value,12,tdblanc);
	textResult="";
	//Define result and send to html page
	for (i = 0; i < 4; i++){
    resultate[i] = rb[i] + rn[i] + rve[i] + rvi[i] + rj[i] + rr[i];
		}if (resultate[1] <= 0){
	    textResult += "<br/>echec("+Math.abs(resultate[1])+")";
		}if (resultate[1] > 0){
	    textResult += "<br/>succes("+Math.abs(resultate[1])+")";
		}if (resultate[3] > 0){
	    textResult += "desastreux("+Math.abs(resultate[3])+")";
		}if (resultate[2] > 0){
	    textResult += "triomphal("+Math.abs(resultate[2])+")";
		}if (resultate[0] < 0){
	    textResult += "menaçant("+Math.abs(resultate[0])+")";
		}if (resultate[0] > 0){
	    textResult += "avantageux("+Math.abs(resultate[0])+")";
		}let whiteTextResult=''
		whiteTextResult= rw[0]+' points noirs et '+rw[1]+"points blancs"
		let sumOfDice=nbrBlack.value+nbrBlue.value+nbrGreen.value+nbrPurple.value+nbrRed.value+nbrYellow.value;
		if (nbrWhite.value!=0 && sumOfDice>0){
		result.innerHTML = textResult+"<br/>"+whiteTextResult;
	}else if (nbrWhite.value!=0 && sumOfDice==0) {
		result.innerHTML = whiteTextResult;
	}else{
		result.innerHTML = textResult;
	}
});