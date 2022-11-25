import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    login: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
  });

  onSubmit() {
    if(this.loginForm.value.login != "" && this.loginForm.value.password != "") {
      this.loginService.login(this.loginForm.value.login, this.loginForm.value.password).subscribe(
        (data) => {
          console.log(data);
        }
      );
    }
  }
}
