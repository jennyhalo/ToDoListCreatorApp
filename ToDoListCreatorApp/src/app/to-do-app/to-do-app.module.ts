import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToDoAppPageRoutingModule } from './to-do-app-routing.module';

import { ToDoAppPage } from './to-do-app.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToDoAppPageRoutingModule
  ],
  declarations: [ToDoAppPage]
})
export class ToDoAppPageModule {}
