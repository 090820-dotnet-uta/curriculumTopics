// import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerListComponent } from './player-list/player-list.component';

const routes: Routes =
  [
    // here is the routing
    // path: 'products/:productId', component:componentName
    // { path: '', component: AppComponent },
    { path: 'playerlist', component: PlayerListComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
