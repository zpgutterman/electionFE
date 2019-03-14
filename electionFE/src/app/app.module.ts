import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PrimaryDemApiService } from './primarydem/primarydem-api.service';
import { UsmapComponent } from './usmap/usmap.component';


@NgModule({
  declarations: [
    AppComponent,
    UsmapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [PrimaryDemApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
