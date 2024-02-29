import { Component } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrl: './all-users.component.css'
})
export class AllUsersComponent {

  constructor(private userService: UserService){

  }

  users: {name: string, job: string, gender: string, country: string, age: number, avatar: string}[] = [];
  //We assigning array from user.services.ts to this users property!

  ngOnInit(): void{
    this.users = this.userService.users
    //Here we have assigned array from user.services.ts to this users property!
  }

  ShowDetails(user: {name: string, job: string, gender: string, country: string, age: number, avatar: string}){
    this.userService.ShowUserDetails(user);
  }
}
