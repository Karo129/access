import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  loginFormControl = new FormControl('', [Validators.required]);
  passwordFormControl = new FormControl('', [Validators.required, Validators.minLength(3)])

}
