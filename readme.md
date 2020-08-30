## 代码示例
### ESM
展示了浏览器引用 ESM 模块的方式，例如引用本地模块、第三方模块、url 模块
演示项目：
1. 引用本地模块
2. 引用第三方模块（node_modules）
3. 引用 url 模块（https://unpkg.com/lodash-es@4.17.15/lodash.js）

`注`：ESM 方式不支持直接引入非 JS 模块（css、图片等），CommonJS 模块

### blank_project
使用 snowpack 创建空项目
```bash
create-snowpack-app blank_project --template @snowpack/app-template-blank
```

演示项目：
1. 创建基本空项目
2. 引用 css、image、json 资源
3. 使用别名 alias
4. 展示文件结构（snowpack知识点介绍）

### multi_page
展示 snowpack 支持多页面打包

### common_js
展示 snowpack 支持引入 CommonJS 规范的包

### base_url
验证 snowpack 是否支持配置子路径
结论：支持

### circle_refer
验证 snowpack 是否支持循环引用
结论：不支持

### snowpack_project
展示了 snowpack 使用模板创建 vue 项目的结构，并且结合了 webpack 进行打包

```bash
npx create-snowpack-app snowpack_project --template @snowpack/app-template-vue
```

snowpack 配置如下：
```js
// snowpack.config.js
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
```

### vueToSnowpack
展示了 vue-cli 创建的项目模板，该项目和上面的 snowpack 项目拥有相同的源文件，主要用于对比打包打包速度的差异