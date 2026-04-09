# CodinGame Connect Four Bot

A TypeScript bot built for the [CodinGame](https://www.codingame.com/) **Connect Four** challenge.

## About

This project is an AI bot that plays Connect Four on CodinGame's platform. The bot reads the game board from standard input each turn and outputs a column index to drop its chip into.

The game is played on a 7-row × 9-column grid. A player wins by connecting 4 or more chips in a row horizontally, vertically, or diagonally.

## Project Structure

```
src/
  main.ts      # Entry point — reads player IDs and drives the game loop
  game.ts      # Game state management and turn processing
  board.ts     # Board representation, input parsing, and win detection
  minimax.ts   # Minimax algorithm (work in progress)
  types/
    codingame.d.ts  # TypeScript type declarations for CodinGame globals
```

## How It Works

1. **Input parsing** — Each turn the bot reads the current board state (one row per line) from stdin, where `0` represents Player 1's chip and `1` represents Player 2's chip.
2. **Win detection** — The board checks for four-in-a-row horizontally, vertically, and along both diagonals.
3. **Move selection** — The bot outputs a column index to place its chip. A minimax search is planned to select the best move.

## Development

### Prerequisites

- [Node.js](https://nodejs.org/) (v14+)
- npm

### Install dependencies

```bash
npm install
```

### Build

The project uses webpack to bundle the TypeScript source into a single JavaScript file that can be submitted to CodinGame.

```bash
npm run watch
```

This will watch for file changes and output the bundle to the `build/` directory.

### Submitting to CodinGame

Copy the contents of the built bundle from `build/` and paste it into the CodinGame IDE for the Connect Four challenge.
