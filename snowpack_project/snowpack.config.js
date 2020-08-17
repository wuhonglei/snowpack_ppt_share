module.exports = {
    "extends": "@snowpack/app-scripts-vue",
    "plugins": [
        [
            "@snowpack/plugin-webpack",
            {
                extendConfig: (config) => {
                    config.mode = 'production';
                    return config;
                }
            }
        ]
    ]
}