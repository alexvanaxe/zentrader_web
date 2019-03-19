import { Component, OnInit, Input, EventEmitter, Output, OnDestroy } from '@angular/core';
import { ArchiveService } from './archive.service';
import { Archive } from '../model/archive';
import { AutoUnsubscribe } from 'app/shared/auto-unsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'zen-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit, OnDestroy {

  @Input() operation;
  @Output() onOperationArchived = new EventEmitter<Archive>();

  constructor(private archiveService: ArchiveService) { }

  ngOnInit() {
  }

  ngOnDestroy() {}

  archive() {
    this.archiveService.patch(this.operation.pk).subscribe(response => this.afterArchive(response));
  }

  afterArchive(archive: Archive) {
    this.onOperationArchived.emit(archive);
  }

}
