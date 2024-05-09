import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent  implements OnInit {
  squares?: any | number[];
  whoIsNext?: boolean;
  winner?: string;

  constructor() { }

  ngOnInit() {
    this.newGame()
  }

  newGame(){
    this.squares = Array(9).fill(null)
    this.whoIsNext = true;
    this.winner = "";
  }

  get player(){
    return this.whoIsNext ? "X" : "O";
  }

  makeMove(id: any){
    if (!this.squares[id]) {
      this.squares.splice(id, 1, this.player);
      this.whoIsNext = !this.whoIsNext;
    }

    this.winner = this.calculateWinner();
  }

  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return null;
  }

}