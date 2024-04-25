const Timestamp = new Date().getTime();
const app_version = "010";

module.exports = {
    pages: {
        index: {
            // page 的入口
            entry: 'src/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: '微前端应用系统',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },

    },
    lintOnSave: false,
    productionSourceMap: false, // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
    publicPath: "./",
    assetsDir: "static",
    css: {},
    configureWebpack: config => { // webpack 配置
        return {
            output: { // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
                filename: `[name].${app_version}.${Timestamp}.js`,
                chunkFilename: `[name].${app_version}.${Timestamp}.js`
            },
        }
    },
    devServer: {
        host: "192.168.2.147",
        port: 8080,
        open: false,
        proxy: {
            "/api": {
                // 代理地址
                target: "http://192.168.1.198:8009", // 目标代理接口地址,实际跨域要访问的接口,这个地址会替换掉 axios.defaults.baseURL
                secure: false,
                changeOrigin: true, // 开启代理，在本地创建一个虚拟服务端
                ws: true, // 是否启用  websockets;
                pathRewrite: {
                    // 去掉 路径中的  /api  的这一截
                    "^/api": ""
                }
            }
        }
    },
    chainWebpack: config => { }
};