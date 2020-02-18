import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import { DataServiceService } from '../DataService/data-service.service';
@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.page.html',
  styleUrls: ['./list-contact.page.scss'],
})
export class ListContactPage  {
  UsersList: any;
  constructor(private users:DataServiceService , private navige: NavController) { 
    this.users.getUsers().subscribe(
       data=> this.UsersList=Object.values(data));
      console.log(this.UsersList);
      
}
ngOnInit() {
  this.getAllUser();
  }
  getAllUser() {
    this.users.getUsers().subscribe(response => {
      this.UsersList = response;
    });
  }
  UserDetails(index) {
    this.navige.navigateRoot('full-details/' + index );
  }
}