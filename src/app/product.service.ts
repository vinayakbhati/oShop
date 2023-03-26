import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
res: any[];
  constructor(private db: AngularFireDatabase) { }
  create(product){
    return this.db.list('/products').push(product);
  }

  getAll(){ 
  return this.db.list('/products/category').valueChanges();
  }
}
