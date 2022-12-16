# Grid 栅格

12 栅格系统

## 基本使用

<code src="./demo/Basic.tsx" >

<code src="./demo/BasicSize.tsx" >

## API

通过设置 Badge 的属性来产生不同的样式.

Badge 的属性说明如下：

| 属性          | 说明                                                                   | 类型      | 默认值    |
| ------------- | ---------------------------------------------------------------------- | --------- | --------- |
| status        | 设置 Badge 类型，可选值为 `default` `success` `warning` `error`        | string    | `success` |
| className     | 设置 Badge 类名                                                        | string    |
| overflowCount | 最大示的数字                                                           | number    | 99        |
| count         | 展示的数字，大于 overflowCount 时显示为 ${overflowCount}+，为 0 时隐藏 | number    | 0         |
| style         | 设置 badge-wrapper 的样式                                              | -         |
| text          | 设置 badge 展示文字                                                    | -         |
| children      | badge 的子元素                                                         | ReactNode | -         |
