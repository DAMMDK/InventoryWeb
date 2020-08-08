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
import { RegistroComponent } from './pages/registro/registro.component';
import { VerUsuarioComponent } from './pages/ver-usuario/ver-usuario.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'usuarios', component: UsuarioComponent},
  {path: 'usuario/:id', component: VerUsuarioComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'crear-orden', component: CrearOrdenComponent},
  {path: 'ordenes', component: OrdenesComponent},
  {path: 'detalle-orden/:id', component: VerOrdenComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
