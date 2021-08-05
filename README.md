# 1-node.js

1. #### npm   node —— 第三方模块管理工具

2. #### nrm    切换 —— npm下载地址

   -  nvm   批量下载安装node.js

3. #### glup —— 打包模块

   - nodemon  监控node文件只要保存就在命令行自动执行文件
   - gulp-htmlmin  html文件压缩
   - gulp-csso   压缩css
   - gulp-bable   javascript语法转换
   - gulp-less   less语法转换
   - gulp-uglify   压缩混淆javascript
   - gulp-file-include   公共文件包含
   - browsersync    浏览器实时同步
   - mime     获取当前文件类型
   - mongoose   node操作monggoDB数据库所需依赖的包

4. #### dateformat  —— 处理时间格式

   - router   实现路由功能比较简洁（可以用express）
   - serve-static   静态资源访问
   - art-template   拼接字符串简化代码

5. #### bcryptjs —— 哈希加密加强版bcrypt就是屎

   - express-art-template  为了更好的和express框架配合重新封装（用的话和上面的一起下载）

6. #### express —— 基于node平台的web应用开发框架

   - ​	提供了方便简洁的路由定义方式
   - ​	对获取HTTP请求参数进行了简化处理
   - ​	对模板引擎支持程度高，方便渲染动态HTML页面
   - ​	提供了中间件机制有效控制HTTP请求
   - ​	拥有大量第三方中间件对功能进行扩展

7. #### body-parser   Express —— 接收POST参数时需要借助的第三方包

8. #### formidable  ——  解析表单支持get请求post请求文件上传（表单中文件上传文件转成二进制此插件能解析）

   -  express-session  EXpress中间件用来储存登录等信息
   -  joi  验证字符串（用户名密码邮箱）是否符合规则 官方：javaScript对象的描述语言和验证器
   - mongoose-sex-page  实现分页功能

9. #### morgan  —— 是nodejs的一个请求日志模块，由 express 团队维护
# 2-webpack打包工具

1. webpack与webpack-cli  ——  webpack打包基础模块

    - webpack5.0版本与webpack-cli4.0版本不兼容，可以使用webpack-cli3.0版本

      ```js
      //webpack.config.js文件中
      const path = require("path"); //Node.js内置模块
      module.exports = {
          mode: 'development',
          entry: './src/index.js', //配置入口文件
          output: {
              path: path.resolve(__dirname, './dist'), //输出路径，__dirname：当前文件所在路径
              filename: 'bundle.js', //输出文件名称
          },
      }
      
      ```
    ```
      
      
    ```

2. #### webpack-dev-server  ——  自动打包模块

3. #### html-webpack-plugin —— 自动生成预览页模块

    ```
    //webpack.config.js文件中
    const htmlWebpackPlugin = require('html-webpack-plugin')//导入在内存中生成html页面的插件
    devServer: { //这是配置webpack-dev-server命令参数的第二种形式
            open: true, //自动打开浏览器
            port: 3100, //设置端口
            contentBase: 'src', //指定托管的根目录
            hot: true //启用热更新的第一步
        }
    ```


4. #### style-loader css-loader —— 打包CSS文件模块

   ```js
   //webpack.config.js文件中
   module: {
           rules: [
               {
                   test: /\.css$/,   //正则匹配后缀名
                   use: ['style-loader', 'css-loader']   //调用对应的loader
               }
           ]
       }
   ```

5. #### less-loader less —— 打包less文件模块

   ```js
   //webpack.config.js文件中
   module: {
           rules: [
               {
                   test: /\.less$/,   //正则匹配后缀名
                   use: [
                       'style-loader',     //调用对应的loader
                       'css-loader',
                       'less-loader'
                        ]
               }
           ]
       }
   ```
   
6. #### sass sass-loader —— 打包less文件模块

   ```js
   //webpack.config.js文件中
   module: {
           rules: [
                {
                   test:/.scss$/,    //正则匹配后缀名
                   use:[
                       'style-loader',        //调用对应的loader
                       'css-loader',
                       'sass-loader'
                   ]
               }
           ]
       }
   ```
   
7. #### postcss-loader —— 添加css浏览器兼容前缀模块
   ```js
   //postcss.config.js文件中
   module.exports = {
       plugins: [
           require('autoprefixer')
       ]
   }
   ```

   ```js
   //webpack.config.js文件中
   module: {
           rules: [
               {
                   test: /\.css$/,   //正则匹配后缀名
                   use: [
                       'style-loader',
                       'css-loader',
                       'postcss-loader'
                   ]   //调用对应的loader
               }
           ]
       }
   ```

   - ##### 如果自动添加兼容前缀模块不生效，则：

     ```js
     //package.json文件中
     "browserslist": [
         "last 2 versions",
         "> 1%",
         "iOS 7",
         "last 3 iOS versions"
       ]
     ```

8. #### url-loader file-loader —— 打包样式中字体和文件模块

   ```js
   //webpack.config.js文件中
   module: {
           rules: [
               {
                   test: /\.(jpg|png|gif|bmp|jpeg)$/,
                   use: 'url-loader?limit=10$name=[hash:8]-[name].[ext]'
                   //limit : 给定的值小于等于图片大小就是图片地址，如果大于就是base64
                   //name : 如果没有name， webpack就会重新取个新名字。
                   //name = [name].[ext] : 表示用图片原来的名字
                   //hash[8] : 表示取 hash 值得前8位（一共32位数）
               }
           ]
       }
   ```

9. #### babel-loader@8.0.0-beta.0 @babel/core @babel/preset-env webpack —— 

   #### 转换ES6语法兼容性模块

   ```js
   //webpack.config.js文件中
   module: {
           rules: [
                {
                   test: /\.js$/,
                   use: 'babel-loader',
                   exclude: /node_modules/
               }
           ]
       }
   ```

   ```js
   //babel.config.js文件中
   module.exports = {
     presets:["@babel/preset-env"],
     plugins:[ "@babel/plugin-transform-runtime", "@babel/plugin-proposal-class-properties" ]
   }
   
   ```

10. #### vue-loader vue-template-compiler —— Vue组件加载器模块

    ```js
     //webpack.config.js文件中
     plugins: [
            new VueLoaderPlugin()
        ],
     module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                }
    
            ]
        }
    ```

11. #### 在vue项目中使用vue

    ```js
    //index.js文件中
    const vm = new Vue({
        el: '#app',
        render: h => h(App)  //渲染vue根组件
    })
    ```

12. #### 配置打包脚本 

    ```json
    //package.json文件中
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "dev": "webpack-dev-server",  // 自动生成预览页模块脚本
        "build": "webpack -p"         // 打包脚本
      },
    ```

13. #### package.json —— 项目配置文件（包括各个脚本,依赖插件）

    ```json
    {
      "name": "10-webpack",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "dev": "webpack-dev-server",
        "build": "webpack -p"
      },
      "author": "",
      "license": "ISC",
      "dependencies": {
        "@babel/core": "^7.13.15",
        "@babel/plugin-transform-runtime": "^7.13.15",
        "@babel/preset-env": "^7.13.15",
        "jquery": "^3.6.0",
        "less": "^4.1.1",
        "less-loader": "^8.1.0",
        "path": "^0.12.7",
        "vue": "^2.6.12",
        "webpack": "^5.33.2",
        "webpack-cli": "^3.2.1"
      },
      "devDependencies": {
        "autoprefixer": "^10.2.5",
        "babel-core": "^6.26.3",
        "babel-loader": "^8.0.0-beta.0",
        "babel-preset-es2015": "^6.24.1",
        "css-loader": "^5.2.1",
        "file-loader": "^6.2.0",
        "html-webpack-plugin": "^5.3.1",
        "postcss-loader": "^5.2.0",
        "sass": "^1.32.8",
        "sass-loader": "^11.0.1",
        "style-loader": "^2.0.0",
        "url-loader": "^4.1.1",
        "vue-loader": "^15.9.6",
        "vue-template-compiler": "^2.6.12",
        "webpack-dev-server": "^3.11.2"
      },
      "browserslist": [
        "last 2 versions",
        "> 1%",
        "iOS 7",
        "last 3 iOS versions"
      ]
    }
    ```

14. #### webpack.config.js —— 项目配置文件

    ```js
    const path = require("path"); //Node.js内置模块
    const VueLoaderPlugin = require('vue-loader/lib/plugin')
    const HtmlWebpackPlugin = require('html-webpack-plugin');//导入在内存中生成html页面的插件,只要是插件，都要放到plugins节点中去
    const htmlPlguin = new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html'
    })
    module.exports = {
        mode: 'development',
        entry: './src/index.js', //配置入口文件
        output: {
            path: path.resolve(__dirname, './dist'), //输出路径，__dirname：当前文件所在路径
            filename: 'bundle.js', //输出文件名称
        },
        plugins: [
            htmlPlguin,
            new VueLoaderPlugin()
        ],
        devServer: { //这是配置webpack-dev-server命令参数的第二种形式
            open: false, //自动打开浏览器
            port: 8080, //设置端口
            contentBase: 'src', //指定托管的根目录
            hot: true //启用热更新的第一步
        },
        module: {
            rules: [
                {
                    test: /\.css$/,   //正则匹配后缀名
                    use: [
                        'style-loader',
                        'css-loader',
                        'postcss-loader'
                    ]   //调用对应的loader
                },
                {
                    test: /\.less$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'less-loader'
                    ]
                },
                {
                    test: /.scss$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader'
                    ]
                },
                {
                    test: /\.(jpg|png|gif|bmp|jpeg)$/,
                    use: 'url-loader?limit=10$name=[hash:8]-[name].[ext]'
                    //limit : 给定的值小于等于图片大小就是图片地址，如果大于就是base64
                    //name : 如果没有name， webpack就会重新取个新名字。
                    //name = [name].[ext] : 表示用图片原来的名字
                    //hash[8] : 表示取 hash 值得前8位（一共32位数）
                },
                {
                    test: /\.js$/,
                    use: 'babel-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                }
    
            ]
        }
    }
    
    
    
    ```

15. #### postcss.config.js —— 项目配置文件

    ```js
    module.exports = {
        plugins: [
            require('autoprefixer')
        ]
    }
    ```
    
16. #### babel.config.js —— 项目配置文件

    ```js
    //js高级语法转换
    module.exports = {
      presets:["@babel/preset-env"],
      plugins:[ "@babel/plugin-transform-runtime", "@babel/plugin-proposal-class-properties" ]
    }
    
    ```