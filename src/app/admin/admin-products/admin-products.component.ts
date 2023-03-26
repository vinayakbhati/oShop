import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
// import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';



@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
products$;
res
// products: AngularFirestoreCollection<prod>;
// prods: Observable<prod[]>;
  constructor(private productService: ProductService) {
    // this.prods=this.afs.collection('products').valueChanges();
    // console.log(this.prods);
    
    // this.prods.subscribe(res => {
    //   this.res=res;
    //   console.log(this.res);
    // })


    this.products$=this.productService.getAll();
    console.log("Pro$ "+this.products$);
    // this.products$.subscribe(res =>{ this.res=res });
    // console.log(this.res);
    

   }

   

  ngOnInit() {
  }

}
// interface prod{
//   title?:string;
//   price?:number;
//   imageUrl?:string;
//   category?:string;
// }
