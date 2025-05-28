// i18next-scanner.config.js
module.exports = {
    input: [
        'src/**/*.{js,jsx}',
        '!src/app.js',          // ajusta según tu estructura
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
        lngs: ['en', 'de'],      // generará EN y DE
        ns: ['translation'],
        defaultLng: 'en',
        defaultNs: 'translation',
        resource: {
            loadPath: 'locales/{{lng}}/{{ns}}.json',
            savePath: 'locales/{{lng}}/{{ns}}.json',
            jsonIndent: 2
        },
        defaultValueFromDescription: false,
        defaultValue: (lng, ns, key, options) => {
            // si es inglés, toma el defaultValue pasado en t()
            return (lng === 'en' && options.defaultValue)
                ? options.defaultValue
                : '';
        },
        keySeparator: false,
        nsSeparator: false
    }
};
