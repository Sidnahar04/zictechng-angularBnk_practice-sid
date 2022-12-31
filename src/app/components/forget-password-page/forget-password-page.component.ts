import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forget-password-page',
  templateUrl: './forget-password-page.component.html',
  styleUrls: ['./forget-password-page.component.css']
})
export class ForgetPasswordPageComponent implements OnInit {
  forgetpasswordForm!: FormGroup;
  submitted: boolean=false;

  constructor(private _auth: AuthService,
    private _router: Router,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.forgetpasswordForm = this.fb.group({
      Email: ['', [Validators.required]],
    })
  }

  onSubmit() {
    this.submitted = true;
    if (!this.forgetpasswordForm.valid) {
      return
    } else {
      console.log(true);
    }
  }



}
