import { Component, OnInit, Input, OnDestroy } from '@angular/core';  
import { PostOfficerService } from '../post-officer-service.service';
import { Subscription } from 'rxjs';
import { AutoUnsubscribe } from '../../shared/auto-unsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'zen-bootstrap-officer',
  templateUrl: './bootstrap-officer.component.html',
  styleUrls: ['./bootstrap-officer.component.css']
})
export class BootstrapOfficerComponent implements OnInit, OnDestroy {

  @Input() message: string;
  subscription: Subscription;

  constructor(private postOfficerService: PostOfficerService) {
    this.subscription = this.postOfficerService.messageToDeliver.subscribe(
      message => {
        if (this.message)
        {
          this.message = this.message + " " + message;
        } else {
          this.message = message;
        }
      });
  }

  ngOnInit() {
  }

  ngOnDestroy() {}

  sendMessage(message: string) {
    this.postOfficerService.deliverMessage(this.message);
  }

  dismiss() {
    this.message = "";
  }

}
