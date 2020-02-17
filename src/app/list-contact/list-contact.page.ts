import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../DataService/data-service.service';
@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.page.html',
  styleUrls: ['./list-contact.page.scss'],
})
export class ListContactPage  {
  UsersList: any[];
  constructor(private users:DataServiceService) { 
    this.users.getUsers().subscribe(
       data=> this.UsersList=Object.values(data));
      console.log(this.UsersList);
      
}

ngOnInit() {
  }
}