import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import {Params, ActivatedRoute, Router} from '@angular/router';
import {Http} from '@angular/http';
import {AppConst} from '../../constants/app-const';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

 	public filterQuery ="";
	public rowsOnPage = 5;

	private selectedProduct: Product;
	private productList: Product[];
	private productList1: Product[];
	private productList2: Product[];
	private productList3: Product[];
	private serverPath = AppConst.serverPath;

	constructor(
		private productService:ProductService,
		private router:Router,
		private http:Http,
		private route:ActivatedRoute
		) { }

	onSelect(product: Product) {
		this.selectedProduct = product;
		this.router.navigate(['/productDetail', this.selectedProduct.id]);
	}

	ngOnInit() {
		this.route.queryParams.subscribe(params => {
			if(params['productList']) {
				console.log("filtered product list");
				this.productList = JSON.parse(params['productList']);
			} else {
				this.productService.getProductList().subscribe(
					res => {
						console.log(res.json());
						this.productList = res.json();
						this.productList1 = this.productList.slice(0,3);
						this.productList2 = this.productList.slice(3,6);
						this.productList3 = this.productList.slice(6);
					},
					err => {
						console.log(err);
					}
					);
			}
		});

	}
}