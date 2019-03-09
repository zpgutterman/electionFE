import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {PrimaryDemApiService} from './primarydem/primarydem-api.service';
import {PrimaryDem} from './primarydem/primarydem.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'electionFE';
  primaryDemListSubs: Subscription
  primaryDemsList: PrimaryDem[];


  constructor(private primaryDemAPI: PrimaryDemApiService) {
}

ngOnInit() {
  this.primaryDemListSubs = this.primaryDemAPI
    .getCandidates()
    .subscribe(res => {
      console.log(res['contracts']);
        this.primaryDemsList = res['contracts'];
      },
      console.error
    );
}

ngOnDestroy() {
  this.primaryDemListSubs.unsubscribe();
}
}
