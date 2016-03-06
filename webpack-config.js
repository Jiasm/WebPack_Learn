var webpack = require('webpack'),
    path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');;
var buildPath = path.resolve(__dirname, 'build'),
    nodemodulesPath = path.resolve(__dirname, 'node_modules');

var config = {
    entry: path.resolve(__dirname, 'src/main.js'), // 入口文件配置
    resolve: {
        extentions: ['', 'js', 'css'],  // 找不到模块时 添加js后缀
        modulesDirectories: [
          'node_modules'
        ]        
    },
    output: { // 文件导出的配置
        path: buildPath, // 合并的那个js文件所在的位置
        filename: 'app.js', // 文件的名字
        publicPath: `${__dirname.replace(/\\/g, "\/")}\/build`	// 图片资源那里貌似有问题 所以这样搞了。
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: [nodemodulesPath],
            query: {
                presets: ['es2015']
            }
        }, {
        	test: /\.css$/,
        	loader: 'style!css'
        }, {
        	test: /\.less$/,
        	loader: 'style!css!less'
        },
        {
        	test: /.(jpg|png)$/,
        	loader: `url?limit=8000,name=/images/[name].[ext]`
        }]
    }
}
module.exports = config;
