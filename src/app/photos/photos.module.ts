import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoComponent } from './photo/photo.component';
import { HttpClientModule } from '@angular/common/http';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [PhotoComponent, PhotoListComponent, PhotoFormComponent],
})
export class PhotosModule {}
