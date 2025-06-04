import { ModuleFederationConfig } from '@nx/module-federation';

const clientesUrl = process.env.NX_PUBLIC_CLIENTES_URL || 'http://localhost:4201';
const selecionadosUrl = process.env.NX_PUBLIC_SELECIONADOS_URL || 'http://localhost:4202';

const config: ModuleFederationConfig = {
  name: 'teddy-finance',
  remotes: [
    ['clientes', `${clientesUrl}/remoteEntry.js`],
    ['clientes_selecionados', `${selecionadosUrl}/remoteEntry.js`],
  ],
};

export default config;
