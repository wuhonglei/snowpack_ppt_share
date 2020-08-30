module.exports = {
    "mount": {
        "public": "/",
        "src": "/_dist_"
    },
    "alias": {
        "@": "./src"
    },
    "plugins": [ // 类似于 webpack 的plugin
        ["@snowpack/plugin-babel", {

        }]
    ]
}