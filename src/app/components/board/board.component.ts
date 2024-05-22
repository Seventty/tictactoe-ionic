import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  cells?: Array<number> | any;
  winner?: string;
  nextPlayer?: boolean;

  initGame(){
    this.cells = Array(9).fill(null);
    this.winner = "";
    this.nextPlayer = true;
  }

  get getPlayer(){
    return this.nextPlayer ? "X" : "O"
  }

  selectCell(index: number){
    if(!this.cells[index] && !this.winner){
      this.cells.splice(index, 1, this.getPlayer);
      this.nextPlayer = !this.nextPlayer;
    }

    this.winner = this.calculateWinner();
  }

  calculateWinner(){
    const winCombos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], //Horizontal combos
      [0, 3, 6], [1, 4, 7], [2, 5, 8], //Vertical combos
      [0, 4, 8], [2, 4, 6] //Diagonal combos
    ]

    for (let index = 0; index < winCombos.length; index++) {
      const [a, b, c] = winCombos[index];
      if(this.cells[a] && this.cells[a] === this.cells[b] && this.cells[a] === this.cells[c]){
        return this.cells[a]
      }
    }

    const isDraw = this.cells.every((cell: any) => cell);
    if (isDraw) {
      return "Draw";
    }
  }

  ngOnInit(): void {
    this.initGame();
  }

}
