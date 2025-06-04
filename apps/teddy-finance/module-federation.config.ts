import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'teddy-finance',
  remotes: [
    'clientes',
    'clientes_selecionados'
  ],
};

export default config;
