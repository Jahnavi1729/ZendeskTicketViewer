import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { TicketService } from './ticket.service';

describe('TicketService', () => {
  let service: TicketService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        HttpClient, HttpHandler
      ]
    });
    service = TestBed.inject(TicketService);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
