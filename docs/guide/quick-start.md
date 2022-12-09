# 快速上手

## 安装

```bash
$ npm install --save @kube-design/components
# or
$ yarn add @kube-design/components
```

## 引入

```jsx
import React, { Component } from 'react';

import { Button } from '@kube-design/components';

class Example extends Component {
  render() {
    return <Button>Button</Button>;
  }
}
```

### 使用 css

直接导入 css 文件即可，不需要在 webpack 配置文件中额外配置。

```jsx
import '@kube-design/components/es/styles/index.css';
```

### 使用 scss

如果导入 scss 文件，可能需要在 webpack 配置文件中编译这部分 scss 文件。

```jsx
import '@kube-design/components/es/styles/index.scss';
```

webpack.config.js

```js
// module.rules
[
  ...otherRules,
  {
    test: /\.s[ac]ss$/i,
    include: root('node_modules'),
    use: ['style-loader', 'css-loader', 'sass-loader'],
  },
];
```

## 使用 Modular Import

你必须使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 按需加载组件库

> 按需加载时，样式也会按需导入。 您不需要导入所有样式，只需导入 `main.scss`。

配置 babel 如下：

```js
// babel.config.js

const getBabelPluginImportConfig = require('@kube-design/components/babel.plugin.import')

...

"plugins": [
  ['import', getBabelPluginImportConfig()],
]
```

导入 `main.scss` 而不是 `index.scss`

```jsx
import '@kube-design/components/esm/styles/main.scss';
```

## Localization

Kube Design 使用 `LocaleProvider` 组件来支持本地国际化。

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
};

export default locales;
```

2. 使用 LocaleProvider 组件包裹根节点

`locale` 方法可以分配给 `window` 以方便使用。

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { LocaleProvider } from '@kube-design/components';
import locales from './locales';
import App from './App';

window.locale = LocaleProvider.locale;

const App = () => (
  <LocaleProvider locales={locales} currentLocale="en">
    <App />
  </LocaleProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
```

1. 在根节点 App.jsx 及其子节点中，使用 locale.get('key') 获取语言文本

```jsx
import React from 'react';
import { Button } from '@kube-design/components';

export default () => <Button>{locale.get('HELLO')}</Button>;
```

## License

MIT © [kubesphere](https://github.com/kubesphere)
