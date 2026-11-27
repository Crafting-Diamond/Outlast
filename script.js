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
