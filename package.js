Package.describe({
  name: 'dapearce:material-icons',
  version: '0.1.4',
  summary: 'A meteor package for the material design icons font.',
  git: 'https://github.com/dapearce/meteor-material-icons.git',
  documentation: 'README.md'
});

Package.onUse( function(api) {

  api.addFiles([
    'MaterialDesign-Webfont/css/materialdesignicons.css'
  ], 'client');

  api.addAssets([
    'MaterialDesign-Webfont/fonts/materialdesignicons-webfont.eot',
    'MaterialDesign-Webfont/fonts/materialdesignicons-webfont.svg',
    'MaterialDesign-Webfont/fonts/materialdesignicons-webfont.ttf',
    'MaterialDesign-Webfont/fonts/materialdesignicons-webfont.woff',
    'MaterialDesign-Webfont/fonts/materialdesignicons-webfont.woff2'
  ], 'client');

});
