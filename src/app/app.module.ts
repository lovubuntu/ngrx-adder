import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule, ActionReducer, MetaReducer } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { counterReducer } from './counter.reducer';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { ScoreboardModule } from './scoreboard/scoreboard.module';

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  }
}

export const metaReducers: MetaReducer<any>[] = [debug];

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ScoreboardComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({count: counterReducer}, {metaReducers}),
    ScoreboardModule,
    StoreDevtoolsModule.instrument({maxAge: 20})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
