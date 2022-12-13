# Checkbox 多选框

## 基本使用

<code src="./demo/Basic.tsx">

## Checkbox 组

方便的从数组生成 Checkbox 组。

<code src="./demo/BasicGroup.tsx" >

## API

通过设置 Checkbox 的属性来产生不同的样式.

Checkbox 的属性说明如下：

| 属性          | 说明                                    | 类型                                                                                          | 默认值 |
| ------------- | --------------------------------------- | --------------------------------------------------------------------------------------------- | ------ |
| className     | 设置 Checkbox 类名                      | string                                                                                        | -      |
| name          | 设置 Checkbox 的 name 属性              | string                                                                                        | -      |
| value         | 设置 Checkbox 的 value 属性             | string                                                                                        | -      |
| checked       | 设置当前是否选中                        | boolean                                                                                       | -      |
| indeterminate | 设置 indeterminate 状态, 只负责控制样式 | boolean                                                                                       | false  |
| disabled      | 设置失效状态                            | boolean                                                                                       | -      |
| onChange      | 变化是的回调函数                        | `function(checked: boolean, value: Value , e?: React.ChangeEvent<HTMLInputElement>) => void ` | -      |
| children      | Checkbox 的子元素                       | ReactNode                                                                                     | -      |

通过设置 CheckboxGroup 的属性来产生不同的样式.

CheckboxGroup 的属性说明如下：

| 属性         | 说明                                                     | 类型                     | 默认值 |
| ------------ | -------------------------------------------------------- | ------------------------ | ------ |
| className    | 设置 Checkbox 类名                                       | string                   | -      |
| name         | CheckboxGroup 下所有 input[type="checkbox"] 的 name 属性 | string                   | -      |
| value        | 设置 Checkbox 指定选中的选项                             | `string[]`               |
| defaultValue | 设置默认选中的选项                                       | `string[]`               |
| direction    | 设置 CheckboxGroup 方向, 可选参数 `row` `column`         | string                   | `row`  |
| disabled     | 设置失效状态                                             | boolean                  | -      |
| children     | Checkbox 的子元素                                        | ReactNode                | -      |
| onChange     | 变化时的回调函数                                         | `function(checkedValue)` | -      |

Option

```js
type Options = {
  value: string,
  label: string,
  disabled?: boolean,
};
```
