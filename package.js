Package.describe({
  name: 'waeltken:sidebar-v2',
  version: '0.0.1',
  summary: 'Bundled version of sidebar-v2 for meteor',
  git: 'https://github.com/waeltken/sidebar-v2',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('js/leaflet-sidebar.min.js', 'client');
  api.addFiles('css/leaflet-sidebar.css', 'client');
});
