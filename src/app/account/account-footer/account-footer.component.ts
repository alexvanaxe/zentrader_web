import { Component, OnInit, OnDestroy } from '@angular/core';
import { Account } from '../model/account';
import { AccountService } from '../account.service';
import { AutoUnsubscribe } from 'app/shared/auto-unsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'zen-account-footer',
  templateUrl: './account-footer.component.html',
  styleUrls: ['./account-footer.component.css']
})
export class AccountFooterComponent implements OnInit, OnDestroy {
  account: Account;

  constructor(private accountService: AccountService) {
    this.account = new Account();
  }

  ngOnInit() {
    this.getDefaultAccount();
  }

  ngOnDestroy() {}

  getDefaultAccount() {
    this.accountService.getDefault().subscribe(defaultAccount => this.account = defaultAccount);
  }

}
