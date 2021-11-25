import { Component } from '@angular/core';
import {zenapi} from './services/zenapi.service';
import { TicketService } from './ticket.service';
import { tickets } from './tickets';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Ticket Viewer';
  data:any = []
  totalLength:any;
  page:number = 1;
  constructor(private tick:TicketService){


    
    // this.user.getcomments().subscribe(data=>{     
    //   this.data=data;
    //   this.totalLength =  data.length;
    //   console.log(this.totalLength)
    // })
   
  }

  columns = ["requester_id","assignee_id","subject","description"];
  
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
  
}
