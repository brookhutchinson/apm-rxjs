// compoennts
import { Component, OnInit, OnDestroy } from '@angular/core';

// services
import { ProductService }               from './../../services/product.service';

// interfaces
import { Product }                      from './../../interfaces/product';

// rxjs
import { Subscription }                 from 'rxjs';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle = 'Product List';
  errorMessage = '';
  categories;

  products: Product[] = [];
  sub: Subscription;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.sub = this.productService.getProducts().subscribe(
      products => this.products = products,
      error => this.errorMessage = error
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onAdd() {
    console.log('Not yet implemented');
  }

  onSelected(categoryId: string) {
    console.log('Not yet implemented');
  }
}
