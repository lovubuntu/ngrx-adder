import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { scoreboardReducer } from './scoreboard.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('scoreboard', scoreboardReducer)
  ],
  declarations: []
})
export class ScoreboardModule { }
