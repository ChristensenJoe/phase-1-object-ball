const gameObject = () => {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson" : {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans" : {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez" : {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee" : {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry" : {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien" : {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo" : {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop" : {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon" : {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood" : {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
            }

        }
    }
}
}

console.log(gameObject());


const numPointsScored = name => {
    const gameData = gameObject();

    for (elements in gameData.home.players) {
        if (elements === name){
            return gameData.home.players[elements].points;
        } 
    }
    for (elements in gameData.away.players) {
        if (elements === name){
            return gameData.away.players[elements].points;
        } 
    } 

}

const shoeSize = name => {
    const gameData = gameObject();

    for (elements in gameData.home.players) {
        if (elements === name){
            return gameData.home.players[elements].shoe;
        } 
    }
    for (elements in gameData.away.players) {
        if (elements === name){
            return gameData.away.players[elements].shoe;
        } 
    } 
}

const teamColors = teamName => {
    const gameData = gameObject();

    if(gameData.home.teamName === teamName) {
        return gameData.home.colors;
    }
    else if(gameData.away.teamName === teamName) {
        return gameData.away.colors;
    }
}

const playerNumbers = teamName => {
    const gameData = gameObject();
    let teamNumbers = [];

    if(gameData.home.teamName === teamName) {
        for(element in gameData.home.players) {
            teamNumbers.push(gameData.home.players[element].number);
        }
    }
    else if(gameData.away.teamName === teamName) {
        for(element in gameData.away.players) {
            teamNumbers.push(gameData.away.players[element].number);
        }
    }
    return teamNumbers;
}

const playerStats = name => {
    const gameData = gameObject();

    for (elements in gameData.home.players) {
        if (elements === name){
            return gameData.home.players[elements];
        } 
    }
    for (elements in gameData.away.players) {
        if (elements === name){
            return gameData.away.players[elements];
        } 
    } 
}

const biggestShoe = () => {
    const gameData = gameObject();
    let playerName;
    let shoeSize = 0;

    for (elements in gameData.home.players) {
        if (gameData.home.players[elements].shoe > shoeSize){
            shoeSize = gameData.home.players[elements].shoe;
            playerName = elements;
        } 
    }

    for (elements in gameData.away.players) {
        if (gameData.away.players[elements].shoe > shoeSize){
            shoeSize = gameData.away.players[elements].shoe;
            playerName = elements;
        } 
    }

    return playerName;
}


const bigShoeRebounds = () => {
    const gameData = gameObject();

    return playerStats(biggestShoe()).rebounds;
}


const playerWithLongestName = () => {
    const gameData = gameObject();
    let playerName;
    let nameLength = 0;

    for (elements in gameData.home.players) {
        if (elements.length > nameLength){
            nameLength = elements.length;
            playerName = elements;
        } 
    }

    for (elements in gameData.away.players) {
        if (elements.length > nameLength){
            nameLength = elements.length;
            playerName = elements;
        } 
    }

    //console.log(nameLength);

    return playerName;
}


const doesLongNameStealATon = () => {
    const gameData = gameObject();

    const longestName = playerWithLongestName();

    let isTrue = true;



    for (elements in gameData.home.players) {
        if (gameData.home.players[elements].steals > playerStats(longestName).steals) {
            isTrue = false;
        } 
    }

    for (elements in gameData.away.players) {
        if (gameData.away.players[elements].steals > playerStats(longestName).steals) {
            isTrue = false;
        } 
    }

    return isTrue;
}

const mostPointsScored = () => {
    const gameData = gameObject();
    let playerName;
    let points = 0;

    for (elements in gameData.home.players) {
        if (gameData.home.players[elements].points > points) {
            playerName = elements;
            points = gameData.home.players[elements].points;
        }
    }

    for (elements in gameData.away.players) {
        if (gameData.away.players[elements].points > points) {
            playerName = elements;
            points = gameData.away.players[elements].points;
        }
    }

    return playerName;


}