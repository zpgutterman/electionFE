import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/catch';
import {BET_URL} from '../env';
import {PrimaryDem} from './primarydem.model';
import { Observable } from 'rxjs';

@Injectable()
export class PrimaryDemApiService {

  constructor(private http: HttpClient) {
  }

  // GET list of public, future events
  getCandidates(): Observable<any> {
    return this.http
      .get(`${BET_URL}`, { responseType: 'json' });
  }



}
