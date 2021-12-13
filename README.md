# my-micro-app

简易微前端demo

## Build Setup

cnpm i

cnpm run start

## 项目路径
```
  |-- .gitignore',
  '    |-- package.json',
  '    |-- README.md',
  '    |-- build', // 打包
  '    |   |-- webpack.base.config.js',
  '    |   |-- webpack.config.js',     
  '    |   |-- webpack.dev.config.js', 
  '    |   |-- webpack.pro.config.js', 
  '    |-- doc', //说明文档。简要实现原理
  '    |   |-- 1-渲染子应用.md',       
  '    |   |-- 2-js沙箱.md',
  '    |   |-- 3-样式隔离.md',
  '    |   |-- 4-数据通信.md',
  '    |-- src', 
  '    |   |-- index.js', //基座 js
  '    |   |-- subApp.js', // 子应用 js
  '    |   |-- microApp', // 微前端主要代码
  '    |       |-- app.js',
  '    |       |-- data.js',
  '    |       |-- element.js',        
  '    |       |-- index.js',
  '    |       |-- sandbox.js',        
  '    |       |-- scopedcss.js',      
  '    |       |-- source.js',
  '    |       |-- utils.js',
  '    |-- tpl',
  '        |-- index.html', // 基座页面
  '        |-- subApp.html', // 子应用页面
```