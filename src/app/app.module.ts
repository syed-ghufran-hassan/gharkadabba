import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import {BidiModule} from '@angular/cdk/bidi';
import 'hammerjs';
import { MenuComponent } from './menu/menu.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    BidiModule,
    MatGridListModule,
    AppRoutingModule,
    MatIconModule
  ],
  exports: [AppComponent], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
