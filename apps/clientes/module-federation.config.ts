import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'clientes',
  exposes: {
    './Module': 'apps/clientes/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
