import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'food',
  exposes: {
    './Routes': 'apps/frontend/food/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
