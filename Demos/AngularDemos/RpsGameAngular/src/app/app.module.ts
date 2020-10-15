import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginformComponent } from './loginform/loginform.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerdetailsComponent } from './playerdetails/playerdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    PlayerListComponent,
    PlayerdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
