import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SignInService} from '../../services/sign-in.service';
import {CartService} from '../../services/cart.service';
import {CartItem} from '../../models/cart-item';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  private loggedIn = false;
  private clickAbout = false;
  private cartItemList: CartItem[] = [];
  private cartItemNumber: number;


  constructor(private signInService: SignInService,
              private cartService:CartService,
              private router: Router,) {
  }

  logout() {
    this.signInService.logout().subscribe(
      res => {
        location.reload();
      },
      err => {
        console.log(err);
      }
    );
  }

  ngOnInit() {
    this.signInService.checkSession().subscribe(
      res => {
        this.loggedIn = true;
      },
      err => {
        this.loggedIn = false;
      }
    );

    // this.cartService.getCartItemList().subscribe(
    //   res=>{
    //     this.cartItemList = res.json();
    //     this.cartItemNumber = this.cartItemList.length;
    //   },
    //   error=>{
    //     console.log(error.text());
    //   }
    //   );

    this.cartService.cartItemSize.subscribe(
      data =>{
        console.log(data);
        this.cartItemNumber = data;
      },
      err =>{
        console.log(err);
      }
    );
  }

}
