import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { routing } from './app.routing';
import {ShoppingListService} from "./shopping-list/shopping-list.service";
import {CoreModule} from "./core.module";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    ReactiveFormsModule,
    CoreModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
