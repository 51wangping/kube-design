# DatePicker 日期选择框

输入或者选择日期控件

## 基本使用

当用户需要输入一个日期，可以点击标准输入框，弹出日期面板进行选择。

<code src="./demo/Basic.tsx" >

## API

通过设置 Input 的属性来产生不同的样式.

#### DatePicker

DatePicker 的属性说明如下：

| 属性          | 说明                             | 类型                                                    | 默认值  |
| ------------- | -------------------------------- | ------------------------------------------------------- | ------- |
| className     | 设置 DatePicker 类名             | string                                                  | -       |
| showClearBtn  | 设置 DatePicker 是否显示清除按钮 | boolean                                                 | false   |
| disabled      | 设置 DatePicker 是否禁用         | boolean                                                 | false   |
| enableTime    | 设置 DatePicker 是否显示时间     | boolean                                                 | false   |
| enableSeconds | 设置 DatePicker 是否显示时间秒   | boolean                                                 | false   |
| dateFormat    | 格式化时间                       | string                                                  | `Y-m-d` |
| weekNumbers   | 设置时间选择框显示周数           | boolean                                                 | false   |
| noCalendar    | 设置时间选择框不显示日历         | boolean                                                 | false   |
| maxDate       | 设置时间选择框最大日期           | string                                                  | -       |
| minDate       | 设置时间选择框最小日期           | string                                                  | -       |
| value         | 时间选择框输入的内容             | string                                                  | -       |
| defaultValue  | 时间选择框输入默认内容           | string                                                  | -       |
| options       | 设置时间框的 Option 参数         | Option                                                  | -       |
| onChange      | 时间发生变化的回调               | function(data:dayjs, dataString: string, instance: any) | -       |
| onOpen        | 弹出日历的回调                   | function(data:dayjs, dataString: string, instance: any) | -       |
| onClose       | 弹出关闭的回调                   | function(data:dayjs, dataString: string, instance: any) | -       |
| onClear       | 点击清除按钮的回调               | function(data:dayjs, dataString: string, instance: any) | -       |
| onMonthChange | 弹出日历月份改变的回调           | function(data:dayjs, dataString: string, instance: any) | -       |
| onYearChange  | 弹出日历年份改变的回调           | function(data:dayjs, dataString: string, instance: any) | -       |
| onReady       | 时间选择框加载完成的回调         | function(data:dayjs, dataString: string, instance: any) | -       |
| onValueUpdate | 时间选择框日期更新时回调         | function(data:dayjs, dataString: string, instance: any) | -       |
| onDayCreate   | 时间选择框日期创建时回调         | function(data:dayjs, dataString: string, instance: any) | -       |

#### Option

| 属性      | 说明                               | 类型      | 默认值 |
| --------- | ---------------------------------- | --------- | ------ |
| locale    | 设置 DatePicker 的多语言           | {}        | -      |
| plugin    | 设置 DatePicker 的插件             | []        | -      |
| time_24r  | 设置 DatePicker 是否显示为 24 小时 | boolean   | true   |
| nextArrow | 设置 DatePicker 选择框下一个按钮   | ReactNode | false  |
| prevArrow | 设置 DatePicker 选择框上一个按钮   | ReactNode | -      |
