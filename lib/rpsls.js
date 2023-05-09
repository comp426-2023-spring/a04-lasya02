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

export function rps(shot) {
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

export function rpsls(shot) {
    const options = ['rock', 'paper', 'scissors', 'lizard', 'spock']
    if (!shot) {
        return {'player': options[Math.floor(Math.random() * 5)]}
    }

    shot = shot.toLowerCase()

    if (!options.includes(shot)) {
        console.log("I executed");
        console.error(`${shot} is invalid`);
        throw new RangeError(`${shot} is invalid`);
    }

    const enemey = choices[Math.floor(Math.random() * 5)]
    return {'player': shot, 'opponent': enemey, 'result': RULES[shot][enemey]}
}