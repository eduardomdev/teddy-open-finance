import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { ClientesComponent } from '../pages/clientes/clientes.component';

@NgModule({
  declarations: [
    RemoteEntryComponent,
  ],
  imports: [
    CommonModule,
    ClientesComponent,
    RouterModule.forChild([
      { 
        path: '', 
        component: RemoteEntryComponent, 
      }
    ])
  ]
})
export class RemoteEntryModule {}