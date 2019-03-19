import { Component, OnInit, OnDestroy } from '@angular/core';
import { ZentraderAuthService } from '../zentrader-auth-service.service';
import { Router } from '@angular/router';
import { AutoUnsubscribe } from 'app/shared/auto-unsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'zen-logoff',
  templateUrl: './logoff.component.html',
  styleUrls: ['./logoff.component.css']
})
export class LogoffComponent implements OnInit, OnDestroy {

  constructor(private zentraderAuthService: ZentraderAuthService, private router: Router) { }

  ngOnInit() {
  }

  ngOnDestroy() {}

  logoff() {
    this.zentraderAuthService.logoff();
    this.router.navigate(['zenlogin']);
  }

}
