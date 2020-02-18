import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../DataService/data-service.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-full-details',
  templateUrl: './full-details.page.html',
  styleUrls: ['./full-details.page.scss'],
})
export class FullDetailsPage implements OnInit {
  index: string;
  Picture;
  firstName;
  lastName;
  email;
  gender;
  phone;
  nationality 
  UsersList: any[];
  constructor(private users: DataServiceService, private activatedRoute: ActivatedRoute, private routeur: Router) {
  }
  ngOnInit() {
    this.index = this.activatedRoute.snapshot.params.index;
    this.users.getID(this.index).subscribe(response => {
      this.Picture = response.picture.medium;
      this.firstName = response.name.first;
      this.lastName = response.name.last;
      this.email = response.email;
      this.phone = response.phone;
      this.nationality = response.nat;
      this.gender = response.gender;
    });
  }
}
