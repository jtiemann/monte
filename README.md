# Monte Hall Simulator

A JavaScript simulator for testing strategies in the famous Monte Hall probability problem.

## Overview

The Monte Hall problem is a probability puzzle based on the game show "Let's Make a Deal" hosted by Monty Hall. The puzzle demonstrates a counter-intuitive statistical outcome that often surprises people when first encountered.

### The Problem

1. You are presented with three doors.
2. Behind one door is a prize (win), behind the other two are goats (lose).
3. You select one door.
4. The host (Monty Hall), who knows what's behind each door, opens one of the remaining doors to reveal a goat.
5. You are given the choice: stick with your original selection or switch to the other unopened door.

The simulation tests two strategies:
- **Stay**: Always keep your original door selection
- **Change**: Always switch to the other unopened door after Monty reveals a goat

## Files

- `index.html` - Basic HTML file with a container for results
- `index.js` - JavaScript code implementing the Monte Hall simulation
- `package.json` - Node.js project configuration
- `package-lock.json` - Node.js dependency lock file

## Running the Simulator

Open `index.html` in a web browser to run the simulation. The page will display the results of 1,000,000 simulations for both strategies (stay vs. change).

Results are displayed in the page and also logged to the browser console.

## Key Functions

- `initDoors()` - Sets up three doors with one win and two losses
- `play()` - Simulates one round of the game
- `sim(x)` - Runs the simulation x times and collects statistics

## Expected Results

The theoretical probabilities are:
- Stay strategy: 1/3 chance of winning
- Change strategy: 2/3 chance of winning

The simulation should confirm these probabilities over a large number of trials.

## Author

Jon T-Bone Tiemann

## License

ISC