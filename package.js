Package.describe({
    name: 'polyroid:webcomponentsjs',
    version: '0.7.15',
    summary: 'A suite of polyfills supporting the Web Components specs.',
    git: 'git@github.com:Polyroid/webcomponentsjs.git'
});

Package.onUse(function (api) {
    api.versionsFrom('1.2');

    api.addFiles([
        'webcomponents.js'
    ], 'client');
});
