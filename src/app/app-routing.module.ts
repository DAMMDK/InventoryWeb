import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { OrdenesComponent } from './pages/ordenes/ordenes.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { VerOrdenComponent } from './pages/ver-orden/ver-orden.component';
import { CrearOrdenComponent } from './pages/crear-orden/crear-orden.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'usuarios', component: UsuarioComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'crear-orden', component: CrearOrdenComponent},
  {path: 'ordenes', component: OrdenesComponent},
  {path: 'detalle-orden', component: VerOrdenComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
