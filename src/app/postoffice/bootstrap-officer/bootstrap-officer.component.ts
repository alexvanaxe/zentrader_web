import { Component, OnInit, Input } from '@angular/core'; 
import { PostOfficerService } from '../post-officer-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'zen-bootstrap-officer',
  templateUrl: './bootstrap-officer.component.html',
  styleUrls: ['./bootstrap-officer.component.css']
})
export class BootstrapOfficerComponent implements OnInit {

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

  sendMessage(message: string) {
    this.postOfficerService.deliverMessage(this.message);
  }

  dismiss() {
    this.message = "";
  }

}
