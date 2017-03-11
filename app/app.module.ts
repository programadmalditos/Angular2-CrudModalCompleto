import { NgModule } from '@angular/core';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './component/main/app.component';
import { FormularioProductoComponent } from './Component/formulario-producto/formulario-producto.component';
import { ListadoProductosComponent } from './Component/listado-productos/listado-productos.component';
import { ListaComraFileService } from './Services/listaCompraFile-service/listaCompraFile-service';
import { ListaCompraApiService } from './Services/listaCompraApi-service/listaCompraApi-service';
@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, Ng2Bs3ModalModule],
  declarations: [AppComponent, FormularioProductoComponent, ListadoProductosComponent],
  bootstrap: [AppComponent],
  providers: [ListaComraFileService, ListaCompraApiService]
})
export class AppModule { }
