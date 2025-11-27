import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HowItworkComponent } from './how-itwork/how-itwork.component';
import { HeaderComponent } from './header/header.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HowItworkComponent,
    HeaderComponent,
    ViewprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
