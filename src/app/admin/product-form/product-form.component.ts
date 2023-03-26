import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { ProductService } from 'src/app/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
category$;
  constructor(
    private router:Router,
    private categoryService: CategoryService,
    private productServices : ProductService) {
    this.category$ = categoryService.getCategory();
   
   }

   save(product){
     console.log(product);
  this.productServices.create(product);
    this.router.navigate(['/admin/products'])
   }
  ngOnInit() {
    
  }

  create(){

    
  }

}
