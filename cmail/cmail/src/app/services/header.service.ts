import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private valorFiltro = new EventEmitter<string>();

  setValorFiltro(valor: string) {
    this.valorFiltro.emit(valor);
  }

  getValorFiltro(): EventEmitter<string> {
    return this.valorFiltro;
  }

}
