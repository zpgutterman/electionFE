import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/catch';
import {API_URL} from '../env';
import {FTEPoll} from './ftepoll.model';
import { Observable } from 'rxjs';

@Injectable()
export class FTEPollAPIService {

  constructor(private http: HttpClient) {
  }

  // GET list of public, future events
  getPolls(): Observable<any> {
    return this.http
      .get(`${API_URL}fepoll/national`, { responseType: 'json' });
  }



}
