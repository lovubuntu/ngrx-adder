import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Increment, Decrement, Reset, Save } from '../counter.actions';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  count$: Observable<number>;

  constructor(private store: Store<{count: number}>, private counterService: CounterService) {
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

  save(counter) {
    console.log('saving counter value', counter);
    this.store.dispatch(new Save(counter));
    // this.counterService.saveCounter(counter).subscribe(
      // res => console.log('response from server', res),
      // (err) => console.log('error from server', err)
    // );
  }
}
