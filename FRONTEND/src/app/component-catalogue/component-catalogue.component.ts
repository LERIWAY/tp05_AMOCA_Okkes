import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Product } from '../Class/product';
import { AddProduct, DeleteProduct } from '../magasin/magasin-action';
import { MonserviceService } from '../services/monservice.service';

@Component({
  selector: 'app-component-catalogue',
  templateUrl: './component-catalogue.component.html',
  styleUrls: ['./component-catalogue.component.css']
})
export class ComponentCatalogueComponent implements OnInit {

  products !: Product[];

  constructor(private monserviceService: MonserviceService, private store: Store) {
  }

  addToMagasinList(product: Product): void{
    this.store.dispatch(new AddProduct(product));
  }

  delToMagasinList(product: Product): void{
    this.store.dispatch(new DeleteProduct(product));
  }

  ngOnInit(): void {
    this.getCatalogueProducts();
  }

  getCatalogueProducts() {
    this.monserviceService.getCatalogue().subscribe({
      next: (products: Product[]) => {
        this.products = products;
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }

  updateList(event: Product[]) {
    this.products = event;
  }


}
