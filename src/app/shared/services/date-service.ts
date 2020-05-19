import { Injectable } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-struct';

import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  /**
   * Receive a date formated string
   */
  toNgbDateStruct(formatedDate: string) {
     if (formatedDate) {
       const lmonth = moment(formatedDate, 'YYYY-MM-DDThh:mm').format('M');
       const lday = moment(formatedDate, 'YYYY-MM-DDThh:mm').format('D');
       const lyear = moment(formatedDate, 'YYYY-MM-DDThh:mm').format('YYYY');

       const date = {year: +lyear, month: +lmonth, day: +lday} as NgbDateStruct;
       return date;
     } else {
       return null;
     }
  }

  toStringDateFromNgbDateStruct(dateStruct: NgbDateStruct): string {
    const dateStr = moment(`${dateStruct.year.toString() + String(dateStruct.month).padStart(2, '0') + String(dateStruct.day).padStart(2, '0')}`,
                  'YYYYMMDD').format('YYYY-MM-DDThh:mm');

    return dateStr;
  }
}
