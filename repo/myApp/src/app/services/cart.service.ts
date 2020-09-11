import { Injectable, EventEmitter, Output} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {AppConst} from '../constants/app-const';
import {CartItem} from '../models/cart-item';

@Injectable()
export class CartService {
  @Output() cartItemSize = new EventEmitter();

  constructor(private http:Http) { }

  getCartSize(cartItemNumber:number){
    this.cartItemSize.emit(cartItemNumber);
  }

  addItem(id:number, qty: number) {
  	let url = AppConst.serverPath+"/cart/add";
  	let cartItemInfo = {
  		"productId" : id,
  		"qty" : qty
  	}
  	let tokenHeader = new Headers({
  		'Content-Type' : 'application/json',
  		'x-auth-token' : localStorage.getItem("xAuthToken")
  	});
  	return this.http.post(url, cartItemInfo, {headers: tokenHeader});
  }

  getCartItemList() {
  	let url = AppConst.serverPath+"/cart/getCartItemList";

  	let tokenHeader = new Headers({
  		'Content-Type' : 'application/json',
  		'x-auth-token' : localStorage.getItem("xAuthToken")
  	});
  	return this.http.get(url, {headers: tokenHeader});
  }

  getShoppingCart() {
  	let url = AppConst.serverPath+"/cart/getShoppingCart";

  	let tokenHeader = new Headers({
  		'Content-Type' : 'application/json',
  		'x-auth-token' : localStorage.getItem("xAuthToken")
  	});
  	return this.http.get(url, {headers: tokenHeader});
  }

  updateCartItem(cartItemId: number, qty: number) {
  	let url = AppConst.serverPath+"/cart/updateCartItem";
  	let cartItemInfo = {
  		"cartItemId" : cartItemId,
  		"qty" : qty
  	}
  	let tokenHeader = new Headers({
  		'Content-Type' : 'application/json',
  		'x-auth-token' : localStorage.getItem("xAuthToken")
  	});
  	return this.http.post(url, cartItemInfo, {headers: tokenHeader});
  }

  removeCartItem(id: number) {
  	let url = AppConst.serverPath+"/cart/removeItem";

  	let tokenHeader = new Headers({
  		'Content-Type' : 'application/json',
  		'x-auth-token' : localStorage.getItem("xAuthToken")
  	});
  	return this.http.post(url, id, {headers: tokenHeader});
  }

}
