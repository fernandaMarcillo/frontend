import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/interfaces/products';
import { ProductService } from 'src/app/services/products.service';
@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  listProducts : products[] = []
  loading: boolean = false;

  constructor(private _productService: ProductService) {}

  ngOnInit(): void {
    this.getListProducts()
  }
  getListProducts() {
    this.loading = true;
    this._productService.getListProducts().subscribe((data) => {
      console.log(data);
      this.listProducts = data;
      this.loading = false;
    })
  }
}
