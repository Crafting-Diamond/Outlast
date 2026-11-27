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
