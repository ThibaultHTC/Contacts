import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../DataService/data-service.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  Username: string;
  Password: string;
  UsersList: any;
  erreur: string;
  found;
  constructor(private users: DataServiceService, private routeur : Router) {
    this.UsersList = []
  }
  ngOnInit() {
      this.routeur.navigate(['home']);
  }
  getUser() {
    this.users.getUsers().subscribe(response => {
      this.UsersList = response;
      for (const studentsDataKey in this.UsersList) {
        if (this.UsersList[studentsDataKey].login.username === this.Username && this.UsersList[studentsDataKey].login.password === this.Password) {
          this.found = true;
          break;
        } else {
          this.found = false;
        }
      }
      if (!this.found) {
        this.erreur = 'Invalid Entry';
      } else {
        this.routeur.navigate(['list-contact']);
      }
    });
  }
}
