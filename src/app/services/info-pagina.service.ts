import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPage } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  public info: InfoPage = {}; // Datos globales del sistema
  public team?: any[]; // Datos del equipo de trabajo
  private charged: boolean = false;

  constructor(private http: HttpClient) {
    this.loadInfo();
    this.loadTeam();
  }

  private loadInfo() {
    // Reading Service
    this.http.get('assets/data/data-page.json')
      .subscribe((resp: InfoPage) => {
        this.charged = true;
        this.info = resp;
      })
  }

  private loadTeam() {
    this.http.get('https://angular-udemy-jhs-default-rtdb.firebaseio.com/equipo.json')
      .subscribe((resp: any) => {
        // console.log(resp);
        this.team = resp;
      })
  }
}
