# dashboard

**bower install**

**npm install**

**package.json**

去掉ember.js的欢迎插件 `ebmer-welcome-page`


## bower

修改默认的安装路径到vendor下面, 修改`.bowerrc`文件

### bootstrap

安装指定版本的bootstrap

  bower install bootstrap#3.3.4 --save

### perfect-scrollbar

bower install perfect-scrollbar#0.6.2 --save

### font

**roboto-webfont**

  bower install roboto-webfont --save

**font-awesome**

  bower install font-awesome#4.3.0 --save

**feather-icons**
  bower install feather-icons-sass --save

## 动画

  bower install animate.css#3.4.0 --save

## js

  bower install modernizr#2.8.3 --save

  bower install jquery.easing#1.3 --save

  bower install fastclick --save

  bower install jquery-onscreen --save

  bower install jquery-countTo --save

bower install perfect-scrollbar#0.6.2 --save


## ember-cli-build.js

导入系统需要的Css样式及js脚本

  app.import('vendor/bootstrap/dist/css/bootstrap.css')

  npm install broccoli-funnel --save-dev

> https://60devs.com/ember-cli-how-to-add-3rd-party-library-and-related-resources-to-app.html
