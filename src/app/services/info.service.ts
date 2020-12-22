import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { HttpClientModule } from '@angular/common/http';

import {Common} from '../models/common.model'

@Injectable()
export class InfoService {
  constructor(private http: Http){

  }

  getInformation(): Observable<Common> {
    //'http://test.datalb.ru/test.json'
    return this.http.get('http://localhost:4200/assets/data/test.json')
      .map((res: Response) => res.json())
  }
}
