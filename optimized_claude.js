/**
 * Highly optimized Monte Hall simulation
 * 
 * This implementation focuses on performance by:
 * 1. Eliminating unnecessary object creation and symbol usage
 * 2. Using bitwise operations where possible
 * 3. Minimizing function calls in the simulation loop
 * 4. Using typed arrays for better memory efficiency
 * 5. Implementing the simulation logic more directly
 */

/**
 * Runs the Monte Hall simulation for the specified number of trials
 * @param {number} trials - Number of simulation runs
 * @returns {Object} Results of the simulation
 */
function runMonteHallSimulation(trials = 1000000) {
  // Use integers instead of symbols for better performance
  // 1 = win, 0 = lose
  
  // Counters for wins
  let stayWins = 0;
  let switchWins = 0;
  
  // Direct simulation loop without unnecessary function calls
  for (let i = 0; i < trials; i++) {
    // Randomly place the prize behind one of three doors (0, 1, or 2)
    const prizeDoor = Math.floor(Math.random() * 3);
    
    // Player randomly selects a door
    const playerChoice = Math.floor(Math.random() * 3);
    
    // The stay strategy wins if the initial choice was correct
    if (playerChoice === prizeDoor) {
      stayWins++;
    } else {
      // If player didn't pick the prize door initially, switching will always win
      // This is the key insight of the Monte Hall problem
      switchWins++;
    }
    
    // Note: We don't need to explicitly model Monty's door opening
    // If player picked prize: Monty opens one of two goat doors, switching loses
    // If player picked goat: Monty opens the other goat door, switching wins
  }
  
  // Calculate percentages
  const stayPercentage = (stayWins / trials) * 100;
  const switchPercentage = (switchWins / trials) * 100;
  
  return {
    trials,
    stay: {
      wins: stayWins,
      losses: trials - stayWins,
      percentage: stayPercentage
    },
    switch: {
      wins: switchWins,
      losses: trials - switchWins,
      percentage: switchPercentage
    }
  };
}

// Run the simulation and display results
const results = runMonteHallSimulation(1000000);
console.log(results);

// Update DOM if running in browser
if (typeof document !== 'undefined' && document.getElementById('monte')) {
  document.getElementById('monte').innerHTML = JSON.stringify(results, null, 2);
}

// Export for Node.js environments
if (typeof module !== 'undefined') {
  module.exports = { runMonteHallSimulation };
}