import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isError = false;
  isCorrect = false;
   user = ""
   pwd = ""

   login (){

    if(this.user == "olliver" && this.pwd == "2005"){
      this.isCorrect = true;
      this.isError = false;
    }
    else{
    this.isCorrect = false;
    this.isError = true;
  }
    console. log("user = " + this.user + "Password = " + this.pwd)
   }
}



