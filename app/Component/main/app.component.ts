import { Component, OnInit, ViewChild } from '@angular/core';
import { Producto } from '../../Classes/Producto';
import { ListaCompraApiService } from '../../Services/listaCompraApi-service/listaCompraApi-service';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  productos: Array<Producto> = [];
  producto: Producto = new Producto(0, '', 0, 0);
  @ViewChild('modal')
  modal: ModalComponent;
  constructor(private servicio: ListaCompraApiService) {

  }

  ngOnInit() {
    this.servicio.getProductos().subscribe(data => {
      this.productos = data;
    });
  }

  guardar(model: Producto) {

   if (model.id === 0) {
      this.servicio.addProducto(model).subscribe(data => {
        this.productos.push(data);
      });
    }
   else {      this.servicio.updateProducto(model).subscribe();    }
   
   this.modal.dismiss();


  }
  addProducto() {
    this.producto = new Producto(0, '', 0, 0);
    this.modal.open();
  }
  onBorrar(model: Producto) {
    this.productos.splice(this.productos.indexOf(model), 1);
  }
  onModificar(model: Producto) {
    this.producto = model;
    this.modal.open();
  }

}
