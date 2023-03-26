import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AuthGuard as AuthGuard } from './auth-guard.service';
import { UserService } from './user.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CategoryService } from './category.service';
import {FormsModule} from '@angular/forms';
import { ProductService } from './product.service';
import { CustomFormsModule } from 'ng2-validation';
// import {AngularFirestore} from 'angularfire2/firestore';


@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrderComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent
  ],
  imports: [BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    // AngularFirestore,
    NgbModule,
    FormsModule,
    CustomFormsModule,
    RouterModule.forRoot([
      {path: 'products', component:ProductsComponent},
      {path: 'shopping-cart', component:ShoppingCartComponent},
      {path: 'login', component:LoginComponent},
      {path: 'check-out', component:CheckOutComponent},
      {path: 'order-success', component:OrderSuccessComponent},
      {path: 'admin/orders', component:AdminOrdersComponent},
      {path: 'admin/products', component:AdminProductsComponent},
      {path: 'admin/products/new', component:ProductFormComponent},
      {path: 'my/orders', component:MyOrderComponent},
      {path: '', component:HomeComponent}
    ])  
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    CategoryService,
    ProductService,
    // AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
