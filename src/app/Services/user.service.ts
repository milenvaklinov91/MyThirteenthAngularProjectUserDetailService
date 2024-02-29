import { EventEmitter } from "@angular/core"

export class UserService{

  //property "users" which is of type array [] and it is conrains a list of users..
  users = [
    {name: 'John', job: 'Teacher', gender: 'Male', country: 'United States', age: 35, avatar: 'assets/avatar/john.jpeg'},
    {name: 'Mark', job: 'Designer', gender: 'Male', country: 'Germany', age: 35, avatar: 'assets/avatar/mark.jpeg'},
    {name: 'Merry', job: 'Lawyer', gender: 'Female', country: 'Ireland', age: 35, avatar: 'assets/avatar/merry.jpeg'},
    {name: 'Steve', job: 'Doctor', gender: 'Male', country: 'India', age: 35, avatar: 'assets/avatar/steve.jpeg'}
]
  //Property
  OnShowDetailsClicked = new EventEmitter<{name: string, job: string, gender: string, country: string, age: number, avatar: string}>();
  //Here we have created a new event

  ShowUserDetails(user:{name: string, job: string, gender: string, country: string, age: number, avatar: string}){
    //Method which will raise this event OnShowDetailsClicked
    this.OnShowDetailsClicked.emit(user);
  }
}
