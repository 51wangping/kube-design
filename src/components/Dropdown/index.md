# Dropdown 下拉菜单

向下弹出的列表。

## 基本使用

<code src="./demo/Basic.tsx">

## 弹出位置

<code src="./demo/placement.tsx">

## API

通过设置 Dropdown 的属性来产生不同的样式.

Dropdown 的属性说明如下：

| 属性                 | 说明                                                                 | 类型                                       | 默认值     |
| -------------------- | -------------------------------------------------------------------- | ------------------------------------------ | ---------- |
| className            | 设置 Dropdown 类名                                                   | string                                     | -          |
| theme                | Dropdown 下拉菜单的主题, 可选参数 `dark`、`light`                    | ''                                         | -          |
| trigger              | 触发下拉行为, 可选参数 `click`, `hover`                              | string                                     | `click`    |
| content              | 下拉菜单内容                                                         | React.ReactNode 、 (() => React.ReactNode) | -          |
| placement            | 设置菜单弹出位置：bottom bottomLeft bottomRight top topLeft topRight | string                                     | bottomLeft |
| showArrow            | 设置下拉菜单是否显示箭头                                             | boolean                                    | false      |
| visible              | 设置是否显示下拉菜单                                                 | boolean                                    | false      |
| children             | Dropdown 的子元素                                                    | ReactNode                                  | -          |
| closeAfterClick      | 下拉菜单关闭时是否触发点击事件                                       | boolean                                    | true       |
| closeAfterMouseLeave | 下拉菜单关闭离开前是否触发事件                                       | boolean                                    | false      |
| onClick              | 下拉菜单弹出层的点击事件, 当 trigger 是 click 时触发                 | `function(e:MouseEvent)`                   | -          |
| onOpen               | 下拉菜单弹出层打开时触发                                             | `function()`                               | -          |
| onClose              | 下拉菜单弹出层关闭时触发                                             | `function(e:MouseEvent)`                   | -          |
