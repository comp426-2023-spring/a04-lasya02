export { rps, rpsls }

const RULES = {
    'lizard': {
        'rock': 'lose',
        'paper': 'win',
        'scissors': 'lose',
        'lizard': 'tie',
        'spock': 'win'
    },
    'spock': {
        'rock': 'win',
        'paper': 'lose',
        'scissors': 'win',
        'lizard': 'lose',
        'spock': 'tie'
    },
    'paper': {
        'rock': 'win',
        'paper': 'tie',
        'scissors': 'lose',
        'lizard': 'lose',
        'spock': 'win'
    },
    'scissors': {
        'rock': 'lose',
        'paper': 'win',
        'scissors': 'tie',
        'lizard': 'win',
        'spock': 'lose'
    },
   
    'rock': {
        'rock': 'tie',
        'paper': 'lose',
        'scissors': 'win',
        'lizard': 'win',
        'spock': 'lose'
    }
   
}

function rps (shot){
    console.log(shot)
    
    const opponentShot = Math.floor(Math.random()*3)
    const options = ['rock','paper','scissors']

    if (!shot) {
        return {'player': options[opponentShot]}
    }

    shot = shot.toLowerCase();
    
    if (!options.includes(shot)) {
        console.error(`${shot} is not allowed`)
        throw new RangeError(`${shot} is not allowed`)
    }

    const opponent = options[opponentShot]
    return {'player': shot, 'opponent': opponent, 'result': RULES[shot][opponent]}

    

}

function rps (shot){
    const opponentShot = Math.floor(Math.random()*5)
    const options = ['rock', 'paper', 'scissors', 'lizard', 'spock']
    if (!shot) {
        return {'player': choices[opponentShot]}
    }

    shot = shot.toLowerCase()

    if (!options.includes(shot)) {
        console.error(`${shot} is invalid`);
        throw new RangeError(`${shot} is invalid`);
    }

    const opponent = options[opponentShot]
    return {'player': shot, 'opponent': opponent, 'result': RULES[shot][opponent]}
}