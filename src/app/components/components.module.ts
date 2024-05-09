import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SquareComponent } from './square/square.component';
import { BoardComponent } from './board/board.component';

@NgModule({
  imports: [
    CommonModule, IonicModule
  ],
  exports: [
    SquareComponent, BoardComponent
  ],
  declarations: [SquareComponent, BoardComponent]
})
export class ComponentsModule { }
