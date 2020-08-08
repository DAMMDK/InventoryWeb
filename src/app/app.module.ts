import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { OrdenesComponent } from './pages/ordenes/ordenes.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { OrdenesService } from './services/ordenes.service';
import { VerOrdenComponent } from './pages/ver-orden/ver-orden.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { CrearOrdenComponent } from './pages/crear-orden/crear-orden.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadComponent } from './shared/load/load.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; // importando el módulo
import { Ng2OrderModule } from 'ng2-order-pipe'; // importando el módulo
import { NgxPaginationModule } from 'ngx-pagination';
import { RegistroComponent } from './pages/registro/registro.component';
import { VerUsuarioComponent } from './pages/ver-usuario/ver-usuario.component' ; // <- importa el módulo
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    OrdenesComponent,
    ProductosComponent,
    VerOrdenComponent,
    UsuarioComponent,
    PerfilComponent,
    CrearOrdenComponent,
    LoadComponent,
    RegistroComponent,
    VerUsuarioComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,  // incluidas las importaciones
    Ng2OrderModule,       // importando el paquete de clasificación aquí
    NgxPaginationModule
  ],
  providers: [OrdenesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
