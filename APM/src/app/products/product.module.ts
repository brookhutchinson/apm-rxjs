// angular modules
import { NgModule }                from '@angular/core';
import { ReactiveFormsModule }     from '@angular/forms';
import { RouterModule }            from '@angular/router';

// components
import { ProductDetailComponent }  from './product-detail/product-detail.component';
import { ProductListAltComponent } from './product-list-alt/product-list-alt.component';
import { ProductListComponent }    from './product-list/product-list.component';
import { ProductShellComponent }   from './product-shell/product-shell.component';

// shared modules
import { SharedModule }            from './../shared/shared.module';

@NgModule({
  imports: [
    // angular modules
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: ProductListComponent },
      { path: ':alternate', component: ProductShellComponent }
    ]),
    // shared modules
    SharedModule
  ],
  declarations: [
    // components
    ProductListComponent,
    ProductShellComponent,
    ProductListAltComponent,
    ProductDetailComponent
  ]
})
export class ProductModule {}
