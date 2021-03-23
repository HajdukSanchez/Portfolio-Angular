import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPage } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  public info: InfoPage = {}; // Objeto al que accederan las clases que incluyan este servicio
  private charged: boolean = false;

  constructor(private http: HttpClient) {
    // Reading Service
    this.http.get('assets/data/data-page.json').subscribe((resp: InfoPage) => {
      this.charged = true;
      this.info = resp;
    })
  }
}
