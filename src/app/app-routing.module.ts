import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { AuthGuard } from './shared/gaurds/auth.guard';

const routes: Routes = [

  { path: "product", component: ProductsComponent, canActivate: [AuthGuard] },
  { path: "product", component: ProductsComponent, canActivate: [AuthGuard] },
  { path: "cart/:id", component: CartComponent, canActivate: [AuthGuard] },
  { path: "cart", component: CartComponent, canActivate: [AuthGuard] },
  { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "user", component: CreateUserComponent },
  //add module routing 
  { path: "admin", canActivate: [AuthGuard], loadChildren: () => import("./crud/crud.module").then((m) => m.CrudModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
