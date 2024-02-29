import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent {

  constructor(private userService: UserService){

  }
  //! <-- ??
  user!: {name: string, job: string, gender: string, country: string, age: number, avatar: string};
  //We assigning array from user.services.ts to this users property!

  ngOnInit(): void {
    this.userService.OnShowDetailsClicked.subscribe((data: {name: string, job: string, gender: string, country: string, age: number, avatar: string}) => {
      //Here we have assigned array from user.services.ts to this users property!
      this.user = data;
    })
  }

}
