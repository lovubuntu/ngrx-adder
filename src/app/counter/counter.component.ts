import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Increment, Decrement, Reset } from '../counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  count$: Observable<number>;

  constructor(private store: Store<{count: number}>) {
  	this.count$ = store.pipe(select('count'));
  }

  ngOnInit() {
  }

  increment() {
  	console.log('calling increment');
  	this.store.dispatch(new Increment());
  }

  decrement() {
  	console.log('calling decrement');
  	this.store.dispatch(new Decrement());
  }

  reset() {
  	console.log('calling reset');
  	this.store.dispatch(new Reset());
  }
}
