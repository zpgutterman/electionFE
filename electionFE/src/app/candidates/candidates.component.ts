import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {CandidateAPIService} from './candidates.service';
import {Candidate} from './candidate.model';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit, OnDestroy {
  title = 'CandidateFE';
  candidateListSubs: Subscription
  candidateList: Candidate[];

  constructor(private candidateAPI: CandidateAPIService) { }

  ngOnInit() {
    this.candidateListSubs = this.candidateAPI
      .getCandidates()
      .subscribe(res => {
        console.log(res);
          this.candidateList = res;
        },
        console.error
      );
  }

  ngOnDestroy() {
    this.candidateListSubs.unsubscribe();
  }

}
