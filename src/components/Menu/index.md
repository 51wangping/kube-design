# Menu 导航菜单

向下弹出的列表。

## 基本使用

<code src="./demo/Basic.tsx">

## API

通过设置 Menu 的属性来产生不同的样式.

Menu 的属性说明如下：

| 属性        | 说明                   | 类型                                                     | 默认值 |
| ----------- | ---------------------- | -------------------------------------------------------- | ------ |
| className   | 设置 Menu 类名         | string                                                   | -      |
| label       | Menu 具体的 label 值   | string                                                   | -      |
| width       | 设置 Menu 的宽度       | number                                                   | -      |
| style       | 设置 Menu 的样式       | CSSProperties                                            | -      |
| selectedKey | 设置 Menu 的选中子菜单 | string                                                   | -      |
| children    | 设置 Menu 的子元素     | MenuItem                                                 | -      |
| onClick     | 下拉菜单的点击事件     | `function(e:MouseEvent, specKey: string, value: string)` | -      |

通过设置 MenuItem 的属性来产生不同的样式.

| 属性        | 说明                        | 类型                                                     | 默认值 |
| ----------- | --------------------------- | -------------------------------------------------------- | ------ |
| className   | 设置 MenuItem 类名          | string                                                   | -      |
| disabled    | 设置 MenuItem 是否禁用选中  | boolean                                                  | -      |
| selected    | 设置 MenuItem 是否被选中    | boolean                                                  | -      |
| value       | 设置 MenuItem 的 value 值   | string                                                   | -      |
| specKey     | 设置 MenuItem 的 specKey 值 | string                                                   | -      |
| selectedKey | 设置 MenuItem 的选中子菜单  | string                                                   | -      |
| children    | 设置 MenuItem 的子元素      | MenuItem                                                 | -      |
| onClick     | 设置 MenuItem 的点击事件    | `function(e:MouseEvent, specKey: string, value: string)` | -      |
