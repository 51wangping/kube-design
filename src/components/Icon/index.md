# Icon 图标

## size 大小

基本用法

使用 `name` 属性指定图标的名称
图标大小，包括大小属性设置的三个默认大小：`small` 、 `medium` 、 `large`。
您还可以通过将 `size` 属性设置为数字来自定义图标大小

<code src="./demo/size.tsx" />

## type 类型

使用 `type` 指定图标主题颜色 `dark`、 `light`、 `colored`

<code src="./demo/type.tsx" background="rgb(186 207 186)">

## 图标集合

您可以通过输入名称搜索您想要的图标

<code src="./demo/list.tsx" inline />

## API

通过设置 Icon 的属性来产生不同的样式.

Icon 的属性说明如下：

| 属性       | 说明                                                             | 类型                                          | 默认值  |
| ---------- | ---------------------------------------------------------------- | --------------------------------------------- | ------- |
| name       | 设置图标                                                         | string                                        | -       |
| prefix     | 设置图标前缀                                                     | string                                        | `icon-` |
| size       | 设置图标大小，可选值为 `small` `medium` `large` 或者设置具体数据 | string                                        | `small` |
| type       | 设置图标类型，可选值为 `dark` `light` `coloured`                 | string                                        | `dark`  |
| className  | 设置图标类名                                                     | string                                        | -       |
| style      | 设置图标样式                                                     | React.CSSProperties                           | -       |
| clickable  | 设置图标是否可点击                                               | boolean                                       | `false` |
| disabled   | 设置图标是否可禁用                                               | boolean                                       | `false` |
| changeable | 设置图标是否可改变                                               | boolean                                       | `false` |
| color      | 设置图标是否可改变                                               | Color { primary: string; secondary: string; } | -       |
| onClick    | 点击按钮时的回调                                                 | (event) => void                               | -       |
