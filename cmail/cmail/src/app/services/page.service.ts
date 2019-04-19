import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  private titulo = new EventEmitter<string>();

  definirTitulo(_titulo: string) {
    this.titulo.emit(_titulo);
  }
  
  getTitulo(): EventEmitter<string> {
    return this.titulo;
  }
}
