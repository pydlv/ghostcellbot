import {Board} from "./board";

export class Game {
    board: Board;
    turn: number = 0;

    constructor() {
        this.board = new Board();
    }

    processTurn() {
        this.turn = parseInt(readline());

        this.board.updateFromInput();
    }
}