/**
 * Drop chips in the columns.
 * Connect at least 4 of your chips in any direction to win.
 **/
import {Board} from "./board";
import {Game} from "./game";

const inputs: string[] = readline().split(' ');
const myId: number = parseInt(inputs[0]); // 0 or 1 (Player 0 plays first)
const oppId: number = parseInt(inputs[1]); // if your index is 0, this will be 1, and vice versa

const game = new Game();

function receiveUnusedInput() {
    const numValidActions: number = parseInt(readline());
    for (let i = 0; i < numValidActions; i++) {
        parseInt(readline());
    }
    parseInt(readline());
}

// game loop
while (true) {
    game.processTurn();

    receiveUnusedInput();

    // Output a column index to drop the chip in. Append message to show in the viewer.
    console.log('0');
}
