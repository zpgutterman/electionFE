import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {FTEPollAPIService} from './ftepoll.service';
import {FTEPoll} from './ftepoll.model';
@Component({
  selector: 'app-ftepolls',
  templateUrl: './ftepolls.component.html',
  styleUrls: ['./ftepolls.component.css']
})
export class FtepollsComponent implements OnInit, OnDestroy {

  title = 'FTEPoll';
  ftepollListSubs: Subscription
  ftepollList: FTEPoll[];
  constructor(private ftepollAPI: FTEPollAPIService) { }

  ngOnInit() {
    this.ftepollListSubs = this.ftepollAPI
      .getPolls()
      .subscribe(res => {
        console.log(res);
          this.ftepollList = res;
        },
        console.error
      );
  }

  ngOnDestroy() {
    this.ftepollListSubs.unsubscribe();
  }


}
