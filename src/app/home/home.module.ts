import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SigninComponent } from './signin/signin.component';
import { HOmeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule, HOmeRoutingModule
  ],
  declarations: [HomeComponent, SigninComponent]
})
export class HomeModule { }
