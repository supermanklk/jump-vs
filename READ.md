


- rollup 中文文档
https://www.rollupjs.com/
```
$: yarn init -y
$: yarn add rollup rollup-plugin-babel @babel/core @babel/preset-env @babel/preset-react @emotion/babel-preset-css-prop -D
```

```
$: yarn add styled-components 有问题
$: yarn add @emotion/core
```


yarn run rollup --config 简写 yarn run rollup -c


# 如何调试我们本地的包(先进的yalc)
### 安装
```javascript
// NPM:
npm i yalc -g

// Yarn:
yarn global add yalc
```

### 发布

- 在自己开发的库项目根目录下发布依赖
`yalc publish`

### 引入
- 执行后，业务工程的 node_modules 中就会有这个包。眼尖的小伙伴会发现，这个 npm 包不同于其它包，它带有一个转折箭头符号(也就是说这是一个软链接)。
在需要引入库的测试项目中
yalc add [name]

### 更新
- 在我们开发的库内 yarn build &&  yalc publish
- 在我们的项目内： 停止项目 
- 在我们的项目内： yalc update
- 在我们的项目内： 删除npm项目的node_modules下的.cache
- 在我们的项目内： yarn start
- 在我们的项目内： 成功，页面更新。


# 发布我们的包

- 查看npm配置的地址： npm config get registry
- 设置镜像源地址
```
$: npm config set registry https://registry.npmjs.org
```

- 发布: yarn publish

- 发布成功地址： https://www.npmjs.com/package/jump-vs

- 如何将npm的库及时更新到npmmirror源？
  https://npmmirror.com/
如果你的库没有及时同步到 npmmirror 使用如下命令及时同步
cnpm sync isenser-tool


- 同步taobo镜像
https://npmmirror.com/sync/vite 





- https://styled-components.com/