import { Component, OnInit, Input } from '@angular/core';
import { LibroService } from '../../services/libro.service';
import { ModalService } from '../../services/modal.service';
import { Libro } from '../../models/libro';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  @Input() libro: Libro;

  constructor(public modalService: ModalService, private activatedRoute: ActivatedRoute,
    private libroService: LibroService) { }

  ngOnInit(): void {
    this.cargarLibro();
  }

  cerrarModal(){
    this.modalService.cerrarModal();
  }

  cargarLibro(): void{
    this.activatedRoute.params.subscribe(params => {
      let idLibro = params['idLibro']
      if(idLibro){
        this.libroService.getLibro(idLibro).subscribe((libro) => this.libro = libro);
      }
    });
  }

}
