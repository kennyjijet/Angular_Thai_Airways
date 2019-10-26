import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { CoinComponent } from './pages/coin/coin.component';



const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'coin', component: CoinComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
