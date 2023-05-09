export { rps, rpsls }

function rps(shot) {
    let otherSide = Math.floor(Math.random() * 3);

    if (otherSide == 0){
        otherSide = 'scissors';
    }
    else if (otherSide == 1){
        otherSide == 'rock';
    }
    else{
        otherSide = 'paper';
    }
    
	if (shot == undefined) { 
        return {player: otherSide}
		
	}

    let userSide = shot.toLowerCase();

    if (userSide != 'rock' &&  userSide != 'scissors' && userSide != 'paper'){
        if(userSide == 'lizards' || userSide === 'spock'){
            console.log('wrong game!' + userSide) ;
            throw new RangeError();
        }
        else{
            console.log('wrong input! try again :(' + userSide);
            throw new RangeError();
        }
    }

    if ((userSide == 'scissors' && otherSide == 'paper') || (userSide == 'rock' && otherSide == 'scissors') || (userSide == 'paper' && otherSide == 'rock') ){
        result = 'win'; 
    }
    else if (userSide == otherSide){
        result = 'tie'; 
    }
    else{ 
        result = 'lose';
    }

    return {player: userSide, opponent: otherSide, result: result}


}

function rpsls(shot){

    let otherSide = Math.floor(Math.random()*5);

    if (otherSide == 0){
        otherSide = 'rock';
    }
    else if (otherSide == 1){
        otherSide == 'paper';
    }
    else if (otherSide == 2){
        otherSide == 'scissors';
    }
    else if (otherSide == 3){
        otherSide == 'lizard';
    }
    else{
        otherSide = 'spock';
    }
    
	if (shot == undefined) { 
        return {player: otherSide}
	}

    let userSide = shot.toLowerCase();

    if (userSide != 'rock' ||  userSide != 'scissors' || userSide != 'paper' || userSide == 'lizards' || userSide === 'spock'){
       
            console.log("wrong input! try again :(");
            throw new RangeError();
    }

    if ((userSide == 'scissors' && otherSide == 'paper') || (userSide == 'rock' && otherSide == 'lizard') || (userSide == 'paper' && otherSide == 'rock') || 
    (userSide == 'lizard' && otherSide == "spock") || (userSide == 'spock' && otherSide == 'scissors') || (userSide == 'scissors' && otherSide == 'lizard') || 
    (userSide == 'lizard' && otherSide == 'paper') || (userSide == 'paper' && otherSide == 'spock') || (userSide == 'spock' && otherSide == 'rock') || 
    (userSide == 'rock' && otherSide == 'scissors') ){
        result = 'win'; 
    }
    else if (userSide == otherSide){
        result = 'tie'; 
    }
    else{ 
        result = 'lose'; 
    }
   
    return {player: userSide, opponent: otherSide, result: result}

}