module.exports = {
    input: [
        'src/**/*.{js,jsx}',
        '!src/app.js',         
        '!**/node_modules/**'
    ],
    output: './',
    options: {
        debug: false,
        removeUnusedKeys: false,
        sort: true,
        func: {
            list: ['t', 'i18n.t'],
            extensions: ['.js', '.jsx']
        },
        lngs: ['en', 'de'],
        ns: ['translation'],
        defaultLng: 'de',
        defaultNs: 'translation',
        resource: {
            loadPath: 'locales/{{lng}}/{{ns}}.json',
            savePath: 'locales/{{lng}}/{{ns}}.json',
            jsonIndent: 2
        },
        defaultValueFromDescription: false,
        defaultValue: (lng, ns, key, options) => {
            return (lng === 'en' && options.defaultValue)
                ? options.defaultValue
                : '';
        },
        keySeparator: false,
        nsSeparator: false
    }
};
