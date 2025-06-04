import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { ClientesSelecionadosComponent } from '../pages/clientes-selecionados/clientes-selecionados.component';

@NgModule({
  declarations: [
    RemoteEntryComponent,   
    ClientesSelecionadosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { 
        path: '', 
        component: RemoteEntryComponent, 
        children: [
          { path: 'lista', component: ClientesSelecionadosComponent } 
        ]
      }
    ])
  ]
})
export class RemoteEntryModule {}
