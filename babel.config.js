module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          controllers: './app/controllers',
          services: './app/services',
          interceptors: './app/interceptors',
          middlewares: './app/middlewares',
          expands: './app/expands',
          app: './app/app'
        }
      }
    ],
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true
      }
    ],
    '@babel/plugin-proposal-optional-chaining',
    '@babel/proposal-object-rest-spread'
  ]
};
