import {Component} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: FormControl = new FormControl('', [Validators.required, Validators.email]);

  hide = true;

  constructor(private router: Router, private matSnackBar: MatSnackBar) {}

  evaluateErrorMessage(): String {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  // todo replace with real authorisation
  login() {
    const fakeUserEmail: string = 'abc@abc.de';
    if (this.email.getRawValue() == fakeUserEmail) {
      this.router.navigate(['/dashboard'])
    } else {
      this.matSnackBar.open('Login failed.', 'dismiss', {duration: 3_000})
    }
  }
}
