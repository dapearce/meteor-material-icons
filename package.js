Package.describe({
  name: 'dapearce:material-icons',
  version: '0.1.3',
  summary: 'A meteor package for the material design icon font.',
  git: 'https://github.com/dapearce/meteor-material-icons.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {

  api.addFiles([
    'MaterialDesign-Webfont/fonts/materialdesignicons-webfont.eot',
    'MaterialDesign-Webfont/fonts/materialdesignicons-webfont.svg',
    'MaterialDesign-Webfont/fonts/materialdesignicons-webfont.ttf',
    'MaterialDesign-Webfont/fonts/materialdesignicons-webfont.woff',
    'MaterialDesign-Webfont/fonts/materialdesignicons-webfont.woff2',
    'MaterialDesign-Webfont/css/materialdesignicons.css'
  ], 'client');

});
