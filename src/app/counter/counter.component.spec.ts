import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule, combineReducers, Store } from '@ngrx/store';

import { CounterComponent } from './counter.component';
import { counterReducer } from '../counter.reducer';
import { Increment, Decrement, Reset } from '../counter.actions';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let store: Store<any>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({count: counterReducer})],
      declarations: [ CounterComponent ]
    })
    .compileComponents();
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment counter', () => {
    const action = new Increment();

    component.increment();
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should decrement counter', () => {
    const action = new Decrement();

    component.decrement();
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should reset the counter', () => {
    const action = new Reset();

    component.reset();
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should update the display with the counter value', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div').textContent).toContain('Current Count: 0');

    component.increment();

    component.count$.subscribe(res => {
      expect(res).toBe(1);
    });

  });

});
