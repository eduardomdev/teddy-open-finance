import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'clientes',
    loadChildren: () => 
      import('clientes/Module').then(m => m.RemoteEntryModule)
  },
  {
    path: 'selecionados',
    loadChildren: () => 
      import('clientes_selecionados/Module').then(m => m.RemoteEntryModule)
  },
];
