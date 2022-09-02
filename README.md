<p align="center">
  <a href="https://jacky-summer.github.io/@kube-design/components">
    <img width="120" src="https://avatars.githubusercontent.com/u/37326490?s=200&v=4">
  </a>
</p>

<h1 align="center">Kube Design</h1>

<div align="center">

[![Build Status](https://travis-ci.com/Jacky-Summer/@kube-design/components.svg?branch=master)](https://travis-ci.com/Jacky-Summer/@kube-design/components) [![](https://img.shields.io/npm/v/@kube-design/components.svg)](https://www.npmjs.com/package/@kube-design/components) ![](https://img.shields.io/github/license/Jacky-Summer/@kube-design/components) [![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
![david-dev-image](https://img.shields.io/david/dev/Jacky-Summer/@kube-design/components?style=flat-square) ![david-image](https://img.shields.io/david/Jacky-Summer/@kube-design/components?style=flat-square) ![](https://img.shields.io/github/stars/Jacky-Summer/@kube-design/components?style=social)

`Kube Design`，是一款基于 Dumi，由 React + TypeScript 开发的组件库 🎉。`Kube Design` 是一组为 KubeSphere 控制台创建的 React 组件库。欢迎加入或提供意见，该项目会长期更新，你的 star ⭐，是对我最大的鼓励。


</div>

## ✨ 特性

- 🌈 提炼组件库设计良好的视觉风格
- 📦 渐进式探索高质量的前端代码的实现
- 🛡 使用 TypeScript 开发，提升开发体验
- ✅ 使用单元测试，为组件稳定性保驾护航
- 📖 提供开发过程的文档思路，助力你学习组件开发
- 🔖 欢迎贡献组件代码，探索最佳实践

## 安装

```bash

yarn add @kube-design/components

```

### 例子

```js
import React, { Component } from 'react'

import { Button } from '@kube-design/components'

class Example extends Component {
  render() {
    return <Button>Button</Button>
  }
}
```

### 导入所有样式

导入样式文件有两种方法

#### 使用 css

css 文件可以直接导入，所以不需要在 webpack 配置文件中额外配置。

```js
import '@kube-design/components/dist/index.css'
```

#### 使用 scss

如果导入 scss 文件，可能需要在 webpack 配置文件中编译这部分 scss 文件。

```js

import '@kube-design/components//esm/styles/index.scss";

```

webpack.config.js

```js
// module.rules
;[
  ...otherRules,
  {
    test: /\.s[ac]ss\$/i,
    include: root('node_modules'),
    use: ['style-loader', 'css-loader', 'sass-loader'],
  },
]
```

### 模块化导入

您可以使用 babel-plugin-import 按需加载组件库。

按需加载时，样式也会按需导入。您不需要导入所有样式，只需 main.scss.

配置 babel 如下：

```js

// babel.config.js

const getBabelPluginImportConfig = require('@kube-design/components/babel.plugin.import')

...

"plugins": [
  [
    'import', getBabelPluginImportConfig()],
  ]


```

导入 main.scss 代替 index.scss

```js
import '@kube-design/components/esm/styles/main.scss'
```

#### 多语言

Kube Design 使用 LocaleProvider 组件来支持本地化。

1. 定义语言环境

```js
// locales.js

const locales = {
  'en-US': {
    HELLO: 'Hello!',
  },
  'zh-CN': {
    HELLO: '你好!',
  },
}

export default locales
```

2. 使用 LocaleProvider 组件包装根节点

locale 可以分配该方法以 window 方便使用。

```js
import React from 'react'
import ReactDOM from 'react-dom'
import { LocaleProvider } from '@kube-design/components'
import locales from './locales'
import App from './App'

window.locale = LocaleProvider.locale

const App = () => (
  <LocaleProvider locales={locales} currentLocale="en">
    <App />
  </LocaleProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))
```

3. 在根节点 App.jsx 及其子节点中，使用 locale.get('key')获取语言文本

```js
import React from 'react'
import { Button } from '@kube-design/components'

export default () => <Button>{locale.get('HELLO')}</Button>
```
## License

MIT © [kubesphere](https://github.com/kubesphere)
