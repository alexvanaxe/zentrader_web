import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapOfficerComponent } from './bootstrap-officer/bootstrap-officer.component';
import { PostOfficerService } from './post-officer-service.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BootstrapOfficerComponent],
  exports: [BootstrapOfficerComponent],
  providers: [PostOfficerService]
})
export class PostofficeModule { }
