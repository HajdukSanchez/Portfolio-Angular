import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl']
})
export class HeaderComponent implements OnInit {

  constructor(public _service: InfoPaginaService, private router: Router) { }

  ngOnInit(): void {
  }

  searchProduct(search: string): void {
    if (search.length >= 1) {
      // Forma para navegar desde el componente a otro
      this.router.navigate(['/search', search]);
    }
  }

}
