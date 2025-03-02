const win = Symbol("win")
const lose = Symbol("lose")

const wl = (sym) => sym == win ? "win" : "lose" 
const guess = (num) => Math.floor(Math.random() * num)
const initDoors = () => {
  const doors = [lose, lose, lose];
  const winningDoor = Math.floor(Math.random() * 3);
  doors[winningDoor] = win;
  return doors;
}

const play = () => {
  let arrOfDoors = initDoors()
  let g = guess(3)
  let selectedDoor = arrOfDoors[g]  
  let unselectedDoors =  arrOfDoors.filter((x,i) => i !== g)
  let h = guess(2)
  let monte = unselectedDoors[h] == lose ? unselectedDoors[h] : unselectedDoors.filter((x,i) => i !== h)[0]
  let unselectedRemainingAfterMonte = unselectedDoors.filter((x) => x != monte)[0]
 return [selectedDoor, unselectedRemainingAfterMonte]
} 

let stay   = {change: false, wins:0, losses:0, pct:0}
let change = {change: true, wins:0, losses:0, pct:0}

const sim = (x) => {
  for (let i=0;i<x;i++) {
    let aturn = play()
     aturn[0] == win ? (stay.wins++, stay.pct=100*stay.wins/(i+1) ):( stay.losses++,stay.pct=100*stay.wins/(i+1))
     aturn[1] == win ? (change.wins++, change.pct=100*change.wins/(i+1)) :( change.losses++,change.pct=100*change.wins/(i+1))
  }
  return [stay, change]
} 
let results = sim(1000000)
document.getElementById("monte").innerHTML = JSON.stringify(results) 
console.log(results)
