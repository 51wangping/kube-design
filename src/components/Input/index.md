# Input 输入框

通过鼠标或键盘输入内容，是最基础的表单域的包装

## 基本使用

需要用户输入表单域内容时。

<code src="./demo/Basic.tsx" >

搜索输入框

<code src="./demo/SearchBasic.tsx" >

## API

通过设置 Input 的属性来产生不同的样式.

#### Input

Input 的属性说明如下：

| 属性         | 说明                                                                                                    | 类型                                                        | 默认值 |
| ------------ | ------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | ------ |
| className    | 设置 Input 类名                                                                                         | string                                                      | -      |
| value        | 输入框内容                                                                                              | string                                                      | -      |
| defaultValue | 输入框默认内容                                                                                          | string                                                      | -      |
| type         | 声明 input 类型，同原生 input 标签的 type 属性，见：MDN(请直接使用 Input.TextArea 代替 type="textarea") | string                                                      | -      |
| innerRef     | 设置 Input 的 ref 值                                                                                    | Ref                                                         |
| disabled     | 设置 Input 是否禁用                                                                                     | boolean                                                     | false  |
| onChange     | 输入框内容变化时的回调                                                                                  | function(e: ChangeEvent<'HTMLInputElement'>, value: string) | -      |

Input 的其他属性和 React 自带的 input 一致。

#### InputPassword

InputPassword 的属性说明如下：

| 属性         | 说明                   | 类型                                                        | 默认值 |
| ------------ | ---------------------- | ----------------------------------------------------------- | ------ |
| value        | 密码框输入框内容       | string                                                      | -      |
| defaultValue | 密码框输入框默认内容   | string                                                      | -      |
| onChange     | 输入框内容变化时的回调 | function(e: ChangeEvent<'HTMLInputElement'>, value: string) | -      |

InputPassword 的其他属性和 input 一致。

#### InputSearch

InputSearch 的属性说明如下：

| 属性         | 说明                   | 类型                     | 默认值 |
| ------------ | ---------------------- | ------------------------ | ------ |
| value        | 搜索框输入内容         | string                   | -      |
| defaultValue | 搜索框输入默认内容     | string                   | -      |
| style        | 搜索框行内样式         | CSSProperties            | -      |
| disabled     | 禁用搜索框             | boolean                  | false  |
| onSearch     | 搜索框内容变化时的回调 | function(value?: string) | -      |

InputSearch 的其他属性和 input 一致。
