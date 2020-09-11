import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SignInService} from '../../services/sign-in.service';
import {UserService} from '../../services/user.service';
import {AppConst} from '../../constants/app-const';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  private serverPath = AppConst.serverPath;

  private newCustomer: boolean = true;
  private returnCustomer: boolean = false;
  private forgetPassword: boolean = false;

  private loginError: boolean = false;
  private loggedIn = false;
  private credential = {'email': '', 'password': ''};

  private emailSent: boolean = false;
  private passwordTooShort: boolean;
  private emailExists: boolean;
  private username: string;
  private email: string;
  private password: string;

  private emailNotExists: boolean = false;
  private forgetPasswordEmailSent: boolean;
  private recoverEmail: string;

  constructor(private signInService: SignInService,
              private userService: UserService,
              private router: Router) {
  }

  onSubmit() {
    this.signInService.sendCredential(this.credential.email, this.credential.password).subscribe(
      res => {
        console.log(res);
        localStorage.setItem("xAuthToken", res.json().token);
        this.loggedIn = true;
        location.reload();
        this.router.navigate(['/home']);
      },
      error => {
        this.loggedIn = false;
        this.loginError = true;
      }
    );
  }

  OnNew() {
    this.newCustomer = true;
    this.returnCustomer = false;
  }

  OnReturn() {
    this.newCustomer = false;
    this.returnCustomer = true;
  }

  onNewAccount() {
    this.passwordTooShort = false;
    this.emailExists = false;
    this.emailSent = false;
    console.log(this.email);
    console.log(this.password);
    this.userService.newUser(this.email, this.password).subscribe(
      res => {
        console.log(res);
        this.emailSent = true;
      },
      error => {
        console.log(error.text());
        let errorMessage = error.text();

        if (errorMessage === "emailExists") this.emailExists = true;
        if (errorMessage === "passwordTooShort") this.passwordTooShort = true;
      }
    );
  }

  onForget(){
    this.forgetPassword = true;
  }
  offForget(){
    this.forgetPassword = false;
  }
  onForgetPassword() {
    this.forgetPasswordEmailSent = false;
    this.emailNotExists = false;

    this.userService.retrievePassword(this.recoverEmail).subscribe(
      res => {
        console.log(res);
        this.forgetPasswordEmailSent = true;
      },
      error => {
        console.log(error.text());
        let errorMessage = error.text();
        if (errorMessage === "Email Not Found!") this.emailNotExists = true;
      }
    );
  }

  ngOnInit() {
    this.signInService.checkSession().subscribe(
      res => {
        this.loggedIn = true;
      },
      error => {
        this.loggedIn = false;
      }
    );
  }

}
