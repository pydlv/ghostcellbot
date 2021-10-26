export const EMPTY = 0;
export const PLAYER_1 = 1;
export const PLAYER_2 = 2;


export class Board {
    // 7 row, 9 column grid
    grid: number[];

    constructor() {
        this.grid = Array.from({length: 63}, () => EMPTY);
    }

    updateFromInput() {
        for (let i = 0; i < 7; i++) {
            const row = i;
            const boardRow: string = readline(); // one row of the board (from top to bottom)
            for (const [column, character] of [...boardRow].entries()) {
                let value = EMPTY;
                if (character === '0') {
                    value = PLAYER_1;
                } else if (character === '1') {
                    value = PLAYER_2;
                }

                this.setSlot(row, column, value);
            }
        }

        console.warn("Board state:");

        this.print();
    }

    setSlot(row: number, column: number, value: number) {
        this.grid[row * 9 + column] = value;
    }

    getSlot(row: number, column: number) {
        return this.grid[row * 9 + column];
    }

    print() {
        for (let y = 0; y < 6; y++) {
            const row = [];
            for (let column = 0; column < 9; column++) {
                const value = this.grid[y * 9 + column];
                row.push(value);
            }

            console.warn(row.join(', '))
        }
    }

    getWinner() {
        for (let row = 0; row < 7; row++) {
            for (let column = 0; column < 9; column++) {
                // Horizontal check
                if (column <= 5) {
                    const player = this.getSlot(row, column)
                    if (
                        player &
                        this.getSlot(row, column + 1) &
                        this.getSlot(row, column + 2) &
                        this.getSlot(row, column + 3)
                    ) {
                        return player;
                    }
                }

                // Vertical check
                if (row <= 3) {
                    const player = this.getSlot(row, column);
                    if (
                        player &
                        this.getSlot(row + 1, column) &
                        this.getSlot(row + 2, column) &
                        this.getSlot(row + 3, column)
                    ) {
                        return player;
                    }
                }

                // Ascending diagonal check
                if (row >= 3 && column <= 5) {
                    const player = this.getSlot(row, column);
                    if (
                        player &
                        this.getSlot(row - 1, column + 1) &
                        this.getSlot(row - 2, column + 2) &
                        this.getSlot(row - 3, column + 3)
                    ) {
                        return player;
                    }
                }

                // Descending diagonal check
                if (row <= 3 && column <= 5) {
                    const player = this.getSlot(row, column);
                    if (
                        player &
                        this.getSlot(row + 1, column + 1) &
                        this.getSlot(row + 2, column + 2) &
                        this.getSlot(row + 3, column + 3)
                    ) {
                        return player;
                    }
                }
            }
        }

        return EMPTY;
    }
}