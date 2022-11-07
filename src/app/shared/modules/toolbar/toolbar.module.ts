import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ToolbarComponent } from './toolbar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent]
})
export class ToolbarModule { }
