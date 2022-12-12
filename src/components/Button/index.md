# Button 按钮

## 基本使用

按钮组件的基本用法，使用类型自定义按钮样式。

<code src="./demo/Basic.tsx">

## 带图标

将`icon`属性传递给`Button `。

<code src="./demo/WithIcon.tsx" >

## 带 Loading

将`loading`属性传递给`Button`。

<code src="./demo/WithLoading.tsx" >

## API

通过设置 button 的属性来产生不同的样式.

button 的属性说明如下：

| 属性      | 说明                                                                                                                                 | 类型                | 默认值    |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------- | --------- |
| type      | 设置 `button`的`type` 值，可选值为 `default` `control` `primary` `danger` `flat`                                                     | string              | `default` |
| htmlType  | 设置 `button` 原生的 `type` 值，可选值请参考 [HTML 标准](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) | string              | `button`  |
| size      | 设置按钮大小，可选值为 `small` `medium` `large` 或者设置具体数据                                                                     | string              | `small`   |
| icon      | 设置图标                                                                                                                             | string              | -         |
| iconSize  | 设置图标大小，可选值为 `small` `medium` `large` 或者设置具体数据                                                                     | string              | `small`   |
| iconType  | 设置图标类型，可选值为 `dark` `light` `coloured`                                                                                     | string              | `dark`    |
| className | 设置按钮类名                                                                                                                         | string              | -         |
| style     | 设置按钮样式                                                                                                                         | React.CSSProperties | -         |
| disabled  | 设置按钮是否禁用                                                                                                                     | boolean             | `false`   |
| loading   | 设置按钮是否有 Loading 效果                                                                                                          | boolean             | `false`   |
| ghost     | 设置按钮是否有重影                                                                                                                   | boolean             | -         |
| children  | 设置按钮子元素                                                                                                                       | React.ReactNode     | -         |
