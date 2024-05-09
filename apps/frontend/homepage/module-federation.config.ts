import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'homepage',
  exposes: {
    './Routes': 'apps/frontend/homepage/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
