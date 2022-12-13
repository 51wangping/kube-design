# Space 间距

设置组件之间的 j 间距

## 基本使用

相邻组件水平间距
<code src="./demo/BasicH.tsx">

相邻组件垂直间距
<code src="./demo/BasicV.tsx">

## 对齐方式

`align` 设置间距对齐方式，可选值为 `start` `end` `center` `baseline`

<code src="./demo/Align.tsx" >

`wrap` 设置自动换行, 默认值: `false`
<code src="./demo/Wrap.tsx" >

`size` 设置间距大小,可选值为 `small` `medium` `large`  
<code src="./demo/Size.tsx" >

## API

通过设置 Space 的属性来产生不同的样式.

Space 的属性说明如下：

| 属性      | 说明                                                         | 类型          | 默认值     |
| --------- | ------------------------------------------------------------ | ------------- | ---------- |
| prefix    | 设置类名前缀                                                 | string        | -          |
| className | 设置间距类名                                                 | string        | -          |
| align     | 设置间距对齐方式，可选值为 `start` `end` `center` `baseline` | string        | `start`    |
| direction | 设置间距方向, 可选值为 `horizontal` `vertical`               | string        | `vertical` |
| style     | 设置间距的样式                                               | CSSProperties | -          |
| size      | 设置间距大小，可选值为 `small` `medium` `large`              | string        | `small`    |
| wrap      | 设置是否自动换行，仅在 `horizontal` 时有效                   | string        | `false`    |
| children  | Space 的子元素                                               | ReactNode     | -          |
