import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'workouts',
  exposes: {
    './Routes': 'apps/frontend/workouts/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
