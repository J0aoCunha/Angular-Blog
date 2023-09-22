import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './compoents/menu-bar/menu-bar.component';
import { MenuTitleComponent } from './compoents/menu-title/menu-title.component';
import { BigCardComponent } from './compoents/big-card/big-card.component';
import { SmallCArdComponent } from './compoents/small-card/small-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    MenuTitleComponent,
    BigCardComponent,
    SmallCArdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
