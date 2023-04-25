import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isError = false;
  isSucess = false;

  user = ""
  pwd = ""

  login() {

    console.log("user = " + this.user + "Password = " + this.pwd)
    if (this.user == "psabrina260@gmail.com" && this.pwd == "sabrina28") {
      console.log("login aprovado")
      this.isError = false;
      this.isSucess = true;
    }
    else {
      this.isError = true;
      this.isSucess = false;
    }

  }
}

