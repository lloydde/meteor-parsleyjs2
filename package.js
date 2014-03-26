Package.describe({
  summary: "Javascript forms validation. Powerful, UX aware, and dead simple."
});

Package.on_use(function (api) {
	api.use('jquery', ['client']);

	var path = Npm.require('path');
	var asset_path = path.join('parsley');
	
	api.add_files(path.join(asset_path, 'dist', 'parsley.min.js'), 'client');
	api.add_files(path.join(asset_path, 'dist', 'parsley.remote.min.js'), 'client');
	api.add_files(path.join(asset_path, 'src', 'extra', 'dateiso.js'), 'client');
	api.add_files(path.join(asset_path, 'src', 'i18n', 'en.js'), 'client');
	api.add_files(path.join(asset_path, 'src', 'i18n', 'en.extra.js'), 'client');
	api.add_files(path.join(asset_path, 'src', 'i18n', 'fr.js'), 'client');
	api.add_files(path.join(asset_path, 'src', 'i18n', 'fr.extra.js'), 'client');
	
});

