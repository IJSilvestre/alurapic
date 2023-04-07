import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PhotoFormComponent } from './photo-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule, FormsModule],
  declarations: [PhotoFormComponent],
})
export class PhotoFormModule {}
