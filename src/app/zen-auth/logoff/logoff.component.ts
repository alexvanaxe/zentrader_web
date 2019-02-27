import { Component, OnInit } from '@angular/core';
import { ZentraderAuthService } from '../zentrader-auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'zen-logoff',
  templateUrl: './logoff.component.html',
  styleUrls: ['./logoff.component.css']
})
export class LogoffComponent implements OnInit {

  constructor(private zentraderAuthService: ZentraderAuthService, private router: Router) { }

  ngOnInit() {
  }

  logoff() {
    this.zentraderAuthService.logoff();
    this.router.navigate(['zenlogin']);
  }

}
