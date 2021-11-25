import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tickets } from './tickets';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) { }
    url : string = "http://localhost:3000/tickets"

    getTickets()
    {
      return this.http.get<tickets[]>(this.url);
    }
}
