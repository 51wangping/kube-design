import { defineConfig } from 'dumi'

export default defineConfig({
  title: 'Kube Design',
  favicon: 'https://avatars.githubusercontent.com/u/37326490?s=200&v=4',
  logo: 'https://avatars.githubusercontent.com/u/37326490?s=200&v=4',
  base: '/@kube-design/components',
  publicPath: '/@kube-design/components/',
  outputPath: 'docs-dist',
  mode: 'site',
  exportStatic: {}, // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404
  resolve: {
    includes: ['docs', 'components'],
  },
  navs: [
    null,
    {
      title: 'Github',
      path: 'https://github.com/Jacky-Summer/@kube-design/components',
    },
  ],
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'lean',
        camel2DashComponentName: false,
        customStyleName: name => {
          return `./style/index.scss` // 注意：这里 ./ 不可省略
        },
      },
      'lean',
    ],
  ],
  // more config: https://d.umijs.org/config
})
