import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SigninComponent } from './signin/signin.component';
import { HOmeRoutingModule } from './home-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, HOmeRoutingModule, ReactiveFormsModule, FormsModule],
  declarations: [HomeComponent, SigninComponent],
})
export class HomeModule {}
