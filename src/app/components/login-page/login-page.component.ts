import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginUserData: any = {};// this will hold values coming from the html input at once and
  details: any;
  loginForm!: FormGroup;
  submitted: boolean = false;
  // then send it to the service which in turn send it to api endpoint and save to db

  constructor(private _auth: AuthService,
    private _router: Router,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required]]
    })

  }

  get loginDetails() {
    return this.loginForm.controls;
  }

  // login method here
  loginUser() {
    this.submitted = true;
    if (!this.loginForm.valid) {
      console.log('false')
    } else {
      this._auth.loginUser(this.loginUserData).
        subscribe(res => {
          localStorage.setItem('token', res.token);
          localStorage.setItem('userData', JSON.stringify(res.userData));
          this._router.navigate(['/dashboard']).then(() => {
            window.location.reload()
          }); //this will refresh/reload your page
        },
          err => console.log(err)
        );
    }
    //console.log(this.loginUserData);
    // test if data is coming from the login html page
  }

}
