const players = [
  { name: "Alice", score: 10 },
  { name: "Bob", score: 5 },
  { name: "Charlie", score: 9 },
  { name: "Diana", score: 7 },
  { name: "Ethan", score: 12 },
  { name: "Fiona", score: 8 },
  { name: "George", score: 3 },
  { name: "Hannah", score: 11 },
  { name: "Ian", score: 6 },
  { name: "Julia", score: 15 }
];

function getTopScorers(playerList) {
  return playerList
   
    .filter(player => player.score > 8)
   
    .map(player => player.name)
    
    .join(", ");
}

console.log(getTopScorers(players)); 
