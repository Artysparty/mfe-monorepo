const {
  withNativeFederation,
  shareAll,
} = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({
  name: 'workouts',

  exposes: {
    './Component': './apps/frontend/workouts/src/app/workouts.component.ts',
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
    }),
  },

  skip: [
    "rxjs/ajax",
    "rxjs/fetch",
    "rxjs/testing",
    "rxjs/webSocket",
    "@nestjs/common",
    "@nestjs/core",
    "@nestjs/platform-express",
    "@nestjs/platform-socket.io",
    "@nestjs/websockets",
  ],
});
