# Alert 警告提示

警告提示, 展示需要关注的信息

## 基本使用

<code src="./demo/Basic.tsx" >

## 带图标

<code src="./demo/WithIcon.tsx">

## API

通过设置 Alert 的属性来产生不同的样式.

Alert 的属性说明如下：

| 属性      | 说明                                                          | 类型      | 默认值                                                                                                           |
| --------- | ------------------------------------------------------------- | --------- | ---------------------------------------------------------------------------------------------------------------- |
| type      | 设置警告提示类型，可选值为 `info` `error` `warning` `default` | string    | -                                                                                                                |
| className | 设置警告提示类名                                              | string    | -                                                                                                                |
| icon      | 警告提示图标                                                  | string    | type="info" 是 `check` type="error" 是 `check`、 type="warning" 是 `substract`、 type="default" 是 `information` |
| title     | 警告提示标题                                                  | ReactNode | -                                                                                                                |
| message   | 警告提示内容                                                  | ReactNode | -                                                                                                                |
