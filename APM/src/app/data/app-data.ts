// service
import { InMemoryDbService }   from 'angular-in-memory-web-api';

// interfaces
import { Product }             from './../interfaces/product';
import { ProductCategory }     from './../interfaces/product-category';
import { Supplier }            from './../interfaces/supplier';

// data
import { ProductData }         from './product-data';
import { ProductCategoryData } from './product-category-data';
import { SupplierData }        from './supplier-data';

export class AppData implements InMemoryDbService {
  createDb(): { products: Product[], productCategories: ProductCategory[], suppliers: Supplier[]} {
    const products = ProductData.products;
    const productCategories = ProductCategoryData.categories;
    const suppliers = SupplierData.suppliers;
    return { products, productCategories, suppliers };
  }
}
