import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PrimaryDemApiService } from './primarydem/primarydem-api.service';
import { UsmapComponent } from './usmap/usmap.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { CandidateAPIService } from './candidates/candidates.service';
import { FtepollsComponent } from './ftepolls/ftepolls.component';
import { FTEPollAPIService } from './ftepolls/ftepoll.service';


@NgModule({
  declarations: [
    AppComponent,
    UsmapComponent,
    CandidatesComponent,
    FtepollsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [PrimaryDemApiService, CandidateAPIService, FTEPollAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
