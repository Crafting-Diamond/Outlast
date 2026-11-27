players.push({
    name:name,
    lives:5,
    food:3,
    water:3,
    materials:0,
    defending:false
});

<p>Choose 3 actions.</p>

let dailyChoices = [];
let currentActions = [];

const possibleActions = [
    "Attack",
    "Find Food",
    "Find Water",
    "Gather Materials",
    "Build Defenses",
    "Defend",
    "Rest"
];

function chooseAction(action){

    currentActions.push(action);

    if(currentActions.length < 3){

        document.getElementById("currentPlayer").innerHTML =
        `
        <h3>${players[currentPlayerIndex].name}</h3>
        <p>Action ${currentActions.length}/3 chosen.</p>
        `;

        return;
    }

    dailyChoices.push({
        player: players[currentPlayerIndex],
        actions: [...currentActions]
    });

    currentActions = [];

    currentPlayerIndex++;

    askPlayer();
}

function runDay(){

    document.getElementById("game").classList.add("hidden");

    document.getElementById("summary").classList.remove("hidden");

    let results = "";

    players.forEach(p=>{
        p.defending = false;
    });

    dailyChoices.forEach(choice=>{

        choice.actions.forEach(action=>{

            if(action === "Find Food"){

                choice.player.food++;

                results +=
                `<p>${choice.player.name} found food.</p>`;
            }

            else if(action === "Find Water"){

                choice.player.water++;

                results +=
                `<p>${choice.player.name} found water.</p>`;
            }

            else if(action === "Gather Materials"){

                choice.player.materials++;

                results +=
                `<p>${choice.player.name} gathered materials.</p>`;
            }

            else if(action === "Defend"){

                choice.player.defending = true;

                results +=
                `<p>${choice.player.name} is defending.</p>`;
            }

            else if(action === "Rest"){

                results +=
                `<p>${choice.player.name} rested.</p>`;
            }
        });

    });

    dailyChoices.forEach(choice=>{

        choice.actions.forEach(action=>{

            if(action === "Attack"){

                let targets = players.filter(
                    p =>
                    p.name !== choice.player.name &&
                    p.lives > 0
                );

                if(targets.length > 0){

                    const target =
                    targets[
                        Math.floor(Math.random()*targets.length)
                    ];

                    if(target.defending){

                        results +=
                        `<p>${choice.player.name}
                        attacked ${target.name}
                        but was blocked.</p>`;
                    }
                    else{

                        target.lives--;

                        results +=
                        `<p>${choice.player.name}
                        attacked ${target.name}.</p>`;

                        results +=
                        `<p>${target.name}
                        lost a life and has
                        ${target.lives} remaining.</p>`;
                    }
                }
            }
        });
    });

    players.forEach(player=>{

        player.food--;
        player.water--;

        if(player.food < 0){

            player.lives--;

            results +=
            `<p>${player.name}
            is starving and lost a life.</p>`;
        }

        if(player.water < 0){

            player.lives--;

            results +=
            `<p>${player.name}
            is dehydrated and lost a life.</p>`;
        }
    });

    players = players.filter(
        p => p.lives > 0
    );

    if(players.length === 1){

        results +=
        `<h2>🏆 ${players[0].name}
        OUTLASTED EVERYONE!</h2>`;
    }

    document.getElementById("log").innerHTML = results;
}

function addPlayer() {
    alert("Add Player Works!");
}

function startGame() {
    alert("Start Game Works!");
}
