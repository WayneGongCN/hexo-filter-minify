## hexo-filter-minify

一个 Hexo 插件，压缩 Html、Css、JavaScript 代码。


### Use

```
npm i hexo-filter-minify --save
```


### Options

使用 [html-minifier](https://github.com/kangax/html-minifier) 压缩 Html 具体配置参照 [htmlOptions](https://github.com/kangax/html-minifier#options-quick-reference)

使用 [uglifycss](https://github.com/fmarcia/uglifycss) 压缩 Css 具体配置参照 [cssOptions](https://github.com/fmarcia/uglifycss#api)

使用 [uglify-es](https://github.com/mishoo/UglifyJS2/tree/harmony) 压缩 JavaScript 具体配置参照 [jsOptions](https://github.com/mishoo/UglifyJS2/tree/harmony#minify-options)


```yml
minify:
    html: # htmlOptions
    css: # cssOptions
    js: # jsOptions
```