import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  { path: 'home', component: PortfolioComponent, },
  { path: 'about', component: AboutComponent, },
  { path: 'item/:id', component: ItemComponent, },
  { path: 'search/:termino', component: SearchComponent, },
  // Esto redirecciona a cualquier otra ruta que no sean alguna de las anteriores, en este caso se redirecciona al principal
  { path: '**', pathMatch: 'full', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
