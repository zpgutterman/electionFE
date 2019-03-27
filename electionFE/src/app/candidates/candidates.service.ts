import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/catch';
import {API_URL} from '../env';
import {Candidate} from './candidate.model';
import { Observable } from 'rxjs';

@Injectable()
export class CandidateAPIService {

  constructor(private http: HttpClient) {
  }

  // GET list of public, future events
  getCandidates(): Observable<any> {
    return this.http
      .get(`${API_URL}candidate/`, { responseType: 'json' });
  }



}
