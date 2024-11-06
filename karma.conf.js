module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'node_modules/zone.js/dist/zone.js',
      'node_modules/zone.js/dist/long-stack-trace-zone.js',
      'node_modules/rxjs/bundles/rxjs.umd.js',
      'node_modules/@angular/core/bundles/core.umd.js',
      'node_modules/@angular/common/bundles/common.umd.js',
      'node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
      'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      'node_modules/@angular/forms/bundles/forms.umd.js',
      'node_modules/@angular/router/bundles/router.umd.js',
      'node_modules/ionic-angular/bundles/ionic-angular.umd.js',
      // Tu código de la aplicación
      'src/**/*.js',
      'src/**/*.ts',
      // Tus archivos de prueba
      'src/**/*.spec.ts'
    ],
    exclude: [],
    preprocessors: {
      'src/**/*.ts': ['coverage'] // Generar informes de cobertura
    },
    reporters: ['progress', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}
