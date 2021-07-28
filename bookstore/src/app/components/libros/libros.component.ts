import { Component, OnInit } from '@angular/core';
import { LibroService } from '../../services/libro.service';
import { Libro } from '../../models/libro';
import { ModalService } from '../../services/modal.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  libros: Libro[];
  termino: string;
  libroSeleccionado: Libro;

  constructor(public libroService: LibroService, public modalService: ModalService, 
    private activetedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.libroService.getLibros().subscribe(
      libros => this.libros = libros
    );
  }

  abrirModal(libro: Libro){
    this.libroSeleccionado = libro;
    this.modalService.abrirModal();
  }

}
