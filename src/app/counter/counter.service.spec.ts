import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { CounterService } from './counter.service';

describe('CounterService', () => {
  beforeEach(() => TestBed.configureTestingModule({
  	imports: [HttpClientModule],
  }));

  it('should be created', () => {
    const service: CounterService = TestBed.get(CounterService);
    expect(service).toBeTruthy();
  });
});
