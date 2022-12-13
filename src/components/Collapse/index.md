# Collapse 折叠面板

可以折叠/展开的内容区域。

## 基本使用

<code src="./demo/Basic.tsx">

## API

通过设置 Collapse 的属性来产生不同的样式.

| 属性             | 说明                    | 类型                     | 默认值 |
| ---------------- | ----------------------- | ------------------------ | ------ |
| className        | 设置 Collapse 类名      | string                   | -      |
| activeKey        | 当前激活 tab 面板的 key | string                   | -      |
| defaultActiveKey | 初始化选中面板的 key    | string                   | -      |
| accordion        | 手风琴模式              | `boolean`                | false  |
| style            | Collapse 的样式         | CSSProperties            | -      |
| children         | Collapse 的子元素       | ReactNode                | -      |
| onChange         | 切换面板的回调          | `function(checkedValue)` | -      |

通过设置 CollapseItem 的属性来产生不同的样式.

| 属性          | 说明                  | 类型                                                    | 默认值 |
| ------------- | --------------------- | ------------------------------------------------------- | ------ |
| className     | 设置 Collapse 类名    | string                                                  | -      |
| key           | 对应 activeKey        | string                                                  | -      |
| label         | 对应面板 title        | string                                                  | -      |
| visible       | 设置面板是显示        | `boolean`                                               | false  |
| style         | CollapseItem 的样式   | CSSProperties                                           | -      |
| children      | CollapseItem 的子元素 | ReactNode                                               | -      |
| handleVisible | 切换面板的回调        | `function(specKey: string , visible: boolean) => void;` | -      |
