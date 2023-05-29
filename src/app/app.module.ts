import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OhanamiModule } from "src/app/ohanami/ohanami.module";
import { OhanamiComponent } from "src/app/ohanami/ohanami.component";

const routes: Routes = [
  { path: 'ohanami', component: OhanamiComponent },
  { path: '**', redirectTo: '/ohanami', pathMatch: 'full' },
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    RouterModule.forRoot(routes),
    OhanamiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
