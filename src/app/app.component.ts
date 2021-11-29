import { Component } from '@angular/core';
import { TicketService } from './ticket.service';
import { tickets } from './tickets';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Zendesk Ticket Viewer';
  data:any = []
  totalLength:any;
  page:number = 1;
  showMe:boolean = false;
  constructor(private tick:TicketService){}

  columns = ["Tickets","Description"];
  
  tickets: tickets[] = [];

  ngOnInit(): void {
    this.tick.getTickets().subscribe(
      (respose)=>
      {
        this.tickets = respose;
        this.totalLength =  respose.length;
        
      },
      (error)=>{
        console.log("Error Occured: "+error);
      }
    )
  }

  toogleTag(){
    this.showMe = !this.showMe
  }
  
}
