# ant-icons-webpack-loade-test

This project demonstrates the difference of the produced bundle by using [webpack-ant-icon-loader](https://github.com/Beven91/webpack-ant-icon-loader) webpack module.

With the following web pack rule:
```
      {
        loader:'webpack-ant-icon-loader',
        enforce: 'pre',
        include:[
          path.resolve('node_modules/@ant-design/icons/lib/dist')
        ]
      }
```
Webpack produces:
```
     ../../index.html  555 bytes          [emitted]  
bundle.development.js   4.59 MiB     app  [emitted]  app
```

Without the above rule:
```
       ../../index.html  555 bytes          [emitted]  
0.bundle.development.js   1.21 MiB       0  [emitted]  
  bundle.development.js   3.41 MiB     app  [emitted]  app
```
