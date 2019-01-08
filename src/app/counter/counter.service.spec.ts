import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { asyncData } from '../testing/async-observable-helpers';
import { CounterService } from './counter.service';

describe('CounterService', () => {
  let spyHttpService;
  beforeEach(() => {
    spyHttpService = jasmine.createSpyObj('HttpClient', ['post']);
    TestBed.configureTestingModule({
      providers: [{provide: HttpClient, useValue: spyHttpService}]
    });
  });

  it('should be created', () => {
    const service: CounterService = TestBed.get(CounterService);
    expect(service).toBeTruthy();
  });

  it('should save the counter value', () => {
    const service: CounterService = TestBed.get(CounterService);
    const responsePayload = {id: 1, counter: 42};
    spyHttpService.post.and.returnValue(asyncData(responsePayload));

    service.saveCounter(42).subscribe(res => expect(res).toEqual(responsePayload));
    expect(spyHttpService.post).toHaveBeenCalled();
  });
});
