import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private credential = {'email':'','password':''};
  private loggedIn = false;
  private bgPhoto = "https://harrysx-a.akamaihd.net/assets/images/full_images/attachments/f0829bc65bce246d1497119a0da197a38dac0753.jpg";

  constructor(private loginService: LoginService) { }

  onSubmit(){
    this.loginService.sendCredential(this.credential.email, this.credential.password).subscribe(
      res =>{
        console.log(res);
        localStorage.setItem("xAuthToken", res.json().token);
        this.loggedIn = true;
        location.reload();
      },
      error =>{
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.loginService.checkSession().subscribe(
      res =>{
        this.loggedIn = true;
      },
      error =>{
        this.loggedIn = false;
      }
    );
  }

}
