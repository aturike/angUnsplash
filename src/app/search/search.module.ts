import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ImagecardComponent } from './imagecard/imagecard.component';
import { ImagecontainerComponent } from './imagecontainer/imagecontainer.component';

@NgModule({
  declarations: [FormComponent, ImagecardComponent, ImagecontainerComponent],
  exports: [FormComponent, ImagecontainerComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class SearchModule {}
