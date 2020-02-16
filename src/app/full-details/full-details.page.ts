import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../DataService/data-service.service';
@Component({
  selector: 'app-full-details',
  templateUrl: './full-details.page.html',
  styleUrls: ['./full-details.page.scss'],
})
export class FullDetailsPage  {
  UsersList: any[];
  constructor(private users:DataServiceService) { 
    this.users.getUsers().subscribe(
       data=> this.UsersList=Object.values(data));
      console.log(this.UsersList);
  }

}
