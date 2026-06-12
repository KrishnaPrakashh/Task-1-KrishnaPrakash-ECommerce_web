import { Routes } from '@angular/router';
import { Home } from './Pages/home/home';
import { About } from './Pages/about/about';
import { Product } from './Pages/product/product';
import { Singleview } from './Pages/singleview/singleview';
import { Login } from './Pages/login/login';
import { CartComponent } from './Pages/cart/cart';
import { Wishlist } from './Pages/wishlist/wishlist';


export const routes: Routes = [
    {path:'',component:Home},
    {path:'about',component:About},
    {path:'product',component:Product},
    {path:'singleview/:id',component:Singleview},
    {path:'login',component:Login},
    {path:'cart', component:CartComponent},
    {path:'wishlist',component:Wishlist}

];
