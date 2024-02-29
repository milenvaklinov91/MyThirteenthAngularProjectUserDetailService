import { Component } from '@angular/core';
import { UserService } from './Services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [UserService]
  //Here I Provided and Injected this UserService in this app.component
})
export class AppComponent {
  title = 'MyThirteenthAngularProjectUserDetailService';

  constructor(private userService: UserService){

  }

}
