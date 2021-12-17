import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadeauCardComponent } from './components/cadeau-card/cadeau-card.component';
import { CadeauListComponent } from './components/cadeau-list/cadeau-list.component';
import { CadeauxComponent } from './pages/cadeaux/cadeaux.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadeauFormComponent } from './components/cadeau-form/cadeau-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CadeauCardComponent,
    CadeauListComponent,
    CadeauxComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    CadeauFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
