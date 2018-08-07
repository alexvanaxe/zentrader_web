import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostOfficerService{

  constructor() { }

  private messageOfficer = new Subject<string>();

  messageToDeliver = this.messageOfficer.asObservable();

  deliverMessage(message: string) {
    this.messageOfficer.next(message);
  }
  
}
