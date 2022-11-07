import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

export interface ICustomButton {
  key: string;
  title: string;
  icon: string;
}

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnChanges {
  @Input() unlocked: boolean = false;
  @Input() customButtons: ICustomButton[] = [];
  @Input() formInvalid: boolean | null | undefined;
  @Input() formPristine: boolean | null | undefined;
  @Output() new: EventEmitter<any> = new EventEmitter();
  @Output() save: EventEmitter<any> = new EventEmitter();
  @Output() unlock: EventEmitter<any> = new EventEmitter();
  @Output() res: EventEmitter<any> = new EventEmitter();
  @Output() del: EventEmitter<any> = new EventEmitter();
  @Output() custom: EventEmitter<any> = new EventEmitter();

  primaryButtons: boolean = false;
  newButton: boolean = false;
  deleteButton: boolean = false;

  constructor() {}

  private ObserversPresentedInObj(emitter: EventEmitter<any>): boolean {
    return emitter && emitter.observers && emitter.observers.length > 0;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.primaryButtons =
      this.ObserversPresentedInObj(this.new) ||
      this.ObserversPresentedInObj(this.save) ||
      this.ObserversPresentedInObj(this.unlock) ||
      this.ObserversPresentedInObj(this.del) ||
      this.ObserversPresentedInObj(this.res);

    this.newButton = this.ObserversPresentedInObj(this.new);
    this.deleteButton = this.ObserversPresentedInObj(this.del);
  }

  clickNew(event: any) {
    this.new.emit(event);
  }

  onClickSave(event: any) {
    this.save.emit(event);
  }

  clickUnlock(event: any) {
    this.unlock.emit(event);
  }

  clickDelete(event: any) {
    this.del.emit(event);
  }

  clickReset(event: any) {
    if (this.formPristine) {
      this.res.emit(event);
    } else if (
      confirm('Do you really want to undo? You will lose you unsaved changes!')
    ) {
      this.res.emit(event);
    }
  }

  clickCustom(event: any) {
    this.custom.emit(event);
  }

  clickPrint(event: any) {
    window.print();
  }
}
